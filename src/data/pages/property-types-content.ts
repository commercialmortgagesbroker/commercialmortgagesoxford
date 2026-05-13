/**
 * Property-type / asset-class commercial mortgage pages, Oxford.
 *
 * Twelve sector pages plus a hub. Each sector covers the lender-appetite
 * realities, cover tests (ICR / DSCR / EBITDA), sector-specific underwriting
 * concerns, and Oxford-specific examples. Voice matches the home page,
 * editorial, broker-led, specifics over slogans, real lender names where
 * defensible per NAMED-LENDERS.md.
 *
 * Slugs match src/lib/constants.ts and are used as /property-types/[slug] routes.
 */

export interface AssetTypeFaq {
  question: string;
  answer: string; // HTML allowed
}

export interface AssetTypeDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    metrics: Array<{ label: string; value: string }>;
  };
  overview: { h2: string; body: string[] };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  financeStructures: {
    h2: string;
    intro: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  oxfordContext: { h2: string; body: string };
  lenderAppetite: { h2: string; body: string };
  faqs: AssetTypeFaq[];
}

export interface PropertyTypesHubContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: { h2: string; body: string[] };
  underwriting: {
    h2: string;
    body: string;
    items: Array<{ label: string; detail: string }>;
  };
  closingCta: { h2: string; body: string };
}

const standardStructures = [
  { product: "Owner-occupier commercial mortgage", applicability: "Where the borrower's business trades from the property, EBITDA cover at 1.3 to 1.5x." },
  { product: "Commercial investment mortgage", applicability: "Let assets, ICR-led underwriting at 140 to 160% stressed cover." },
  { product: "Commercial bridge-to-let", applicability: "Vacant or value-add acquisition with agreed term-out onto investment mortgage." },
  { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing assets." },
];

// Hub page content
export const propertyTypesHubContent: PropertyTypesHubContent = {
  metaTitle: "Commercial Mortgages Oxford by Property Type | 12 Sectors, 90+ Lenders",
  metaDescription:
    "Commercial mortgage finance for Oxford property, twelve sector pages covering retail, office, industrial, leisure, healthcare, pubs, MOT, nurseries, mixed-use, semi-commercial, HMO and holiday-let. Sector-specific lender appetite, real mid-2026 rates.",
  hero: {
    eyebrow: "Twelve sectors",
    h1: "Commercial Mortgages by Property Type Oxford",
    lede:
      "An Oxford commercial mortgage on an Osney Mead trade-counter unit prices nothing like a George Street restaurant freehold or a Headington care home. The asset class drives the lender list, the LTV band, the cover test and the rate. Twelve sector pages, each with the underwriting that actually applies and the lenders that actually write the deal.",
  },
  intro: {
    h2: "The asset class is the first variable a commercial mortgage lender prices.",
    body: [
      "Borrowers often start with the geography, the LTV they want, or the rate they have read about. Lenders start with the property type. A commercial mortgage on a prime Westgate Oxford retail investment runs through a different desk to one on a wet-led Cowley Road pub freehold, different cover test, different LTV cap, different valuation methodology, different rate.",
      "Across the broker panel, the practical division splits twelve ways. Three pure investment classes (<a href=\"/property-types/retail\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">retail</a>, <a href=\"/property-types/office\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">office</a>, <a href=\"/property-types/industrial-warehouse\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">industrial and warehouse</a>) underwritten on ICR against a tenant covenant. Five trading-business classes (<a href=\"/property-types/leisure-hospitality\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">leisure and hospitality</a>, <a href=\"/property-types/healthcare-care-home\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">healthcare and care homes</a>, <a href=\"/property-types/pub-restaurant\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">pubs and restaurants</a>, <a href=\"/property-types/mot-garage-petrol\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">MOT and forecourt</a>, <a href=\"/property-types/nursery-school\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">nurseries and schools</a>) underwritten on EBITDA cover with sector-specialist regulators (CQC, Ofsted, VOSA) feeding the credit decision. Four mixed-tenure or hybrid classes (<a href=\"/property-types/mixed-use\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">mixed-use</a>, <a href=\"/property-types/semi-commercial\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">semi-commercial</a>, <a href=\"/property-types/hmo-block\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">HMO blocks</a>, <a href=\"/property-types/holiday-let-portfolio\" class=\"underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4\">holiday-let portfolios</a>) where lender appetite varies dramatically with the residential proportion or the operating model.",
      "Each page below sets out the LTV band, the cover test, the sector-specific underwriting concerns, the rate range in mid-2026, the lenders most active on the panel, and one or two worked Oxford examples. Where a deal sits awkwardly between sectors, a pub with an operator flat above, a nursery operating from a converted Summertown villa, an aparthotel block in the city centre, we say so and explain how lenders treat it.",
    ],
  },
  underwriting: {
    h2: "Three cover tests, twelve sectors. Which test applies to you decides the lender.",
    body:
      "The single most important variable on a commercial mortgage is which cover test the lender uses to size the loan. Get this wrong at outset and the offer either prices materially down at credit committee or falls over. Three tests dominate.",
    items: [
      {
        label: "ICR, interest cover ratio",
        detail:
          "Used on let investment property, retail, office, industrial, semi-commercial, mixed-use. Tests rent against interest only at a stressed notional rate, typically 140 to 160%. The driver is the lease and the tenant covenant, not the borrower's income.",
      },
      {
        label: "DSCR, debt-service cover ratio",
        detail:
          "Used on portfolios and on assets where capital amortisation matters to the lender. Tests net rent against the full mortgage payment (interest plus capital), typically 130 to 145%. Common on portfolio refinance and on larger HMO and FHL portfolios.",
      },
      {
        label: "EBITDA cover",
        detail:
          "Used on owner-occupier and trading-business mortgages, pubs, care homes, MOT centres, nurseries, dental practices, hotels. Tests business operating profit against the mortgage payment, typically 1.3 to 1.5x for mainstream sectors and 1.5 to 2.0x for higher-risk trading sectors. Filed accounts and a credible forward-looking forecast both matter.",
      },
      {
        label: "Sector overlays",
        detail:
          "On top of the cover test, sector-specific overlays drive the credit decision: CQC rating on care homes, Ofsted on nurseries, VOSA approval on MOT centres, barrelage on pubs, lease length on retail, occupancy and ADR on hotels and FHLs.",
      },
    ],
  },
  closingCta: {
    h2: "Send the property, the LTV target and the trading or rental income.",
    body:
      "We will tell you which sector the deal sits in, which lender desks will look at it, which cover test will apply, and what indicative terms look like across the panel. Indicative numbers in 48 hours. If the deal does not work, wrong sector for the LTV, cover test fails, regulator rating insufficient, we say so up front rather than burning weeks at valuation.",
  },
};

export const assetTypeDetails: Record<string, AssetTypeDetail> = {
  // Retail
  retail: {
    slug: "retail",
    name: "Retail",
    metaTitle: "Retail Commercial Mortgages Oxford | Cornmarket, Westgate, Templars Square",
    metaDescription:
      "Commercial mortgage finance for retail property in Oxford, Cornmarket and Queen Street prime, Westgate Oxford, Templars Square Cowley, Summertown and Magdalen Road parades. Investment LTVs to 75%, ICR 140 to 160%, mid-2026 rates 6.5 to 8.5% pa. NatWest, Lloyds, Barclays, InterBay Commercial.",
    hero: {
      eyebrow: "Retail",
      h1: "Retail Commercial Mortgages Oxford",
      lede:
        "Investment finance for let retail property and owner-occupier finance for independent retailers buying their unit. Lender appetite varies sharply by retail sub-type, Cornmarket prime is a different deal on a different desk to a Magdalen Road parade unit. Investment LTV 65 to 75%, ICR 140 to 160% stressed, mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "Investment LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 160%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£150K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting an Oxford retail commercial mortgage",
      body: [
        "The Oxford retail estate splits into four practical brackets and lenders price each one differently. <strong>Prime OX1 city-centre</strong> covers Cornmarket Street, Queen Street and the Westgate Oxford scheme, institutional-grade pitches dominated by national fashion, F&B and beauty covenants. <strong>District and neighbourhood centres</strong> covers Templars Square in Cowley, the Summertown parade on Banbury Road, and the Headington London Road retail strip. <strong>Independent-led suburban high streets</strong> covers Magdalen Road in East Oxford, the Cowley Road independent spine, Walton Street in Jericho, and the village retail in Wolvercote and Old Marston. <strong>Tourist-overlay retail</strong> sits along the High Street, Broad Street and Turl Street, comparison and gift retail trading on the back of approximately 7 million visitors a year.",
        "Investment underwriting tests <strong>ICR</strong>, rent versus stressed interest, at typically 140 to 160%. The two drivers a credit committee reads first are <strong>unexpired lease term</strong> and <strong>tenant covenant</strong>. A 10-year FRI to a national F&B operator at Westgate Oxford prices materially better than three two-year leases to local independents on the same pitch. WAULT (weighted-average unexpired lease term) under five years pulls LTV down 5 to 10 percentage points and pricing 50 to 75bps wider.",
        "Worked example: an OX1 Cornmarket retail unit on a 10-year FRI to a national fashion covenant, £1.45M valuation, £105K passing rent. ICR at 145% on a 7.6% pa stressed rate sizes the loan to roughly £1.05M, about 72% LTV. <strong>NatWest</strong>, <strong>Lloyds</strong> and <strong>Barclays</strong> all compete on prime CBD investment of this profile. Worked example two: a Magdalen Road parade unit, £385K valuation, two-year tail to an independent operator. Same ICR test sizes the loan to roughly 60% LTV; <strong>InterBay Commercial</strong>, Together and <strong>LendInvest</strong> are the realistic desks at 8.5 to 9.5% pa.",
        'For shop-with-flat semi-commercial archetypes, see the <a href="/property-types/semi-commercial">semi-commercial commercial mortgage page</a>; for retail-led mixed-use blocks, see <a href="/property-types/mixed-use">mixed-use</a>. Vacant retail acquisition routes through <a href="/services/commercial-bridge-to-let">bridge-to-let</a> with refurb and re-let exit onto term investment.',
      ],
    },
    schemeTypes: {
      h2: "Retail asset types we fund",
      items: [
        { label: "Prime city-centre retail (OX1)", detail: "Cornmarket Street, Queen Street, Westgate Oxford, High Street. Institutional investment territory; long FRI leases to national covenants." },
        { label: "District centre retail", detail: "Templars Square Cowley, Summertown parade on Banbury Road, Headington London Road. Mixed national and independent covenant; convenience and service retail." },
        { label: "Suburban independent high street", detail: "Magdalen Road East Oxford, Cowley Road, Walton Street Jericho, Botley Road. Independent-led, tighter covenant profile but stable tenant base." },
        { label: "Tourist-overlay retail", detail: "High Street, Broad Street, Turl Street. Comparison and gift retail underwritten by visitor footfall; tourism-resilient covenant story." },
        { label: "Owner-occupier independent retailer", detail: "Independent businesses buying the freehold they trade from, EBITDA cover route via the owner-occupier service." },
        { label: "Vacant retail acquisition", detail: "Bridge-to-let funds purchase plus refurbishment plus re-letting period; term-out onto investment mortgage at 12 to 24 months." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Oxford retail",
      intro:
        "Most retail deals route as investment (let asset, ICR-led) or owner-occupier (independent retailer buying their unit, EBITDA-led). Vacant or short-lease assets route through commercial bridge-to-let with an agreed exit. Multi-asset retail portfolios consolidate via portfolio refinance.",
      structures: standardStructures,
    },
    oxfordContext: {
      h2: "The Oxford retail estate",
      body: 'Oxford retail is shaped by extreme planning constraint, very tight prime stock, and a tourism overlay that pushes Cornmarket and Westgate values per square foot to among the highest in regional England. The Westgate Oxford scheme (Land Securities and Crown Estate, opened 2017) anchors prime; Cornmarket and Queen Street carry the legacy comparison spine. Templars Square in Cowley acts as the principal district centre for OX4. The Summertown parade on Banbury Road serves the affluent North Oxford catchment; Headington London Road serves the hospital-adjacent OX3 strip. Independent retail is healthiest on Magdalen Road in East Oxford, on Cowley Road, and on Walton Street in Jericho. The change-of-use pipeline keeps reshaping secondary stock continually, central-Oxford retail-to-hotel conversions registered through 2026 are typical, and several Cornmarket upper-floor consents have moved comparison retail towards capsule-hotel and aparthotel use.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Oxford retail",
      body: 'Strongest pricing on convenience and food-led retail with national covenants and on Westgate-anchor and prime Cornmarket investment let on long FRI leases. Mid-strength on Summertown and Headington district-centre stock. Tighter on independent-led suburban high-street pure-comparison units, particularly where WAULT is under five years. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment with strong covenants, typical 7.0 to 7.75% pa at 65 to 70% LTV. Mid-market and challenger appetite from Allica Bank, <strong>Shawbrook</strong>, HTB and Cambridge & Counties on parade and district-centre investment at 8.0 to 8.75% pa. <strong>InterBay Commercial</strong> (OSB Group) and <strong>LendInvest</strong> take the harder cases, short lease tail, secondary covenant, semi-commercial overlap, at 8.5 to 9.5% pa. High-street desks routinely decline retail with WAULT under three years; Together and InterBay Commercial are the realistic desks for that profile.',
    },
    faqs: [
      {
        question: "What LTV can I get on an Oxford retail investment mortgage?",
        answer: "Up to 75% LTV on let retail with strong national covenants and a long FRI lease. Semi-commercial shop-with-flat reaches 75% on the right archetype. Vacant retail or short leases (under three years tail) typically cap at 60 to 65%. Convenience-led with a supermarket covenant prices at the keenest end of the band.",
      },
      {
        question: "What ICR do retail lenders need?",
        answer: "Typical 140 to 160% stressed at a notional rate 1 to 2% above pay rate. Prime Cornmarket or Westgate with a 10-year FRI to a national covenant sometimes funds at 130%. Suburban parade with mid-covenant sits at 150 to 160%. The stressed rate is the variable that catches borrowers out, the headline ICR on the actual rate often looks fine, but stressed it pulls the loan size down materially.",
      },
      {
        question: "Are retail rates wider than office or industrial investment?",
        answer: "Retail typically prices 25 to 50bps wider than equivalent office investment in mid-2026, and 50 to 75bps wider than industrial. Convenience and food-led close that gap, supermarket-anchored retail prices closer to industrial than to comparison high-street. The rate gap between sectors has narrowed since 2023 as institutional appetite for prime retail has reasserted.",
      },
      {
        question: "Can I get a commercial mortgage on a vacant retail unit?",
        answer: 'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition plus refurbishment plus the re-letting period; exit is onto a term investment mortgage once the new lease is in place. The lender for the bridge will normally also be the term-out lender. We model both legs at outset so you know the all-in cost of the strategy before exchange.',
      },
      {
        question: "Westgate Oxford prime, what does it price at right now?",
        answer: "Westgate Oxford investment with a national fashion or F&B covenant on a 10-year FRI prices in the 6.5 to 7.5% pa band at 65% LTV in mid-2026. Lloyds, NatWest, Barclays and Santander all compete on this profile. The scheme's anchor draw and the tight Oxford supply position mean lenders treat it close to institutional-grade.",
      },
    ],
  },

  // Office
  office: {
    slug: "office",
    name: "Office",
    metaTitle: "Office Commercial Mortgages Oxford | New Road CBD, Banbury Road, Oxford Science Park",
    metaDescription:
      "Commercial mortgage finance for office property in Oxford, New Road and George Street central CBD, Banbury Road professional services North Oxford, plus dedicated lab and life-sciences appetite for Oxford Science Park, Begbroke Innovation District and Harwell Campus adjacency. LTVs 65 to 75%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Office",
      h1: "Office Commercial Mortgages Oxford",
      lede:
        "Investment and owner-occupier mortgage finance for Oxford office property. New Road and Park End Street central CBD at the top, Banbury Road and Woodstock Road professional-services freeholds in the mid-cap range, plus a dedicated specialist pool for Oxford Science Park, Begbroke Innovation District and Harwell Campus-adjacent lab and life-sciences stock. Investment LTV 65 to 75%, owner-occupier to 75% on EBITDA cover, mid-2026 rates 7.0 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155% / EBITDA 1.3 to 1.5x" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£300K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting an Oxford office commercial mortgage",
      body: [
        "Oxford office stock is unusual. The market is small by national standards (planning constraint keeps it tight) but the occupier base is among the strongest in the United Kingdom, driven by the University of Oxford collegiate system, Oxford Brookes, Oxford University Hospitals NHS Trust, and a knowledge-economy cluster centred on Oxford Science Park, Begbroke Innovation District and Harwell Campus. The commercial mortgage market splits four ways. <strong>Central CBD professional offices</strong> on New Road, George Street and Park End Street in OX1, the £400K to £3M owner-occupier and small-investment bracket. <strong>North Oxford professional services</strong> on Banbury Road and Woodstock Road in OX2, accountancy, legal, consultancy and architectural practice freeholds in converted townhouses and Edwardian villas. <strong>Oxford Science Park / Begbroke / Harwell life-sciences and lab stock</strong>, a specialist sub-pool with bespoke financing requirements. <strong>Suburban office stock</strong> on the Cowley fringe and at Oxford Business Park near Templars Square.",
        "Investment underwriting tests <strong>ICR</strong> at 140 to 155% on let office stock. Tenant covenant carries even more weight than on retail, a five-year unbroken lease to a national professional services firm prices materially better than the same building let on three two-year leases to local independents. Multi-let assets with rolling renewals price at the wider end. Owner-occupier office routes through the EBITDA-cover product at 1.3 to 1.5x, the accountancy practice converting from leasehold to a Banbury Road freehold, the consultancy buying its George Street townhouse, the legal firm taking the freehold of its New Road building.",
        "<strong>Life-sciences and laboratory stock at Oxford Science Park, Begbroke Innovation District and Harwell Campus adjacency</strong> is a discrete sub-pool. Bricks-and-mortar value is dominated by specialised wet-lab fit-out and ventilation infrastructure; lender comfort depends on the strength of the operator covenant, the lease structure, and on a valuer who understands lab depreciation. Oxford Nanopore, Adaptimmune, Sophia Genetics and Oxford Instruments-adjacent occupiers anchor this market. Mainstream commercial desks engage where the asset is let to a strong-covenant biotech or pharma name on a long FRI lease; specialist real-estate funds (Octopus Real Estate, ASK Partners) take the structured-debt end, typically £5M+ and outside the standard broker panel.",
        "Worked example: a New Road 5,800 sq ft office investment, £1.65M valuation, let on a 7-year FRI to a regional law firm at £115K passing rent. ICR at 145% sizes a £1.05M loan at 64% LTV; <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Santander</strong> all price this profile at 7.5 to 8.0% pa on a five-year fix. Worked example two: a Banbury Road professional-services freehold purchase by a small architectural practice, £720K, EBITDA cover 1.4x. Owner-occupier route at 70% LTV places with Allica Bank or <strong>Shawbrook</strong> at 7.5 to 8.25% pa.",
      ],
    },
    schemeTypes: {
      h2: "Office asset types we fund",
      items: [
        { label: "Central CBD professional office", detail: "New Road, George Street, Park End Street OX1. The £400K to £3M bracket where most owner-occupier and small-investment commercial mortgage volume sits." },
        { label: "North Oxford professional services", detail: "Banbury Road, Woodstock Road OX2. Accountancy, legal, consultancy, architectural practice freeholds in converted townhouses and Edwardian villas." },
        { label: "Oxford Science Park lab / life-sciences", detail: "Magdalen College joint venture park in OX4. Lab fit-out, biotech and pharma occupiers; specialist underwriting and valuation." },
        { label: "Begbroke Innovation District / Harwell adjacency", detail: "Innovation district and county-level life-sciences anchor; specialist lender appetite, often structured-debt territory above £5M." },
        { label: "Owner-occupier office freehold", detail: "Professional services buying their building, accountancy, legal, consultancy, financial services. EBITDA cover route at 1.3 to 1.5x." },
        { label: "Multi-let small-cap office", detail: "Serviced or multi-tenant small-cap office buildings; specialist lender appetite, ICR tested at the wider end." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Oxford office",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; vacant or value-add via bridge-to-let with an agreed term-out. Lab and life-sciences stock above £5M typically routes through structured commercial debt outside the standard broker panel.",
      structures: standardStructures,
    },
    oxfordContext: {
      h2: "The Oxford office estate",
      body: 'Oxford office stock is supply-constrained by design, the city has not built speculative volume office since the 1990s and the planning regime keeps new commercial floorspace extremely tight. Central CBD sits on New Road, George Street and Park End Street in OX1, mostly converted townhouses and small purpose-built office stock from the 1960s and 1980s, refurbished continually. North Oxford carries the professional-services freehold spine on Banbury Road and Woodstock Road, accountancy, legal, consultancy and architectural practices working from converted Victorian and Edwardian villas. Oxford Science Park in OX4 (Magdalen College joint venture) anchors the life-sciences cluster, with Begbroke Innovation District at Oxford North and Harwell Campus near Didcot adding county-level scale. The Oxford Centre for Innovation on New Road acts as a flexible workspace hub. The structural undersupply means owner-occupier freehold demand outstrips supply persistently, and refinancing flow is the dominant deal type rather than fresh investment churn.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Oxford office",
      body: 'Strong on prime let stock with national covenants and unexpired lease term over five years. Mid-strength on secondary CBD with mid-covenant tenants on shorter leases. Tighter, but still fundable, on vacant or part-let secondary office routed through bridge-to-let with a credible refurbishment story. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime investment at 7.0 to 7.75% pa for 65% LTV with strong covenants. <strong>Shawbrook</strong>, Allica Bank, HTB and Cambridge & Counties cover mid-market at 7.75 to 8.5% pa. <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> handle secondary, short-lease and refurb-to-let stories at 8.25 to 9.25% pa. Lab and life-sciences stock at Oxford Science Park or Begbroke routes through OakNorth, Octopus Real Estate and ASK Partners on the structured-debt end; below those facility sizes, a specialist lab-comfortable subset of our panel covers it.',
    },
    faqs: [
      {
        question: "What LTV can I get on an Oxford office investment?",
        answer: "Up to 75% LTV on strong-covenant let stock with five-plus years unexpired. ICR cover tested at 140 to 155% stressed. Vacant or short-lease assets cap at 60 to 65% LTV. WAULT under three years usually pulls the loan to 60% even where the building is otherwise well-let.",
      },
      {
        question: "Is post-Covid Oxford office stock still fundable?",
        answer: "Yes, and the structural undersupply means Oxford has held up better than most regional markets through the post-Covid cycle. Bridge-to-let funds acquisition plus refurbishment plus re-letting; specialists like Shawbrook, LendInvest and Hampshire Trust Bank have appetite for genuine refurbishment stories with credible exit lettings. The EPC-B 2030 deadline has if anything strengthened lender comfort with refurb plans, because it forces the upgrade work the asset needs anyway.",
      },
      {
        question: "Oxford Science Park or Begbroke lab purchase, can you fund it?",
        answer: "Yes, but it is a specialist sub-pool. The bricks-and-mortar value is dominated by lab fit-out (clean rooms, ventilation, plant) and the lender needs a valuer who understands lab depreciation. Mainstream commercial desks engage where the asset is let to a strong-covenant biotech or pharma tenant on a long FRI lease. Above £5M the deal typically routes through Octopus Real Estate, ASK Partners or OakNorth as structured commercial debt.",
      },
      {
        question: "What about owner-occupier office purchase on Banbury Road?",
        answer: 'Routes via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier commercial mortgage</a>. EBITDA cover 1.3 to 1.5x; LTV up to 75%; rate 7.0 to 8.25% pa for strong covenants. The accountancy or legal practice taking the freehold of its existing leased Banbury Road or Woodstock Road townhouse is the archetypal deal, typically £600K to £3M facility.',
      },
      {
        question: "Are multi-let serviced offices fundable in Oxford?",
        answer: "Yes, but the lender pool narrows. Multi-let small-cap office with rolling short-term licenses (rather than full FRI leases) routes through Shawbrook, Allica Bank, InterBay Commercial and Cynergy Bank. ICR tested at the wider end (155 to 165%) reflecting the income volatility. Pricing typically 8.5 to 9.0% pa at 65% LTV.",
      },
    ],
  },

  // Industrial / warehouse
  "industrial-warehouse": {
    slug: "industrial-warehouse",
    name: "Industrial & Warehouse",
    metaTitle: "Industrial Commercial Mortgages Oxford | Cowley, Osney Mead, Botley Road",
    metaDescription:
      "Commercial mortgage finance for industrial and warehouse property in Oxford, Cowley BMW Plant adjacency, Osney Mead, Botley Road A34 corridor. Investment LTVs to 75%, the strongest commercial sector pricing in mid-2026 at 6.0 to 7.5% pa.",
    hero: {
      eyebrow: "Industrial & warehouse",
      h1: "Industrial and Warehouse Commercial Mortgages Oxford",
      lede:
        "Investment and owner-occupier finance for B2/B8 industrial property and trade-counter units across Cowley, Osney Mead, the Botley Road corridor and the Cowley industrial estates adjacent to the BMW Plant. Strongest lender appetite of any commercial sector in mid-2026, investment LTV to 75%, owner-occupier to 75%, rates 6.0 to 7.5% pa.",
      metrics: [
        { label: "LTV", value: "70 to 75%" },
        { label: "Cover test", value: "ICR 140 to 155% / EBITDA 1.3 to 1.5x" },
        { label: "Rate range", value: "6.0 to 7.5% pa" },
        { label: "Facility", value: "£250K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting an Oxford industrial commercial mortgage",
      body: [
        "Oxford industrial stock is tighter than almost any regional market in the United Kingdom, the city's planning regime has limited new B2/B8 floorspace consistently for thirty years, and existing stock concentrates on a handful of sites south, west and east of the centre. The market splits four ways. <strong>BMW Plant adjacency in Cowley (OX4)</strong> is the anchor, the plant employs approximately 4,500 staff and supports a deep automotive supply-chain industrial cluster on the surrounding estates. <strong>Osney Mead industrial estate (OX2)</strong> west of the station carries light-industrial and trade-counter stock close to the city centre. <strong>Botley Road and the A34 corridor (OX2)</strong> hold distribution-led industrial moving towards the Bicester and Didcot M40 / A34 axis. <strong>Cowley industrial estates</strong>, including the Watlington Road and Horspath estates, hold the depth of mid-cap multi-let industrial.",
        "Industrial enjoys the strongest lender appetite of any commercial sector in mid-2026. Yields have compressed and rents have grown consistently through 2022 to 2026, Oxford prime industrial rents have moved upwards over four years on the back of structural undersupply. Lender comfort with the sector is correspondingly broad. Investment LTVs of 75% are achievable on strong-covenant let assets with five-plus years unexpired; owner-occupier 70 to 75% on businesses with two years' clean accounts and EBITDA cover of 1.3 to 1.5x.",
        "Worked example: a Cowley trade-counter unit on the Watlington Road estate, 7,800 sq ft, £2.1M purchase by an existing operator. Owner-occupier route on filed accounts showing EBITDA cover of 1.55x. Placed with <strong>Lloyds</strong> at 65% LTV, 6.55% pa on a five-year fix, 20-year term, £6,500 arrangement fee. Worked example two: an Osney Mead multi-let industrial estate, four units, £2.8M valuation, £215K passing rent across mixed-covenant tenants. Investment route at 70% LTV; <strong>Shawbrook</strong> took it at 8.0% pa with ICR cover at 145%.",
        'The recent planning case at Osney Yard, Bridge Street (OX2 0AZ, application 26/00990/FUL) for replacement of access gates while retaining commercial yard use is a typical owner-occupier industrial workshop commercial mortgage candidate. Botley Road carries the bulk of the Oxford trade-counter stock; pure heavy industrial concentrates on the Cowley estates adjacent to the BMW Plant.',
      ],
    },
    schemeTypes: {
      h2: "Industrial asset types we fund",
      items: [
        { label: "Light industrial / B2", detail: "Engineering, manufacturing, fabrication, food production. Owner-occupier and let investment. Cowley estates and Osney Mead dominant locations." },
        { label: "Storage and B8 warehouse", detail: "Self-storage, third-party logistics, distribution. Botley Road A34 corridor for larger sheds; Cowley for mid-cap stock." },
        { label: "Trade-counter retail-in-industrial", detail: "Toolstation, Howdens, Screwfix, City Plumbing format. Strong-covenant trade-counter prices closer to retail-park than to industrial, best of both worlds." },
        { label: "Multi-let industrial estate", detail: "Small-unit industrial estates with multiple FRI tenants, premium Oxford investment territory in mid-2026. Rents have grown faster than any other commercial sub-class." },
        { label: "Owner-occupier SME industrial", detail: "Manufacturing, engineering, distribution SMEs buying their workshop, the £400K to £1.5M bracket. EBITDA-led owner-occupier route." },
        { label: "Vacant industrial acquisition", detail: "Bridge-to-let funded purchase of vacant or partly-tenanted industrial; refurbishment and re-letting strategy with term-out onto investment mortgage." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Oxford industrial",
      intro:
        "Investment routes via commercial investment mortgage on ICR; owner-occupier via the EBITDA-cover route; multi-let estates can route as portfolio refinance where 3+ assets aggregate; vacant industrial via bridge-to-let.",
      structures: standardStructures,
    },
    oxfordContext: {
      h2: "The Oxford industrial estate",
      body: 'BMW Plant Oxford in Cowley anchors the city\'s industrial economy, the plant produces the MINI and employs approximately 4,500 staff, supporting a deep automotive supply-chain cluster across the Watlington Road, Horspath and other Cowley estates. Osney Mead industrial estate west of the railway station holds the bulk of the close-to-centre light industrial and trade-counter stock. Botley Road heading north-west towards the A34 carries distribution-oriented stock and the principal Oxford trade-counter cluster. The A34 corridor links Oxford industrial demand to Bicester and the M40, and to Didcot and the M4, making OX2 and OX4 industrial stock attractive to occupiers serving the wider Thames Valley. Structural undersupply, the Oxford Local Plan does not release new industrial volume aggressively, has driven rents upwards consistently and supports tight investment yields. Outer Oxford industrial in Kidlington and Cherwell DC adds market-town industrial supply.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Oxford industrial",
      body: 'Strongest of any commercial sector in mid-2026. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete actively on prime let industrial, typical 7.0 to 7.75% pa at 65 to 70% LTV with strong covenants. Allica Bank, <strong>Shawbrook</strong>, HTB and Cambridge & Counties dominate mid-market and owner-occupier industrial at 7.0 to 8.25% pa. <strong>InterBay Commercial</strong>, Together and OakNorth take multi-let estates and value-add stock at 8.0 to 8.75% pa. Owner-occupier industrial enjoys near-best pricing of any sector, 6.0 to 7.5% pa for SMEs with two years\' clean accounts, EBITDA cover 1.3 to 1.5x. Trade-counter prices at the keen end of investment because of the strong-covenant retail-tenant overlay; multi-let estates command the fastest credit-committee turnaround of any current commercial product.',
    },
    faqs: [
      {
        question: "What rate can I get on Oxford industrial investment?",
        answer: "Currently 6.0 to 7.5% pa for prime let industrial with strong covenants and five-plus years unexpired. Multi-let estates 6.5 to 8.0% pa. Trade-counter with national covenant prices at 7.0 to 7.75%. The keenest-priced commercial sector in the panel right now, and the one with the broadest lender competition.",
      },
      {
        question: "Can I fund an owner-occupier industrial purchase in Cowley or Osney Mead?",
        answer: 'Yes, typically 70 to 75% LTV on strong-covenant SME buyers via the <a href="/services/owner-occupier-commercial-mortgage">owner-occupier route</a>. EBITDA cover 1.3 to 1.5x. Allica Bank and Shawbrook are the most active mid-market owner-occupier desks; Lloyds and NatWest compete on the larger end where the borrowing is over £1.5M and the covenant is strong.',
      },
      {
        question: "Cowley vs Osney Mead vs Botley Road, same lender pool?",
        answer: "Largely yes. The pool is broader than any other commercial sector. Each lender has distinct LTV and pricing discipline by asset size and covenant, but most of the panel will look at any of the Oxford industrial estates. Outer-Oxford industrial in Kidlington and around Bicester sits on the same panel with no material pricing difference.",
      },
      {
        question: "What about trade-counter, different to industrial?",
        answer: "Trade-counter (Toolstation, Howdens, Screwfix, City Plumbing format) sits formally as industrial but lenders treat it as industrial investment with a retail-tenant covenant overlay. Pricing usually 25bps inside generic industrial because the covenants are stronger than mid-market industrial tenants. Long FRI leases to a national covenant trade-counter operator price at 6.0 to 7.5% pa.",
      },
      {
        question: "Multi-let industrial, premium or penalty?",
        answer: "Premium in mid-2026, multi-let industrial estates have been the strongest-performing UK commercial asset class for three years running. Lenders price them at 7.0 to 7.75% pa at 70 to 75% LTV with ICR cover at 140 to 150%. The diversification of income across multiple tenants is treated as a positive rather than a complication, provided the WAULT is over four years.",
      },
    ],
  },

  // Leisure & hospitality
  "leisure-hospitality": {
    slug: "leisure-hospitality",
    name: "Leisure & Hospitality",
    metaTitle: "Leisure Commercial Mortgages Oxford | Hotels, Aparthotels, Tourist-Spine F&B",
    metaDescription:
      "Trading-business commercial mortgage finance for leisure and hospitality property in Oxford, hotels along the Cornmarket and High Street tourist spine, George Street restaurants, Oxford Castle Quarter, Headington hospital-adjacent boutique hotels. EBITDA, occupancy and RevPAR underwriting. LTVs 60 to 70%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Leisure & hospitality",
      h1: "Leisure and Hospitality Commercial Mortgages Oxford",
      lede:
        "Trading-business and investment finance for hotels, aparthotels, restaurant-led leisure and F&B-anchored venues. Approximately 7 million visitors a year drive unusually high hospitality values per square foot, particularly on the Cornmarket and High Street tourist spine. Brand affiliation and operator track record matter more than bricks-and-mortar value. LTVs 60 to 70%, rates 7.0 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£500K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting an Oxford leisure or hospitality commercial mortgage",
      body: [
        "Leisure and hospitality is the most operator-led segment of the commercial mortgage market. Underwriting tests <strong>EBITDA cover</strong> at 1.5 to 2.0x, wider than mainstream owner-occupier, because the trading is more volatile and recovery on default depends more on goodwill and operator continuity than on bricks-and-mortar value alone. The headline metrics a lender reads first are <strong>occupancy</strong>, <strong>ADR (average daily rate)</strong> and <strong>RevPAR (revenue per available room)</strong> for hotels and aparthotels; for gyms and F&B venues it is membership retention or covers per session against operating margin.",
        "Oxford carries an unusually strong hospitality story driven by tourism (approximately 7 million visitors a year on Visit Oxfordshire data), weekday corporate demand from the universities, hospitals and Oxford Science Park occupiers, and conference traffic. Hotels split sharply by brand affiliation. <strong>Branded franchise hotels</strong> (Premier Inn, Holiday Inn Express, Hilton Garden Inn, Ibis) price materially better than independents because the franchise system gives lenders comfort on demand stability and recovery options. Branded budget freehold prices at 7.5 to 8.5% pa at 65% LTV; independent boutique hotels in the same size band sit at 8.5 to 9.5% pa at 60 to 65% LTV. Aparthotels (Staycity, Native, Wilde, Roomzzz format) route through hotel-comfortable lenders with operator-letting model assessment, the deal economics depend on whether the ground rent passes to a brand or whether the owner operates directly.",
        "Worked example: a 52-bed Premier Inn-franchised budget hotel close to the Cornmarket / High Street tourist spine, £4.5M valuation, EBITDA £620K. <strong>Shawbrook</strong> placed at 65% LTV, 7.25% pa, 25-year term, EBITDA cover 1.85x. Worked example two: an independent 24-bed boutique hotel in Headington serving the John Radcliffe and Churchill catchment, £1.95M valuation, EBITDA £225K. Independent route is narrower, <strong>Cynergy Bank</strong> and OakNorth are realistic, plus ASK Partners on the structured-debt end. Placed at 60% LTV, 9.25% pa, 20-year term.",
        "Bars and licensed F&B venues route through licensed-trade specialist desks, see also our <a href=\"/property-types/pub-restaurant\">pub and restaurant page</a>. The George Street restaurant cluster and the Oxford Castle Quarter carry the bulk of mid-scale F&B operator activity. Cowley Road and Walton Street Jericho hold the independent F&B operator base. Gyms split between corporate chain (PureGym, The Gym Group, corporate-financed, not brokered) and independent / small-chain operators where commercial mortgage lenders test membership economics and equipment depreciation alongside EBITDA.",
      ],
    },
    schemeTypes: {
      h2: "Leisure and hospitality assets we fund",
      items: [
        { label: "Branded franchise hotel", detail: "Premier Inn, Holiday Inn Express, Hilton Garden Inn, Ibis, Travelodge. Best-priced leisure asset class, franchise comfort drives lender appetite." },
        { label: "Independent boutique hotel", detail: "City-centre and Headington hospital-adjacent independent hotels. Specialist underwriting on EBITDA, occupancy and ADR." },
        { label: "Aparthotel", detail: "Staycity, Native, Wilde, Roomzzz format across central Oxford. Operator-letting model, investment if let on FRI to brand, trading if owner-operated." },
        { label: "Independent gym and fitness", detail: "Independent and small-chain gym freeholds. Membership economics, retention, equipment depreciation tested alongside EBITDA." },
        { label: "F&B-anchored leisure", detail: "Restaurants with operator flat above (semi-commercial overlap), gastropubs, dessert lounges, cafe-bars across George Street, Cowley Road and Walton Street." },
        { label: "Indoor leisure venues", detail: "Trampoline parks, escape rooms, indoor golf, climbing centres. Niche underwriting; specialist desks only." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Oxford leisure",
      intro:
        "Trading-business mortgage is the primary route for owner-operated leisure assets, on EBITDA cover. Investment mortgage applies where the asset is let on FRI to a brand or operator covenant. Bridge-to-let funds vacant hotel acquisition with refurbishment and repositioning before income stabilisation.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator hotels, gyms, aparthotels, leisure venues, EBITDA, occupancy and ADR underwritten." },
        { product: "Commercial investment mortgage", applicability: "Where the asset is let on FRI to a brand or operator covenant, Premier Inn franchise on a 25-year lease for instance." },
        { product: "Commercial bridge-to-let", applicability: "Vacant hotel acquisition with refurbishment or repositioning before income stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing leisure freehold, typically funding an extension, refurbishment programme or onward acquisition." },
      ],
    },
    oxfordContext: {
      h2: "The Oxford leisure economy",
      body: 'Oxford combines weekday business-travel hotel demand (the universities, Oxford University Hospitals NHS Trust, Oxford Science Park and Begbroke occupiers) with very strong weekend leisure (approximately 7 million visitors a year on Visit Oxfordshire data, drawn by the colleges, the Ashmolean Museum, Christ Church, Magdalen College, Blenheim Palace on the Oxford-Bicester axis, and the wider Cotswolds gateway). Hotel stock concentrates along the Cornmarket and High Street tourist spine, with newer branded budget stock on the inner ring. Aparthotel is the fastest-growing sub-sector, central Oxford retail-to-hotel conversion applications registered through 2026 typify the pipeline. Headington hospital-adjacent boutique hotels serve the John Radcliffe, Churchill and Nuffield Orthopaedic catchment. The George Street restaurant cluster, Oxford Castle Quarter and Walton Street Jericho hold mid-scale F&B operator activity; Cowley Road carries the independent operator base. University of Oxford (approximately 24,000 students) and Oxford Brookes (approximately 17,000) anchor the student-leisure spine on Cowley Road and Walton Street.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Oxford leisure",
      body: 'Branded franchise hotels well-served by <strong>Shawbrook</strong>, Cambridge & Counties, Hampshire Trust Bank and selectively Allica Bank, typical 7.5 to 8.5% pa at 65% LTV with EBITDA cover 1.7x+. Independent hotels narrower, <strong>Cynergy Bank</strong>, OakNorth and ASK Partners on the structured-debt end. Aparthotels hotel-comfortable lenders only; appetite has broadened materially since 2024 as the operating model has matured, and Oxford\'s tourism story makes underwriting easier than in many regional markets. Bars and licensed venues route through Cynergy Bank and specialist licensed-trade desks. Independent gym and fitness narrower still, Cynergy Bank and Together for the trickier cases. High-street commercial desks (NatWest, Lloyds, Barclays) typically decline trading-business hotel and gym; they will look at branded-hotel investment let on FRI to a brand covenant.',
    },
    faqs: [
      {
        question: "Can I get a commercial mortgage on an Oxford independent hotel?",
        answer: "Yes, typically 60 to 65% LTV on independent hotels with two-plus years' trading and EBITDA cover at 1.7x or better. Specialist underwriting on EBITDA, occupancy and ADR. Cynergy Bank, OakNorth and ASK Partners are the realistic desks. Mid-2026 rates 8.5 to 9.5% pa for the 22 to 50 bed bracket; pricing tightens on larger independents with stronger track record. Oxford's 7 million annual visitors helps the underwriting story versus comparable regional markets.",
      },
      {
        question: "What about pubs and bars specifically?",
        answer: 'See our dedicated <a href="/property-types/pub-restaurant">pub and restaurant commercial mortgage page</a>, these route through licensed-trade specialist desks (Cynergy Bank, ASK Partners) with barrelage, beer-tie status and freehold-versus-leasehold all material. Gastropubs with strong food revenue overlap with this leisure category but are scored differently.',
      },
      {
        question: "How is an Oxford hotel valued for lending?",
        answer: "Specialist RICS valuer using EBITDA-multiple methodology, typically 7 to 9x EBITDA for branded franchise, 5 to 7x for independent. Bricks-and-mortar value calculated separately and the lender takes the lower of the two figures. Brand affiliation typically adds 1.5 to 2x to the EBITDA multiple; AA Rosettes and Visit England rating influence the multiple at the margin. Oxford bricks-and-mortar values tend to be high enough that the going-concern valuation rarely undershoots.",
      },
      {
        question: "Aparthotel, investment mortgage or trading-business?",
        answer: "Depends on the operating structure. Where the asset is let on a long FRI lease to the operator brand (Staycity or Native take a 25-year FRI on the building, run the operations, pay rent), it is investment, ICR-led at 140 to 150%. Where the owner operates the aparthotel themselves under a soft franchise or marketing agreement, it is trading-business, EBITDA-led at 1.5 to 2.0x cover. Central-Oxford retail-to-aparthotel conversions appearing through 2026 are typically the trading-business profile.",
      },
      {
        question: "Are gyms harder to fund than hotels?",
        answer: "On the independent end, yes. The lender pool is narrower, equipment depreciation is treated as a real cost rather than a non-cash add-back, and membership churn is scrutinised. Cynergy Bank and Together are the realistic desks; rates 8.5 to 9.5% pa at 60 to 65% LTV. Gyms with a 12-month-plus track record, strong retention, and a freehold premises fund cleanly; new openings or leasehold operations do not.",
      },
    ],
  },

  // Healthcare / care home
  "healthcare-care-home": {
    slug: "healthcare-care-home",
    name: "Healthcare & Care Home",
    metaTitle: "Care Home Commercial Mortgages Oxford | CQC, Headington Hospital Cluster",
    metaDescription:
      "Specialist commercial mortgage finance for CQC-rated care homes, GP surgeries and dental practices in Oxford. Headington hospital-adjacent dental and GP cluster around John Radcliffe and Churchill; Marston neighbourhood healthcare. CQC-led underwriting, LTVs 60 to 70%.",
    hero: {
      eyebrow: "Healthcare",
      h1: "Care Home Mortgages Oxford",
      lede:
        "Trading-business mortgage finance for care homes, GP surgeries, dental practices and other healthcare property. CQC rating drives lender appetite on care; NHS contract security on dental and GP. Headington's John Radcliffe, Churchill and Nuffield Orthopaedic halo drives the city's largest healthcare ancillary cluster. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa. Specialist sector, wrong desk first time can lose six weeks.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£500K to £8M" },
      ],
    },
    overview: {
      h2: "Underwriting an Oxford care home commercial mortgage",
      body: [
        "Healthcare in the Oxford commercial mortgage market splits cleanly. <strong>Care homes</strong>, operational properties with bed-by-bed economics, sit firmly in the trading-business mortgage world. CQC rating drives appetite; weighted-average bed value, occupancy, fee-rate mix (private versus local-authority funded) and staffing cost feed the underwrite. <strong>Medical and dental practices</strong> route either as owner-occupier (EBITDA cover 1.3 to 1.5x) or trading-business (sector-specialist underwrite at 1.5x), depending on size, structure and whether NHS contract value is being underwritten as quasi-collateral.",
        "Care home credit decisions hinge on the <strong>CQC rating</strong> first and everything else second. <strong>Good</strong> or <strong>Outstanding</strong> is the threshold for mainstream lender appetite at standard LTV and pricing. <strong>Requires Improvement</strong> can fund, but at tighter LTV (50 to 60%), wider pricing (9.0 to 9.5% pa) and a clear written remediation plan. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers; specialist private credit may engage, but rarely at sensible terms. Lenders also look at the bed mix, small homes (sub-30 beds) are harder to fund than 50 to 80 bed homes, because operating leverage matters; under 20 beds typically declines on high-street desks.",
        "Worked example: a 48-bed CQC-rated Good care home in Marston, £3.4M valuation, EBITDA £445K, predominantly private-pay fee mix. <strong>Shawbrook</strong> placed at 65% LTV, 7.5% pa on a 5-year fix, 25-year term, EBITDA cover 1.85x. Worked example two: a Headington dental practice freehold purchase by the existing principal partner, £1.35M, EBITDA £195K, mixed NHS / private revenue, half a mile from the John Radcliffe Hospital. Owner-occupier route at 75% LTV, 6.85% pa on a 20-year term, placed via a specialist health desk that will use NHS UDA contract value as additional security.",
        "Headington (OX3) is the dominant Oxford healthcare ancillary cluster, the John Radcliffe, Churchill and Nuffield Orthopaedic hospitals draw a deep cluster of dental practices, GP surgeries, private clinics and allied health operators along London Road and the surrounding streets. Marston (OX3) holds neighbourhood GP and dental stock at lower value points. Outer Oxford and the Cherwell DC market towns (Kidlington, Bicester) carry village GP surgeries that fund routinely on owner-occupier or NHS-lease investment routes.",
      ],
    },
    schemeTypes: {
      h2: "Healthcare asset types we fund",
      items: [
        { label: "Care home (owner-operator)", detail: "Marston, Headington fringe, outer Oxford. CQC Good or Outstanding for mainstream pricing." },
        { label: "Supported living and SEN housing", detail: "Specialist housing with care; institutional and SME operator. Local-authority contract security drives lender comfort." },
        { label: "GP surgery, owner-occupier and let", detail: "Owner-occupier purchase by a GP partnership; let GP surgery investment with NHS lease covenant." },
        { label: "Dental practice freehold", detail: "Owner-occupier dental, Headington hospital-adjacent cluster the dominant location. NHS UDA contract value used as additional security on most placements." },
        { label: "Pharmacy", detail: "Independent pharmacy owner-occupier; let-to-pharmacy investment. Strong covenant, broad lender pool." },
        { label: "Health and wellness / private clinics", detail: "Physiotherapy, opticians, podiatry, private clinics drawing Headington hospital halo. Owner-occupier route on EBITDA cover." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Oxford healthcare",
      intro:
        "Care homes use trading-business mortgages on EBITDA / occupancy / CQC underwriting. Smaller medical and dental routes via owner-occupier on EBITDA cover. Investment routes via standard commercial investment mortgage where there is a covenant tenant, most commonly an NHS lease on a GP surgery.",
      structures: standardStructures,
    },
    oxfordContext: {
      h2: "The Oxford healthcare property estate",
      body: 'Oxford University Hospitals NHS Foundation Trust is one of the largest acute-care trusts in England, running the John Radcliffe, Churchill and Nuffield Orthopaedic Centre in Headington, all concentrated within a square mile in OX3. That cluster drives the deepest healthcare ancillary property market in the city, dental practices, GP surgeries, private clinics, allied health operators all concentrate along London Road and the surrounding Headington streets to serve the hospital catchment, the staff base and the visiting patient population. Marston, immediately north of Headington, carries neighbourhood GP and dental stock at lower value points. Outer Oxford and Cherwell DC market towns (Kidlington, Bicester) hold village GP surgeries that fund routinely on owner-occupier or NHS-lease investment routes. Care home stock is more dispersed, with concentrations in Marston, Headington fringe and outer Oxford suburbs.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Oxford healthcare",
      body: 'Care homes, <strong>Shawbrook</strong>, Cambridge & Counties and Hampshire Trust Bank dominate at 7.5 to 9.0% pa at 60 to 70% LTV; CQC Good or better is essential. Dental, Hampshire Trust Bank, Allica Bank\'s health desk and Together cover the range; NHS UDA contract value treated as quasi-collateral by the specialist desks. The Headington hospital-adjacent dental cluster has been a steady refinance volume zone through 2024 to 2026. GP surgery, <strong>NatWest</strong>, <strong>Lloyds</strong> and the challengers compete on owner-occupier purchase by a GP partnership at near-best owner-occupier pricing (6.5 to 7.5% pa) given the strength of the implied NHS revenue. Pharmacy, well-served across multiple lenders given the strong covenant and the consistent fee structure. Independent specialist clinics narrower; route through Allica Bank or <strong>Shawbrook</strong> on owner-occupier at 7.5 to 8.5% pa.',
    },
    faqs: [
      {
        question: "What CQC rating do care home commercial mortgage lenders need?",
        answer: "Generally <strong>Good</strong> or <strong>Outstanding</strong> for standard terms (60 to 70% LTV, 7.5 to 9.0% pa). <strong>Requires Improvement</strong> can fund at tighter LTV (50 to 60%), wider pricing (9.0 to 9.5% pa) and with a clear written remediation plan from the operator. <strong>Inadequate</strong> is unfundable on mainstream desks until the rating recovers, typically a 12-month process under the CQC inspection cycle.",
      },
      {
        question: "How are Oxford care homes valued for lending?",
        answer: "Specialist RICS valuer using an EBITDA-multiple methodology, typically 6 to 8x trailing EBITDA, with weighted-average bed value calibration as a sense-check. Bricks-and-mortar value (Existing Use Value, EUV) calculated separately. The lender takes the lower of the going-concern value and the EUV. CQC Outstanding adds 0.5 to 1.0x to the EBITDA multiple; private-pay fee mix above 70% lifts it further.",
      },
      {
        question: "Can I get a dental practice commercial mortgage in Headington?",
        answer: "Yes, this is one of the most active sub-niches in Oxford healthcare property. Owner-occupier route on EBITDA cover (1.3 to 1.5x). NHS UDA contract value treated as additional security by the specialist desks. Hampshire Trust Bank and Allica Bank's health desk are the most active. LTVs 70 to 75%; mid-2026 rates 6.5 to 8.0% pa for established principal-led practices. The Headington hospital-adjacent cluster supports unusually strong patient throughput and consistent revenue stability, which feeds the lender comfort.",
      },
      {
        question: "What about a GP surgery let to an NHS partnership, investment route?",
        answer: "Yes, NHS lease covenant on a GP surgery let to a partnership prices very keenly. Typically 6.0 to 7.5% pa at 65 to 70% LTV. The implied NHS covenant strength gets the deal close to gilt-equivalent treatment by some desks. Owner-occupier purchase by the partnership uses the standard EBITDA-cover route.",
      },
      {
        question: "Small care homes, what is the floor?",
        answer: "Mainstream lender appetite drops sharply below 30 beds and effectively stops below 20. Operating leverage matters in care, staffing cost is largely fixed, so EBITDA per bed compresses materially on small homes. Specialist owner-operator routes can fund 25 to 30 bed homes at tighter LTV. Below that, private credit or direct vendor finance are the realistic routes.",
      },
    ],
  },

  // Pub & restaurant
  "pub-restaurant": {
    slug: "pub-restaurant",
    name: "Pub & Restaurant",
    metaTitle: "Pub Mortgages Oxford | George Street, Cowley Road, Walton Street",
    metaDescription:
      "Trading-business mortgage finance for pubs, gastropubs, bars and restaurants in Oxford. George Street tourist cluster, Walton Street Jericho, Cowley Road independents, Magdalen Road East Oxford. Barrelage and EBITDA underwriting. LTVs 60 to 65%, mid-2026 rates 6.5 to 8.5% pa.",
    hero: {
      eyebrow: "Pub & restaurant",
      h1: "Pub and Restaurant Mortgages Oxford",
      lede:
        "Specialist licensed-trade commercial mortgages for freehold pubs, gastropubs, wet-led pubs and restaurants. Underwriting uses barrelage, full-trading EBITDA, license type, beer-tie status and freehold-versus-leasehold structure. Different lenders dominate different sub-niches, getting the right desk first time matters more here than almost any other commercial sub-sector.",
      metrics: [
        { label: "LTV", value: "60 to 65%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£300K to £3M" },
      ],
    },
    overview: {
      h2: "Underwriting an Oxford pub commercial mortgage",
      body: [
        "Pubs and restaurants are the most specialised sub-segment of trading-business commercial mortgages, and the one where lender choice matters most. The credit decision turns on five variables: <strong>barrelage</strong> (annual beer volume, the proxy for wet-led trade), <strong>full-trading EBITDA</strong>, <strong>license type</strong> (premises, on-sales, off-sales, late-night, sui generis nightclub), <strong>beer-tie status</strong> (free-of-tie versus tied to a brewery or pub-co), and <strong>freehold-versus-leasehold structure</strong>. Different lenders dominate different sub-niches.",
        "<strong>Free-of-tie freehold pubs</strong> sit at the keenest pricing, the operator owns the asset outright and controls the supply contracts, giving the lender comfort on margin and recovery options. Typical 60 to 65% LTV at 8.0 to 8.75% pa. <strong>Tied pubs</strong> price 50 to 100bps wider because tied beer prices compress operator margin. <strong>Tenanted leasehold pubs</strong> are narrowest, only one or two specialist desks engage, and pricing reflects the limited recovery options. <strong>Gastropubs</strong> with strong food revenue (45%+ of turnover from food) sit closer to mainstream restaurant pricing, the food margin smooths what would otherwise be wet-led volatility.",
        "Worked example: a free-of-tie freehold gastropub on Walton Street in Jericho, £985K valuation, full-trading EBITDA £172K (60% food / 40% wet), 290 barrels per annum. <strong>Cynergy Bank</strong> placed at 65% LTV, 8.55% pa on a 5-year fix, 20-year term. EBITDA cover 1.75x. Worked example two: a wet-led tied freehold on Cowley Road, £685K valuation, EBITDA £95K, 440 barrels per annum. Tighter case, placed via ASK Partners at 60% LTV, 9.25% pa, 15-year term.",
        "The George Street restaurant cluster carries the tourist-overlay F&B trade, drawing on Oxford's approximately 7 million annual visitors. Walton Street in Jericho and Cowley Road carry the independent operator base; Magdalen Road in East Oxford is the newer-cycle independent F&B spine. A recent change-of-use case at 146 Oxford Road, Cowley (OX4 2EA, application 26/01030/FUL) for change of use from retail (Class E) to dine-in / hot food takeaway (sui generis) is a typical Oxford licensed-trade refinance candidate post-stabilisation, the moment the new operator is six months in and trading.",
      ],
    },
    schemeTypes: {
      h2: "Pub and restaurant assets we fund",
      items: [
        { label: "Free-of-tie freehold pub", detail: "Best-priced licensed-trade asset class. Owner-operator EBITDA-led, full margin control on supply contracts." },
        { label: "Tied freehold pub", detail: "Tied to brewery or pub-co supply contract; tighter operator margin, 50 to 100bps pricing penalty versus free-of-tie." },
        { label: "Tenanted leasehold pub", detail: "Operating leasehold from pub-co landlord; narrowest lender pool, specialist desks only." },
        { label: "Gastropub / restaurant-led pub", detail: "Food revenue 45%+ of turnover. EBITDA from food-led operations rather than pure wet-led barrelage." },
        { label: "Independent restaurant", detail: "Operator-led restaurant business and freehold. Trading-business underwrite on covers per session, margin and EBITDA. George Street, Walton Street, Cowley Road clusters." },
        { label: "Pub with operator flat above", detail: "Semi-commercial overlap; some lenders treat as semi-commercial commercial mortgage at better LTV." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Oxford pubs and restaurants",
      intro:
        "Predominantly trading-business mortgage on owner-operator EBITDA. Investment route applies where the pub is let on FRI to a chain operator with covenant strength. Bridge-to-let funds vacant pub acquisition or change-of-use scenarios with a clear stabilisation plan.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator pubs, gastropubs and restaurants, EBITDA, barrelage and license type underwritten." },
        { product: "Commercial investment mortgage", applicability: "Pub or restaurant let on FRI to a chain operator (Greene King, Mitchells & Butlers, Stonegate, JD Wetherspoon)." },
        { product: "Commercial bridge-to-let", applicability: "Vacant pub acquisition, change-of-use deals or refurbishment before stabilisation; exit onto term trading-business mortgage." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing pub freehold; commonly funds extension, kitchen refurbishment or onward acquisition." },
      ],
    },
    oxfordContext: {
      h2: "The Oxford licensed-trade economy",
      body: 'Oxford carries an unusually deep licensed-trade economy for a city of its size, combining tourist-overlay F&B (approximately 7 million visitors a year), student trade from the University of Oxford and Oxford Brookes (approximately 41,000 students combined), and hospital and corporate weekday demand. The George Street restaurant cluster, plus the High Street and Cornmarket tourist spine, dominate the F&B core. Walton Street in Jericho carries an established independent operator base on a Victorian high-street pattern. Cowley Road is the principal independent F&B spine, drawing the East Oxford student and creative trade. Magdalen Road East Oxford has emerged as a newer-cycle independent operator cluster through the 2020s. Recent licensed-trade change-of-use cases (the Oxford Road Cowley retail-to-takeaway consent, central-Oxford retail-to-hotel and capsule-hotel conversions) show a market actively re-purposing retail to leisure use; these become commercial mortgage refinance candidates the moment the new lease completes and a six-month trading record is in place.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Oxford pubs and restaurants",
      body: '<strong>Cynergy Bank</strong> is the most active named lender for Oxford licensed-trade, strong appetite on free-of-tie freehold pubs and gastropubs at 8.0 to 8.75% pa, 60 to 65% LTV. ASK Partners and Allica Bank\'s licensed-trade desk compete strongly on the same profile. <strong>Together</strong> covers more challenged cases (tied pubs, shorter trading history, secondary location) at wider pricing. <strong>Shawbrook</strong> takes selective licensed-trade where the operator track record is strong and food revenue dominates. Hampshire Trust Bank active on multi-site restaurant operator portfolios. High-street commercial desks (NatWest, Lloyds, Barclays) do not engage with owner-operator pubs at all; they will look at investment-let pub assets where a chain operator has a long FRI lease in place.',
    },
    faqs: [
      {
        question: "Can I get a freehold pub commercial mortgage in Oxford?",
        answer: "Yes, free-of-tie freehold pubs are the best-priced licensed-trade asset class. Typical 60 to 65% LTV, mid-2026 rate 8.0 to 8.75% pa, term 15 to 20 years. Cynergy Bank and ASK Partners are the most active desks; both will look at established operator track records and gastropub-led food trade as positives. Oxford's tourist and student demand strengthens the underwriting story versus comparable regional markets.",
      },
      {
        question: "What barrelage do lenders need?",
        answer: "Sufficient to support the EBITDA cover, there is no fixed barrelage threshold. What matters is profitable trading. A 200-barrel pub with strong food revenue and an EBITDA margin above 22% can fund where a 400-barrel wet-led pub with thin margin (12 to 15%) cannot. Lenders read margin and EBITDA cover, not barrelage as a standalone metric, but barrelage is the headline number in the underwriting pack.",
      },
      {
        question: "What about a pub I have traded for less than two years?",
        answer: "Specialist desks consider 12-month trading where the operator has prior pub experience and the deal otherwise makes sense. Typically tighter LTV (55 to 60%) and 50 to 75bps wider pricing. New operators with no licensed-trade background struggle materially, underwriters treat the operator risk as the dominant variable. Six months' trading is the practical floor and only viable where the operator has come from a multi-site pub group.",
      },
      {
        question: "Restaurants without alcohol, different underwrite?",
        answer: "Yes. Coffee shops, dessert lounges, dry restaurants and cafes route through restaurant-comfortable trading-business desks with no barrelage or license-type complications. Often closer to mainstream owner-occupier pricing, 8.0 to 8.5% pa at 65% LTV. Allica Bank and Shawbrook engage; Cynergy Bank also looks at the larger end. The dry-restaurant pool is broader than the licensed-trade pool.",
      },
      {
        question: "Tied pub or free-of-tie, does it matter for the mortgage?",
        answer: "Materially. Free-of-tie pricing is 50 to 100bps inside tied. Tied freeholds are still fundable but the pool narrows, Cynergy Bank, Together and ASK Partners will engage; high-street and most challenger banks decline because the tie compresses operator margin. If you are buying a tied freehold, factor in the cost of buying out of the tie versus accepting the wider mortgage pricing, sometimes the buy-out maths works.",
      },
    ],
  },

  // MOT / garage / petrol
  "mot-garage-petrol": {
    slug: "mot-garage-petrol",
    name: "MOT, Garage & Petrol Forecourt",
    metaTitle: "MOT Garage Mortgages Oxford | Cowley BMW Plant, Botley Road, Headington Outer",
    metaDescription:
      "Specialist commercial mortgage finance for MOT centres, vehicle workshops, body shops and petrol forecourts in Oxford. Cowley BMW Plant adjacency, Botley Road corridor, Headington outer. VOSA approval, environmental due diligence, sector-specialist lender pool. LTVs 60 to 70%, mid-2026 rates 6.5 to 8.5% pa.",
    hero: {
      eyebrow: "MOT, garage & petrol",
      h1: "MOT and Petrol Forecourt Mortgages Oxford",
      lede:
        "Specialist trading-business finance for MOT centres, vehicle workshops, body shops and petrol forecourts. VOSA approval, environmental due diligence, EBITDA cover and sector-specialist valuation all material. Wrong desk first time can lose six weeks. LTVs 60 to 70%, mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£250K to £3M" },
      ],
    },
    overview: {
      h2: "Underwriting an MOT or petrol forecourt commercial mortgage",
      body: [
        "MOT centres, vehicle workshops, body shops and petrol forecourts sit in a specialist trading-business niche where four variables drive credit committee. <strong>VOSA approval</strong> for MOT testing premises (the formal authority to operate, transferred or reissued on change of ownership). <strong>Full-trading EBITDA</strong> underwritten at 1.5 to 2.0x cover. <strong>Environmental status</strong> of the site, legacy contamination from fuel storage, waste oil or solvents on body shops. <strong>Sector-accredited RICS valuer</strong> view on bricks-and-mortar versus going-concern value, often diverging materially.",
        "<strong>Together</strong> dominates the Oxford garage and MOT mortgage market. They have meaningful flexibility on environmental risk that high-street and most challenger desks will not take, plus a deep Thames Valley automotive book built up over twenty years. <strong>Cynergy Bank</strong> covers cleaner cases where there is no environmental flag. <strong>Shawbrook</strong> takes selective workshop premises with no fuel storage history. Allica Bank's specialist desk engages on mid-market MOT and trade-counter overlap.",
        "Petrol forecourts are narrower still. <strong>Phase II contamination assessment</strong> (intrusive ground investigation, soil sampling, groundwater monitoring) is the critical-path item, typically £8 to £15K of cost and 4 to 6 weeks of timeline. Tank integrity report from a VPS or equivalent specialist sits alongside. Most mainstream commercial desks decline forecourts outright; Together and a small number of structured-lending desks engage. Typical LTV 55 to 65% reflecting the contamination-recovery risk.",
        "Worked example: an MOT and used-car sales lot in Cowley, OX4, £825K freehold purchase, full-trading EBITDA £135K, clean Phase I report, sitting on the supply-chain spine of the BMW Plant. Together placed at 65% LTV, 8.95% pa on a 5-year fix, 18-year term, EBITDA cover 1.65x. Worked example two: an independent petrol forecourt with adjacent convenience retail on the Botley Road A34 corridor, £1.75M, EBITDA £230K. Phase II clean. Placed via Together at 60% LTV, 9.25% pa, 15-year term. Common Oxford locations: the Cowley estates adjacent to the BMW Plant carry the deepest mechanic and MOT trade, Botley Road holds forecourt and trade-counter automotive, Headington outer and the Marston / Cherwell DC market towns hold independent forecourt stock.",
      ],
    },
    schemeTypes: {
      h2: "MOT, garage and petrol assets we fund",
      items: [
        { label: "MOT testing centre", detail: "VOSA-approved testing premises, owner-occupier most common. Existing VOSA approval taken as evidence of operational continuity." },
        { label: "Vehicle workshop and mechanic", detail: "General automotive workshops and servicing premises. Cleaner environmental profile than body shops or forecourts. BMW Plant supply-chain cluster in Cowley dominant." },
        { label: "Body shop and panel beating", detail: "Crash repair and panel beating premises. Solvent and paint storage history makes Phase I assessment standard, Phase II often required." },
        { label: "Petrol forecourt", detail: "Independent petrol stations. Phase II contamination assessment, tank integrity report and 4 to 6 week environmental timeline standard. Botley Road and outer-Oxford locations." },
        { label: "Tyre and exhaust centre", detail: "Quick-fit format independent operators. Cleaner environmental profile; closer to mainstream owner-occupier pricing." },
        { label: "Used-car sales lot", detail: "Vehicle sales premises, specialist underwriting on stock turnover, sales mix and EBITDA. MOT plus used-car combined sites common." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Oxford MOT, garage and petrol",
      intro:
        "Predominantly trading-business mortgage on owner-operator EBITDA. Specialist underwriting steps add 2 to 4 weeks versus mainstream commercial; environmental due diligence is the critical-path item on petrol and most body shops.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Owner-operator MOT, garage, body shop, used-car lot, EBITDA, VOSA and environmental status underwritten." },
        { product: "Owner-occupier commercial mortgage", applicability: "Where the trading covenant is exceptionally strong and bricks-and-mortar value supports the LTV, workshop premises with no environmental flag and a 5-year-plus track record." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition where environmental remediation is needed before stable trading; exit onto term once Phase II clearance issued." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing MOT or forecourt freehold." },
      ],
    },
    oxfordContext: {
      h2: "The Oxford garage and forecourt market",
      body: 'Cowley\'s BMW Plant Oxford supports a deep automotive supply-chain cluster on the surrounding estates, the plant\'s approximately 4,500 staff drive direct demand and the wider supplier base supports MOT, workshop, parts and body-shop operators across OX4. Botley Road heading north-west towards the A34 carries the principal forecourt and trade-counter automotive stock, plus a string of mechanic and tyre operators serving the A34 corridor. Headington outer (London Road, Marston Road) holds neighbourhood independent garage stock. Cherwell DC market towns (Kidlington, Bicester) carry the bulk of the outer-Oxford independent forecourt stock; the EG Group, BP and Shell corporate sites do not route through the broker market. The market for independent operators buying their site freehold is steady; we work most often in the £400K to £1.5M bracket.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Oxford MOT, garage and forecourt",
      body: '<strong>Together</strong> dominates the Oxford garage and MOT mortgage market, they accept environmental risk that most lenders will not, hold a deep Thames Valley automotive book and have specialist underwriters who know the sector well. Pricing 8.5 to 9.5% pa at 60 to 70% LTV. <strong>Cynergy Bank</strong> takes selective cases on cleaner sites without environmental history. <strong>Shawbrook</strong> covers workshop premises without fuel storage risk at 7.5 to 8.5% pa. Allica Bank\'s specialist desk engages on the mid-market end. Petrol forecourt, Together plus a small number of structured-lending desks; LTV typically 55 to 65% reflecting contamination risk and longer environmental timeline. High-street commercial desks (NatWest, Lloyds, Barclays) decline the sector as a class.',
    },
    faqs: [
      {
        question: "Do I need VOSA approval to fund an MOT centre?",
        answer: "Existing VOSA approval helps materially, lenders take it as evidence of operational continuity and reduce key-person risk. New VOSA applications can fund at tighter terms if the operator has a strong personal track record (typically 5+ years as a tester or workshop manager). Centres with VOSA suspended or revoked typically cannot fund until the approval is reinstated.",
      },
      {
        question: "What environmental due diligence is needed for a petrol forecourt?",
        answer: "Phase I contamination assessment as standard (desktop review of historical use). Phase II (intrusive ground investigation including soil sampling and groundwater monitoring) typically required for fuel stations. Tank integrity report from a VPS or equivalent specialist. Total cost £8 to £15K, total timeline 4 to 6 weeks. The Phase II report drives the lender's view on residual environmental liability, a clean report unlocks the keenest available pricing.",
      },
      {
        question: "Can a body shop fund without environmental issues flagged?",
        answer: "Most body shops have legacy solvent and paint storage on site. A clean Phase I will be required; if anything flags, Phase II steps in. Together has the strongest body-shop appetite of any UK lender, they will engage on cases with limited contamination provided remediation is feasible. Body shops with active environmental enforcement notices effectively cannot fund until the notice is discharged.",
      },
      {
        question: "What term length on an MOT garage commercial mortgage?",
        answer: "Typically 15 to 20 years. Shorter than mainstream owner-occupier (20 to 25 years) reflecting the specialist asset and the operational risk inherent in single-key-person automotive businesses. Lenders rarely write 25-year terms in the sector because business succession is harder than in mainstream owner-occupier sectors.",
      },
      {
        question: "Used-car sales lot, pure trading or part-property deal?",
        answer: "Treated as part-property, part-trading. The bricks-and-mortar value of the site (forecourt, office, workshop) underwrites the security. The trading EBITDA underwrites the cover test. Combined MOT-plus-used-car sites are common in Cowley and often fund cleaner than pure used-car because the MOT revenue smooths the volatility of vehicle sales.",
      },
    ],
  },

  // Nursery / school
  "nursery-school": {
    slug: "nursery-school",
    name: "Nursery & School",
    metaTitle: "Nursery Commercial Mortgages Oxford | Summertown, Marston, North Oxford",
    metaDescription:
      "Specialist commercial mortgage finance for day nurseries, pre-schools and independent schools in Oxford. Summertown, Marston, North Oxford suburbs. Ofsted-led underwriting, registered capacity and occupancy economics. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
    hero: {
      eyebrow: "Nursery & school",
      h1: "Day Nursery and School Mortgages Oxford",
      lede:
        "Trading-business commercial mortgages for day nurseries, pre-schools and small independent schools across Oxford. Ofsted rating drives lender appetite; registered capacity, occupancy and fee mix feed the underwrite. Active in Summertown, Marston and the North Oxford suburbs. LTVs 60 to 70%, mid-2026 rates 7.5 to 9.0% pa.",
      metrics: [
        { label: "LTV", value: "60 to 70%" },
        { label: "Cover test", value: "EBITDA 1.5 to 2.0x" },
        { label: "Rate range", value: "7.5 to 9.0% pa" },
        { label: "Facility", value: "£500K to £5M" },
      ],
    },
    overview: {
      h2: "Underwriting an Oxford nursery commercial mortgage",
      body: [
        "Day nurseries are a stable, well-regulated trading-business asset class, and one where lender comfort has grown materially since the early-2020s sector consolidation. Underwriting tests four variables. <strong>Ofsted rating</strong> (Outstanding, Good, Requires Improvement, Inadequate) drives appetite at the threshold; most lenders need Good or Outstanding for standard terms. <strong>Registered capacity</strong> against current occupancy gives lenders comfort on revenue stability. <strong>Fee mix</strong>, private fees versus Free Early Years Education (FEEE) funded places, determines margin profile. <strong>Operator track record</strong> in the sector matters more here than in many other trading classes because nursery turnaround is slow.",
        "<strong>Outstanding</strong> nurseries fund at the keenest end, 65 to 70% LTV, 7.0 to 7.75% pa. <strong>Good</strong> sits at standard pricing, 60 to 70% LTV, 7.75 to 8.75% pa. <strong>Requires Improvement</strong> can still fund but at 50 to 60% LTV, 9.0 to 9.5% pa, with a credible Ofsted remediation plan and typically a 12-month trading history showing improvement trajectory. <strong>Inadequate</strong> is generally unfundable on mainstream desks until the rating recovers, typically a six-to-twelve-month process under the Ofsted re-inspection cycle.",
        "Active Oxford nursery clusters: Summertown (OX2) on the back of the affluent North Oxford catchment, Marston (OX3) serving the John Radcliffe Hospital workforce and the surrounding professional families, and the North Oxford suburbs more broadly, wherever there is a dual-income professional catchment driving fee-paying day-care demand. Multi-site operators consolidating their portfolio into a single facility route through portfolio refinance with a sector-specialist lender on the desk. Worked example: a 62-place Summertown day nursery, Ofsted Good, £1.95M valuation, 90% occupancy, EBITDA £225K. <strong>Shawbrook</strong> placed at 65% LTV, 7.85% pa on a 5-year fix, 25-year term. Worked example two: a Marston-and-Summertown two-site nursery group, £2.4M aggregate valuation, EBITDA £310K aggregate. Routed via portfolio refinance with Cambridge & Counties at 60% LTV, 8.55% pa.",
        "Independent schools are a smaller, more specialist niche, particularly relevant in Oxford given Oxford High School and the wider independent-school footprint across North Oxford and the surrounding county. Lender pool narrower; underwriting includes <strong>pupil roll trend</strong>, <strong>fee structure</strong> (annual fees, charitable status implications) and <strong>ISI inspection grade</strong>. Pricing wider than nursery, typically 6.5 to 8.5% pa. Cambridge & Counties, Reliance Bank and Hampshire Trust are the realistic desks for £1M to £5M independent school freehold deals.",
      ],
    },
    schemeTypes: {
      h2: "Nursery and school assets we fund",
      items: [
        { label: "Single-site day nursery", detail: "Owner-operator nursery freehold purchase or refinance. Most common deal type, Summertown, Marston and North Oxford catchments." },
        { label: "Multi-site nursery group", detail: "2 to 10 sites consolidated into a single portfolio facility. Aggregated EBITDA cover, blanket-charge structure common." },
        { label: "Pre-school and playgroup", detail: "Smaller-cap registered pre-school premises; often community-anchored, charitable structures common." },
        { label: "Independent primary or prep school", detail: "Specialist underwriting; pupil roll trend and ISI inspection grade material. Cambridge & Counties, Reliance Bank, Hampshire Trust most active." },
        { label: "Special educational needs (SEN) provision", detail: "Specialist SEN settings; lender pool narrower but appetite present where local-authority contracts underpin revenue." },
        { label: "Forest school and outdoor nursery", detail: "Niche subset; specialist desks engage where the operator has a Good Ofsted and 18+ months trading." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Oxford nursery and school",
      intro:
        "Trading-business mortgage is the primary route. Multi-site groups route through portfolio refinance with a sector-specialist desk. Larger independent schools may route through structured commercial debt where the facility size justifies it.",
      structures: [
        { product: "Trading-business mortgage", applicability: "Single-site owner-operator nursery or school, EBITDA, Ofsted and capacity underwritten." },
        { product: "Portfolio refinance", applicability: "Multi-site nursery groups, aggregated facility across 2+ sites with blanket-charge structure." },
        { product: "Owner-occupier commercial mortgage", applicability: "Where the trading is mature and the lender treats the case as standard owner-occupier on EBITDA cover, Ofsted Good or better, 3+ years trading." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise for refurbishment, capacity expansion or onward acquisition." },
      ],
    },
    oxfordContext: {
      h2: "The Oxford nursery and school market",
      body: 'Oxford carries one of the deepest day-care markets per head of population in regional England, driven by approximately 165,000 city population (and approximately 245,000 metro), and an unusually large dual-income professional catchment anchored by the University of Oxford, Oxford Brookes, Oxford University Hospitals NHS Trust and Oxford Science Park / Begbroke / Harwell occupiers. Active clusters in Summertown (OX2) on Banbury Road, Marston (OX3) serving the John Radcliffe halo, and the wider North Oxford suburbs. The recent planning case at Oxford High School, Belbroughton Road (OX2 6XA, application 26/00988/FUL) for a single-storey outbuilding is a typical North Oxford private-school estate activity. Independent schools cluster in the North Oxford suburbs and in the wider county (Abingdon, Magdalen College School in OX1). Outer Oxford and Cherwell DC market towns hold pre-school and playgroup premises that fund routinely through trading-business mortgage.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Oxford nursery and school",
      body: 'Aldermore, <strong>Shawbrook</strong>, Cambridge & Counties and Allica Bank all have meaningful nursery appetite. Mid-2026 pricing 7.5 to 8.75% pa at 60 to 70% LTV. Hampshire Trust Bank covers larger multi-site groups (5+ sites, £3M+ aggregate facility). SEN provision narrower, Shawbrook and specialist desks. Independent school pool narrower still, typically Cambridge & Counties, Reliance Bank and Hampshire Trust at 6.5 to 8.5% pa. High-street commercial desks (NatWest, Lloyds, Barclays) rarely engage with single-site owner-operator nursery; they will look at let nursery investment where a multi-site operator takes a long FRI lease on the building.',
    },
    faqs: [
      {
        question: "What Ofsted rating do nursery commercial mortgage lenders need?",
        answer: "<strong>Good</strong> or <strong>Outstanding</strong> for standard terms (60 to 70% LTV, 7.5 to 8.75% pa). <strong>Requires Improvement</strong> can fund at 50 to 60% LTV and 9.0 to 9.5% pa with a clear written remediation plan and typically a 12-month trading history showing improvement. <strong>Inadequate</strong> is generally unfundable on mainstream desks until the rating recovers, usually six to twelve months under the Ofsted re-inspection cycle.",
      },
      {
        question: "Can I fund a multi-site nursery group?",
        answer: 'Yes, typically through <a href="/services/portfolio-refinance">portfolio refinance</a>. Aggregated ICR and EBITDA cover across the sites; blanket-charge or aggregated facility structure. Specialist desks like Cambridge & Counties, Aldermore and Hampshire Trust are most active. We have placed 2-site, 4-site and 7-site nursery group facilities through this route across the Thames Valley.',
      },
      {
        question: "What occupancy do nursery lenders need?",
        answer: "Mature nurseries trade at 80%+ occupancy on registered capacity; lenders look for sustained occupancy at this level over the last 12 to 24 months. Underutilised nurseries (sub-65% occupancy) need a credible plan, capacity reduction, fee rebalancing or operator change, to fund. New nurseries with no trading record route through bridge-to-let plus term-out, with the term-out conditional on hitting agreed occupancy milestones.",
      },
      {
        question: "Independent school, different lender pool to nursery?",
        answer: "Yes, narrower and more specialist. Pupil roll trend over 3 to 5 years, ISI inspection grade, fee structure and charitable status are all material. Cambridge & Counties, Reliance Bank and Hampshire Trust are the most active desks. Mid-2026 pricing 6.5 to 8.5% pa at 60 to 65% LTV. Larger independents (£5M+ facility) may route through structured commercial debt outside the broker panel.",
      },
      {
        question: "How is FEEE funding treated by lenders?",
        answer: "Free Early Years Education (FEEE / 30-hours funded) is treated as government-backed revenue, strong covenant equivalent, but at a margin profile materially below private fees. Lenders read the fee mix carefully. Nurseries with 60%+ private fees price at the keener end; FEEE-dominant nurseries (75%+ funded) sit wider because the margin is structurally compressed and capacity to absorb cost increases is tighter. Summertown and North Oxford nurseries typically run with stronger private-fee weighting than the city average.",
      },
    ],
  },

  // Mixed-use
  "mixed-use": {
    slug: "mixed-use",
    name: "Mixed-Use",
    metaTitle: "Mixed-Use Commercial Mortgages Oxford | Cornmarket, Cowley Road, Walton Street",
    metaDescription:
      "Mixed-use commercial mortgage finance in Oxford, predominantly-commercial blocks with residential element, retail-plus-residential, office-plus-residential. Cornmarket listed conversions, Cowley Road, Walton Street Jericho, Magdalen Road. LTVs to 75%, mid-2026 rates 6.5 to 8.5% pa.",
    hero: {
      eyebrow: "Mixed-use",
      h1: "Mixed-Use Commercial Mortgages Oxford",
      lede:
        "Single-facility commercial mortgages for predominantly-commercial mixed-use property, retail with residential, office with residential, leisure with operator residential. Lender appetite varies dramatically with the residential proportion; we know which lender writes which split. Active across Cornmarket listed conversions, Cowley Road, Walton Street Jericho and Magdalen Road. LTVs to 75%, mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "65 to 75%" },
        { label: "Cover test", value: "Blended ICR 140 to 155%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£250K to £10M" },
      ],
    },
    overview: {
      h2: "Underwriting an Oxford mixed-use commercial mortgage",
      body: [
        "Mixed-use covers any single asset combining commercial and residential tenure, from the classic shop-with-flat archetype (covered separately on our <a href=\"/property-types/semi-commercial\">semi-commercial commercial mortgage page</a>) up to large mixed-use development blocks with ground-floor retail and 20+ apartments above. Lender appetite varies dramatically with the <strong>residential proportion by floorspace and by income</strong>. <strong>Predominantly-commercial</strong> (under 40% residential by floorspace) is treated as commercial investment with a residential overlay, ICR-tested, mainstream commercial desks engage. <strong>Predominantly-residential</strong> (60%+ residential) prices closer to specialist BTL or semi-commercial pricing.",
        "The classic shop-plus-flat archetype is well-served and routes through the dedicated semi-commercial product where the residential element is 40%+. Larger mixed-use blocks (10+ apartments plus ground-floor commercial) require a different lender pool, <strong>Shawbrook</strong>, Cambridge & Counties and OakNorth on the larger end, with mainstream high-street active where the building is well-tenanted across both elements. Heritage and listed mixed-use, particularly the Cornmarket and High Street listed-building conversion stock, routes through heritage-comfortable lenders only.",
        "Worked example: a Walton Street Jericho mixed-use block, ground-floor retail let to a national coffee chain on a 10-year FRI, six apartments above let on ASTs at market rents, £2.6M valuation. Predominantly-commercial mix (55% commercial by floorspace, 65% commercial by income). <strong>NatWest</strong> placed at 70% LTV, 6.85% pa on a 5-year fix, 25-year term, blended ICR 145%. Worked example two: a Cowley Road mixed-use block, ground-floor restaurant on a 5-year lease, four apartments above on ASTs, £1.5M. Tighter cover; placed via <strong>InterBay Commercial</strong> at 70% LTV, 7.55% pa.",
        'A recent change-of-use case at Cornmarket / High Street area, central Oxford listed-building conversion for refurbishment plus change-of-use to hotel (C1) with retained ground-floor retail and bank (registered 31/03/2026), is a typical Oxford mixed-use refinance candidate post-stabilisation. The Cowley Road retail-to-takeaway consent at 146 Oxford Road (OX4 2EA, application 26/01030/FUL) is a classic OX4 mixed-use refinance candidate the moment the new lease completes.',
      ],
    },
    schemeTypes: {
      h2: "Mixed-use assets we fund",
      items: [
        { label: "Shop-plus-flat-above", detail: "Classic semi-commercial archetype, 40%+ residential by floorspace. See dedicated semi-commercial page for product mechanics." },
        { label: "Retail plus multi-flat block", detail: "Ground-floor retail with 4 to 10 apartments above; mid-cap commercial investment with blended income test." },
        { label: "Office plus residential block", detail: "Ground or first-floor office with apartments above; CBD-fringe schemes and converted heritage buildings." },
        { label: "Pub plus operator flat", detail: "Pub or restaurant with operator residential above; semi-commercial overlap or trading-business depending on operator structure." },
        { label: "Listed-building mixed-use conversion", detail: "Heritage building converted to mixed-use under change-of-use consent (often Class E to mixed C3+E or C1+E). Cornmarket and central Oxford stock." },
        { label: "Large mixed-use blocks", detail: "10+ apartments plus commercial; portfolio-style underwrite, larger lender pool engagement, structured-debt territory above £8M." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Oxford mixed-use",
      intro:
        "Single-facility commercial investment mortgage is the primary route. Where the residential element exceeds 40% by floorspace, the deal qualifies for semi-commercial pricing. Bridge-to-let funds vacant or value-add mixed-use acquisition with refurbishment and re-letting before stabilisation.",
      structures: standardStructures,
    },
    oxfordContext: {
      h2: "The Oxford mixed-use estate",
      body: 'Oxford has an extensive mixed-use stock distributed across the city, reflecting centuries of layered urban development on a planning-tight footprint. Heritage and listed mixed-use in the central Cornmarket / High Street / Broad Street area, much of it Grade II listed, with retail or hospitality on the ground floor and conversion residential or hotel use above. Modern mixed-use along Cowley Road and Walton Street, Victorian high-street parade stock retained as shop-plus-flat or shop-plus-multi-flat. Newer mixed-use in the Templars Square redevelopment fringe and around the Westgate Oxford scheme. Magdalen Road East Oxford carries newer-cycle mixed-use as the area has gentrified through the 2020s. The change-of-use planning pipeline, central-Oxford retail-to-hotel conversions, Cowley Road retail-to-takeaway, Cornmarket upper-floor capsule-hotel conversions, is creating new mixed-use stock continually.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Oxford mixed-use",
      body: 'Strong across most mixed-use sub-types in mid-2026. <strong>InterBay Commercial</strong> (OSB Group), Together, Aldermore, YBS Commercial and HTB dominate small-to-mid mixed-use at 7.5 to 8.5% pa, 65 to 75% LTV. <strong>Shawbrook</strong>, Cambridge & Counties and OakNorth on larger blocks at 7.75 to 8.5% pa. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on the largest, well-tenanted predominantly-commercial mixed-use blocks at 7.0 to 7.75% pa. Predominantly-residential mixed-use routes more naturally through InterBay Commercial and the specialist semi-commercial pool. Heritage and listed mixed-use, particularly the central Oxford Cornmarket and High Street stock, needs heritage-comfortable lenders, Shawbrook, Cambridge & Counties and Together engage where the conservation cost is reasonable.',
    },
    faqs: [
      {
        question: "What residential / commercial split qualifies as mixed-use?",
        answer: "Anything with both commercial and residential income. Where residential is 40%+ by floorspace, semi-commercial pricing typically applies. Below 40%, treated as commercial investment with a residential overlay. The income mix matters as much as the floorspace mix, a building that is 45% residential by floorspace but 65% residential by income is priced as predominantly-residential.",
      },
      {
        question: "Can I get 75% LTV on an Oxford mixed-use block?",
        answer: "Yes on classic shop-plus-flat semi-commercial archetypes via InterBay Commercial or Together. Larger mixed-use blocks (10+ apartments plus commercial) typically cap at 70% LTV. Predominantly-commercial mixed-use with strong covenants on the commercial element can stretch to 75% with NatWest, Lloyds or Barclays. Vacant or part-let mixed-use caps at 60 to 65% via bridge-to-let.",
      },
      {
        question: "How are mixed-use assets valued for lending?",
        answer: "RICS Red Book valuation splits commercial value, residential value and total. Both ICR (commercial rent against interest) and AST income (residential rent against interest) feed into the blended affordability test. Some lenders use the lower of the two cover ratios; others blend by floorspace weighting. The valuation methodology can swing the loan size by 5 to 10%, we benchmark across multiple lenders to find the one whose methodology fits the asset best.",
      },
      {
        question: "What about listed and heritage mixed-use on Cornmarket?",
        answer: "Listed-building mixed-use (central Oxford Cornmarket and High Street stock, Town Hall-adjacent heritage offices) routes through heritage-comfortable lenders, Shawbrook, Cambridge & Counties, Together. Slightly tighter LTV (typically 65% rather than 70%); otherwise comparable terms to non-listed mixed-use. The lender's quantity surveyor will scrutinise ongoing maintenance liability and any listed-building consent implications.",
      },
      {
        question: "Mixed-use bridge-to-let, viable strategy?",
        answer: 'Yes. A bridge funds acquisition plus refurbishment plus re-letting (commercial and residential both), with term-out onto mixed-use commercial mortgage at 12 to 24 months once both elements are stabilised. <a href="/services/commercial-bridge-to-let">Bridge-to-let</a> rates 8.5 to 9.5% pa for the bridge leg; term-out into 7.5 to 8.5% pa once stabilised. We model both legs at outset. Central-Oxford retail-to-hotel conversions registered through 2026 are typical candidates for this strategy.',
      },
    ],
  },

  // Semi-commercial
  "semi-commercial": {
    slug: "semi-commercial",
    name: "Semi-Commercial",
    metaTitle: "Semi-Commercial Mortgages Oxford | Cowley Road, Walton Street, Summertown",
    metaDescription:
      "Semi-commercial commercial mortgage finance in Oxford, shop-with-flat-above and other 40%+ residential mixed assets. Cowley Road, Walton Street, Banbury Road Summertown, Magdalen Road. Up to 75% LTV. We arrange the unregulated cases (let residential) and refer owner-occupied flat cases to a regulated broker. InterBay Commercial, Together, Shawbrook.",
    hero: {
      eyebrow: "Semi-commercial",
      h1: "Semi-Commercial Mortgages Oxford",
      lede:
        "Single-facility commercial mortgages for the shop-with-flat-above archetype and other residential-commercial mixed assets where residential floorspace is 40%+. Up to 75% LTV. Blended ICR around 145%. Mid-2026 rates 6.5 to 8.5% pa. We arrange the unregulated cases (let residential element); cases where the borrower or family member occupies the flat fall under the FCA's regulated mortgage perimeter and we refer those out to a regulated broker.",
      metrics: [
        { label: "LTV", value: "70 to 75%" },
        { label: "Cover test", value: "Blended ICR 140 to 150%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£150K to £2M" },
      ],
    },
    overview: {
      h2: "Underwriting an Oxford semi-commercial commercial mortgage",
      body: [
        "Semi-commercial is the term for commercial mortgages on mixed-use property where the residential element is at least 40% of total floorspace, typically the classic <strong>shop-with-flat-above</strong> archetype that defines Oxford's suburban high streets and the Cowley Road / Walton Street / Magdalen Road independent spines. The product gives lenders comfort from the residential security (easier to re-let an empty flat than an empty retail unit), so semi-commercial routinely prices 50 to 100bps inside pure commercial investment on the same building.",
        "There is one structural complication every borrower must understand. Commercial mortgages are <strong>unregulated</strong> by definition and fall outside the FCA's regulated mortgage perimeter, which is what we arrange. <strong>If the borrower or an immediate family member personally occupies the residential element</strong>, the deal moves inside the regulated mortgage perimeter and stops being a commercial mortgage. We do not hold FCA authorisation because the products we arrange are unregulated, so where a deal falls into regulated territory we refer it to a regulated mortgage broker partner. We flag this at outset rather than discover it three weeks into legals. The classic case: the independent retailer who buys the freehold of their Cowley Road shop and lives in the flat above sits inside the regulated perimeter; the same building bought as an investment with the flat let on an AST sits inside our unregulated commercial scope.",
        "Active Oxford semi-commercial spines: <strong>Cowley Road (OX4)</strong> running the length of East Oxford between the Plain and Cowley centre, <strong>Walton Street and Jericho (OX2)</strong> Victorian shop-plus-flat stock close to the publishing and university cluster, <strong>Banbury Road in Summertown (OX2)</strong> serving the affluent North Oxford parade, and <strong>Magdalen Road (OX4)</strong> as the newer-cycle East Oxford independent spine. Most semi-commercial deals are £200K to £900K facility size. Worked example: a Cowley Road shop with two flats above, £525K valuation, retail let on a 10-year FRI to a national coffee covenant, both flats let on ASTs (unregulated, in our scope). <strong>InterBay Commercial</strong> placed at 75% LTV, 6.95% pa on a 5-year fix, 25-year term, blended ICR 148%. Worked example two: a Banbury Road Summertown shop-plus-three-flats with all flats let on ASTs to arms-length tenants, £695K, placed via Together at 70% LTV, 8.25% pa, blended ICR 145%.",
        "See our <a href=\"/services/semi-commercial-mortgage\">dedicated semi-commercial service page</a> for the product mechanics in detail. For purely residential blocks above commercial, see <a href=\"/property-types/hmo-block\">HMO blocks</a>; for predominantly-commercial buildings with smaller residential elements, see <a href=\"/property-types/mixed-use\">mixed-use</a>.",
      ],
    },
    schemeTypes: {
      h2: "Semi-commercial assets we fund",
      items: [
        { label: "Shop with one or two flats above", detail: "Classic Oxford high-street archetype. Cowley Road OX4, Walton Street OX2, Banbury Road Summertown OX2, Magdalen Road OX4 spines." },
        { label: "Restaurant or pub with operator flat (let)", detail: "Operator flat above licensed-trade premises let on AST. Sits as unregulated commercial. Owner-occupied flat cases fall outside our scope, referred to a regulated broker." },
        { label: "Office with residential conversion above", detail: "Office at ground or first floor with residential floors above (post-Class E to mixed change-of-use)." },
        { label: "Vacant semi-commercial acquisition", detail: "Bridge-to-let funded acquisition with refurbishment and re-letting both elements before term-out." },
        { label: "Multi-flat above commercial", detail: "Larger semi-commercial blocks with 3 to 5 flats above ground-floor retail. Specialist underwriting on blended ICR." },
        { label: "Heritage and Victorian conversions", detail: "Listed-building semi-commercial; heritage-comfortable lenders only. Walton Street Jericho, central Oxford parades." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Oxford semi-commercial",
      intro:
        "Single-facility semi-commercial commercial mortgage is the primary route on unregulated cases (residential element let on AST or to a limited-company tenant). Bridge-to-let funds vacant acquisition with agreed exit onto term semi-commercial. Cases where the borrower or family member will occupy the residential element fall outside the unregulated commercial scope, we refer those to a regulated mortgage broker partner.",
      structures: standardStructures,
    },
    oxfordContext: {
      h2: "The Oxford semi-commercial estate",
      body: 'A deep, active product across Oxford. The classic suburban high streets, Cowley Road OX4, Walton Street OX2 Jericho, Banbury Road Summertown OX2 and Magdalen Road OX4, all run on shop-plus-flat-above stock dating from the 1860s through the 1930s. Cherwell DC market towns (Kidlington, Bicester) and the wider county add further depth. Recent change-of-use activity along Cowley Road (the 146 Oxford Road retail-to-takeaway consent) is creating new semi-commercial profiles as upper floors are retained or converted to flats. The semi-commercial market trades steadily, these assets rarely sit vacant for long because the residential element is intrinsically lettable given the Oxford housing stock pressure.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Oxford semi-commercial",
      body: 'Strong on the unregulated cases we arrange. <strong>InterBay Commercial</strong> (OSB Group) is the most active named lender on the Oxford shop-plus-flat archetype, typical 7.5 to 8.25% pa at 70 to 75% LTV. Together covers more challenged cases (vacant flat at acquisition, weaker commercial covenant) at 8.25 to 9.0% pa. <strong>Shawbrook</strong>, Aldermore, YBS Commercial, HTB and Cambridge & Counties all have meaningful semi-commercial appetite on let residential cases. Each has a distinct LTV / minimum-loan / covenant profile, we know which fits what. Cases that fall inside the regulated mortgage perimeter (owner-occupied residential element) are out of scope for us and we refer those to a regulated broker.',
    },
    faqs: [
      {
        question: "What floorspace split qualifies as semi-commercial?",
        answer: "Residential typically <strong>40%+ by floorspace</strong>. Below that threshold, the deal is treated as pure commercial investment with wider pricing, sometimes 50 to 100bps wider. The split is measured by gross internal floor area; lenders' valuers calculate this from the RICS Red Book report, not from headline marketing particulars.",
      },
      {
        question: "What rate can I expect on an Oxford semi-commercial mortgage?",
        answer: "Currently <strong>6.5 to 8.5% pa</strong> at 65 to 75% LTV on standard shop-plus-flat. Specialists like InterBay Commercial and Together quote competitively to 75% LTV. Strong-covenant retail with an established AST history on the residential element prices at the keener end; vacant residential or short-lease commercial pulls pricing wider.",
      },
      {
        question: "Is semi-commercial regulated by the FCA?",
        answer: "Commercial mortgages are <strong>unregulated</strong> by definition and fall outside the FCA's regulated mortgage perimeter, and that is the territory we operate in. We do not hold FCA authorisation because the products we arrange are unregulated. Critical exception for semi-commercial: where the borrower or an immediate family member personally occupies one of the flats, the deal moves <strong>inside</strong> the regulated mortgage perimeter and is no longer in our scope. We refer those cases out to a regulated mortgage broker partner. Limited-company borrower with arms-length AST tenancies on the flat sits unregulated and is in our scope.",
      },
      {
        question: "What about HMOs above retail?",
        answer: 'HMO blocks above commercial route through a slightly different lender pool, see our <a href="/property-types/hmo-block">HMO block commercial mortgage page</a>. OX4 carries the densest student HMO stock in Oxford on the back of the University of Oxford and Oxford Brookes catchments, and Article 4 considerations affect HMO conversion economics. The product mechanics differ from standard semi-commercial, room-by-room ICR rather than blended building ICR, and a narrower lender pool.',
      },
      {
        question: "Can I refinance a semi-commercial onto buy-to-let?",
        answer: "No, buy-to-let products are sized against single residential dwellings let to AST tenants, not against commercial-plus-residential mixed assets. The semi-commercial route stays semi-commercial through any refinance. The exception is where the commercial element has been formally split off (separate title, separate access, separate utilities), at which point each element can be financed separately.",
      },
    ],
  },

  // HMO block
  "hmo-block": {
    slug: "hmo-block",
    name: "HMO Block",
    metaTitle: "HMO Mortgages Oxford | East Oxford OX4, Cowley Road, Iffley Road Student Belt",
    metaDescription:
      "Commercial mortgage finance for HMO blocks (5+ rooms) in Oxford, East Oxford OX4 student belt around Cowley Road and Iffley Road. University of Oxford and Oxford Brookes student demand. Specialist HMO lender panel including Together, InterBay Commercial, LendInvest. LTVs to 75%.",
    hero: {
      eyebrow: "HMO block",
      h1: "HMO Block Mortgages Oxford",
      lede:
        "Specialist commercial mortgages for licensed HMO blocks of five rooms or more, student-let and professional-let. LTVs to 75%, blended ICR 140 to 160%. OX4 East Oxford student belt around Cowley Road and Iffley Road carries the densest stock, anchored by approximately 24,000 University of Oxford students plus approximately 17,000 Oxford Brookes students. Mid-2026 rates 6.5 to 8.5% pa.",
      metrics: [
        { label: "LTV", value: "Up to 75%" },
        { label: "Cover test", value: "ICR 140 to 160%" },
        { label: "Rate range", value: "6.5 to 8.5% pa" },
        { label: "Facility", value: "£250K to £3M" },
      ],
    },
    overview: {
      h2: "Underwriting an Oxford HMO commercial mortgage",
      body: [
        "HMO blocks of five or more rooms route through commercial mortgage rather than mainstream buy-to-let. Underwriting is room-by-room, <strong>licensed HMO status</strong>, rent per room, occupancy, total rent against blended ICR. Most lenders cap loan at the lower of (LTV multiplied by value) or (ICR multiplied by rent divided by stress rate). LTVs of 75% are achievable on strongly-let HMO blocks with established occupancy and a clean licensing record.",
        "Oxford is one of the densest student HMO markets in the United Kingdom, driven by approximately 24,000 University of Oxford students plus approximately 17,000 Oxford Brookes students, the combined catchment generates persistent demand for shared-house accommodation, particularly in <strong>East Oxford (OX4)</strong> along the <strong>Cowley Road and Iffley Road</strong> spine. OX4 carries the largest student HMO concentration in the city, with secondary clusters in the surrounding Cowley, Florence Park and South Park streets. Outside the student belt, professional HMOs concentrate in the inner OX4 streets and into outer Cowley, with rents typically 25 to 35% above student rates per room but lower headline occupancy.",
        "The structural feature every HMO buyer must understand is the <strong>Article 4 direction</strong>. Oxford City Council operates an Article 4 direction across much of the OX4 student belt, removing permitted-development rights for converting C3 (single dwelling) to C4 (small HMO). Inside the Article 4 areas, any new conversion needs full planning permission, and the council's saturation policy makes new HMO consents extremely rare. Existing licensed HMOs trade and refinance freely. The supply restriction has supported HMO valuations materially over the past decade; OX4 student HMOs trade at a clear premium to equivalent stock outside Article 4 areas. Multiple C3 to C4 HMO change-of-use applications continue to appear on Oxford City Council's planning register through 2026, reflecting the persistent attempt to grow the licensed pool inside a tight planning regime.",
        "Worked example: a 6-bed OX4 student HMO off Cowley Road, £625K valuation, £44,500 gross annual rent, 95% historical occupancy, all-inclusive let. <strong>InterBay Commercial</strong> placed at 75% LTV, 6.85% pa on a 5-year fix, blended ICR 148%. Worked example two: a 4-property OX4 professional HMO portfolio across Cowley and Iffley Road area, £2.3M aggregate, £156K aggregate rent, mixed AST and per-room let. Routed via portfolio refinance with <strong>LendInvest</strong> at 70% LTV, 7.25% pa, aggregated DSCR.",
      ],
    },
    schemeTypes: {
      h2: "HMO block assets we fund",
      items: [
        { label: "Student HMO (5 to 8 rooms)", detail: "OX4 East Oxford student spine, Cowley Road and Iffley Road area, surrounding Florence Park and South Park streets. All-inclusive let typical, 90%+ occupancy norm." },
        { label: "Professional HMO (5 to 8 rooms)", detail: "Working-tenant HMOs across inner OX4 and outer Cowley. Higher per-room rents, slightly lower occupancy." },
        { label: "Large HMO (8+ rooms)", detail: "Article 4-area larger HMOs and converted Victorian terraces. Specialist lender pool, premium valuations." },
        { label: "Multi-property HMO portfolio", detail: "5+ HMO portfolio refinance via aggregated facility. Blanket-charge structure or property-by-property charges." },
        { label: "HMO conversion finance", detail: "Bridge-to-let funded conversion of houses to HMO under permitted development (outside Article 4) or full planning consent (inside)." },
        { label: "Above-shop HMO", detail: "HMO blocks above retail, semi-commercial / HMO hybrid; specialist underwriting on the combined commercial and residential income." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for Oxford HMO blocks",
      intro:
        "HMO commercial mortgage is the primary route for licensed HMOs of 5+ rooms. Conversion projects route through bridge-to-let. Multi-property HMO portfolios consolidate via portfolio refinance with aggregated DSCR cover.",
      structures: [
        { product: "HMO commercial mortgage", applicability: "Licensed 5+ room HMOs, let to students or professionals on a per-room basis or all-inclusive." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus HMO conversion, with agreed term-out onto HMO mortgage once licensed and let. Article 4 areas need full planning consent first." },
        { product: "Portfolio refinance", applicability: "5+ HMO portfolios consolidated into a single aggregated facility with blanket-charge or property-by-property structure." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise on existing HMO block." },
      ],
    },
    oxfordContext: {
      h2: "The Oxford HMO market",
      body: 'Oxford carries one of the densest student HMO concentrations in the United Kingdom, driven by approximately 24,000 University of Oxford students plus approximately 17,000 Oxford Brookes students. <strong>OX4 East Oxford</strong> is the densest sub-market, the Cowley Road and Iffley Road area is saturated with 5 to 8 bed converted Victorian and Edwardian terraces let to students; the surrounding Cowley, Florence Park and South Park streets round out the spine. Outside the student belt, professional HMO concentrates in inner OX4 and outer Cowley, drawing tenants from the city\'s knowledge-economy employer base. Article 4 directions across the OX4 student belt restrict new HMO conversion, existing licensed HMOs trade at premium values reflecting the supply constraint. Multiple C3-to-C4 change-of-use applications appear on Oxford City Council\'s register through 2026, reflecting persistent demand to grow the licensed pool against a tight planning regime.',
    },
    lenderAppetite: {
      h2: "Lender appetite for Oxford HMO",
      body: 'Strong. <strong>Together</strong>, <strong>InterBay Commercial</strong> (OSB Group), <strong>LendInvest</strong>, Paragon Bank, Foundation Home Loans, Cambridge & Counties and Aldermore all have meaningful HMO appetite. Each has a different room-count threshold (some go 4+, most 5+, some 6+ for premium pricing) and a different stance on student-versus-professional let. Mid-2026 pricing 6.5 to 8.5% pa at 70 to 75% LTV. LTV up to 80% on selective lenders with portfolio history and strong occupancy track record. High-street commercial desks (NatWest, Lloyds, Barclays) typically decline HMO above five rooms; specialist commercial and BTL desks dominate.',
    },
    faqs: [
      {
        question: "What size HMO qualifies for commercial versus BTL pricing?",
        answer: "<strong>5+ rooms</strong> typically qualifies for HMO commercial mortgage. 4-room HMOs route through specialist BTL with HMO product. Above 7 rooms, the lender pool narrows further, Together, InterBay Commercial and LendInvest dominate. Above 10 rooms (large HMO), it becomes a fully specialist sub-segment with its own pricing logic.",
      },
      {
        question: "What about Article 4 in OX4?",
        answer: "Oxford City Council operates an Article 4 direction across much of the OX4 student belt, removing permitted-development rights for converting a single dwelling (C3) to a small HMO (C4). New conversions inside Article 4 need full planning permission, and the council's saturation policy makes new HMO consents extremely rare. Existing licensed HMOs trade and refinance freely; the supply restriction has supported HMO values materially. Most of our OX4 deals are existing licensed stock changing hands or refinancing.",
      },
      {
        question: "Can I fund HMO conversion?",
        answer: 'Yes, via <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. Bridge funds acquisition plus conversion works; term-out onto HMO commercial mortgage once licensed and let. Outside Article 4 areas the conversion can proceed under permitted development; inside Article 4 (OX4 student belt) you need full planning consent first, and our experience is that consents are extremely rare in the saturated student spine.',
      },
      {
        question: "What ICR do HMO commercial mortgage lenders need?",
        answer: "Typically <strong>140 to 155%</strong> on aggregated room rent against interest cost stressed at a notional rate 1 to 2% above pay rate. Strong-occupancy student HMOs in OX4 routinely pass at 145%. All-inclusive student lets sometimes carry a slightly tighter ICR (150 to 160%) because lenders factor in the utility and council tax costs the operator absorbs.",
      },
      {
        question: "Multi-property HMO portfolio, same lenders?",
        answer: 'Largely yes, but the product structure shifts to <a href="/services/portfolio-refinance">portfolio refinance</a>. Aggregated DSCR across the properties (typically 130 to 145%), single facility, blanket charge or property-by-property charges. LendInvest, Paragon Bank, Together and Foundation Home Loans all run active HMO portfolio programmes. 5+ properties is the typical threshold for portfolio pricing. Oxford portfolio refinancing volume has been steady through 2024 to 2026 as student-let economics held up well.',
      },
    ],
  },

  // Holiday-let portfolio
  "holiday-let-portfolio": {
    slug: "holiday-let-portfolio",
    name: "Holiday-Let Portfolio",
    metaTitle: "Holiday-Let Mortgages Oxford | City Centre Apart-Hotels, Cornmarket Tourist Trade",
    metaDescription:
      "Specialist commercial mortgage finance for FHL (furnished holiday let) portfolios and city-centre apart-hotels in Oxford, drawing approximately 7 million annual visitors. Cornmarket and central Oxford tourist trade. LendInvest, Together and specialist FHL desks. LTVs to 70%, mid-2026 rates 7.0 to 9.0% pa.",
    hero: {
      eyebrow: "Holiday-let portfolio",
      h1: "Holiday Let Portfolio Mortgages Oxford",
      lede:
        "Specialist commercial mortgages for FHL (furnished holiday let) portfolios and city-centre apart-hotels across Oxford and the wider Oxfordshire / Cotswolds gateway. Aggregated facility across 3+ properties on occupancy-and-ADR underwriting. Approximately 7 million annual visitors underpins demand. LTVs to 70%, mid-2026 rates 7.0 to 9.0% pa. Mainstream commercial desks largely do not engage, wrong desk first time loses six weeks.",
      metrics: [
        { label: "LTV", value: "Up to 70%" },
        { label: "Cover test", value: "DSCR 130 to 145%" },
        { label: "Rate range", value: "7.0 to 9.0% pa" },
        { label: "Facility", value: "£300K to £3M" },
      ],
    },
    overview: {
      h2: "Underwriting an FHL portfolio commercial mortgage",
      body: [
        "FHL (furnished holiday let) properties qualify for distinct treatment, they are commercially-let assets generating short-stay holiday income rather than long-term residential rent. Lender underwriting tests four variables. <strong>Average occupancy</strong> across the calendar year (sustained 50 to 60%+ is the threshold). <strong>Average daily rate (ADR)</strong> by season. <strong>Seasonality</strong>, strong-season weeks at high ADR matter as much as headline annual figure. <strong>Platform mix</strong>, Airbnb, Booking.com, direct, plus owner-managed versus agent-managed.",
        "Most FHL portfolio lenders need <strong>3+ properties</strong> to consider portfolio-refinance pricing. Single-asset FHL routes through specialist BTL with FHL product (different pool, different logic). Portfolio underwriting tests <strong>aggregated DSCR</strong> at 130 to 145% across all properties, the diversification of income across multiple FHLs gives lenders comfort that one bad season at a single property does not break the portfolio.",
        "Oxford-specific FHL territory has two distinct strands. The first is <strong>city-centre apart-hotels and serviced-apartment portfolios</strong> drawing on Cornmarket tourist trade and the Cornmarket / High Street tourist spine; central-Oxford retail-to-aparthotel conversion applications registered through 2026 typify the pipeline as legacy retail upper floors are repurposed for short-stay accommodation. The second is <strong>rural and gateway FHL stock across Oxfordshire and the Cotswolds fringe</strong>, converted barns, cottages and farmhouses serving the Cotswolds-gateway leisure trade through Burford, Witney and the Chipping Norton axis. Both strands route through the same specialist lender pool; the underwriting differs at the margin on seasonality assumptions.",
        "Worked example: a 4-property FHL portfolio across the Oxfordshire / Cotswolds fringe, three converted cottages and one barn conversion, £1.85M aggregate valuation, £165K aggregate annual gross income, 64% blended occupancy, mixed Airbnb-and-Booking.com let. <strong>LendInvest</strong> placed at 65% LTV, 8.85% pa on a 5-year fix, 25-year term, aggregated DSCR 138%. Worked example two: a 3-property central-Oxford serviced-apartment portfolio in the Cornmarket tourist catchment, £2.4M aggregate, £215K aggregate annual gross income, 72% blended occupancy. Placed via Together at 65% LTV, 8.55% pa, treating the apart-hotel structure as portfolio FHL with operator-management overlay.",
      ],
    },
    schemeTypes: {
      h2: "Holiday-let portfolio assets we fund",
      items: [
        { label: "Single-asset FHL", detail: "Single property let on FHL basis, typically rural or Cotswolds-gateway location. Routes through specialist BTL with FHL product rather than portfolio facility." },
        { label: "FHL portfolio (3+ properties)", detail: "Aggregated portfolio facility for 3+ FHLs in same broad geography. DSCR-led, blanket-charge or property-by-property structure." },
        { label: "City-centre apart-hotel portfolio", detail: "Serviced-apartment portfolios drawing on Cornmarket and central Oxford tourist trade. Operator-management overlay; specialist desks." },
        { label: "B&B and boutique guesthouse", detail: "Operator-owned overnight-stay business; trading-business overlap with leisure category. Operator-occupied B&B routes through trading-business mortgage." },
        { label: "Cotswolds-gateway cottage FHL", detail: "Converted barn, cottage and farmhouse stock on the Cotswolds fringe through Burford, Witney, Chipping Norton axis. Premium ADR, strong seasonality." },
        { label: "Equestrian-to-commercial conversion", detail: "Stable conversion to FHL, niche but active across rural Oxfordshire. Bridge-to-let plus term-out onto FHL portfolio mortgage." },
      ],
    },
    financeStructures: {
      h2: "Finance structures for FHL portfolios",
      intro:
        "FHL commercial mortgage on a portfolio basis is the primary route for 3+ properties. Single-asset FHLs route through specialist BTL or commercial investment. Operator-occupied B&Bs route through trading-business mortgage with operator-residence allowance.",
      structures: [
        { product: "FHL portfolio mortgage", applicability: "3+ FHL properties aggregated under a single facility. DSCR-led at 130 to 145% on blended income." },
        { product: "Trading-business mortgage", applicability: "Operator-occupied B&B or guesthouse, EBITDA, occupancy and ADR underwritten." },
        { product: "Commercial bridge-to-let", applicability: "Acquisition plus refurbishment of property for new FHL use; term-out onto FHL portfolio once stabilised." },
        { product: "Commercial remortgage", applicability: "End-of-fix or capital raise across an established FHL portfolio." },
      ],
    },
    oxfordContext: {
      h2: "The Oxford-fringe FHL market",
      body: 'Two distinct FHL strands drive Oxford commercial mortgage activity. City-centre <strong>apart-hotels and serviced-apartment portfolios</strong> in OX1 draw on Oxford\'s approximately 7 million annual visitors and the Cornmarket / High Street tourist spine. Central-Oxford retail-to-aparthotel conversion applications registered through early 2026 typify the pipeline, legacy retail upper floors repurposed under change-of-use consent for short-stay accommodation, including Cornmarket listed-building conversions and capsule-hotel formats. The second strand is <strong>rural FHL stock across the wider Oxfordshire and Cotswolds fringe</strong>, converted barns, cottages and farmhouses serving the Cotswolds-gateway leisure trade through the Burford, Witney and Chipping Norton axis. Demand drivers: tourism from Oxford, the Cotswolds destination economy, and weekend short-break trade from London and the Thames Valley corporate base. Stock typically 2 to 5 bedroom converted barns, cottages and former farmhouses commanding £150 to £400 per night at peak; central-Oxford serviced apartments command higher ADR on shorter average stays.',
    },
    lenderAppetite: {
      h2: "Lender appetite for FHL portfolios",
      body: '<strong>LendInvest</strong>, Together and Hampshire Trust Bank are the most active specialist FHL portfolio lenders. Cumberland Building Society engages on rural and Cotswolds stock with strong sector knowledge. <strong>Cambridge & Counties</strong> covers larger portfolios (5+ properties, £2M+ aggregate facility). Select private credit on bespoke structures. Mid-2026 pricing 7.0 to 9.0% pa at 60 to 70% LTV. Mainstream commercial desks (NatWest, Lloyds, Barclays, Santander) largely decline FHL outright, they treat short-stay income as too volatile. Specialist BTL desks (Paragon Bank, Aldermore, Foundation Home Loans) cover single-asset FHL but not portfolio-aggregated structures. Get the right specialist first time, wrong desk loses six weeks.',
    },
    faqs: [
      {
        question: "Is an FHL a commercial mortgage or buy-to-let?",
        answer: "Single-asset FHL often routes through specialist BTL with FHL product, different pool, different logic. Portfolios of 3+ properties route through commercial portfolio facilities at better aggregated terms and DSCR-led underwriting. The threshold matters: at 2 properties, you are still in BTL territory; at 3, the portfolio commercial pool opens up.",
      },
      {
        question: "What occupancy do FHL lenders need?",
        answer: "Sustained <strong>50 to 60%+ annual occupancy</strong> across the portfolio. Strong-season weeks at high ADR matter as much as headline annual figure, a Cotswolds cottage at 75% occupancy in May to September and 35% October to April reads better than the same cottage at flat 55% across all months. We model a full 12-month occupancy and ADR curve before submission so the lender sees the seasonality story explicitly. Central-Oxford serviced apartments typically run higher year-round occupancy because tourist demand is less seasonal.",
      },
      {
        question: "Are B&B and FHL the same lender pool?",
        answer: 'Overlapping but distinct. Operator-owned B&B with on-site owner residence routes as <a href="/services/trading-business-mortgage">trading-business mortgage</a> on EBITDA cover. Pure FHL with guest-only occupancy and no on-site operator routes as FHL portfolio on DSCR. Mixed structures (a B&B that also takes some FHL bookings) need careful structuring at outset to avoid landing in the wrong product.',
      },
      {
        question: "What about platform reliance, Airbnb concentration?",
        answer: "Lenders prefer multi-platform booking mix (Airbnb plus Booking.com plus direct) rather than single-platform reliance. Airbnb-only FHLs can fund but at slightly tighter terms, typically 5% lower LTV and 25 to 50bps wider pricing. The reasoning is that platform policy or fee changes can affect economics overnight; multi-platform diversification mitigates that. We benchmark booking mix in the underwriting pack.",
      },
      {
        question: "FHL tax changes, do lenders factor them in?",
        answer: "Yes. The April 2025 abolition of the FHL tax regime (FHLs now treated like ordinary residential lets for tax purposes) has fed into lender modelling, net rent assumptions tightened, DSCR cover ratios moved 5 to 10 percentage points wider for new applications. The change has not closed the FHL market, but it has narrowed pricing slightly and made operator-track-record more important. We flag the post-April-2025 net-yield position in every FHL submission.",
      },
    ],
  },
};

export function getAssetTypeDetail(slug: string): AssetTypeDetail | null {
  return assetTypeDetails[slug] ?? null;
}

export const ASSET_TYPE_LINKS = Object.values(assetTypeDetails).map((a) => ({
  slug: a.slug,
  name: a.name,
}));
