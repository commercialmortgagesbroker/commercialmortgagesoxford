// Per-site configuration. The single CSS variable that varies between
// network sites is the accent triplet, see DESIGN-BRIEF.md §11.
export const siteConfig = {
  "name": "Commercial Mortgages Oxford",
  "domain": "commercialmortgagesoxford.co.uk",
  "locationName": "Oxford",
  "county": "oxfordshire",
  "town": "oxford",
  "tagline": "Specialist commercial mortgages in Oxford",
  "description": "Specialist commercial mortgage broker for Oxford, the Oxford science and research cluster and Oxfordshire. Owner-occupier, life sciences and lab investment, semi-commercial, portfolio and trading-business finance from a 90+ lender panel. Whole-of-market commercial mortgage advice, indicative terms in 48 hours, mid-2026 rates 6.0 to 9.0% pa.",
  "keyword": "commercial mortgages oxford",
  "heroSubtitle": "Owner-occupier, investment, semi-commercial and trading-business commercial mortgages, sourced from a 90+ lender panel and structured around your Oxford asset. Indicative terms in 48 hours.",
  "phone": "07595 366094",
  "email": "enquiries@commercialmortgagesoxford.co.uk",
  "leadEmail": "commercialmortgagesbroker@gmail.com",
  "address": {
    "street": "Oxford",
    "city": "Oxford",
    "postcode": "",
    "country": "United Kingdom"
  },
  "coordinates": {
    "lat": 51.7520,
    "lon": -1.2577
  },
  "siteType": "commercial-mortgages",
  "siteMode": "primary",
  "primarySiteUrl": "https://commercialmortgagesoxford.co.uk",
  "satelliteSiteUrl": "https://oxfordcommercialmortgages.co.uk",
  "ccLocationUrl": "https://commercialmortgagesbroker.co.uk/locations/oxfordshire/oxford",
  "accent": {
    "hex": "#2d5e3a",
    "hsl": "hsl(138, 35%, 27%)",
    "hue": 138
  },
  "stats": [
    { "value": "£250M+", "label": "Arranged" },
    { "value": "90+", "label": "Lenders" },
    { "value": "48hr", "label": "Decisions" },
    { "value": "75%", "label": "Max LTV" }
  ],
  "ghlSiteTag": "CommercialMortgagesOxford",
  "ghlSource": "Commercial Mortgages Oxford Primary Website",
  "ghlWidgetId": ""
} as const;
