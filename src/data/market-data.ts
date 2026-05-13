import type { MarketData } from "./types";

/**
 * Per-area market data, Commercial Mortgages Oxford.
 *
 * The MarketData[] interface is shared with the dev-fin reference repos and
 * is consumed by area-page market widgets. Field names retain dev-fin
 * vocabulary (`activeDevSites`, `avgDevTimelineMonths`, `planningApprovalRate`)
 * but the values here are calibrated to commercial-mortgage relevance:
 *   - `activeDevSites` counts active commercial-mortgage-relevant items in
 *     the local pipeline, Oxford City Council planning applications inside
 *     the area's postcode catchment plus known transactional activity.
 *   - `avgDevTimelineMonths` reads as "average commercial mortgage process
 *     to drawdown" in months for mainstream owner-occupier / investment.
 *   - `avgPricePerSqft` is residential price per sqft per HM Land Registry,
 *     used as a market-temperature gauge for the wider local market.
 *     Residential transactions are NOT a direct commercial signal; they
 *     proxy area health for ground-floor retail, semi-commercial blended
 *     yield, and tenant-covenant catchment underwriting.
 *   - `rentalYield` is residential headline yield, used as a directional
 *     indicator for semi-commercial blended-yield underwriting.
 *
 * Slugs match AREAS in src/lib/constants.ts.
 */

export const marketData: MarketData[] = [
  {
    slug: "city-centre-carfax",
    areaName: "Oxford City Centre and Carfax",
    avgPricePerSqft: 720,
    planningApprovalRate: 74,
    avgDevTimelineMonths: 6,
    population: 28000,
    growthRate: 3.4,
    activeDevSites: 26,
    rentalYield: 4.8,
    conservationCoverage: 78,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Oxford LPA)",
      planningSource: "Oxford City Council Planning Portal, OX1 commercial-relevant 2026",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "jericho-north-oxford",
    areaName: "Jericho and North Oxford",
    avgPricePerSqft: 680,
    planningApprovalRate: 70,
    avgDevTimelineMonths: 7,
    population: 17500,
    growthRate: 2.4,
    activeDevSites: 18,
    rentalYield: 4.4,
    conservationCoverage: 65,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Oxford LPA)",
      planningSource: "Oxford City Council Planning Portal, OX2 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "headington",
    areaName: "Headington",
    avgPricePerSqft: 520,
    planningApprovalRate: 73,
    avgDevTimelineMonths: 6,
    population: 22000,
    growthRate: 3.1,
    activeDevSites: 22,
    rentalYield: 5.2,
    conservationCoverage: 30,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Oxford LPA)",
      planningSource: "Oxford City Council Planning Portal, OX3 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "cowley-east-oxford",
    areaName: "Cowley Road and East Oxford",
    avgPricePerSqft: 460,
    planningApprovalRate: 68,
    avgDevTimelineMonths: 6,
    population: 26500,
    growthRate: 2.8,
    activeDevSites: 16,
    rentalYield: 6.0,
    conservationCoverage: 22,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Oxford LPA)",
      planningSource: "Oxford City Council Planning Portal, OX4 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "summertown",
    areaName: "Summertown",
    avgPricePerSqft: 620,
    planningApprovalRate: 71,
    avgDevTimelineMonths: 6,
    population: 13500,
    growthRate: 2.2,
    activeDevSites: 11,
    rentalYield: 4.6,
    conservationCoverage: 32,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Oxford LPA)",
      planningSource: "Oxford City Council Planning Portal, OX2 north corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "botley",
    areaName: "Botley and Westway",
    avgPricePerSqft: 420,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 6,
    population: 14200,
    growthRate: 4.2,
    activeDevSites: 9,
    rentalYield: 5.6,
    conservationCoverage: 12,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Vale of White Horse LPA)",
      planningSource: "Vale of White Horse District Council Planning Portal, OX2 west corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "iffley-iffley-road",
    areaName: "Iffley and Iffley Road",
    avgPricePerSqft: 480,
    planningApprovalRate: 67,
    avgDevTimelineMonths: 7,
    population: 9800,
    growthRate: 1.9,
    activeDevSites: 8,
    rentalYield: 5.8,
    conservationCoverage: 40,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Oxford LPA)",
      planningSource: "Oxford City Council Planning Portal, OX4 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "marston",
    areaName: "Marston",
    avgPricePerSqft: 440,
    planningApprovalRate: 72,
    avgDevTimelineMonths: 6,
    population: 11200,
    growthRate: 2.4,
    activeDevSites: 7,
    rentalYield: 5.4,
    conservationCoverage: 15,
    valueCategory: "mid-range",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Oxford LPA)",
      planningSource: "Oxford City Council Planning Portal, OX3 corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "littlemore-blackbird-leys",
    areaName: "Littlemore and Blackbird Leys",
    avgPricePerSqft: 360,
    planningApprovalRate: 78,
    avgDevTimelineMonths: 7,
    population: 16800,
    growthRate: 3.8,
    activeDevSites: 9,
    rentalYield: 6.4,
    conservationCoverage: 8,
    valueCategory: "value",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Oxford LPA)",
      planningSource: "Oxford City Council Planning Portal, OX4 outer corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "oxford-science-park",
    areaName: "Oxford Science Park",
    avgPricePerSqft: 560,
    planningApprovalRate: 82,
    avgDevTimelineMonths: 8,
    population: 4200,
    growthRate: 7.6,
    activeDevSites: 14,
    rentalYield: 5.8,
    conservationCoverage: 6,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Oxford LPA)",
      planningSource: "Oxford City Council Planning Portal, OX4 science park corridor",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "begbroke-oxford-north",
    areaName: "Begbroke and Oxford North",
    avgPricePerSqft: 520,
    planningApprovalRate: 80,
    avgDevTimelineMonths: 8,
    population: 5400,
    growthRate: 8.4,
    activeDevSites: 12,
    rentalYield: 5.6,
    conservationCoverage: 8,
    valueCategory: "regeneration",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Cherwell LPA)",
      planningSource: "Cherwell District Council Planning Portal + Oxford North masterplan",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
  {
    slug: "westgate-castle-quarter",
    areaName: "Westgate and Oxford Castle Quarter",
    avgPricePerSqft: 700,
    planningApprovalRate: 76,
    avgDevTimelineMonths: 7,
    population: 6800,
    growthRate: 3.6,
    activeDevSites: 15,
    rentalYield: 4.9,
    conservationCoverage: 72,
    valueCategory: "premium",
    sources: {
      priceSource: "HM Land Registry Price Paid Data 2025–26 (Oxford LPA)",
      planningSource: "Oxford City Council Planning Portal, OX1 retail core",
      populationSource: "ONS Mid-Year Population Estimates 2024",
    },
    lastUpdated: "2026-05-10",
  },
];

export function getMarketData(slug: string) {
  return marketData.find((d) => d.slug === slug);
}

export function getAllMarketData() {
  return marketData;
}
