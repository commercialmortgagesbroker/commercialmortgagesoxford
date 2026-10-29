// Per-site homepage market band stats, Commercial Mortgages Oxford.
export interface HomeMarketStat {
  value: string;
  label: string;
  footnote?: string;
}

export interface HomeMarketSnapshot {
  locationName: string;
  source: string;
  stats: HomeMarketStat[];
}

export const homeMarketSnapshot: HomeMarketSnapshot = {
  locationName: "Oxford",
  source: "Mid-2026 Oxford CM market, Indicative market pricing",
  stats: [
    {
      value: "90+",
      label: "Lender market",
      footnote: "High-street, challenger and specialist desks",
    },
    {
      value: "48hr",
      label: "Indicative terms",
      footnote: "From complete enquiry",
    },
    {
      value: "£400M+",
      label: "Arranged",
      footnote: "Across the network",
    },
    {
      value: "75%",
      label: "Max LTV",
      footnote: "Owner-occupier and investment",
    },
  ],
};
