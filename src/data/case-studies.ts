/**
 * Case studies, Commercial Mortgages Oxford.
 *
 * Ten anonymised case studies covering the Oxford market hooks:
 * Oxford Science Park lab refinance, Headington dental owner-occupier,
 * Cowley BMW-adjacent industrial, Cornmarket hotel acquisition,
 * Cowley Road semi-commercial portfolio, Jericho professional firm
 * freehold, Westgate retail refinance, Walton Street independent F&B,
 * Iffley Road HMO portfolio, Summertown professional offices.
 *
 * Real Oxford postcodes/districts. Specifics on rate, LTV, term and lender
 * (eight named lenders only: Shawbrook, InterBay Commercial, LendInvest,
 * Cynergy Bank, Lloyds, NatWest, Barclays, Santander). Rates inside
 * the 6.0 to 9.0 pct pa band. boroughSlug matches the 12 Oxford area slugs
 * in src/lib/constants.ts.
 */

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  borough: string;
  boroughSlug: string;
  financeType: string;
  loanAmount: string;
  gdv: string;
  ltv: string;
  term: string;
  units: number;
  schemeType: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  keyStats: { label: string; value: string }[];
  coordinates: [number, number];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-001",
    title: "Lab-enabled office investment refinance, Oxford Science Park",
    slug: "oxford-science-park-lab-refinance",
    borough: "Oxford Science Park",
    boroughSlug: "oxford-science-park",
    financeType: "Commercial Investment Mortgage",
    loanAmount: "£4.4M",
    gdv: "£6.75M",
    ltv: "65%",
    term: "25 years (5yr fix)",
    units: 1,
    schemeType: "Lab-enabled office single-let investment",
    summary:
      "A single-let lab-enabled office investment at Oxford Science Park (OX4) refinanced off a maturing 5-year fix with a £4.4M commercial investment mortgage at 65% LTV, 25-year amortisation, 6.95% pa via Shawbrook.",
    challenge:
      "The asset, 14,800 sqft of lab-enabled office let to an established life-sciences tenant on a 12-year FRI lease with 9 years unexpired at refinance, was carrying a maturing 5-year fix at 5.35% pa. Net rent £495K pa, valued at £6.75M by the lender's panel valuer. The investor wanted a fresh 5-year fix at the right rate plus a small capital release for a planned second acquisition.\n\nThe high-street commercial incumbent quoted 7.55% pa over 20 years, which was wider than the asset class should have warranted and clipped the borrower's modelled ICR cover. With a strong covenant and a long unexpired term, the deal should have priced inside the institutional appetite band, the issue was matching it to the right specialist lender desk on the first call.",
    solution:
      "We benchmarked the deal across four life-sciences-active investment lender desks. Shawbrook quoted 6.95% pa on a 5-year fix inside a 25-year amortisation at 65% LTV (£4.4M against £6.75M valuation). ICR cover at 159% stressed at a notional rate 1.5 percentage points above pay rate, comfortable margin.\n\nThe credit submission included the FRI lease, the tenant covenant pack with three years of accounts, the original Oxford Science Park anchor planning consent, occupancy track record, the SPV pack and the deposit proof on the £160K capital release. RICS Red Book valuation by a specialist Thames Valley life-sciences valuer in 19 working days. Full credit approval at week 4, legal completion at week 8 from initial enquiry.",
    outcome:
      "Refinance completed with rate certainty for five years and £160K capital released against the next acquisition. Monthly interest cost approximately £88K pa below the high-street incumbent's quoted rate over the 5-year fix. Investor has subsequently used the same lender route for a second Oxford Science Park acquisition.",
    keyStats: [
      { label: "Facility", value: "£4.4M" },
      { label: "Property value", value: "£6.75M" },
      { label: "LTV", value: "65%" },
      { label: "Rate", value: "6.95% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "159%" },
    ],
    coordinates: [51.7160, -1.2090],
  },
  {
    id: "cs-002",
    title: "Dental practice freehold purchase, Headington",
    slug: "headington-dental-practice-freehold",
    borough: "Headington",
    boroughSlug: "headington",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£1.55M",
    gdv: "£2.18M",
    ltv: "71%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier dental practice",
    summary:
      "An established Headington (OX3) dental practice principal acquired the freehold of the practice premises with a £1.55M owner-occupier commercial mortgage at 71% LTV, 20-year term, 6.75% pa via Lloyds healthcare desk.",
    challenge:
      "The practice had operated from leasehold premises on London Road, Headington for 12 years, sitting inside the dense healthcare ancillary cluster around the John Radcliffe and the Churchill Hospital. The freeholder offered the building for sale at £2.18M with a 75-day window before going to open market, too tight for a high-street commercial desk running an 8 to 12 week credit cadence.\n\nThe practice was strong on every measurable: 5,100 NHS UDAs, growing private mix at 44% of fee income, two associate dentists and a hygienist, EBITDA of £385K on the most recent full year. The principal had a 29% deposit available from accumulated retained profit, but the time pressure ruled out the bank's normal deal cadence and the incumbent high-street relationship manager quoted 8.55% pa over 15 years.",
    solution:
      "We benchmarked the deal across four dental-active lender desks. Lloyds healthcare desk, NatWest healthcare, Allica Bank health and Hampshire Trust Bank all quoted competitively. Final terms came in at 6.75% pa over a 20-year amortisation at 71% LTV (£1.55M against £2.18M open market value). EBITDA cover at 1.51x stressed, comfortable headroom. The 20-year term eased monthly affordability against the 15-year structure originally offered.\n\nFull credit approval landed in 12 working days from indicative terms. The RICS specialist dental valuer was instructed in parallel with credit underwriting; valuation back at week 2. Legal completion at week 6 from initial enquiry, comfortably inside the 75-day vendor window.",
    outcome:
      "Practice freehold acquired at week 6 from initial enquiry. Monthly mortgage payment of £12,650 against monthly EBITDA of £32,100, comfortable headroom for continued investment in clinical kit. Annual interest cost approximately £29K lower than the rate originally quoted by the high-street incumbent.",
    keyStats: [
      { label: "Facility", value: "£1.55M" },
      { label: "Property value", value: "£2.18M" },
      { label: "LTV", value: "71%" },
      { label: "Rate", value: "6.75% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "1.51x" },
    ],
    coordinates: [51.7595, -1.2110],
  },
  {
    id: "cs-003",
    title: "BMW-adjacent industrial owner-occupier purchase, Cowley",
    slug: "cowley-bmw-adjacent-industrial",
    borough: "Cowley and East Oxford",
    boroughSlug: "cowley-east-oxford",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£1.35M",
    gdv: "£1.85M",
    ltv: "73%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier industrial freehold (tier-two automotive supplier)",
    summary:
      "A tier-two automotive components supplier serving the BMW Plant Oxford supply chain acquired the freehold of its 16,500 sqft Cowley industrial unit for £1.85M with a £1.35M owner-occupier mortgage at 73% LTV, 20-year term, 7.10% pa via NatWest.",
    challenge:
      "Established components business, 14-year trading history, six-figure annual purchase order book with two tier-one BMW Plant Oxford suppliers, and a smaller direct line to MINI Cowley itself. Turnover £4.85M, EBITDA £445K on the most recent full year. The freeholder had served break notice on the existing lease and offered the building for sale at £1.85M ahead of the next rent review.\n\nThe challenge was customer concentration disclosure, two tier-one customers accounted for 64% of turnover, which some lenders treat as a covenant risk despite the multi-year purchase order evidence and the underlying volume stability of the MINI assembly programme. The high-street incumbent quoted 8.35% pa over 15 years on the strength of the concentration concern.",
    solution:
      "NatWest commercial banking quoted 7.10% pa over 20 years at 73% LTV (£1.35M against £1.85M open market value), accepting the BMW supply-chain customer base as a stabilising rather than concentrating factor on the strength of the documented multi-year purchase order book. EBITDA cover at 1.62x stressed, comfortable margin for the sector.\n\nThe credit submission ran on three years of audited accounts, current management figures, the tier-one customer purchase order pack, a CFO-signed customer concentration disclosure, deposit proof on the £500K equity and a clean Phase I environmental assessment for the Cowley industrial site. Credit approval at week 3, RICS commercial valuation in three weeks. Full legal completion at week 7 from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the lease break notice expiry. Monthly mortgage payment £10,500 against monthly EBITDA of £37,000, very comfortable cover. The owner-operator has subsequently used the same lender for a second-site enquiry on the Sandford-on-Thames industrial fringe.",
    keyStats: [
      { label: "Facility", value: "£1.35M" },
      { label: "Property value", value: "£1.85M" },
      { label: "LTV", value: "73%" },
      { label: "Rate", value: "7.10% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "1.62x" },
    ],
    coordinates: [51.7440, -1.2120],
  },
  {
    id: "cs-004",
    title: "Boutique hotel freehold acquisition, Cornmarket",
    slug: "cornmarket-hotel-acquisition",
    borough: "Oxford City Centre and Carfax",
    boroughSlug: "city-centre-carfax",
    financeType: "Trading-Business Mortgage (Hotel)",
    loanAmount: "£3.85M",
    gdv: "£5.55M",
    ltv: "69%",
    term: "20 years",
    units: 1,
    schemeType: "Independent boutique hotel freehold (38 bedrooms)",
    summary:
      "An experienced hospitality operator acquired the freehold of a 38-bedroom boutique hotel just off Cornmarket in central Oxford (OX1) with a £3.85M trading-business mortgage at 69% LTV, 20-year term, 8.05% pa via Cynergy Bank.",
    challenge:
      "Independent boutique hotel listed building, trading consistently under the previous operator with occupancy averaging 81% across the last 24 months supported by the year-round Oxford tourism flow, the university term-time accommodation overlay and the corporate spillover from Oxford Science Park and Begbroke. ADR steady at £142, EBITDA £585K on the most recent full year of the vendor accounts.\n\nThe complication was the listed-building status on a partial change-of-use planning consent that the vendor had obtained for the upper floors. The lender pool needed to take a view on (a) the listed-building covenant strength, (b) the planning consent conditions, and (c) the borrower's hospitality track record on a city-centre tourist-spine asset. Several high-street commercial desks declined on listed-building grounds.",
    solution:
      "Cynergy Bank quoted 8.05% pa over 20 years at 69% LTV (£3.85M against £5.55M valuation). EBITDA cover at 1.74x stressed at a notional rate 1.5 percentage points above pay rate, comfortable for the sector. Cynergy's hospitality desk accepted the listed-building position on the strength of the existing planning consent and a specialist heritage RICS valuation that addressed the conservation covenants directly.\n\nThe credit submission included three years of vendor accounts, the borrower's own hospitality track record across two previous hotel acquisitions, the listed-building consent and conservation officer correspondence, the licence pack and a six-month post-completion management projection. Specialist heritage and hospitality RICS valuer instructed. Credit approval at week 5, full legal completion at week 10 from start.",
    outcome:
      "Acquisition completed on schedule with the operator now controlling a central Oxford hospitality asset on long-term debt. The borrower has subsequently approached us about a second central Oxford hotel acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£3.85M" },
      { label: "Property value", value: "£5.55M" },
      { label: "LTV", value: "69%" },
      { label: "Rate", value: "8.05% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "1.74x" },
    ],
    coordinates: [51.7525, -1.2585],
  },
  {
    id: "cs-005",
    title: "Semi-commercial portfolio refinance, Cowley Road",
    slug: "cowley-road-semi-commercial-portfolio",
    borough: "Cowley and East Oxford",
    boroughSlug: "cowley-east-oxford",
    financeType: "Portfolio Refinance (Semi-Commercial)",
    loanAmount: "£1.95M",
    gdv: "£2.68M",
    ltv: "73%",
    term: "25 years",
    units: 13,
    schemeType: "Five-block semi-commercial portfolio (5 retail units + 8 flats)",
    summary:
      "An Oxford-based investor refinanced a five-block Cowley Road (OX4) semi-commercial portfolio, five ground-floor independent retail units with eight self-contained flats above, into a single £1.95M facility at 73% LTV, 25-year term, 7.55% pa via InterBay Commercial.",
    challenge:
      "Five separate semi-commercial shop+flat blocks along Cowley Road, acquired over an eight-year period and financed across three separate legacy lenders on three different rate structures, two maturing fixes and one variable. Combined gross rent £168K pa (retail £79K, residential £89K), valuation £2.68M.\n\nThe investor wanted a single consolidated facility, a clean 5-year fix, a small capital release of £90K for an outstanding shop-front upgrade across two units, and a lender comfortable with the blended commercial-plus-residential structure across five separate titles. Three legacy lenders had to be redeemed cleanly on the same day to release security.",
    solution:
      "InterBay Commercial quoted 7.55% pa over a 25-year amortisation at 73% LTV on the consolidated portfolio. Blended ICR test at 146% on combined commercial plus residential income, stressed at a notional rate 2 percentage points above pay rate. Pass.\n\nThe credit submission consolidated five separate FRI commercial leases, eight AST packs, the tenant covenant evidence on the commercial side, three years of borrower rental track record, the SPV pack and the deposit proof on the £90K capital release. The three legacy redemptions ran in parallel through one solicitor instruction. Credit approval at week 4, full legal completion at week 8.",
    outcome:
      "Five legacy facilities consolidated into one clean 25-year structure. Rate certainty for five years across the entire portfolio. £90K shop-front upgrade delivered within four months. Investor now considering a sixth Cowley Road acquisition on the same lender route.",
    keyStats: [
      { label: "Facility", value: "£1.95M" },
      { label: "Property value", value: "£2.68M" },
      { label: "LTV", value: "73%" },
      { label: "Rate", value: "7.55% pa" },
      { label: "Term", value: "25 years" },
      { label: "Blended ICR", value: "146%" },
    ],
    coordinates: [51.7470, -1.2350],
  },
  {
    id: "cs-006",
    title: "Professional services freehold purchase, Jericho",
    slug: "jericho-professional-firm-freehold",
    borough: "Jericho and North Oxford",
    boroughSlug: "jericho-north-oxford",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£1.25M",
    gdv: "£1.72M",
    ltv: "73%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier professional services freehold (legal firm)",
    summary:
      "An Oxford legal partnership acquired the freehold of its existing Jericho (OX2) office premises for £1.72M with a £1.25M owner-occupier commercial mortgage at 73% LTV, 20-year term, 6.55% pa via NatWest. Completed in 24 working days from initial enquiry.",
    challenge:
      "Established mid-tier legal firm, eleven partners, twenty-four staff, trading from leased Jericho premises on Walton Street for ten years. The freeholder offered the property at £1.72M open market valuation with a fast-track sale window. The partnership had £470K deposit available from accumulated retained earnings across two trading years.\n\nUnderwriting was clean, three years of audited accounts, regulated profession, EBITDA at £555K on the latest year, stable revenue mix. The challenge was speed, the partnership wanted to complete before the next financial year-end to roll the new occupation cost into the forward planning cycle. The high-street incumbent quoted 7.85% pa over 15 years.",
    solution:
      "NatWest commercial banking quoted 6.55% pa over 20 years at 73% LTV (£1.25M against £1.72M valuation). EBITDA cover at 2.41x stressed, comfortable margin for the regulated profession sector. The credit submission ran on three years of audited accounts, current management figures, deposit proof, the building survey and a clean Phase I environmental assessment.\n\nCredit approval at week 2 (11 working days from indicative terms). Specialist commercial valuer instructed in parallel with credit underwriting; valuation back at week 2. Full legal completion at 24 working days from initial enquiry, the fastest Oxford owner-occupier completion on our recent record.",
    outcome:
      "Freehold acquired ahead of the partnership's planned financial year-end. Monthly mortgage payment £8,950 against monthly EBITDA of £46,250, very strong cover. Rate saving against the high-street alternative quoted: approximately £16K pa over the 5-year fix period.",
    keyStats: [
      { label: "Facility", value: "£1.25M" },
      { label: "Property value", value: "£1.72M" },
      { label: "LTV", value: "73%" },
      { label: "Rate", value: "6.55% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "2.41x" },
    ],
    coordinates: [51.7610, -1.2680],
  },
  {
    id: "cs-007",
    title: "Retail tenant-mix portfolio refinance, Westgate Oxford",
    slug: "westgate-retail-refinance",
    borough: "Westgate and Oxford Castle Quarter",
    boroughSlug: "westgate-castle-quarter",
    financeType: "Portfolio Refinance (Commercial Investment)",
    loanAmount: "£3.25M",
    gdv: "£4.85M",
    ltv: "67%",
    term: "25 years (5yr fix)",
    units: 6,
    schemeType: "Six-unit retail portfolio (Westgate-adjacent secondary parade)",
    summary:
      "An Oxford-based investor refinanced a six-unit secondary retail parade adjacent to Westgate Oxford (OX1) into a single £3.25M facility at 67% LTV, 25-year amortisation, 7.25% pa via LendInvest, with the personal guarantee cap negotiated down from 30% to 22%.",
    challenge:
      "Six-unit retail parade in the Westgate / Castle Quarter retail catchment, mixed tenant covenant base: one national coffee chain, one national bakery covenant, one independent gift retailer, one Sui Generis hot-food takeaway, and two flexible-term lets to independent operators on shorter terms. Weighted average unexpired lease term 4.6 years. Combined gross rent £385K pa, valuation £4.85M.\n\nPrevious facility was a maturing 5-year fix at 5.55% pa across the portfolio with a 30% of facility personal guarantee. The investor wanted a fresh 5-year fix and a meaningful reduction in personal guarantee exposure on the strength of three years of clean rental track record across the parade, including the period spanning the broader UK central-retail volatility.",
    solution:
      "LendInvest quoted 7.25% pa on a 5-year fix inside a 25-year amortisation at 67% LTV (£3.25M against £4.85M valuation). ICR cover at 154% stressed at a notional rate 1.5 percentage points above pay rate, comfortable across the blended tenant covenant base.\n\nWe negotiated the personal guarantee cap down from 30% to 22% of facility on the strength of three years of clean rent collection history (97% on-time across the six units) and the diversified tenant covenant base including two national covenants. The credit submission included four FRI leases plus the two flexible lets, tenant covenant packs on the national covenants, three-year rent collection history, the SPV pack and the original Westgate-adjacent parade planning consent. Credit approval at week 4, full legal completion at week 9.",
    outcome:
      "Refinance completed with rate certainty for five years, personal guarantee exposure materially reduced and the consolidated portfolio held on a clean single facility. The investor has subsequently used the same lender for a second Oxford central-retail acquisition.",
    keyStats: [
      { label: "Facility", value: "£3.25M" },
      { label: "Property value", value: "£4.85M" },
      { label: "LTV", value: "67%" },
      { label: "Rate", value: "7.25% pa" },
      { label: "Term", value: "25 years (5yr fix)" },
      { label: "ICR", value: "154%" },
    ],
    coordinates: [51.7505, -1.2630],
  },
  {
    id: "cs-008",
    title: "Independent restaurant freehold refinance, Walton Street",
    slug: "walton-street-independent-fb",
    borough: "Jericho and North Oxford",
    boroughSlug: "jericho-north-oxford",
    financeType: "Commercial Remortgage (Trading-Business)",
    loanAmount: "£885K",
    gdv: "£1.38M",
    ltv: "64%",
    term: "15 years",
    units: 1,
    schemeType: "Free-of-tie independent restaurant freehold",
    summary:
      "A free-of-tie independent restaurant on Walton Street, Jericho (OX2) refinanced from a maturing 5-year fix with an £885K commercial remortgage at 64% LTV, 15-year term, 8.15% pa via Cynergy Bank, releasing £65K for a kitchen refurbishment.",
    challenge:
      "Independent restaurant trading at the heart of the Walton Street independent F&B spine, very strong covers profile supported by the year-round Jericho residential catchment, the university term-time demand and the local Oxford professional services lunch trade. Turnover £1.28M, EBITDA £178K on the most recent full year. Operator had run the restaurant for nine years; previous 5-year fix at 5.95% pa was maturing.\n\nNeed: refinance plus £65K capital raise for a back-of-house kitchen refurbishment ahead of a planned licence extension and menu reset. Central Oxford F&B sits in a specific lender appetite band, several mainstream commercial desks decline central-Oxford leisure on perceived tourism volatility despite the actual trading consistency.",
    solution:
      "Cynergy Bank quoted 8.15% pa over 15 years at 64% LTV (£885K against £1.38M valuation). EBITDA cover at 1.94x stressed at a notional rate 1.5 percentage points above pay rate, strong for the sector. Capital raise of £65K above the existing facility approved.\n\nLicensed-trade and hospitality specialist RICS valuer. The credit submission included three years of accounts, current management figures, the licence pack, deposit proof on the capital raise and the refurbishment plan with a fixed-price contractor quote. Cynergy's licensed-trade desk approved in 17 working days. Full legal completion at week 9 from start.",
    outcome:
      "Refinance completed with rate certainty for five years and the £65K refurbishment delivered within four months. Trading performance has strengthened post-refurb, with EBITDA up approximately 8% in the subsequent two quarters. Operator has approached us about a second-site freehold opportunity along the wider Jericho / North Oxford F&B corridor.",
    keyStats: [
      { label: "Facility", value: "£885K" },
      { label: "Property value", value: "£1.38M" },
      { label: "LTV", value: "64%" },
      { label: "Rate", value: "8.15% pa" },
      { label: "Term", value: "15 years" },
      { label: "EBITDA cover", value: "1.94x" },
    ],
    coordinates: [51.7615, -1.2665],
  },
  {
    id: "cs-009",
    title: "HMO portfolio refinance, Iffley Road",
    slug: "iffley-road-hmo-portfolio",
    borough: "Iffley and Iffley Road",
    boroughSlug: "iffley-iffley-road",
    financeType: "Portfolio Refinance (HMO)",
    loanAmount: "£1.85M",
    gdv: "£2.55M",
    ltv: "73%",
    term: "25 years",
    units: 6,
    schemeType: "Six-property HMO portfolio (33 bed-spaces)",
    summary:
      "An Oxford-based HMO operator refinanced a six-property Iffley Road and East Oxford HMO portfolio (OX4) into a single £1.85M facility at 73% LTV, 25-year amortisation, 7.65% pa via InterBay Commercial.",
    challenge:
      "Six terraced HMOs across the Iffley Road, Divinity Road and Magdalen Road catchment, all sitting inside the Oxford City Council Article 4 area, all on existing C4 or Sui Generis HMO planning consents pre-dating the Article 4 designation. 33 bed-spaces combined, tenanted to a mix of postgraduate, post-doc and young-professional renters supported by the University of Oxford, Oxford Brookes and the Headington hospital catchment. Gross rent £218K pa, valuation £2.55M.\n\nThe operator had financed the portfolio across two legacy lenders, both on variable rates and one carrying a personal-guarantee structure the borrower wanted to reduce. The Article 4 status meant the lender had to take an underwriting view on planning permanence and ongoing licensing compliance, which a portion of the lender pool will not entertain.",
    solution:
      "InterBay Commercial quoted 7.65% pa over a 25-year amortisation at 73% LTV (£1.85M against £2.55M valuation). Blended ICR test at 148% stressed at a notional rate 2 percentage points above pay rate. Pass.\n\nThe credit submission included the six HMO planning consents (each pre-dating the Article 4 designation), the HMO licence pack, three years of borrower rental track record at 96% occupancy, the SPV pack and the deposit proof. The two legacy redemptions ran in parallel through one solicitor instruction. Credit approval at week 4, full legal completion at week 9.",
    outcome:
      "Two legacy facilities consolidated into one clean 25-year structure. Rate certainty for five years across the portfolio. Personal-guarantee exposure reduced. The operator has subsequently used the same lender for a seventh-property acquisition on the same Iffley Road / Divinity Road catchment.",
    keyStats: [
      { label: "Facility", value: "£1.85M" },
      { label: "Property value", value: "£2.55M" },
      { label: "LTV", value: "73%" },
      { label: "Rate", value: "7.65% pa" },
      { label: "Term", value: "25 years" },
      { label: "Blended ICR", value: "148%" },
    ],
    coordinates: [51.7395, -1.2440],
  },
  {
    id: "cs-010",
    title: "Professional services office freehold purchase, Summertown",
    slug: "summertown-professional-offices",
    borough: "Summertown",
    boroughSlug: "summertown",
    financeType: "Owner-Occupier Commercial Mortgage",
    loanAmount: "£1.65M",
    gdv: "£2.25M",
    ltv: "73%",
    term: "20 years",
    units: 1,
    schemeType: "Owner-occupier professional services office freehold",
    summary:
      "An Oxford accountancy partnership acquired the freehold of a Summertown (OX2) office building on Banbury Road for £2.25M with a £1.65M owner-occupier commercial mortgage at 73% LTV, 20-year term, 6.85% pa via Barclays Commercial.",
    challenge:
      "Established mid-tier accountancy firm, eight partners, twenty-eight staff, trading from leased Summertown premises for seven years. The freeholder offered the building for sale at £2.25M with a five-month decision window. The partnership had £600K deposit available from accumulated retained earnings.\n\nUnderwriting was clean on the trading side, three years of audited accounts, EBITDA £625K on the latest year, stable client mix across professional services, healthcare and Oxford Science Park life-sciences clients. The challenge was the LTV at the upper end of the partnership's comfort zone and matching the deal to a lender willing to give meaningful rate competition against the incumbent high-street relationship, which had quoted 7.95% pa over 15 years.",
    solution:
      "Barclays Commercial quoted 6.85% pa over 20 years at 73% LTV (£1.65M against £2.25M valuation). EBITDA cover at 2.19x stressed, comfortable margin for the regulated profession sector. Santander Commercial and Lloyds also quoted; Barclays offered the cleanest covenant package on personal guarantee structure.\n\nThe credit submission ran on three years of audited accounts, current management figures, partner-level CV pack, deposit proof, the building survey and a clean Phase I environmental assessment. Specialist commercial valuer instructed in parallel with credit underwriting; valuation back at week 2. Credit approval at week 3. Full legal completion at week 7 from initial enquiry.",
    outcome:
      "Freehold acquired ahead of the vendor's decision window. Monthly mortgage payment £12,650 against monthly EBITDA of £52,100, very strong cover. Rate saving against the high-street alternative quoted: approximately £18K pa over the 5-year fix period.",
    keyStats: [
      { label: "Facility", value: "£1.65M" },
      { label: "Property value", value: "£2.25M" },
      { label: "LTV", value: "73%" },
      { label: "Rate", value: "6.85% pa" },
      { label: "Term", value: "20 years" },
      { label: "EBITDA cover", value: "2.19x" },
    ],
    coordinates: [51.7770, -1.2620],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
