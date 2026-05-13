/**
 * Sold-data mapping, Oxford (Commercial Mortgages context).
 *
 * HM Land Registry data is published at local-authority (town) level. The
 * Oxford City LPA covers the city. Begbroke / Oxford North sits in Cherwell
 * DC LPA but for the residential market temperature signal we read from the
 * Oxford town file in both cases.
 *
 * On commercial mortgage pages, residential sold data is used as a temperature
 * gauge for the wider area, commercial owner-occupier and semi-commercial
 * pricing track the residential curve, even though commercial-tagged Land
 * Registry data is much sparser.
 */

import oxfordData from "@/data/sold-data/oxford.json";

export interface SoldTransaction {
  price: number;
  date: string;
  postcode: string;
  propertyType: string;
  newBuild: boolean;
  tenure: string;
  address: string;
}

export interface SoldDataFile {
  updatedAt: string;
  townSlug: string;
  countySlug: string;
  stats: {
    medianPrice: number;
    medianByType: Record<string, number>;
    transactionCount12m: number;
    yoyChange: number;
    newBuildCount: number;
    existingCount: number;
    newBuildPremium: number;
  };
  recentTransactions: SoldTransaction[];
}

const DISTRICT_TO_TOWN: Record<string, { data: SoldDataFile; label: string }> = {
  "city-centre-carfax": { data: oxfordData as SoldDataFile, label: "Oxford LPA" },
  "jericho-north-oxford": { data: oxfordData as SoldDataFile, label: "Oxford LPA" },
  headington: { data: oxfordData as SoldDataFile, label: "Oxford LPA" },
  "cowley-east-oxford": { data: oxfordData as SoldDataFile, label: "Oxford LPA" },
  summertown: { data: oxfordData as SoldDataFile, label: "Oxford LPA" },
  botley: { data: oxfordData as SoldDataFile, label: "Oxford LPA" },
  "iffley-iffley-road": { data: oxfordData as SoldDataFile, label: "Oxford LPA" },
  marston: { data: oxfordData as SoldDataFile, label: "Oxford LPA" },
  "littlemore-blackbird-leys": { data: oxfordData as SoldDataFile, label: "Oxford LPA" },
  "oxford-science-park": { data: oxfordData as SoldDataFile, label: "Oxford LPA" },
  "begbroke-oxford-north": { data: oxfordData as SoldDataFile, label: "Cherwell DC LPA" },
  "westgate-castle-quarter": { data: oxfordData as SoldDataFile, label: "Oxford LPA" },
};

export function getSoldDataForDistrict(slug: string):
  | { data: SoldDataFile; lpaLabel: string }
  | null {
  const entry = DISTRICT_TO_TOWN[slug];
  if (!entry) return null;
  return { data: entry.data, lpaLabel: entry.label };
}
