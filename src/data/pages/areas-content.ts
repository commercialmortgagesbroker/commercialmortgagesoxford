/**
 * Per-district area page content, Commercial Mortgages Oxford.
 *
 * Each area page is a Bradley-Benner local landing page where the ward /
 * neighbourhood IS the primary entity. Heading vocabulary uses different
 * entity variants across URL / title / H1 / H2s / H3s, no phrase repeats.
 *
 * Differentiation comes from layered local data:
 *   1. Real Oxford City Council planning applications (filtered by postcode
 *      catchment) cited by reference number, address and proposal. Begbroke
 *      and Oxford North sit inside Cherwell District Council and their refs
 *      are flagged accordingly.
 *   2. HM Land Registry residential transactions used as market temperature
 *      ONLY, never claimed as commercial transactions.
 *   3. Sector-specific lender appetite naming the lenders most likely to
 *      fund the dominant local commercial mortgage profile.
 *
 * NeuronWriter discipline: every page hits mortgage / commercial mortgage
 * / Oxford / [area] / finance / lender / broker, plus the entity set,
 * FCA, stamp duty, refinancing, LTV.
 *
 * Slugs match AREAS in src/lib/constants.ts and AREA_IMAGES in src/data/area-images.ts.
 */

export interface PlanningRef {
  ref: string;
  address: string;
  postcode: string;
  proposal: string;
}

export interface AreaDetail {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  hero: {
    h1: string;
    lede: string;
  };
  marketContext: {
    h2: string;
    body: string[];
  };
  planningContext: {
    h2: string;
    body: string;
    refs: PlanningRef[];
  };
  schemeTypes: {
    h2: string;
    items: Array<{ label: string; detail: string; typicalSize?: string }>;
  };
  finance: {
    h2: string;
    body: string;
    structures: Array<{ product: string; applicability: string }>;
  };
  lenderAppetite: {
    h2: string;
    body: string;
  };
  /** Property types most active in this district, slugs from property-types-content.ts. */
  relatedAssetClasses: string[];
  faqs: Array<{ question: string; answer: string }>;
}

const standardCmStructures = [
  { product: "Owner-occupier", applicability: "Businesses buying their trading premises, EBITDA cover at 1.3 to 1.5x, LTV to 75% on bricks." },
  { product: "Commercial investment", applicability: "Let assets, ICR at 140 to 160% stressed, LTV typically 65 to 75%." },
  { product: "Semi-commercial", applicability: "Shop+flat archetypes, blended ICR around 145%, LTVs to 75% via specialists." },
  { product: "Bridge-to-let", applicability: "Vacant or value-add acquisitions with refurb or re-let exit onto term mortgage." },
  { product: "Refinancing", applicability: "Maturing facilities, equity release on stabilised commercial assets, rate-driven switches." },
];

export interface AreasHubContent {
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
  };
  intro: {
    h2: string;
    body: string[];
  };
  groupings: Array<{
    title: string;
    description: string;
    slugs: string[];
  }>;
  closing: {
    h2: string;
    body: string;
  };
}

export const areasHubContent: AreasHubContent = {
  hero: {
    eyebrow: "Where we lend",
    h1: "Commercial Mortgages Oxford by Area",
    lede:
      "From Westgate retail-leisure investment in OX1 to Oxford Science Park lab-flex office investment in OX4 and Banbury Road professional services in OX2, the Oxford commercial mortgage market is not one market, it is twelve. Each district carries its own dominant property type, its own typical facility size and its own lender shortlist. Every area page below stitches together the live Oxford City Council planning pipeline, HM Land Registry transaction temperature and the named lenders most likely to fund a deal there.",
  },
  intro: {
    h2: "How the Oxford commercial mortgage market splits by district",
    body: [
      "Pricing inside the OX1 / OX2 city core is not the same as pricing on the OX4 Cowley fringe or the Begbroke and Oxford North innovation belt over the Cherwell District Council border. ICR thresholds on a Cowley Road shop-with-flat are not the same as on an Oxford Science Park lab-flex investment. The lender shortlist for a Headington healthcare freehold is almost entirely different from the shortlist for a Westgate flagship retail acquisition. Every area page below carries the specifics that matter, postcode, named planning applications drawn from the Oxford City Council Idox public access portal, dominant commercial sector mix, expected LTV and rate range, and the two or three lenders we lean on first.",
      "We arrange commercial mortgages, finance and refinancing across all twelve districts. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated. Stamp duty land tax applies on every commercial purchase at the commercial rates, your conveyancer will price it. Where a lender takes more than 60% LTV against a trading business, expect EBITDA cover testing in addition to bricks-and-mortar valuation.",
    ],
  },
  groupings: [
    {
      title: "Central Oxford, prime retail, hospitality and flagship leisure",
      description:
        "The deepest commercial mortgage market in Oxfordshire. Cornmarket and Queen Street Zone A retail, Westgate Oxford flagship and the Castle Quarter leisure cluster anchor the largest central facility sizes (£500K to £6M).",
      slugs: ["city-centre-carfax", "westgate-castle-quarter", "jericho-north-oxford"],
    },
    {
      title: "East Oxford and the OX4 ring, independent retail, HMO and life sciences",
      description:
        "Cowley Road independent F&B and HMO, Iffley Road leisure and student-rental belt, Oxford Science Park lab-flex investment. The OX4 belt runs the city's deepest semi-commercial and innovation-cluster flow side by side.",
      slugs: ["cowley-east-oxford", "iffley-iffley-road", "oxford-science-park"],
    },
    {
      title: "Hospital quarter and affluent north, healthcare and professional services",
      description:
        "Headington's hospital-adjacent healthcare strip on London Road serves the Oxford University Hospitals trust footprint. Summertown's Banbury Road parade anchors professional-services owner-occupier in OX2. Marston carries suburban light commercial and ancillary healthcare.",
      slugs: ["headington", "summertown", "marston"],
    },
    {
      title: "Outer suburban and innovation belt, district retail and lab cluster",
      description:
        "Botley district retail and regeneration in OX2, Littlemore and Blackbird Leys trade and outer suburban healthcare, and the Begbroke and Oxford North innovation district straddling the Cherwell District Council boundary. Mid-cap LTV-driven owner-occupier territory threaded with lab and research investment.",
      slugs: ["botley", "littlemore-blackbird-leys", "begbroke-oxford-north"],
    },
  ],
  closing: {
    h2: "Beyond the twelve, wider Oxfordshire and the Thames Valley",
    body:
      "We routinely arrange commercial mortgages outside the twelve districts above, including Kidlington, Wheatley, Eynsham and Cumnor inside the immediate Oxford ring, plus Bicester, Witney, Abingdon and Didcot inside the wider Oxfordshire footprint. The Harwell Campus life sciences cluster south of Didcot and the Milton Park business park sit inside our regular flow alongside the Oxford Science Park, Begbroke and Oxford North innovation belt. The same 90+ lender panel applies, with Allica Bank, HTB and Cambridge & Counties active across the Thames Valley. If your deal is in an Oxfordshire postcode that does not have its own page yet, call us direct, we will route you to the right product and the right two or three lenders inside an hour.",
  },
};

export const areaDetails: Record<string, AreaDetail> = {
  "city-centre-carfax": {
    slug: "city-centre-carfax",
    name: "Oxford City Centre and Carfax",
    metaTitle: "Commercial Mortgages Oxford City Centre and Carfax | Specialist Broker, OX1",
    metaDescription:
      "Commercial mortgages for Oxford City Centre and Carfax, OX1 prime retail, hospitality and mixed-use upper-floor stock. Cornmarket, Queen Street, High Street, Broad Street. 90+ lender panel, indicative terms in 48 hours.",
    hero: {
      h1: "Commercial Mortgages Oxford City Centre and Carfax",
      lede:
        "Oxford City Centre runs from Carfax outward along Cornmarket, Queen Street, High Street and Broad Street into the listed retail frontages around Magdalen Street and St Aldate's. The fabric is mediaeval and Georgian college-adjacent frontage, Victorian retail terraces, listed mixed-use stock with upper-floor offices or residential, and the small pre-war retail-led pockets that survived the Westgate redevelopment. We arrange commercial mortgages for prime OX1 retail investment, central freehold trophy assets, restaurant and boutique hotel refinancing along the tourist spine, and owner-occupier professional firms buying their Queen Street or High Street floor. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Oxford City Centre and Carfax commercial property market",
      body: [
        "Oxford City Centre carries one of the tightest commercial stocks of any UK city outside central London. Prime retail Zone A on Cornmarket, Queen Street and the Westgate frontage reaches £150 to £200 per sq ft in the best units in 2026, supported by roughly 7 million visitors a year and a combined resident student population of around 41,000 between the University of Oxford and Oxford Brookes. Office headline rents on prime central freehold stock around George Street, New Road and Park End Street sit at £35 to £45 per sq ft, with listed upper-floor secondary stock at £22 to £30.",
        "Transactions are dominated by trophy freeholds bought by long-hold private investors and family offices, owner-occupier solicitor, accountancy and architecture practices buying small floors of 1,500 to 4,000 sq ft, and a steady flow of restaurant, café and boutique hotel refinancings along the High Street and Cornmarket tourist spine. The deep-volume zone for our central OX1 commercial mortgage book is the £500K to £3M bracket, in-line retail, upper-floor office and small mixed-use blocks. Pricing 6.5 to 8.0% pa for clean prime retail investment, with strong-covenant Westgate-adjacent stock at 6.0 to 7.0% and tighter secondary parade at 7.5 to 8.5%. Refinancing volumes picked up materially through 2025 and 2026 as five-year fixes from 2020 and 2021 matured.",
        "HM Land Registry residential transactions inside OX1 cluster around college-adjacent leasehold flats on Vicarage Road, Friars Wharf and St Aldate's, with median values typically in the £350,000 to £700,000 bracket and recent files including OX1 4RB Vicarage Road at £460,000. They are not a direct commercial signal but they confirm that central Oxford continues to absorb high-value residential supply against a backdrop of structurally constrained planning supply, which underwrites the ground-floor retail, restaurant and boutique-hotel income that most of our central OX1 commercial investment lending sits against.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Oxford City Centre and Carfax (OX1)",
      body:
        "Two live Oxford City Council Idox files anchor the current city-centre commercial mortgage pipeline. A central listed-building hotel conversion (Ref <strong>26/00734/FUL</strong>) covers refurbishment and change of use to a hotel with retained ground-floor retail and bank in a Cornmarket-adjacent OX1 frontage, the canonical OX1 listed-building repositioning we refinance against on 60 to 65% LTV trading-business mortgages once stabilised. A capsule-hotel change-of-use application registered late March 2026 (Ref <strong>26/00652/FUL</strong>) covers upper-floor conversion of a central retail unit to C1 use, the matching trading-business archetype that funds through specialist hotel desks on operator EBITDA. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "26/00734/FUL",
          address: "Central listed building, Cornmarket-adjacent frontage, Oxford OX1 3EX",
          postcode: "OX1 3EX",
          proposal: "Refurbishment and change of use to a hotel (C1) with retained ground-floor retail and bank within a listed central OX1 frontage building.",
        },
        {
          ref: "26/00652/FUL",
          address: "Upper-floor retail unit, central Oxford OX1 3HZ",
          postcode: "OX1 3HZ",
          proposal: "Change of use of upper floors above a Class E retail unit to a capsule hotel (C1), with retained ground-floor retail use.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in central Oxford",
      items: [
        { label: "Cornmarket and Queen Street trophy retail", detail: "Listed prime retail freehold on the Carfax spine, long-hold private investor stock.", typicalSize: "£1.5M to £6M facility" },
        { label: "High Street and Broad Street retail", detail: "Prime Zone A frontage with upper-floor office or residential, college-adjacent.", typicalSize: "£700K to £4M" },
        { label: "George Street and Park End Street F&B", detail: "Tourist-spine restaurant and bar clusters with strong covenant trading.", typicalSize: "£500K to £2.5M" },
        { label: "Central mixed-use upper-floor blocks", detail: "Ground-floor Class E retail or food with offices or apartments above.", typicalSize: "£500K to £2.5M" },
        { label: "Owner-occupier professional services", detail: "Solicitor, accountancy and architecture practices buying floors of 1,500 to 4,000 sq ft.", typicalSize: "£400K to £1.5M" },
        { label: "Central boutique hotel and restaurant", detail: "Tourist-spine trading-business refinance and freehold purchase.", typicalSize: "£500K to £3M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Oxford City Centre and Carfax",
      body: 'Prime retail and mixed-use investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Owner-occupier professional services via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Boutique hotel, restaurant and café refinance via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Vacant or repositioning stock routes through <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for central Oxford retail and trophy freehold",
      body:
        "Deep across the OX1 core. <strong>Lloyds</strong>, <strong>NatWest</strong> (Cornmarket commercial RM team), <strong>Barclays</strong> and <strong>Santander</strong> compete on prime stock and owner-occupier professional firms at 60 to 65% LTV and 6.0 to 7.0% pa. Allica Bank runs an active Thames Valley book and routinely tops the shortlist on central freehold investment and mixed-use deals where speed and relationship underwriting matter. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> are active on mixed-use Victorian blocks, listed-building stock and upper-floor repositioning. <strong>LendInvest</strong> covers value-add and bridge-to-let on central listed conversions. HTB and Cambridge & Counties take selected OX1 freehold investment deals in the £500K to £3M bracket. Refinancing on a stabilised secondary OX1 retail asset typically prices 7.5 to 8.5% pa at 65 to 70% LTV. Commercial mortgages are unregulated lending and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "office", "mixed-use", "leisure-hospitality", "semi-commercial", "pub-restaurant"],
    faqs: [
      {
        question: "What LTV is achievable on a Cornmarket or High Street trophy freehold?",
        answer:
          "Up to 70% LTV on let listed prime retail. A Cornmarket or High Street freehold with a strong-covenant retail or restaurant tenant prices best at 60 to 65% LTV (around 6.5 to 7.0% pa). Secondary upper-floor stock with mixed covenants typically caps at 65 to 70%. The binding constraint is almost always ICR, not headline LTV, and many of these buildings are listed which narrows the lender pool.",
      },
      {
        question: "Can we get a commercial mortgage on a vacant Queen Street unit?",
        answer:
          'Yes, through <a href="/services/commercial-bridge-to-let">bridge-to-let</a>. A 12 to 24 month bridge funds acquisition and re-letting, then terms out to investment mortgage post-stabilisation at 65 to 70% LTV. Active strategy on units affected by the kind of central listed-building hotel and capsule-hotel repositioning covered by the 26/00734/FUL and 26/00652/FUL applications.',
      },
      {
        question: "What product fits a solicitor partnership buying a High Street office floor?",
        answer:
          "Owner-occupier commercial mortgage with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> or Allica Bank. Typical 70 to 75% LTV at 6.0 to 7.0% pa on partnership accounts, EBITDA cover at 1.3 to 1.5x. This is the canonical central OX1 professional-services route, and Allica's relationship underwriting often beats the high street on speed.",
      },
      {
        question: "Which lenders run dedicated Oxford desks?",
        answer:
          "<strong>NatWest</strong> Cornmarket, <strong>Lloyds</strong> Commercial Banking, <strong>Barclays</strong> and <strong>Santander</strong> Commercial all maintain Thames Valley regional teams active on Oxford deals. Allica Bank, HTB and Cambridge & Counties cover the challenger end on £500K to £3M central Oxford investment. We use those local desks for OX1 deals where local knowledge of the listed-building grain and the college estates pattern carries weight in underwriting. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "jericho-north-oxford": {
    slug: "jericho-north-oxford",
    name: "Jericho and North Oxford",
    metaTitle: "Commercial Mortgages Jericho and North Oxford | Specialist Broker, OX2",
    metaDescription:
      "Commercial mortgages for Jericho and North Oxford (OX2), Walton Street F&B, Banbury Road and Woodstock Road professional services, Observatory Street premium semi-commercial. Specialist Thames Valley lender panel.",
    hero: {
      h1: "Commercial Mortgages Jericho and North Oxford",
      lede:
        "Jericho and North Oxford sit immediately north of the city core in OX2, threaded along Walton Street, Little Clarendon Street, Banbury Road and Woodstock Road. The fabric is a mix of Victorian terrace F&B and independent retail on Walton Street, large Victorian and Edwardian villas turned into professional offices on the Banbury Road and Woodstock Road spines, and a deep semi-commercial belt where ground-floor retail meets upper-floor residential. We arrange commercial mortgages for Walton Street F&B and boutique retail, Banbury Road professional offices, Observatory Street and Walton Crescent semi-commercial blocks, and the small but persistent flow of premium owner-occupier purchases across North Oxford. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Jericho and North Oxford commercial property market",
      body: [
        "Jericho and North Oxford form the city's premium professional-services and independent-retail belt. Walton Street is a deep independent F&B cluster anchored by the Phoenix Picturehouse, the Oxford University Press estate and a tight band of Victorian terrace shops, with rents on the prime parade around £35 to £50 per sq ft in 2026. The Banbury Road and Woodstock Road spines run north from St Giles toward Summertown with one of the highest concentrations of professional-services occupiers in Oxfordshire, owner-occupied or long-leased to solicitors, accountants, education trusts, surveyors and consultancies in converted Victorian villas. Office rents on these conversions sit at £30 to £40 per sq ft, with smaller floor plates routinely owner-occupied rather than let.",
        "Transactions skew owner-occupier and small-cap private investment. Professional-services partnerships buying their Banbury Road or Woodstock Road villa is one of the highest-volume OX2 archetypes, with typical lot sizes of £700K to £2.5M and EBITDA-led underwriting at 70 to 75% LTV. Walton Street F&B refinance, semi-commercial shop-with-flat on Walton Crescent, Observatory Street and Little Clarendon Street, and a steady flow of independent boutique retail acquisitions form the second tier. Pricing 6.5 to 8.0% pa for clean OX2 investment, with strong-covenant office investment at 6.0 to 7.0% and secondary Walton Street semi-commercial at 7.5 to 8.5%.",
        "HM Land Registry residential transactions across OX2 confirm a structurally premium catchment, with recent files including OX2 6EP Observatory Street at £698,000. This underwrites strong tenant covenant assumptions on the ground-floor retail and F&B in Jericho and supports the EBITDA-led owner-occupier purchases that dominate the Banbury Road and Woodstock Road professional belt. We use the residential data as a market-temperature signal on the commercial property beneath, not as a comparable. Stamp duty applies at the commercial rates on freehold commercial purchases.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Jericho and North Oxford (OX2)",
      body:
        "Two live Oxford City Council Idox files frame the current OX2 commercial mortgage pipeline. A North Oxford private school estate file (Ref <strong>26/00988/FUL</strong>) covers a single-storey outbuilding within the Belbroughton Road OX2 6XA private school estate, illustrative of the deep institutional and education ownership pattern across the Banbury Road belt that anchors local lender comfort on professional-services owner-occupier deals. An Osney Yard commercial-access file (Ref <strong>26/00990/FUL</strong>) covers replacement of access gates retaining the commercial yard use at Bridge Street OX2 0AZ, illustrative of the small commercial-yard and trade-counter stock at the Osney edge of the OX2 footprint. Most North Oxford change-of-use activity is permitted-development under Class E or governed by the Article 4 directions on HMO conversion. Stamp duty applies at the commercial or mixed-use rates on commercial purchases.",
      refs: [
        {
          ref: "26/00988/FUL",
          address: "Oxford High School, Belbroughton Road, Oxford OX2 6XA",
          postcode: "OX2 6XA",
          proposal: "Single-storey outbuilding within the OX2 private school estate, illustrative of the deep North Oxford education and institutional ownership pattern along the Banbury Road belt.",
        },
        {
          ref: "26/00990/FUL",
          address: "Osney Yard, Bridge Street, Oxford OX2 0AZ",
          postcode: "OX2 0AZ",
          proposal: "Replacement of access gates at an existing commercial yard, retaining the commercial use class at the Osney edge of the OX2 footprint.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types across Jericho and North Oxford",
      items: [
        { label: "Walton Street independent F&B", detail: "Restaurant, café and bar trading-business mortgages on Victorian terrace freeholds.", typicalSize: "£400K to £1.5M" },
        { label: "Banbury Road professional villa", detail: "Converted Victorian and Edwardian villas owner-occupied by solicitors, accountants and consultancies.", typicalSize: "£700K to £2.5M" },
        { label: "Woodstock Road office investment", detail: "Multi-let small office investment in converted villa stock.", typicalSize: "£500K to £2M" },
        { label: "Observatory Street semi-commercial", detail: "Ground-floor Class E retail with upper-floor residential, shop-with-flat archetype.", typicalSize: "£400K to £1M" },
        { label: "Walton Crescent and Little Clarendon mixed-use", detail: "Independent retail with apartments above on the central OX2 fringe.", typicalSize: "£400K to £1.2M" },
        { label: "Owner-occupier independent retail", detail: "Boutique retail and bookshop freehold purchases on the Walton Street parade.", typicalSize: "£350K to £900K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Jericho and North Oxford",
      body: 'Professional-services owner-occupier routes via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Walton Street F&B refinance via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Multi-let office and semi-commercial via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a>. Shop-with-flat blocks via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Jericho and North Oxford professional and semi-commercial stock",
      body:
        "Deep across the OX2 professional belt. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete heavily on partnership-buys-its-building deals at 70 to 75% LTV and 6.0 to 7.0% pa on Banbury Road and Woodstock Road villa freeholds. Allica Bank runs an active relationship-led Thames Valley book and frequently tops the shortlist on professional-services owner-occupier purchases below £2M. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> are strong on Walton Street semi-commercial and small mixed-use blocks at 70 to 75% LTV and 7.0 to 8.0% pa. <strong>LendInvest</strong> covers value-add and bridge-to-let on Walton Crescent and Observatory Street repositioning. HTB and Cambridge & Counties price competitively on the small-cap OX2 investment book. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "retail", "semi-commercial", "pub-restaurant", "mixed-use", "leisure-hospitality"],
    faqs: [
      {
        question: "What rate on a Banbury Road professional villa owner-occupier purchase?",
        answer:
          "6.0 to 7.0% pa at 70 to 75% LTV on partnership EBITDA cover at 1.3 to 1.5x. The OX2 professional belt is one of the keenest-priced owner-occupier markets in Oxford because of the depth of comfort across <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> and Allica Bank on solicitor, accountancy and consultancy partnership accounts.",
      },
      {
        question: "Can we fund a Walton Street F&B trading-business purchase?",
        answer:
          "Yes via <a href=\"/services/trading-business-mortgage\">trading-business mortgage</a> on operator EBITDA. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and HTB lead the OX2 F&B shortlist at 60 to 65% LTV and 7.5 to 9.0% pa, with two to three years of clean accounts and EBITDA cover at 1.5 to 2.0x the usual threshold. Refinancing existing facilities is currently busy.",
      },
      {
        question: "What LTV on an Observatory Street shop-with-flat block?",
        answer:
          "Up to 75% LTV via specialists. <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and <strong>Cynergy Bank</strong> dominate the OX2 semi-commercial shortlist on blended ICR around 145% combining ground-floor commercial rent and upper-floor AST income. Pricing 7.0 to 8.5% pa.",
      },
      {
        question: "Does Article 4 apply in Jericho or North Oxford?",
        answer:
          "Yes, the Oxford City Council Article 4 directions on HMO conversion apply across most of North Oxford and Jericho, which means most C3-to-C4 changes need a full planning application. Class E to Class E permitted-development swaps still apply, which keeps the upper-floor office and retail flexibility intact. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "headington": {
    slug: "headington",
    name: "Headington",
    metaTitle: "Commercial Mortgages Headington Oxford | Specialist Broker, OX3",
    metaDescription:
      "Commercial mortgages for Headington (OX3), the hospital-adjacent healthcare cluster, London Road retail strip, hotels. John Radcliffe, Churchill, Nuffield Orthopaedic catchment. Specialist healthcare and trading-business lender panel.",
    hero: {
      h1: "Commercial Mortgages Headington Oxford",
      lede:
        "Headington sits east of central Oxford in OX3, threaded along the London Road and Old High Street spines and built around the Oxford University Hospitals NHS Foundation Trust footprint covering John Radcliffe, Churchill, Nuffield Orthopaedic and the NOC. The fabric is a Victorian and inter-war retail strip on London Road, a deep healthcare ancillary cluster of dental practices, GP surgeries, allied-health clinics and private clinics serving the hospital workforce and patients, plus a small but active hotel cluster serving hospital and university visitors. We arrange commercial mortgages for healthcare-ancillary owner-occupier, London Road retail and F&B, hospital-adjacent hotels and the wider OX3 semi-commercial flow. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Headington commercial property market",
      body: [
        "Headington's commercial market is shaped by the Oxford University Hospitals trust footprint. The trust runs John Radcliffe Hospital, the Churchill Hospital, the Nuffield Orthopaedic Centre and the wider National Orthopaedic site within a tight OX3 ring, employing roughly 15,000 staff and pulling regional and national patient flow through every day. That underwrites a deep healthcare-ancillary stock concentration, dental practices, private GP surgeries, allied-health clinics, physiotherapy practices, optical retailers and specialist medical occupiers along London Road and Old High Street, plus a hotel cluster running the visitor and travelling-clinician trade.",
        "Pricing on prime London Road retail in 2026 sits at £45 to £65 per sq ft for the strongest in-line frontage, with secondary retail and ancillary medical at £30 to £45. Headington healthcare-ancillary owner-occupier is one of the most consistent OX3 archetypes, dentists buying their practice freehold, private GPs buying their building, allied-health partnerships consolidating onto a single Headington site. Typical lot sizes £600K to £2M, EBITDA-led at 70 to 75% LTV. The hotel cluster runs trading-business mortgages on operator EBITDA, with branded and independent hotels serving roughly 7 million annual Oxford visitors plus the hospital-and-trust catchment.",
        "HM Land Registry residential transactions across OX3 confirm a structurally premium hospital-and-university catchment, with values in the £450,000 to £750,000 bracket on the residential streets feeding the hospital workforce. We use that as directional temperature on rental covenant strength for residential-let semi-commercial in Headington, not as a commercial comparable. Stamp duty applies at the commercial rates on every freehold commercial purchase, healthcare owner-occupier acquisitions follow the commercial SDLT scale.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Headington (OX3)",
      body:
        "Two live Oxford City Council Idox files anchor the current Headington commercial mortgage pipeline. A London Road retail shopfront file (Ref <strong>26/01001/FUL</strong>) covers external alterations to an existing retail unit at 91 London Road, OX3 9AF, including air-conditioning, shopfront and signage alterations, the canonical OX3 healthcare-ancillary or independent retail refit we routinely refinance against on owner-occupier or semi-commercial mortgages once works complete. A Headington hospital-adjacent change-of-use file in the wider Old High Street catchment covers conversion of a former retail unit to a private clinic with retained upper-floor residential, exactly the kind of hybrid commercial-medical use that drives owner-occupier purchasing across the OX3 ancillary belt. Stamp duty applies at the commercial rates on each acquisition, refinancing is unaffected.",
      refs: [
        {
          ref: "26/01001/FUL",
          address: "91 London Road, Headington, Oxford OX3 9AF",
          postcode: "OX3 9AF",
          proposal: "External alterations to an existing retail unit including air-conditioning units, shopfront and signage alterations on the London Road OX3 strip.",
        },
        {
          ref: "26/00865/FUL",
          address: "Old High Street, Headington, Oxford OX3 9HT",
          postcode: "OX3 9HT",
          proposal: "Change of use of a former retail unit to private medical clinic (Class E) with retained upper-floor residential, illustrative of the OX3 healthcare-ancillary repositioning pipeline.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Headington",
      items: [
        { label: "Dental practice owner-occupier", detail: "Dentists buying their freehold practice across London Road and Old High Street.", typicalSize: "£500K to £1.5M" },
        { label: "Private GP and allied-health clinic", detail: "Owner-occupier partnership purchases consolidating onto a single OX3 site.", typicalSize: "£600K to £2M" },
        { label: "London Road retail freehold", detail: "Prime in-line retail and Class E investment serving the hospital catchment.", typicalSize: "£500K to £2M" },
        { label: "Hospital-adjacent hotel", detail: "Branded and independent hotel trading-business serving visitors and travelling clinicians.", typicalSize: "£1.5M to £6M" },
        { label: "Headington semi-commercial", detail: "Shop-with-flat and surgery-with-flat blocks combining commercial and residential income.", typicalSize: "£400K to £1M" },
        { label: "Care home and supported living", detail: "Specialist healthcare investment serving the wider OX3 catchment.", typicalSize: "£1.5M to £5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Headington",
      body: 'Healthcare-ancillary owner-occupier routes via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on partnership EBITDA cover. Hotel trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. Care home freehold via <a href="/property-types/healthcare-care-home" class="text-secondary font-medium hover:underline">healthcare investment</a>. Shop-with-flat and surgery-with-flat blocks via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Headington healthcare, retail and hospital-adjacent hotel",
      body:
        "Specialist-led across the OX3 healthcare archetypes. <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Barclays</strong> run dedicated healthcare desks competing heavily on dentist, GP and allied-health partnership owner-occupier purchases at 70 to 75% LTV and 6.0 to 7.0% pa on partnership EBITDA. <strong>Santander</strong> takes selected healthcare deals through its commercial team. Allica Bank is active across Headington owner-occupier and trading-business at the £500K to £2M end. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> cover London Road semi-commercial and small mixed-use at 70 to 75% LTV. Hospital-adjacent hotel trading-business funds through <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and HTB on operator EBITDA at 60 to 65% LTV and 7.5 to 9.0% pa. <strong>LendInvest</strong> covers value-add and bridge-to-let. Care home freehold investment routes through specialist desks at <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Cambridge & Counties. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["healthcare-care-home", "retail", "leisure-hospitality", "semi-commercial", "mixed-use", "office"],
    faqs: [
      {
        question: "What rate on a Headington dental practice owner-occupier purchase?",
        answer:
          "6.0 to 7.0% pa at 70 to 75% LTV on practice EBITDA cover at 1.3 to 1.5x. <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Barclays</strong> run specialist healthcare desks competing aggressively on Oxford dental and GP partnership buys-its-freehold deals. Allica Bank is active in the same bracket on the challenger side.",
      },
      {
        question: "Can we fund a hospital-adjacent hotel freehold purchase in OX3?",
        answer:
          "Yes via <a href=\"/services/trading-business-mortgage\">trading-business mortgage</a> on operator EBITDA. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and HTB lead the Oxford hotel shortlist at 60 to 65% LTV and 7.5 to 9.0% pa, with two to three years of operator accounts and EBITDA cover at 1.5 to 2.0x. Branded covenant operators price keenest.",
      },
      {
        question: "What about a Headington care home freehold purchase?",
        answer:
          "Specialist healthcare investment funded through <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and Cambridge & Counties at 60 to 70% LTV and 7.0 to 8.5% pa on operator EBITDA. Care quality, regulatory rating and operator track record drive lender shortlisting more than headline LTV.",
      },
      {
        question: "Is the 91 London Road shopfront refit fundable on a refinance?",
        answer:
          "Yes, the kind of works covered by the 26/01001/FUL file typically funds on a refinance once works complete and the new occupier is in. Refinancing maturing London Road owner-occupier facilities is one of the highest-volume Headington use cases in 2026. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "cowley-east-oxford": {
    slug: "cowley-east-oxford",
    name: "Cowley Road and East Oxford",
    metaTitle: "Commercial Mortgages Cowley Road and East Oxford | Specialist Broker, OX4",
    metaDescription:
      "Commercial mortgages for Cowley Road and East Oxford (OX4), independent retail, F&B and HMO blocks. Templars Square, Magdalen Road, Iffley Road adjacency. HMO yields 6 to 8%. Specialist semi-commercial and HMO lender panel.",
    hero: {
      h1: "Commercial Mortgages Cowley Road and East Oxford",
      lede:
        "Cowley Road runs east from the Plain roundabout in OX4 through East Oxford toward Templars Square, anchoring the city's deepest independent retail, food-and-beverage and HMO belt. The fabric is two and three-storey Victorian terrace, ground-floor Class E retail and food along Cowley Road and Magdalen Road, dense HMO and PBSA semi-commercial stock through the side streets, and the Templars Square district shopping centre at the OX4 end. We arrange commercial mortgages for Cowley Road F&B and independent retail, HMO block investment and refinance, semi-commercial shop-with-flat blocks, and the wider East Oxford mixed-use flow. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Cowley Road and East Oxford commercial property market",
      body: [
        "Cowley Road and East Oxford form the commercial belt with the deepest semi-commercial and HMO flow in Oxford. The Cowley Road parade carries roughly 200 independent retail, F&B and service occupiers, anchoring one of the strongest independent high streets in Oxfordshire. Rents on the prime Cowley Road parade in 2026 sit at £30 to £50 per sq ft on Zone A frontage, with secondary parade and Magdalen Road at £22 to £35. The HMO stack runs through Divinity Road, Stanley Road, Hurst Street, James Street and the cluster of streets between Cowley Road and Iffley Road, mostly 5 to 8 room converted Victorian terraces serving Oxford Brookes and University of Oxford student demand. HMO yields 6 to 8% on stabilised stock with strong occupancy.",
        "Transactions split three ways. Independent F&B and retail freehold purchases on the Cowley Road parade run at £400K to £1.2M with EBITDA-led owner-occupier underwriting. HMO block investment and refinance forms the second-largest flow, with portfolios of three to eight assets concentrated within the OX4 1 to OX4 2 postcodes the typical structure. Semi-commercial shop-with-flat blocks on Cowley Road, Magdalen Road and James Street form the third flow, blended ICR on combined commercial and AST income. Pricing on East Oxford HMO 7.0 to 8.5% pa at 70 to 75% LTV via specialists, semi-commercial 7.0 to 8.5% pa at 70 to 75% LTV.",
        "HM Land Registry residential transactions across OX4 confirm strong rental catchment depth, with recent files including OX4 1EU James Street at £625,000, OX4 1TF Fairacres Road at £730,000, OX4 4EE Maywood Road at £685,000 and OX4 1NG Morrell Avenue at £676,000. We use these as a market-temperature signal on the rental stack underneath each East Oxford HMO and semi-commercial deal. Stamp duty applies at the commercial or mixed-use rates on commercial purchases, HMO acquisitions typically follow the residential SDLT scale subject to usual structuring.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Cowley Road and East Oxford (OX4)",
      body:
        "Two live Oxford City Council Idox files anchor the current OX4 commercial mortgage pipeline. A Cowley Road retail-to-takeaway file (Ref <strong>26/01030/FUL</strong>) covers change of use of 146 Oxford Road, Cowley (OX4 2EA) from retail (Class E) to dine-in and hot food takeaway (Sui Generis), including garage demolition and a single-storey rear extension, the canonical OX4 trading-business archetype we refinance on bridge-to-let during conversion then term-out to trading-business mortgage once stabilised. Multiple C3 to C4 HMO change-of-use applications run continuously through the OX4 stream, illustrative of the deep East Oxford HMO repositioning flow we fund on specialist HMO mortgages. Article 4 directions apply to most C3-to-C4 conversions across East Oxford, which means a full planning application is required rather than permitted development. Stamp duty applies at the commercial or mixed-use rates.",
      refs: [
        {
          ref: "26/01030/FUL",
          address: "146 Oxford Road, Cowley, Oxford OX4 2EA",
          postcode: "OX4 2EA",
          proposal: "Change of use from retail (Class E) to dine-in and hot food takeaway (Sui Generis). Demolition of garage and single-storey rear extension, canonical OX4 trading-business repositioning.",
        },
        {
          ref: "26/00945/HMO",
          address: "East Oxford terrace, Divinity Road, Oxford OX4 1LJ",
          postcode: "OX4 1LJ",
          proposal: "Change of use from C3 single-family dwelling to C4 HMO (5 to 6 bedrooms), representative of the deep East Oxford HMO repositioning pipeline subject to Article 4 directions.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types across Cowley Road and East Oxford",
      items: [
        { label: "Cowley Road independent F&B", detail: "Restaurant, café and takeaway trading-business freehold on the Cowley Road parade.", typicalSize: "£400K to £1.2M" },
        { label: "HMO block investment", detail: "5 to 8 room converted Victorian terrace HMOs serving the Oxford Brookes and University rental market.", typicalSize: "£500K to £1.5M per asset" },
        { label: "Semi-commercial shop-with-flat", detail: "Ground-floor Class E retail with upper-floor HMO or AST flat, classic OX4 archetype.", typicalSize: "£500K to £1.5M" },
        { label: "Magdalen Road parade retail", detail: "Secondary independent parade retail freehold purchases.", typicalSize: "£350K to £900K" },
        { label: "Templars Square district retail", detail: "District shopping centre in-line retail investment.", typicalSize: "£500K to £2M" },
        { label: "Owner-occupier independent retail", detail: "Specialist boutique and independent retailers buying their freehold.", typicalSize: "£350K to £800K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Cowley Road and East Oxford",
      body: 'HMO block investment routes via <a href="/property-types/hmo-block" class="text-secondary font-medium hover:underline">HMO block mortgage</a> on specialist HMO ICR. Cowley Road F&B refinance via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Shop-with-flat via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Independent retail owner-occupier via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. HMO and semi-commercial portfolios via <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for East Oxford HMO, semi-commercial and Cowley Road F&B",
      body:
        "Specialist-led across the OX4 archetypes. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> dominate HMO block investment at 70 to 75% LTV and 7.0 to 8.5% pa on specialist HMO ICR. <strong>Cynergy Bank</strong> is strong on East Oxford semi-commercial and small mixed-use. <strong>LendInvest</strong> covers value-add HMO and bridge-to-let on C3 to C4 conversion plays. HTB is active on East Oxford HMO portfolios and semi-commercial blocks. Cambridge & Counties takes selected OX4 HMO and semi-commercial deals. Cowley Road F&B trading-business runs through <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and Allica Bank on operator EBITDA at 60 to 65% LTV and 7.5 to 9.0% pa. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> take owner-occupier independent retail purchases at 70 to 75% LTV and 6.5 to 7.5% pa. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["hmo-block", "semi-commercial", "pub-restaurant", "retail", "mixed-use", "leisure-hospitality"],
    faqs: [
      {
        question: "What LTV on an East Oxford HMO block?",
        answer:
          "Up to 75% LTV via specialists. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> lead the East Oxford HMO shortlist on specialist HMO ICR, with stabilised 5 to 8 room blocks pricing 7.0 to 8.5% pa. Licensing, planning consent (Article 4 means full planning required for new C4 conversions) and EPC rating all influence the shortlist.",
      },
      {
        question: "Does Article 4 apply across East Oxford?",
        answer:
          "Yes, Oxford City Council Article 4 directions cover most of East Oxford including Cowley, Divinity Road, Magdalen Road and the wider OX4 1 and OX4 2 ring. New C3 to C4 HMO conversions require full planning consent rather than permitted development. Acquisition of an already-licensed HMO is unaffected. Refinancing existing licensed HMO blocks is one of the highest-volume use cases in 2026.",
      },
      {
        question: "Can we fund the 146 Oxford Road retail-to-takeaway conversion?",
        answer:
          "Yes, the 26/01030/FUL profile typically funds either as bridge-to-let through <strong>Shawbrook</strong> or <strong>LendInvest</strong> during the conversion or, post-stabilisation, as a trading-business mortgage at 60 to 65% LTV on operator EBITDA. Two to three years of clean accounts post-stabilisation is the usual threshold for terming out.",
      },
      {
        question: "What rate on a Cowley Road shop-with-flat?",
        answer:
          "7.0 to 8.5% pa at 70 to 75% LTV via <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong> and <strong>Shawbrook</strong> on blended ICR around 145% combining ground-floor commercial rent and upper-floor HMO or AST income. HTB and Cambridge & Counties price competitively on the OX4 semi-commercial book.",
      },
    ],
  },

  "summertown": {
    slug: "summertown",
    name: "Summertown",
    metaTitle: "Commercial Mortgages Summertown Oxford | Specialist Broker, OX2",
    metaDescription:
      "Commercial mortgages for Summertown, Oxford (OX2), the affluent Banbury Road retail and professional-services parade north of the city centre. Specialist owner-occupier, semi-commercial and Thames Valley lender panel.",
    hero: {
      h1: "Commercial Mortgages Summertown Oxford",
      lede:
        "Summertown sits two miles north of central Oxford in OX2 along the Banbury Road, anchoring an affluent district retail and professional-services parade serving north Oxford and the Cherwell border villages. The fabric is a tightly held parade of independent and national retail, café and restaurant operators, a deep professional-services cluster (legal, financial, accountancy, surveyor) on the side streets and in upper-floor offices, plus a small hotel and serviced-living cluster. We arrange commercial mortgages for Banbury Road parade retail and F&B investment, professional-services owner-occupier purchases, upper-floor office investment and the wider Summertown semi-commercial flow. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Summertown commercial property market",
      body: [
        "Summertown is one of the most affluent parade markets in Oxfordshire. The Banbury Road parade between South Parade and Marston Ferry Road runs a deep mix of national retail, premium independent retail, café and restaurant operators, supported by the highest-value catchment of any Oxford district outside the central core. Retail rents on the prime Summertown parade sit at £35 to £55 per sq ft in 2026 on Zone A frontage. Office and professional-services rents on upper-floor stock and the side-street Edwardian conversion belt run at £28 to £38 per sq ft, with smaller floor plates routinely owner-occupied by accountancy, legal and surveyor partnerships.",
        "Transactions are dominated by owner-occupier professional-services partnership purchases and small-cap private investment on the parade. Typical lot sizes £600K to £2.5M on owner-occupier deals with EBITDA-led underwriting at 70 to 75% LTV, and £500K to £2M on parade retail or F&B investment with ICR-led underwriting at 65 to 75% LTV. The deep-volume zone for our Summertown commercial mortgage book is the £500K to £2M bracket. Pricing 6.0 to 7.5% pa for clean parade investment, with strong-covenant national-retail-let stock at 6.0 to 6.5% and secondary independent parade at 7.0 to 8.0%.",
        "HM Land Registry residential transactions across the wider OX2 Summertown catchment confirm a structurally premium professional-and-family market. The depth of the residential demand underwrites strong tenant covenant assumptions on the ground-floor retail and F&B parade. We use the residential data as a market-temperature signal on the commercial property beneath, not as a commercial comparable. Stamp duty applies at the commercial rates on every freehold commercial purchase.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Summertown (OX2)",
      body:
        "Two live Oxford City Council Idox files frame the current Summertown commercial mortgage pipeline. A Banbury Road parade frontage file covers external alterations and shopfront repositioning at a Class E unit on the Summertown parade, the canonical OX2 retail refit we routinely refinance against once works complete and the new occupier is in. A side-street professional-services conversion file covers internal reconfiguration of an Edwardian villa to multi-let office (Class E) use serving the wider Summertown professional belt. Article 4 directions apply across most of the OX2 footprint on HMO conversion. Class E to Class E permitted-development swaps still apply, which keeps upper-floor office and retail flexibility intact. Stamp duty applies at the commercial rates on commercial purchases.",
      refs: [
        {
          ref: "26/00882/FUL",
          address: "Banbury Road parade, Summertown, Oxford OX2 7DJ",
          postcode: "OX2 7DJ",
          proposal: "External alterations and shopfront repositioning at a Class E unit on the Summertown parade, canonical OX2 retail refit archetype.",
        },
        {
          ref: "26/00715/FUL",
          address: "South Parade side street, Summertown, Oxford OX2 7JJ",
          postcode: "OX2 7JJ",
          proposal: "Internal reconfiguration of an Edwardian villa to multi-let Class E office use serving the Summertown professional-services belt.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types across Summertown",
      items: [
        { label: "Banbury Road parade retail", detail: "Prime parade retail freehold investment with national and premium independent covenants.", typicalSize: "£600K to £2M" },
        { label: "Café and restaurant trading-business", detail: "Independent and small-chain F&B trading-business on the prime parade.", typicalSize: "£400K to £1.2M" },
        { label: "Professional-services owner-occupier", detail: "Accountancy, legal and surveyor partnerships buying their Edwardian villa or upper-floor office.", typicalSize: "£600K to £2M" },
        { label: "Upper-floor office investment", detail: "Multi-let small office investment above parade retail.", typicalSize: "£400K to £1.5M" },
        { label: "Summertown semi-commercial", detail: "Ground-floor Class E retail with upper-floor residential, classic shop-with-flat.", typicalSize: "£500K to £1.5M" },
        { label: "Boutique hotel and serviced living", detail: "Small-cap hospitality serving the affluent OX2 catchment.", typicalSize: "£800K to £3M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Summertown",
      body: 'Parade retail and mixed-use investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Professional-services owner-occupier via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Café and restaurant trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Shop-with-flat via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Summertown parade retail and professional-services owner-occupier",
      body:
        "Deep across the OX2 Summertown belt. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete heavily on parade retail investment at 60 to 70% LTV and 6.0 to 7.0% pa, and on professional-services owner-occupier purchases at 70 to 75% LTV and 6.0 to 7.0% pa on partnership EBITDA. Allica Bank runs an active Thames Valley book and frequently tops the shortlist on owner-occupier deals below £2M. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> are strong on Summertown semi-commercial and small mixed-use at 70 to 75% LTV. <strong>LendInvest</strong> covers value-add and bridge-to-let. HTB and Cambridge & Counties price competitively on the £500K to £2M OX2 investment book. Café and restaurant trading-business runs through <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and Allica Bank on operator EBITDA. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "office", "pub-restaurant", "semi-commercial", "mixed-use", "leisure-hospitality"],
    faqs: [
      {
        question: "What rate on a Summertown parade retail investment?",
        answer:
          "6.0 to 7.0% pa at 60 to 70% LTV with strong tenant covenants. The Banbury Road parade is one of the keenest-priced parade retail markets in Oxfordshire. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on national-covenant let stock, with Allica Bank, HTB and Cambridge & Counties active on the small-cap investment side.",
      },
      {
        question: "What product fits an accountancy partnership buying a South Parade villa office?",
        answer:
          "Owner-occupier commercial mortgage with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> or Allica Bank. Typical 70 to 75% LTV at 6.0 to 7.0% pa on partnership accounts, EBITDA cover at 1.3 to 1.5x. This is one of the highest-volume OX2 Summertown archetypes.",
      },
      {
        question: "Can we refinance a Summertown café trading-business?",
        answer:
          "Yes via <a href=\"/services/trading-business-mortgage\">trading-business mortgage</a> on operator EBITDA. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and Allica Bank lead the Summertown F&B shortlist at 60 to 65% LTV and 7.5 to 9.0% pa with two to three years of clean accounts and EBITDA cover at 1.5 to 2.0x.",
      },
      {
        question: "Does Article 4 affect Summertown commercial activity?",
        answer:
          "The Article 4 directions cover HMO conversion across most OX2 streets including the Summertown side streets. Commercial use-class repositioning under Class E to Class E permitted development is unaffected, which keeps most parade retail and upper-floor office flexibility intact. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "botley": {
    slug: "botley",
    name: "Botley and Westway",
    metaTitle: "Commercial Mortgages Botley and Westway Oxford | Specialist Broker, OX2",
    metaDescription:
      "Commercial mortgages for Botley and Westway (OX2), district retail centre, regeneration pipeline, Seacourt Tower, Elms Parade. Specialist district retail, mixed-use and regeneration lender panel.",
    hero: {
      h1: "Commercial Mortgages Botley and Westway",
      lede:
        "Botley sits at the western edge of Oxford on the Vale of White Horse District Council border in OX2, anchored by the Westway shopping centre, Elms Parade and the Botley Road corridor running west out of central Oxford. The fabric is a district retail centre with the redeveloped Westway scheme delivering ground-floor retail and a hotel above, the Elms Parade neighbourhood centre, plus a regeneration pipeline that has reshaped Botley over the last decade. We arrange commercial mortgages for Westway scheme retail and hotel investment, Elms Parade district retail, owner-occupier independent retail and the wider Botley Road regen flow. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Botley and Westway commercial property market",
      body: [
        "Botley's commercial market is shaped by the Westway redevelopment, which delivered a new district retail centre with ground-floor Class E, food and beverage units, a Premier Inn hotel above and residential apartments alongside, replacing the legacy Botley centre. Rents on the prime Westway parade sit at £25 to £35 per sq ft in 2026, with secondary Elms Parade and Botley Road frontage at £18 to £28. The catchment runs across north-west Oxford, the Vale of White Horse rural villages and the wider commuter belt feeding into central Oxford via the Botley Road.",
        "Transactions split three ways. Westway scheme retail and ancillary unit investment trades at the mid-cap end on long FRI leases at 6.5 to 7.5% yields, in lot sizes from £500K up to £3M. Premier Inn and other hotel investment on the Westway scheme funds through trading-business and investment desks on operator covenants. Owner-occupier independent retail on Elms Parade and the secondary Botley Road frontage forms the third flow, smaller in count but steady. Pricing on Botley district retail investment 6.5 to 7.5% pa at 65 to 70% LTV with strong covenants, secondary parade 7.0 to 8.0% pa at 65 to 70% LTV.",
        "HM Land Registry residential transactions across the OX2 Botley catchment confirm a deep family and commuter market underwriting the convenience and family-leisure end of the Westway scheme. We use the residential data as a directional signal on commercial demand strength. Stamp duty applies at the commercial rates on every freehold commercial purchase, refinancing is unaffected.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Botley and Westway (OX2)",
      body:
        "Two live Oxford City Council Idox files anchor the current Botley commercial mortgage pipeline. A Westway scheme tenant-mix file covers reconfiguration of unit demise and Class E uses within the existing Westway centre, the canonical Botley investment archetype we refinance on 65 to 70% LTV commercial investment mortgages once tenant mix stabilises. An Elms Parade frontage file covers external alterations and shopfront repositioning at a Class E unit on the Elms Parade neighbourhood centre, illustrative of the smaller-cap Botley owner-occupier refit pipeline. The wider Botley Road regen pipeline continues to deliver mixed-use schemes with ground-floor Class E and residential above, a profile we routinely fund via bridge-to-let during conversion and term-out at stabilisation. Stamp duty applies at the commercial rates.",
      refs: [
        {
          ref: "26/00792/FUL",
          address: "Westway centre, Botley, Oxford OX2 9PB",
          postcode: "OX2 9PB",
          proposal: "Reconfiguration of unit demises and Class E tenant-mix changes within the Westway district retail centre, canonical Botley investment asset-management archetype.",
        },
        {
          ref: "26/00558/FUL",
          address: "Elms Parade, Botley, Oxford OX2 9LP",
          postcode: "OX2 9LP",
          proposal: "External alterations and shopfront repositioning at a Class E unit on the Elms Parade neighbourhood centre, illustrative of Botley owner-occupier refit activity.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Botley and Westway",
      items: [
        { label: "Westway scheme retail investment", detail: "Ground-floor Class E and F&B let stock within the redeveloped district centre.", typicalSize: "£500K to £3M" },
        { label: "Westway hotel trading-business", detail: "Premier Inn and branded hotel operator stock above the retail scheme.", typicalSize: "£2M to £8M" },
        { label: "Elms Parade neighbourhood retail", detail: "Smaller-cap district parade retail with independent and convenience covenants.", typicalSize: "£350K to £900K" },
        { label: "Botley Road regen mixed-use", detail: "Ground-floor Class E with residential above on the Botley Road corridor.", typicalSize: "£500K to £2M" },
        { label: "Owner-occupier independent retail", detail: "Independent retailers buying their Elms Parade or Botley Road freehold.", typicalSize: "£300K to £700K" },
        { label: "Single-let drive-thru and convenience", detail: "Class E and Sui Generis single-let stock on the Botley Road frontage.", typicalSize: "£500K to £2M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Botley and Westway",
      body: 'Westway and Elms Parade investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Hotel trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Owner-occupier independent retail via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Botley Road regen mixed-use via <a href="/property-types/mixed-use" class="text-secondary font-medium hover:underline">mixed-use route</a> and bridge-to-let during conversion. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Botley district retail and Westway hotel",
      body:
        "Strong across the OX2 Botley archetypes. Westway scheme retail investment competes across <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, <strong>Santander</strong>, <strong>Shawbrook</strong> and Cambridge & Counties at 65 to 70% LTV and 6.5 to 7.5% pa with strong tenant covenants. Premier Inn and branded hotel trading-business is led by <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and HTB on operator EBITDA at 60 to 65% LTV and 7.5 to 9.0% pa, with each carrying a different brand-comfort and operator-track-record threshold. Single-let drive-thru with a national covenant on a long FRI lease prices keenest, often through the high-street panel at 6.0 to 7.0% pa. <strong>LendInvest</strong> covers new-build hotel and retail park reconfiguration bridge funding. Owner-occupier independent retail routes through <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> and Allica Bank at 70 to 75% LTV and 6.5 to 7.5% pa. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "leisure-hospitality", "pub-restaurant", "mixed-use", "office", "semi-commercial"],
    faqs: [
      {
        question: "Is the Westway centre fundable as commercial investment?",
        answer:
          "Yes, the Westway scheme is one of the keener-priced district retail investments in Oxford. Currently 6.5 to 7.5% pa at 65 to 70% LTV with strong tenant covenants. The 26/00792/FUL tenant-mix file is exactly the active asset-management profile we refinance against once stabilised. Stamp duty applies at the commercial rates on the larger lot sizes.",
      },
      {
        question: "How do we fund the Premier Inn at Westway?",
        answer:
          "Trading-business mortgage on operator EBITDA. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and HTB lead the Oxford hotel shortlist at 60 to 65% LTV and 7.5 to 9.0% pa, with two to three years of operator accounts and EBITDA cover at 1.5 to 2.0x. Branded covenant operators price keenest.",
      },
      {
        question: "Can we fund Botley Road regen mixed-use schemes?",
        answer:
          "Yes, typically via bridge-to-let through <strong>Shawbrook</strong> or <strong>LendInvest</strong> during conversion, then term-out to mixed-use mortgage at 65 to 75% LTV post-stabilisation. Blended ICR around 145% on combined ground-floor commercial rent and upper-floor AST income.",
      },
      {
        question: "What rate on an Elms Parade independent retail owner-occupier?",
        answer:
          "Currently 6.5 to 7.5% pa at 70 to 75% LTV on EBITDA cover at 1.3 to 1.5x. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong> and Allica Bank all compete actively. Refinancing maturing five-year fixes from 2020 to 2021 is currently the highest-volume use case across this part of the parade. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "iffley-iffley-road": {
    slug: "iffley-iffley-road",
    name: "Iffley and Iffley Road",
    metaTitle: "Commercial Mortgages Iffley and Iffley Road | Specialist Broker, OX4",
    metaDescription:
      "Commercial mortgages for Iffley and Iffley Road (OX4 1), the leisure and HMO belt running south-east from Magdalen Bridge. Roger Bannister Track, Iffley Village, Cowley Road adjacency. Specialist HMO and semi-commercial lender panel.",
    hero: {
      h1: "Commercial Mortgages Iffley and Iffley Road",
      lede:
        "Iffley Road runs south-east from Magdalen Bridge through OX4 1 toward Iffley Village, threading the leisure cluster around the Roger Bannister Track and Iffley Road Sports Centre on the University of Oxford estate, the independent F&B and convenience parade serving the deep student catchment, and one of the densest HMO belts in the city stretching across to the Cowley Road. The fabric is Victorian terrace ground-floor Class E retail and food, three-storey HMO conversions on Hurst Street, Magdalen Road and James Street, plus a small parade of leisure-ancillary occupiers feeding the sports estate. We arrange commercial mortgages for Iffley Road F&B and convenience retail, HMO block investment and portfolio refinance, semi-commercial shop-with-flat blocks, and the leisure-ancillary owner-occupier flow that runs alongside the Bannister Track footprint. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Iffley and Iffley Road commercial property market",
      body: [
        "Iffley Road and the surrounding OX4 1 streets form one of the most active HMO and semi-commercial submarkets in Oxford. The Iffley Road Sports Centre on the University of Oxford estate (home of the Roger Bannister Track where the first sub-four-minute mile was run in 1954) anchors a small but persistent leisure-ancillary occupier cluster, with physiotherapy, sports massage, specialist retail and student-facing F&B on the parade between Magdalen Bridge and the Iffley Village turn. Cowley Road adjacency means the Iffley Road catchment runs continuously into the deepest independent F&B and HMO belt in Oxford. Rents on prime Iffley Road parade in 2026 sit at £25 to £40 per sq ft on Zone A frontage, with secondary at £18 to £28.",
        "Transactions split between HMO block investment and semi-commercial shop-with-flat. The HMO stack runs through Divinity Road, Magdalen Road, Hurst Street, James Street and the streets immediately off Iffley Road, with five to eight room converted Victorian terraces the typical asset and 7 to 9% yields on stabilised stock. Semi-commercial shop-with-flat blocks combine ground-floor Class E retail with upper-floor HMO or AST income and trade at 7 to 8% yields. Leisure-ancillary owner-occupier purchases (sports physio practices, specialist retailers, café operators serving the sports estate) form a smaller third flow at £350K to £900K lot sizes. Pricing on Iffley HMO 7.0 to 8.5% pa at 70 to 75% LTV via specialists, semi-commercial 7.0 to 8.5% pa, owner-occupier independent retail 6.5 to 7.5% pa.",
        "HM Land Registry residential transactions across OX4 1 confirm strong rental catchment depth feeding the HMO stack, with recent files including OX4 1EU James Street at £625,000 and OX4 1NG Morrell Avenue at £676,000. We use this as a market-temperature signal on the rental layer underneath each Iffley Road HMO and semi-commercial deal. The wider Oxford City Council Article 4 directions on HMO conversion cover the Iffley Road catchment, which means new C3-to-C4 conversions require full planning consent rather than permitted development. Stamp duty applies at the commercial or mixed-use rates on commercial purchases.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Iffley and Iffley Road (OX4)",
      body:
        "Two live Oxford City Council Idox files frame the current Iffley Road commercial mortgage pipeline. A leisure-ancillary file (Ref <strong>26/00445/FUL</strong>) covers external alterations and ancillary works at an Iffley Road OX4 1 unit serving the wider sports-estate catchment, illustrative of the leisure-ancillary owner-occupier and refit pipeline we routinely refinance against once works complete. A C3 to C4 HMO file (Ref <strong>26/00955/HMO</strong>) covers conversion of an Iffley Road OX4 1 terrace from single-family dwelling to a five to six bedroom HMO, the canonical OX4 HMO repositioning archetype that funds either on bridge during conversion or directly on a specialist HMO mortgage on stabilised licensed stock. Article 4 directions apply to most C3-to-C4 conversions across East Oxford. Stamp duty applies at the commercial or mixed-use rates.",
      refs: [
        {
          ref: "26/00445/FUL",
          address: "Iffley Road, Oxford OX4 1EE",
          postcode: "OX4 1EE",
          proposal: "External alterations and ancillary works at an Iffley Road OX4 1 unit serving the wider Roger Bannister Track and Iffley Road Sports Centre catchment, illustrative of the leisure-ancillary owner-occupier refit pipeline.",
        },
        {
          ref: "26/00955/HMO",
          address: "Iffley Road terrace, Oxford OX4 1SE",
          postcode: "OX4 1SE",
          proposal: "Change of use from C3 single-family dwelling to C4 HMO (5 to 6 bedrooms), representative of the deep East Oxford HMO repositioning pipeline subject to Article 4 directions.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types across Iffley and Iffley Road",
      items: [
        { label: "Iffley Road HMO block", detail: "5 to 8 room converted Victorian terrace HMOs serving Oxford Brookes and University of Oxford student demand.", typicalSize: "£500K to £1.4M per asset" },
        { label: "Semi-commercial shop-with-flat", detail: "Ground-floor Class E retail with upper-floor HMO or AST flat on the Iffley Road parade.", typicalSize: "£450K to £1.2M" },
        { label: "Iffley Road independent F&B", detail: "Café, takeaway and student-facing food operators on the prime parade.", typicalSize: "£350K to £900K" },
        { label: "Leisure-ancillary owner-occupier", detail: "Physiotherapy, sports massage and specialist retailers serving the Roger Bannister Track estate.", typicalSize: "£400K to £1M" },
        { label: "Iffley Village mixed-use", detail: "Heritage frontage Class E with upper-floor residential in the Iffley Village conservation area.", typicalSize: "£400K to £1M" },
        { label: "HMO portfolio refinance", detail: "Three to eight asset HMO portfolios concentrated within the OX4 1 ring.", typicalSize: "£1.5M to £6M aggregate" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Iffley and Iffley Road",
      body: 'HMO block investment routes via <a href="/property-types/hmo-block" class="text-secondary font-medium hover:underline">HMO block mortgage</a> on specialist HMO ICR. Iffley Road F&B trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Shop-with-flat blocks via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Leisure-ancillary owner-occupier via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. HMO portfolios via <a href="/services/portfolio-refinance" class="text-secondary font-medium hover:underline">portfolio refinance</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Iffley Road HMO, semi-commercial and leisure-ancillary",
      body:
        "Specialist-led across the OX4 1 archetypes. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> dominate Iffley Road HMO block investment at 70 to 75% LTV and 7.0 to 8.5% pa on specialist HMO ICR. <strong>LendInvest</strong> covers value-add HMO and bridge-to-let on C3 to C4 conversion plays under Article 4. <strong>Cynergy Bank</strong> is strong on Iffley Road semi-commercial and shop-with-flat blocks. HTB and Cambridge & Counties take selected OX4 1 HMO and semi-commercial deals in the £500K to £2M bracket. Iffley Road F&B trading-business runs through <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and Allica Bank on operator EBITDA at 60 to 65% LTV and 7.5 to 9.0% pa. Leisure-ancillary owner-occupier purchases (sports physio, specialist retail) route via <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> at 70 to 75% LTV and 6.5 to 7.5% pa on partnership EBITDA. HMO portfolio refinance threads through <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and <strong>LendInvest</strong>. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["hmo-block", "semi-commercial", "retail", "leisure-hospitality", "pub-restaurant", "mixed-use"],
    faqs: [
      {
        question: "What LTV on an Iffley Road HMO block?",
        answer:
          "Up to 75% LTV via specialists. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>LendInvest</strong> lead the Iffley Road HMO shortlist on specialist HMO ICR, with stabilised 5 to 8 room blocks pricing 7.0 to 8.5% pa. Licensing, Article 4 planning consent and EPC rating all influence the shortlist. HTB and Cambridge & Counties take selected deals.",
      },
      {
        question: "Can we fund a sports-ancillary practice next to the Roger Bannister Track?",
        answer:
          "Yes via <a href=\"/services/owner-occupier-commercial-mortgage\">owner-occupier mortgage</a>. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete on physiotherapy, sports medicine and specialist retail owner-occupier at 70 to 75% LTV and 6.5 to 7.5% pa on partnership EBITDA. Allica Bank is active on the same archetype below £2M.",
      },
      {
        question: "Does Article 4 apply across the Iffley Road catchment?",
        answer:
          "Yes, Oxford City Council Article 4 directions cover most of the Iffley Road catchment within OX4 1 alongside the wider East Oxford ring. New C3 to C4 HMO conversions require full planning consent rather than permitted development. Acquisition of an already-licensed HMO is unaffected. Refinancing existing licensed HMO blocks is one of the highest-volume Iffley Road use cases in 2026.",
      },
      {
        question: "What rate on a portfolio refinance of Iffley Road HMOs?",
        answer:
          "7.0 to 8.5% pa at 70 to 75% LTV via <a href=\"/services/portfolio-refinance\">portfolio refinance</a>. <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and <strong>LendInvest</strong> lead three to eight asset HMO portfolio refinancing across the OX4 1 ring on blended specialist HMO ICR. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "marston": {
    slug: "marston",
    name: "Marston",
    metaTitle: "Commercial Mortgages Marston Oxford | Specialist Broker, OX3",
    metaDescription:
      "Commercial mortgages for Marston (OX3), the north-east Oxford suburban belt. Marston Road neighbourhood retail, dental practice and GP healthcare ancillary, convenience. Specialist suburban owner-occupier and Thames Valley lender panel.",
    hero: {
      h1: "Commercial Mortgages Marston Oxford",
      lede:
        "Marston sits north-east of central Oxford in OX3 between Headington and the Cherwell River, threaded along Marston Road and the Old Marston village core. The fabric is suburban residential built around a small neighbourhood retail spine on Marston Road, an ancillary healthcare cluster feeding off the Headington hospital halo just to the south, and a tight cluster of convenience, café and independent retail serving the local catchment. We arrange commercial mortgages for Marston Road neighbourhood retail and convenience, dental and GP healthcare-ancillary owner-occupier, suburban semi-commercial shop-with-flat and the wider OX3 small-cap commercial flow. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Marston commercial property market",
      body: [
        "Marston is a smaller-cap suburban commercial market sitting at the OX3 north-east edge of Oxford. The Marston Road neighbourhood retail spine carries roughly twenty independent and convenience occupiers, the kind of suburban parade where the dominant uses are a convenience grocer, a café, a takeaway, an independent dentist and a couple of allied-health clinics. Rents on the prime Marston Road frontage in 2026 sit at £18 to £30 per sq ft, with secondary parade at £14 to £22. The OX3 healthcare halo from John Radcliffe, Churchill and the Nuffield Orthopaedic sites runs north into Marston, meaning the suburb carries a meaningful ancillary healthcare stock concentration relative to its size, dentists, private GPs, physiotherapists and specialist clinicians serving the hospital workforce catchment.",
        "Transactions are dominated by smaller-cap owner-occupier deals. Dental practice owner-occupier at £400K to £900K, independent retail owner-occupier at £300K to £700K, suburban semi-commercial shop-with-flat at £300K to £750K. Investment flow is thinner, with the Marston Road parade typically held in long-term private ownership and trading only intermittently. The deep-volume zone for our Marston commercial mortgage book is the £200K to £700K bracket. Pricing on Marston Road owner-occupier 6.5 to 7.5% pa at 70 to 75% LTV on EBITDA cover, semi-commercial 7.0 to 8.0% pa at 70 to 75% LTV. The market is one of the quieter Oxford submarkets but with deeper covenant comfort across the high-street lender panel because of the predominantly small-business suburban occupier mix.",
        "HM Land Registry residential transactions across the Marston catchment confirm a deep family and professional market underwriting the convenience and healthcare-ancillary end of the Marston Road parade. We use the residential data as a directional signal on commercial demand strength, not as a commercial comparable. Stamp duty applies at the commercial rates on every freehold commercial purchase, healthcare owner-occupier acquisitions follow the commercial SDLT scale.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Marston (OX3)",
      body:
        "Two live Oxford City Council Idox files frame the current Marston commercial mortgage pipeline. A Marston Road neighbourhood retail file (Ref <strong>25/02745/FUL</strong>) covers internal reconfiguration of a Class E unit on Marston Road to include a dental practice with retained convenience use, illustrative of the deep healthcare-ancillary repositioning pipeline running off the OX3 hospital halo. A village-edge shopfront file (Ref <strong>26/00482/FUL</strong>) covers external alterations and shopfront repositioning at an Old Marston parade unit, illustrative of the smaller-cap suburban owner-occupier refit pipeline. Stamp duty applies at the commercial rates on commercial purchases.",
      refs: [
        {
          ref: "25/02745/FUL",
          address: "Marston Road parade, Marston, Oxford OX3 0EH",
          postcode: "OX3 0EH",
          proposal: "Internal reconfiguration of a Class E neighbourhood retail unit to include a dental practice with retained convenience use, illustrative of OX3 healthcare-ancillary repositioning serving the hospital catchment.",
        },
        {
          ref: "26/00482/FUL",
          address: "Old Marston parade, Oxford OX3 0PR",
          postcode: "OX3 0PR",
          proposal: "External alterations and shopfront repositioning at an Old Marston parade unit, illustrative of suburban OX3 owner-occupier refit activity.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Marston",
      items: [
        { label: "Marston Road neighbourhood retail", detail: "Suburban parade retail freehold investment and owner-occupier with convenience and independent covenants.", typicalSize: "£300K to £700K" },
        { label: "Dental practice owner-occupier", detail: "Dentists buying their practice freehold on the OX3 healthcare-ancillary belt.", typicalSize: "£400K to £900K" },
        { label: "Private GP and allied-health clinic", detail: "Smaller-cap healthcare partnership purchases serving the Headington hospital halo.", typicalSize: "£400K to £900K" },
        { label: "Suburban semi-commercial", detail: "Ground-floor Class E retail with upper-floor residential on Marston Road and Old Marston.", typicalSize: "£300K to £750K" },
        { label: "Independent café and takeaway", detail: "Small-cap F&B trading-business serving the local residential catchment.", typicalSize: "£200K to £500K" },
        { label: "Owner-occupier independent retail", detail: "Independent retailers buying their Marston Road or Old Marston freehold.", typicalSize: "£250K to £600K" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Marston",
      body: 'Healthcare-ancillary owner-occupier routes via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on partnership EBITDA cover. Marston Road parade investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Independent café and takeaway via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a>. Shop-with-flat via <a href="/services/semi-commercial-mortgage" class="text-secondary font-medium hover:underline">semi-commercial mortgage</a>. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Marston healthcare-ancillary and neighbourhood retail",
      body:
        "Deep across the OX3 Marston suburban archetypes. <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Barclays</strong> run dedicated healthcare desks competing heavily on dentist, GP and allied-health partnership owner-occupier purchases at 70 to 75% LTV and 6.0 to 7.0% pa on partnership EBITDA. <strong>Santander</strong> takes selected healthcare deals through its commercial team. Allica Bank runs an active Thames Valley book and is competitive on Marston owner-occupier purchases below £1M. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and <strong>Cynergy Bank</strong> cover Marston Road semi-commercial and small mixed-use at 70 to 75% LTV and 7.0 to 8.0% pa. Independent café and takeaway trading-business runs through <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and Allica Bank on operator EBITDA at 60 to 65% LTV. HTB and Cambridge & Counties take selected Marston deals in the £400K to £900K bracket. The smaller deal sizes (£200K to £700K dominant) mean lender pricing is more relationship-driven than competitive-tender-driven. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["healthcare-care-home", "retail", "semi-commercial", "pub-restaurant", "mixed-use", "office"],
    faqs: [
      {
        question: "What rate on a Marston dental practice owner-occupier purchase?",
        answer:
          "6.0 to 7.0% pa at 70 to 75% LTV on practice EBITDA cover at 1.3 to 1.5x. <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Barclays</strong> run specialist healthcare desks competing aggressively on Marston dental and GP partnership buys-its-freehold deals feeding off the Headington hospital catchment. Allica Bank is active in the same bracket on the challenger side.",
      },
      {
        question: "Are smaller Marston deals (£200K to £400K) fundable on a commercial mortgage?",
        answer:
          "Yes. Most of the Thames Valley high-street commercial desks (<strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong>) and Allica Bank take Oxford owner-occupier deals from £200K upwards. Pricing is more relationship-driven at the smaller end, and we typically work two or three lenders side by side to get the right shortlist.",
      },
      {
        question: "Can we refinance a Marston Road semi-commercial block?",
        answer:
          "Yes via <a href=\"/services/semi-commercial-mortgage\">semi-commercial mortgage</a>. <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong> and <strong>Shawbrook</strong> dominate the suburban OX3 semi-commercial shortlist on blended ICR around 145% combining ground-floor commercial rent and upper-floor AST income. Pricing 7.0 to 8.0% pa at 70 to 75% LTV.",
      },
      {
        question: "What about a Marston café trading-business purchase?",
        answer:
          "Trading-business mortgage on operator EBITDA. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and Allica Bank lead the small-cap Oxford F&B shortlist at 60 to 65% LTV and 7.5 to 9.0% pa with two to three years of clean accounts and EBITDA cover at 1.5 to 2.0x. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "littlemore-blackbird-leys": {
    slug: "littlemore-blackbird-leys",
    name: "Littlemore and Blackbird Leys",
    metaTitle: "Commercial Mortgages Littlemore and Blackbird Leys | Specialist Broker, OX4",
    metaDescription:
      "Commercial mortgages for Littlemore and Blackbird Leys (OX4), the outer south Oxford trade and industrial belt. BMW Plant Oxford adjacency, Garsington Road, Blackbird Leys regeneration. Specialist industrial owner-occupier and Thames Valley lender panel.",
    hero: {
      h1: "Commercial Mortgages Littlemore and Blackbird Leys",
      lede:
        "Littlemore and Blackbird Leys sit at the outer south edge of Oxford in OX4, running south from the Cowley industrial belt around the BMW Plant Oxford site on Garsington Road. The fabric is a mix of trade-counter, light industrial and automotive supply-chain stock feeding BMW MINI manufacturing on one side, the Blackbird Leys 1960s estate centre on the regeneration pipeline on the other, plus a tight cluster of outer suburban healthcare, convenience and trade-business occupiers. We arrange commercial mortgages for industrial owner-occupier and investment, trade-counter and automotive supply-chain stock, regeneration mixed-use, and the wider outer suburban OX4 commercial flow. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Littlemore and Blackbird Leys commercial property market",
      body: [
        "Littlemore and Blackbird Leys form the outer south OX4 trade and industrial belt of Oxford. BMW Plant Oxford on Garsington Road employs roughly 3,500 staff in MINI vehicle manufacturing, anchoring an industrial supply-chain cluster across the wider Cowley and Garsington Road industrial estates. The trade-counter and light-industrial stock typically runs at £8 to £14 per sq ft headline rent in 2026, with the strongest unit configurations on the Garsington Road and Watlington Road frontages reaching £15 plus. Blackbird Leys, the large 1960s housing estate to the west of BMW Plant, has been the subject of a long-running regeneration pipeline focused on a new estate centre with ground-floor retail, healthcare and community uses, plus residential intensification on adjacent sites.",
        "Transactions split three ways. Industrial owner-occupier on the trade-counter and light-industrial stock around Garsington Road runs at £400K to £2M lot sizes on EBITDA-led underwriting at 70 to 75% LTV. Industrial investment on multi-let estates trades at 7.0 to 8.5% yields in 2026 on the OX4 Cowley belt, with lot sizes from £750K to £5M typical. Outer suburban convenience and healthcare-ancillary owner-occupier on the Blackbird Leys estate centre and the Littlemore village fringe forms the third flow at £300K to £900K. Pricing on Cowley industrial owner-occupier 6.5 to 7.5% pa at 70 to 75% LTV, industrial investment 7.0 to 8.5% pa at 65 to 75% LTV.",
        "HM Land Registry residential transactions across the OX4 Blackbird Leys and Littlemore catchments confirm a deep family and working-age market, with the Blackbird Leys regeneration pipeline intensifying residential supply over the next decade. We use the residential data as a directional signal on convenience and healthcare-ancillary covenant strength on the regeneration retail belt. Stamp duty applies at the commercial rates on every freehold commercial purchase. The industrial stock here typically funds via owner-occupier or investment commercial mortgage rather than trading-business.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Littlemore and Blackbird Leys (OX4)",
      body:
        "Two live Oxford City Council Idox files anchor the current outer OX4 commercial mortgage pipeline. A Blackbird Leys estate-centre regen file (Ref <strong>25/02212/FUL</strong>) covers the next phase of the estate-centre redevelopment with ground-floor Class E retail, healthcare and community uses, illustrative of the regeneration mixed-use pipeline we fund via bridge-to-let during conversion and term-out at stabilisation. A BMW-adjacent industrial file (Ref <strong>25/02078/FUL</strong>) covers reconfiguration and external alterations to a Garsington Road industrial unit serving the BMW MINI manufacturing supply chain, illustrative of the Cowley trade-counter and light-industrial owner-occupier and investment archetype. Stamp duty applies at the commercial rates.",
      refs: [
        {
          ref: "25/02212/FUL",
          address: "Blackbird Leys estate centre, Oxford OX4 6HJ",
          postcode: "OX4 6HJ",
          proposal: "Next-phase redevelopment of the Blackbird Leys estate centre delivering ground-floor Class E retail, healthcare and community uses with residential above, canonical OX4 regeneration mixed-use archetype.",
        },
        {
          ref: "25/02078/FUL",
          address: "Garsington Road industrial unit, Cowley, Oxford OX4 2NL",
          postcode: "OX4 2NL",
          proposal: "Reconfiguration and external alterations to a Garsington Road industrial unit serving the BMW Plant Oxford MINI manufacturing supply chain, illustrative of Cowley trade-counter and light-industrial activity.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types across Littlemore and Blackbird Leys",
      items: [
        { label: "Garsington Road light industrial", detail: "Trade-counter and small-mid box industrial owner-occupier feeding the BMW Plant supply chain.", typicalSize: "£400K to £2M" },
        { label: "Cowley industrial estate investment", detail: "Multi-let industrial estate investment in the OX4 industrial belt.", typicalSize: "£750K to £5M" },
        { label: "Automotive supply-chain owner-occupier", detail: "BMW-adjacent and aftermarket automotive trade businesses buying their freehold.", typicalSize: "£500K to £1.5M" },
        { label: "Blackbird Leys regen mixed-use", detail: "Ground-floor Class E retail and healthcare with residential above on the estate-centre redevelopment.", typicalSize: "£500K to £2M" },
        { label: "Outer suburban healthcare-ancillary", detail: "GP, dental and pharmacy owner-occupier serving the Blackbird Leys and Littlemore catchment.", typicalSize: "£400K to £900K" },
        { label: "Single-let trade-counter and convenience", detail: "Long-FRI-lease single-let stock on the OX4 outer suburban frontage.", typicalSize: "£500K to £1.5M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Littlemore and Blackbird Leys",
      body: 'Industrial owner-occupier routes via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover and via <a href="/property-types/industrial-warehouse" class="text-secondary font-medium hover:underline">industrial mortgage</a>. Cowley industrial estate investment via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Blackbird Leys regeneration mixed-use via <a href="/property-types/mixed-use" class="text-secondary font-medium hover:underline">mixed-use route</a> and bridge-to-let during conversion. Healthcare-ancillary owner-occupier via owner-occupier mortgage on partnership EBITDA. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Cowley industrial, BMW-adjacent trade and Blackbird Leys regen",
      body:
        "Specialist-led across the outer OX4 industrial archetypes. <strong>Cynergy Bank</strong> and <strong>Shawbrook</strong> are strong on Cowley industrial owner-occupier and BMW supply-chain trade businesses at 70 to 75% LTV and 6.5 to 7.5% pa on EBITDA cover. Allica Bank runs a deep industrial owner-occupier book across the Thames Valley and frequently tops the shortlist on £500K to £2M Cowley trade-business deals. <strong>InterBay Commercial</strong> takes Cowley industrial investment at 65 to 75% LTV and 7.0 to 8.5% pa on ICR. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on larger industrial estate investment and single-let trade-counter with strong-covenant tenants at 60 to 70% LTV and 6.5 to 7.5% pa. Cambridge & Counties is active on Oxford industrial investment in the £750K to £3M bracket. <strong>LendInvest</strong> covers value-add industrial and bridge funding on Blackbird Leys regen. Outer suburban healthcare-ancillary owner-occupier routes through the high-street healthcare desks at <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Barclays</strong> at 70 to 75% LTV. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["industrial-warehouse", "mot-garage-petrol", "retail", "healthcare-care-home", "mixed-use", "semi-commercial"],
    faqs: [
      {
        question: "What rate on a Garsington Road trade-counter owner-occupier purchase?",
        answer:
          "6.5 to 7.5% pa at 70 to 75% LTV on EBITDA cover at 1.3 to 1.5x. <strong>Cynergy Bank</strong>, <strong>Shawbrook</strong> and Allica Bank lead the Cowley industrial owner-occupier shortlist on small-to-mid box trade businesses. The BMW Plant supply-chain catchment provides deep covenant comfort across the panel.",
      },
      {
        question: "Can we fund a multi-let Cowley industrial estate investment?",
        answer:
          "Yes via <a href=\"/services/commercial-investment-mortgage\">commercial investment mortgage</a>. <strong>InterBay Commercial</strong>, <strong>Shawbrook</strong> and Cambridge & Counties lead the Oxford industrial investment shortlist at 65 to 75% LTV and 7.0 to 8.5% pa on ICR. Tenant covenant mix, EPC rating and weighted average lease term drive the shortlist as much as headline pricing.",
      },
      {
        question: "Is the Blackbird Leys regeneration pipeline fundable yet?",
        answer:
          "Yes, mixed-use phases with ground-floor Class E and residential above fund either as bridge-to-let through <strong>Shawbrook</strong> or <strong>LendInvest</strong> during conversion, or directly on a mixed-use mortgage at 65 to 75% LTV post-stabilisation. Blended ICR around 145% on combined commercial rent and AST income.",
      },
      {
        question: "What about a Littlemore village healthcare-ancillary owner-occupier?",
        answer:
          "Owner-occupier commercial mortgage with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> or <strong>Santander</strong>, all running specialist healthcare desks competing on dentist, GP and allied-health partnership purchases at 70 to 75% LTV and 6.0 to 7.0% pa on partnership EBITDA. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "oxford-science-park": {
    slug: "oxford-science-park",
    name: "Oxford Science Park",
    metaTitle: "Commercial Mortgages Oxford Science Park | Lab-Flex Office Finance, OX4",
    metaDescription:
      "Commercial mortgages for Oxford Science Park (OX4 4GA), the Magdalen College JV lab and innovation cluster. Oxford Nanopore, Adaptimmune, Sophia Genetics, Oxford Instruments tenant base. Specialist life-sciences and Class E office lender panel.",
    hero: {
      h1: "Commercial Mortgages Oxford Science Park",
      lede:
        "Oxford Science Park sits south of Oxford in OX4 4GA, a Magdalen College joint venture opened in 1991 and built out across roughly 75 acres into the flagship Oxford lab and innovation cluster. The tenant base reads across the front rank of UK life sciences and deep tech, Oxford Nanopore, Adaptimmune, Sophia Genetics, Oxford Instruments, Mind Foundry plus a deep bench of spinouts and growth-stage companies. The fabric is a mix of purpose-built lab-flex office buildings, Class E office stock and ancillary amenity, with continuous expansion and refurbishment delivering new GLA each year. We arrange commercial mortgages for Class E office investment within and adjacent to the park, lab-flex investment, owner-occupier life-sciences and innovation operator purchases, and the wider OX4 4 cluster commercial flow. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Oxford Science Park commercial property market",
      body: [
        "Oxford Science Park is the most significant single-site commercial property cluster in Oxfordshire by capital value and rental tone. Prime lab rents in 2026 sit at £55 to £70 per sq ft on the newest purpose-built specifications, with Class E office space ranging £40 to £55 per sq ft depending on floor plate and specification. Prime investment yields on let lab-flex sit at 5.5 to 6.5% on the strongest covenants and lease lengths, with Class E office investment trading at 6.0 to 7.0%. The tenant covenant strength across Oxford Nanopore, Adaptimmune, Sophia Genetics, Oxford Instruments and the wider innovation cluster supports tighter pricing than the broader Oxford commercial belt, though it remains noticeably wider than central London or core Cambridge.",
        "Transactions split between purpose-built lab investment, Class E office investment, and the smaller-cap occupier purchases that happen on the OX4 4 ring around the park boundary. The deepest investment flow is institutional and private credit, with lot sizes typically £5M plus for whole-building lab acquisitions. The Class E office portion of the park, and the adjacent OX4 4 office stock just outside the park curtilage, supports a smaller-cap investment book in the £1.5M to £5M range that funds more comfortably through the mainstream commercial lender panel. Owner-occupier purchases by life-sciences operators buying their Class E or smaller-flex building on the periphery sit in the £1M to £4M bracket, EBITDA-led underwriting at 60 to 70% LTV.",
        "HM Land Registry residential transactions across the wider OX4 4 catchment confirm a structurally premium professional market, with recent files including OX4 4EE Maywood Road at £685,000. We use this as a directional signal on the depth of the professional and life-sciences workforce supporting the park ecosystem. Stamp duty applies at the commercial rates on every freehold commercial acquisition. The pure-lab investment market is a specialist routing that needs careful lender selection because mainstream commercial mortgage desks find pure lab harder to underwrite than Class E office.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Oxford Science Park (OX4)",
      body:
        "Two live Oxford City Council Idox files anchor the current Oxford Science Park commercial mortgage pipeline. An on-park expansion file (Ref <strong>26/00925/FUL</strong>) covers the next phase of new lab-flex office GLA within the park boundary, illustrative of the continuous build-out pipeline running through the park into the late 2020s. A wider-cluster file (Ref <strong>26/00845/FUL</strong>) sits at the Begbroke Innovation District just over the Cherwell District Council boundary north of Oxford and is the most significant adjacent life-sciences pipeline scheme, illustrative of the wider Oxford lab cluster across both the Magdalen-anchored Science Park and the Begbroke and Oxford North innovation belt. Stamp duty applies at the commercial rates.",
      refs: [
        {
          ref: "26/00925/FUL",
          address: "Oxford Science Park, Robert Robinson Avenue, Oxford OX4 4GP",
          postcode: "OX4 4GP",
          proposal: "Next-phase expansion of lab-flex office GLA on the Magdalen College joint-venture Oxford Science Park estate, illustrative of the continuous build-out pipeline through the late 2020s.",
        },
        {
          ref: "26/00845/FUL",
          address: "Begbroke Innovation District, Begbroke OX5 1PF (Cherwell District Council)",
          postcode: "OX5 1PF",
          proposal: "Begbroke Innovation District next-phase life-sciences and innovation campus delivery, the most significant adjacent Oxford cluster scheme outside Oxford City Council boundaries.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types at Oxford Science Park",
      items: [
        { label: "Purpose-built lab investment", detail: "Whole-building lab acquisitions let to life-sciences operators on long FRI leases.", typicalSize: "£5M to £30M plus" },
        { label: "Class E office investment", detail: "Multi-let and single-let Class E office stock on the park and adjacent OX4 4 ring.", typicalSize: "£1.5M to £5M" },
        { label: "Lab-flex office investment", detail: "Hybrid lab and office configurations let to growth-stage innovation operators.", typicalSize: "£3M to £15M" },
        { label: "Life-sciences operator owner-occupier", detail: "Innovation and life-sciences operators buying their Class E or smaller-flex building.", typicalSize: "£1M to £4M" },
        { label: "OX4 4 ring Class E office", detail: "Adjacent office stock just outside the park curtilage in the wider OX4 4 cluster.", typicalSize: "£1M to £3M" },
        { label: "Park-adjacent ancillary amenity", detail: "Café, gym and ancillary services serving the park workforce and visitors.", typicalSize: "£500K to £2M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Oxford Science Park",
      body: 'Class E office investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Life-sciences operator owner-occupier via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Larger pure-lab investment routes through specialist and private-credit desks rather than mainstream commercial. Park-adjacent ancillary amenity via trading-business or owner-occupier as appropriate. Refinancing maturing facilities is one of the highest-volume single products in 2026 as the 2020-2021 lab refinance wave runs through.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Oxford Science Park lab, Class E office and innovation owner-occupier",
      body:
        "Mainstream commercial mortgage desks find pure-lab investment harder to underwrite than Class E office because of specialist plant, M&E and dilapidations risk. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> are competitive on the Class E office portion of the park and adjacent OX4 4 office stock at 65 to 75% LTV and 6.5 to 8.0% pa on ICR, preferring office-flexible Class E configurations to pure lab. HTB and Allica Bank are active on Class E office investment under £3M and on innovation-operator owner-occupier purchases at 70 to 75% LTV and 6.5 to 7.5% pa. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime Class E office investment at 60 to 65% LTV and 6.0 to 7.0% pa with strong-covenant let stock. Cambridge & Counties takes selected Class E office investment in the £1.5M to £5M bracket. Specialist £5M plus pure-lab investment routes via private credit, with Octopus Real Estate and ASK Partners active on Oxford and Begbroke life-sciences deals. <strong>LendInvest</strong> covers value-add and bridge-to-let on Class E reconfiguration. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "industrial-warehouse", "mixed-use", "leisure-hospitality", "healthcare-care-home", "retail"],
    faqs: [
      {
        question: "Can we get a commercial mortgage on a purpose-built lab investment?",
        answer:
          "Yes but the panel narrows. Mainstream commercial mortgage desks find pure-lab harder than Class E office because of specialist plant, M&E and dilapidations risk. £5M plus pure-lab investment typically routes via private credit, with Octopus Real Estate and ASK Partners active on Oxford Science Park and Begbroke life-sciences deals. Pricing 7.5 to 9.0% pa at 55 to 65% LTV.",
      },
      {
        question: "What rate on a Class E office investment at the park?",
        answer:
          "6.0 to 7.0% pa at 60 to 65% LTV on strong-covenant let stock via <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> or <strong>Santander</strong>. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, HTB and Cambridge & Counties price 6.5 to 8.0% pa at 65 to 75% LTV across the £1.5M to £5M Class E investment bracket.",
      },
      {
        question: "What product fits a life-sciences operator buying its Class E building?",
        answer:
          "Owner-occupier commercial mortgage. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong>, Allica Bank and HTB compete on innovation-operator owner-occupier purchases at 70 to 75% LTV and 6.5 to 7.5% pa on EBITDA cover. Two to three years of accounts and EBITDA cover at 1.3 to 1.5x is the typical underwriting threshold.",
      },
      {
        question: "Does the Begbroke and Oxford North scheme affect Oxford Science Park pricing?",
        answer:
          "Indirectly. The wider Oxford lab cluster includes both the Magdalen-anchored Oxford Science Park and the Begbroke Innovation District (Cherwell DC, ref 26/00845/FUL) just to the north. As Begbroke ramps from 2027 onwards, total Oxford lab supply increases and prime pricing tone is likely to soften slightly while overall transaction volume rises. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "begbroke-oxford-north": {
    slug: "begbroke-oxford-north",
    name: "Begbroke and Oxford North",
    metaTitle: "Commercial Mortgages Begbroke and Oxford North | Innovation District Finance, OX5",
    metaDescription:
      "Commercial mortgages for Begbroke and Oxford North (OX5, Cherwell District Council), the Oxford University-backed innovation district and mixed-use innovation campus. Specialist lab, life-sciences and institutional lender panel.",
    hero: {
      h1: "Commercial Mortgages Begbroke and Oxford North",
      lede:
        "Begbroke and Oxford North sit roughly six miles north of central Oxford in OX5, inside the Cherwell District Council planning authority rather than Oxford City Council. The Begbroke Innovation District is a major Oxford University-backed life-sciences and innovation campus currently under development on the Begbroke Hill site, with Oxford North a separate but adjacent mixed-use innovation scheme delivering office, lab, ancillary retail and residential across the A44 and A34 corridor. The fabric is currently most pipeline rather than stabilised stock, with meaningful investment-grade lab and Class E office GLA delivering from 2027 onwards. We arrange commercial mortgages for institutional and private-credit lab investment, Class E office investment and owner-occupier, ancillary retail and amenity, and the wider Cherwell innovation belt commercial flow. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Begbroke and Oxford North commercial property market",
      body: [
        "Begbroke and Oxford North form the most significant adjacent Oxford innovation pipeline outside the Oxford City Council boundary. The Begbroke Innovation District is anchored by the Begbroke Hill Oxford University estate (already host to specialist research groups and spinouts) and is being expanded into a full-scale life-sciences and innovation district through a multi-phase masterplan running across the late 2020s. Oxford North is a separate Thomas White Oxford-led mixed-use innovation campus on the A44 and A34 corridor delivering offices, labs, ancillary retail and residential. Both schemes sit inside Cherwell District Council, with planning files routed through the Cherwell Idox portal rather than the Oxford City Council portal.",
        "The 2026 transaction picture is mostly pipeline rather than stabilised stock. Investment-grade lab and Class E office GLA deliver from 2027 onwards in meaningful volume, with the institutional and private-credit lender base sizing up forward funding and stabilised investment opportunities now. Indicative pricing on prime lab investment within the cluster from 2027 is likely to track the wider Oxford-Cambridge lab tone at 5.5 to 6.5% yields on the strongest covenants, with Class E office at 6.0 to 7.0%. Ancillary retail, amenity and convenience leasing within the schemes will support a smaller-cap mainstream commercial mortgage flow once tenant mix stabilises. Lot sizes for the major lab investment opportunities will start at £10M plus, with smaller Class E and ancillary commercial lots in the £1M to £5M bracket.",
        "Cherwell District Council jurisdiction means planning files must be checked on the Cherwell Idox portal rather than the Oxford City Council portal we use for the other eleven Oxford-city districts on this site, a detail that matters at acquisition due-diligence. Stamp duty applies at the commercial rates on every freehold commercial purchase. Until the pipeline stabilises, most of our Begbroke and Oxford North activity is forward-funding scoping work and refinance discussion on stabilised neighbouring stock.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Begbroke and Oxford North (OX5)",
      body:
        "Two live Cherwell District Council Idox files frame the current Begbroke and Oxford North commercial mortgage pipeline. A Begbroke Innovation District next-phase file (Ref <strong>26/00845/FUL</strong>) covers the delivery of the next phase of life-sciences and innovation campus GLA on the Begbroke Hill site, the most significant adjacent Oxford lab cluster scheme outside Oxford City Council boundaries. An Oxford North masterplan file (Ref <strong>25/02955/HYBRID</strong>) covers the next stage of the Thomas White Oxford mixed-use innovation campus on the A44 and A34 corridor, illustrative of the wider Cherwell innovation pipeline. Both schemes sit inside Cherwell District Council jurisdiction, and acquisition due-diligence on stock here should check the Cherwell Idox portal rather than the Oxford City Council portal. Stamp duty applies at the commercial rates.",
      refs: [
        {
          ref: "26/00845/FUL",
          address: "Begbroke Innovation District, Begbroke Hill, Begbroke OX5 1PF (Cherwell DC)",
          postcode: "OX5 1PF",
          proposal: "Next-phase delivery of the Oxford University-backed Begbroke Innovation District life-sciences and innovation campus on the Begbroke Hill site, illustrative of the major Cherwell life-sciences pipeline.",
        },
        {
          ref: "25/02955/HYBRID",
          address: "Oxford North, A44 and A34 corridor, Oxford OX2 8JD (Cherwell DC)",
          postcode: "OX2 8JD",
          proposal: "Next-stage hybrid application for the Thomas White Oxford-led Oxford North mixed-use innovation campus including office, lab, ancillary retail and residential, illustrative of the wider Cherwell innovation pipeline.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types across Begbroke and Oxford North",
      items: [
        { label: "Begbroke purpose-built lab investment", detail: "Forward-funded and stabilised lab buildings on the Oxford University-backed Begbroke Innovation District estate.", typicalSize: "£10M to £50M plus" },
        { label: "Oxford North Class E office", detail: "Multi-let Class E office investment within the Oxford North mixed-use innovation campus.", typicalSize: "£2M to £8M" },
        { label: "Innovation operator owner-occupier", detail: "Growth-stage life-sciences and tech operators buying their Class E or lab-flex building.", typicalSize: "£1M to £4M" },
        { label: "Ancillary retail and amenity", detail: "Café, gym, convenience and amenity occupiers serving the cluster workforce.", typicalSize: "£500K to £2M" },
        { label: "Forward-funded mixed-use", detail: "Forward-funding of mixed-use phases combining commercial and residential.", typicalSize: "£3M to £15M" },
        { label: "Single-let trade-counter and convenience", detail: "Long-FRI-lease single-let convenience and trade-counter stock on the A44 frontage.", typicalSize: "£750K to £3M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Begbroke and Oxford North",
      body: 'Lab and Class E office investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR for stabilised stock, or via private-credit and institutional forward-funding for major lab phases. Innovation operator owner-occupier via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a> on EBITDA cover. Mixed-use and ancillary retail via <a href="/property-types/mixed-use" class="text-secondary font-medium hover:underline">mixed-use route</a>. Refinancing stabilised assets within the cluster will become the dominant single product from 2027 onwards as forward-funded buildings let up and stabilise.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Begbroke lab investment, Oxford North Class E and innovation owner-occupier",
      body:
        "Specialist and institutional-led across the Cherwell innovation belt. Major lab investment at Begbroke and Oxford North threads primarily through institutional debt funds and private credit, with Octopus Real Estate and ASK Partners active on Oxford life-sciences forward funding and stabilised lab investment in the £5M plus bracket. <strong>Shawbrook</strong> and <strong>InterBay Commercial</strong> are competitive on Oxford North Class E office investment at 65 to 75% LTV and 6.5 to 8.0% pa on ICR, preferring office-flexible Class E configurations to pure lab. HTB and Allica Bank are active on Class E office under £3M and on innovation-operator owner-occupier purchases at 70 to 75% LTV and 6.5 to 7.5% pa. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> take prime Class E office investment with strong covenants at 60 to 65% LTV and 6.0 to 7.0% pa. Cambridge & Counties is selectively active in the £1.5M to £5M Class E investment bracket. <strong>Cynergy Bank</strong> covers ancillary retail and amenity Class E investment. <strong>LendInvest</strong> takes value-add and bridge-to-let. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["office", "industrial-warehouse", "mixed-use", "retail", "leisure-hospitality", "healthcare-care-home"],
    faqs: [
      {
        question: "Is Begbroke and Oxford North inside Oxford City Council?",
        answer:
          "No, both schemes sit inside Cherwell District Council. Planning files route through the Cherwell Idox portal rather than the Oxford City Council portal. This matters at acquisition due-diligence because the planning history, Article 4 directions and local plan policy are all set by Cherwell, not Oxford City Council. Stamp duty applies at the commercial rates as in any other commercial purchase.",
      },
      {
        question: "Can we get a commercial mortgage on Begbroke lab investment?",
        answer:
          "Yes for stabilised Class E office and smaller Class E and ancillary lots through the mainstream commercial panel. Major purpose-built lab investment in the £5M plus bracket typically routes via private credit and institutional forward funding, with Octopus Real Estate and ASK Partners active on Oxford life-sciences deals. Pricing 7.5 to 9.0% pa at 55 to 65% LTV on the specialist routing.",
      },
      {
        question: "When does meaningful investment activity start?",
        answer:
          "From 2027 onwards in volume. The 2026 picture is mostly pipeline scoping, forward-funding discussion and refinance work on stabilised neighbouring stock. As Begbroke and Oxford North phases deliver and let up across 2027 and 2028, the stabilised investment market within the Cherwell innovation belt will deepen significantly.",
      },
      {
        question: "What rate on an Oxford North Class E office investment?",
        answer:
          "6.0 to 7.0% pa at 60 to 65% LTV on strong-covenant let stock via <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> or <strong>Santander</strong>. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, HTB and Cambridge & Counties price 6.5 to 8.0% pa at 65 to 75% LTV across the £2M to £8M Class E investment bracket. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

  "westgate-castle-quarter": {
    slug: "westgate-castle-quarter",
    name: "Westgate and Oxford Castle Quarter",
    metaTitle: "Commercial Mortgages Westgate Oxford and Castle Quarter | Specialist Broker, OX1",
    metaDescription:
      "Commercial mortgages for Westgate Oxford and Oxford Castle Quarter (OX1), the Land Securities and Crown Estate retail flagship plus the Oxford Castle heritage leisure cluster. Specialist prime retail, hotel and F&B lender panel.",
    hero: {
      h1: "Commercial Mortgages Westgate Oxford and Castle Quarter",
      lede:
        "Westgate Oxford and the Castle Quarter sit at the south-west edge of central Oxford in OX1, anchoring the city's flagship retail and heritage-leisure cluster. Westgate Oxford (OX1 1PE) is the Land Securities and Crown Estate retail flagship opened in 2017, anchored by John Lewis, Primark and a deep restaurant cluster. Oxford Castle Quarter (OX1 1AY) sits immediately adjacent, a heritage leisure and hospitality cluster threading restaurants, hotels and visitor attractions around the Oxford Castle and Prison historic estate. Together they form one of the densest concentrations of prime retail covenant, hospitality stock and restaurant operator EBITDA in the city. We arrange commercial mortgages for prime Westgate retail investment, Castle Quarter hospitality and F&B trading-business, hotel investment, and the wider OX1 1 flagship commercial flow. Indicative terms inside 48 hours.",
    },
    marketContext: {
      h2: "The Westgate and Oxford Castle Quarter commercial property market",
      body: [
        "Westgate Oxford is the strongest prime retail location in Oxfordshire. The scheme opened in October 2017 as a 800,000 sq ft retail and leisure destination, anchored by John Lewis, Primark and a deep mid-market and premium retailer line-up across two trading levels, with a major restaurant cluster on the upper terrace. Prime retail Zone A rents on Westgate in 2026 sit at £150 to £200 per sq ft, the keenest rental tone in the city. Restaurant rents on the upper terrace run £40 to £65 per sq ft on the strongest configurations. The Castle Quarter, the adjacent heritage-leisure cluster around Oxford Castle and the former Oxford Prison, anchors a separate but adjoining hospitality and F&B market, with rents running £30 to £55 per sq ft on the strongest restaurant frontages and hotel stock trading on operator EBITDA rather than capital value per sq ft.",
        "Transactions split between flagship retail investment (typically Land Securities and Crown Estate-anchored lot configurations that trade at institutional scale rather than the small-cap commercial mortgage market), individual restaurant operator freehold purchases on the Castle Quarter and upper-terrace cluster, and small to mid-cap hotel investment within and adjacent to the Castle Quarter. The deep-volume zone for our Westgate and Castle Quarter commercial mortgage book is the £750K to £4M bracket, restaurant freehold and operator purchases, smaller boutique hotel investment and refinance, and the smaller-cap retail investment that trades around the flagship edge. Pricing on prime retail investment 6.0 to 7.0% pa at 60 to 65% LTV on strong covenants, hotel and hospitality 7.0 to 9.0% pa at 60 to 65% LTV on operator EBITDA.",
        "HM Land Registry residential transactions inside OX1 1 cluster around college-adjacent leasehold flats and confirm a structurally premium central catchment. The Westgate and Castle Quarter together pull roughly 7 million annual Oxford visitors plus the resident student and professional population of 41,000 plus, underwriting strong tenant covenant assumptions on the prime retail and restaurant stock and supporting the hotel trading-business pricing on the adjoining hospitality cluster. Stamp duty applies at the commercial rates on every freehold commercial purchase.",
      ],
    },
    planningContext: {
      h2: "Recent commercial planning activity in Westgate and Castle Quarter (OX1)",
      body:
        "Two live Oxford City Council Idox files anchor the current Westgate and Castle Quarter commercial mortgage pipeline. A Westgate tenant-mix file (Ref <strong>26/00789/FUL</strong>) covers reconfiguration of unit demises and Class E tenant-mix changes within the Westgate scheme, the canonical flagship investment asset-management archetype we refinance against on prime retail investment terms once stabilised. A Castle Quarter F&B file (Ref <strong>25/02478/FUL</strong>) covers external alterations and shopfront reconfiguration at a Castle Quarter restaurant unit on New Road, illustrative of the upper-terrace and Castle Quarter F&B refit pipeline that funds either on bridge-to-let during conversion or directly on trading-business mortgage on stabilised operator EBITDA. Stamp duty applies at the commercial rates.",
      refs: [
        {
          ref: "26/00789/FUL",
          address: "Westgate Oxford, Bonn Square, Oxford OX1 1PE",
          postcode: "OX1 1PE",
          proposal: "Reconfiguration of unit demises and Class E tenant-mix changes within the Land Securities and Crown Estate Westgate Oxford flagship retail and leisure scheme, canonical OX1 1 flagship investment asset-management archetype.",
        },
        {
          ref: "25/02478/FUL",
          address: "Oxford Castle Quarter, New Road, Oxford OX1 1AY",
          postcode: "OX1 1AY",
          proposal: "External alterations and shopfront reconfiguration at a Castle Quarter restaurant unit on the New Road heritage-leisure cluster, illustrative of upper-terrace and Castle Quarter F&B refit activity.",
        },
      ],
    },
    schemeTypes: {
      h2: "Active commercial property types in Westgate and Castle Quarter",
      items: [
        { label: "Westgate prime retail investment", detail: "Ground-floor Class E and F&B let stock within the Land Securities and Crown Estate flagship scheme.", typicalSize: "£1M to £5M (smaller-cap lots)" },
        { label: "Westgate upper-terrace restaurant", detail: "Restaurant operator trading-business and freehold purchase on the prime restaurant terrace.", typicalSize: "£600K to £2M" },
        { label: "Castle Quarter hotel trading-business", detail: "Boutique and branded hotel operator stock around the Oxford Castle and former Prison heritage estate.", typicalSize: "£1.5M to £6M" },
        { label: "Castle Quarter F&B owner-occupier", detail: "Independent and small-chain restaurant operators on the New Road and heritage cluster.", typicalSize: "£500K to £1.8M" },
        { label: "Westgate-adjacent secondary retail", detail: "Smaller-cap secondary retail investment on Bonn Square and the wider OX1 1 footprint.", typicalSize: "£500K to £2M" },
        { label: "Heritage mixed-use", detail: "Listed heritage frontage combining ground-floor F&B with upper-floor offices or hotel rooms.", typicalSize: "£750K to £3M" },
      ],
    },
    finance: {
      h2: "Commercial mortgage products active in Westgate and Castle Quarter",
      body: 'Prime retail and mixed-use investment routes via <a href="/services/commercial-investment-mortgage" class="text-secondary font-medium hover:underline">commercial investment mortgage</a> on ICR. Restaurant operator and hotel trading-business via <a href="/services/trading-business-mortgage" class="text-secondary font-medium hover:underline">trading-business mortgage</a> on operator EBITDA. F&B owner-occupier purchases via <a href="/services/owner-occupier-commercial-mortgage" class="text-secondary font-medium hover:underline">owner-occupier mortgage</a>. Heritage repositioning via <a href="/services/commercial-bridge-to-let" class="text-secondary font-medium hover:underline">bridge-to-let</a> during conversion. Refinancing maturing facilities is the highest-volume single product in 2026.',
      structures: standardCmStructures,
    },
    lenderAppetite: {
      h2: "Lender appetite for Westgate prime retail and Castle Quarter hospitality",
      body:
        "Deep across the flagship OX1 1 retail and hospitality stock. <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong> compete on prime Westgate-adjacent retail investment with strong tenant covenants at 60 to 65% LTV and 6.0 to 7.0% pa. <strong>Shawbrook</strong> takes Westgate-adjacent secondary retail and mid-cap investment in the £1M to £4M bracket. <strong>Cynergy Bank</strong> and <strong>InterBay Commercial</strong> cover Castle Quarter F&B trading-business and heritage mixed-use at 60 to 70% LTV and 7.5 to 9.0% pa on operator EBITDA. Castle Quarter hotel trading-business funds through <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and HTB at 60 to 65% LTV and 7.5 to 9.0% pa on two to three years of operator accounts. Allica Bank runs an active Thames Valley book on Castle Quarter F&B operator owner-occupier at 70 to 75% LTV. Cambridge & Counties is selectively active in the £1.5M to £4M Westgate-edge investment bracket. <strong>LendInvest</strong> covers heritage repositioning bridge funding. Restaurant operator owner-occupier on the upper-terrace and Castle Quarter routes through <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and Allica Bank on EBITDA cover. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter, we do not hold FCA authorisation because the products we arrange are unregulated.",
    },
    relatedAssetClasses: ["retail", "leisure-hospitality", "pub-restaurant", "mixed-use", "office", "semi-commercial"],
    faqs: [
      {
        question: "Can we get a commercial mortgage on a Westgate retail unit?",
        answer:
          "Yes on smaller-cap lots within and adjacent to Westgate (£1M to £5M typical bracket on the commercial mortgage book). Pricing 6.0 to 7.0% pa at 60 to 65% LTV on strong tenant covenants via <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong> and <strong>Santander</strong>. The full Land Securities and Crown Estate ownership of the core scheme trades at institutional scale rather than the small-cap commercial mortgage market.",
      },
      {
        question: "What rate on a Castle Quarter hotel trading-business?",
        answer:
          "7.5 to 9.0% pa at 60 to 65% LTV via <a href=\"/services/trading-business-mortgage\">trading-business mortgage</a>. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and HTB lead the Oxford hotel shortlist on operator EBITDA cover at 1.5 to 2.0x with two to three years of operator accounts. Branded covenant operators price keenest.",
      },
      {
        question: "Can we fund a Westgate upper-terrace restaurant operator freehold?",
        answer:
          "Yes via <a href=\"/services/owner-occupier-commercial-mortgage\">owner-occupier mortgage</a> on operator EBITDA. <strong>Shawbrook</strong>, <strong>Cynergy Bank</strong> and Allica Bank lead the Westgate and Castle Quarter F&B owner-occupier shortlist at 65 to 75% LTV and 7.0 to 8.5% pa with two to three years of clean accounts and EBITDA cover at 1.5 to 2.0x.",
      },
      {
        question: "Are listed-building Castle Quarter frontages fundable?",
        answer:
          "Yes but the lender pool narrows because of listed-building restrictions on alterations and dilapidations. <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong> and HTB are most comfortable on listed central Oxford stock at 60 to 70% LTV. <strong>LendInvest</strong> covers value-add and heritage-conversion bridge funding. Commercial mortgages are unregulated and fall outside the FCA regulated mortgage perimeter.",
      },
    ],
  },

};

export function getAreaDetail(slug: string): AreaDetail | null {
  return areaDetails[slug] ?? null;
}
