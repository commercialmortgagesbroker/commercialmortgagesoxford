/**
 * Homepage content, Commercial Mortgages Oxford.
 *
 * Editorial logic: lead with the customer segment, not the city.
 * Three CM conversations dominate the broker's week,
 *   1. Owner-occupier (business buying its own premises)
 *   2. Investment landlord (buying / refinancing let commercial assets)
 *   3. Trading-business owner-operator (pubs, care, dental, MOT, hotel)
 * Oxford differs by sector mix: tight supply, life sciences and lab demand,
 * a tourism overlay, a hospital halo at Headington, and a BMW automotive
 * supply-chain belt at Cowley. Owner-occupier and refinance flow dominates.
 *
 * Voice: editorial, broker-led, diagnostic. Specifics over slogans. Avoid
 * "premier", "leading", "nestled", "vibrant", "trusted partner". Quote real
 * rate bands, real LTV bands, and real lender names. Only the eight lenders
 * on the network NAMED-LENDERS list get bold: Shawbrook, InterBay Commercial,
 * LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays, Santander.
 * Allica Bank, Hampshire Trust Bank (HTB) and Cambridge & Counties Bank
 * may be named but NOT bolded.
 */

export interface HomeContent {
  hero: {
    title: string; // HTML allowed, <em> for accent
    subtitle: string;
  };
  narrative: {
    eyebrow: string;
    h2: string; // HTML allowed
    body: string[]; // one element per paragraph, HTML allowed
  };
  essentialsExplainer: {
    eyebrow: string;
    h2: string;
    body: string[]; // HTML allowed
  };
  calculatorIntro: {
    eyebrow: string;
    h2: string; // HTML allowed
    body: string;
    phoneNudge: string;
  };
  areasIntro: {
    eyebrow: string;
    h2: string;
  };
  caseStudies: {
    eyebrow: string;
    h2: string;
    items: Array<{ name: string; detail: string; facility: string }>;
  };
  testimonials: {
    eyebrow: string;
    items: Array<{ quote: string; name: string; company: string }>;
  };
  faqs: Array<{ question: string; answer: string }>;
  finalCta: {
    eyebrow: string;
    h2: string;
    body: string;
  };
  areaDescriptions: Record<string, string>;
}

export const homeContent: HomeContent = {
  hero: {
    title:
      "Commercial Mortgages <em>Oxford</em>",
    subtitle:
      "Specialist commercial mortgage broker and commercial finance brokers based in Oxford, Oxfordshire and the wider Thames Valley commercial property market. We are mortgage advisers and a commercial mortgage brokerage that specialise in arrange commercial mortgages, owner-occupier, commercial investment, life sciences and lab investment, semi-commercial, portfolio refinance and trading-business commercial mortgages with the commercial lenders that actually write these deals across the UK. As a whole of market adviser and commercial mortgage broker covering Oxford, we benchmark commercial mortgage rates, mortgage products and lending criteria across a 90-plus panel of lenders to find the right mortgage and get the best deal on the day. Indicative terms in 48 hours from initial consultation, and unlike residential mortgages we test tenant covenant strength, EBITDA and the value of the property rather than personal income. Mid-2026 commercial mortgages in Oxford priced 6.0 to 9.0% pa on loan amounts from £150K to £10M, with competitive mortgage rates available on prime owner-occupier and prime commercial investment, and higher interest rates on shorter leases or weaker tenants. Call our Oxford 01865 line for product-neutral mortgage advice on commercial property finance and oxford property finance.",
  },

  narrative: {
    eyebrow: "Three conversations a week",
    h2: "Most commercial mortgages in Oxford come down to one of three conversations, owner-occupier, commercial investment, or trading-business finance.",
    body: [
      // Owner-occupier
      '<strong>1. Owner-occupier: buying the business premises your business trades from.</strong> The dental partnership taking the London Road OX3 surgery freehold off a retiring principal in <a href="/areas/headington" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">Headington</a>. The accountancy practice converting a lease-end into a Banbury Road OX2 townhouse purchase. The life sciences SME taking its own lab floor plate on <a href="/areas/oxford-science-park" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">Oxford Science Park</a> OX4 or at Begbroke Innovation District. The light-industrial trade-counter buying its Cowley OX4 unit off the landlord on the BMW Plant supply-chain belt. Underwriting for owner-occupier commercial mortgages hinges on filed accounts and EBITDA cover, typically 1.3 to 1.5 times the monthly mortgage payment, sometimes lower for established life sciences and professional-services sectors. Maximum loan-to-value to 75% on bricks-and-mortar, term 5 to 25 years. Allica Bank, <strong>Shawbrook</strong>, Hampshire Trust Bank and Cambridge &amp; Counties Bank sit at the sweet spot for the owner-occupied mortgage in Oxford. <strong>Lloyds</strong>, <strong>NatWest</strong> and <strong>Barclays</strong> price competitively for the owner-occupier borrower where the covenant is strong and the sector is mainstream. Real mid-2026 Oxford rates for owner-occupier: 6.0 to 7.5% pa. See <a href="/services/owner-occupier-commercial-mortgage" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">owner-occupier commercial mortgages in Oxford</a>.',

      // Investment landlord
      '<strong>2. Investment landlord: buying or refinancing a let commercial property.</strong> Acquiring a Westgate Oxford OX1 retail unit on a 10-year FRI lease to a national covenant. Refinancing four <a href="/areas/cowley-east-oxford" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">Cowley Road</a> shop-with-flat blocks off a maturing 5-year fix. Adding asset eight to a 6 million pound Oxford Science Park-adjacent lab investment portfolio. A commercial investment mortgage tests <strong>rental cover</strong> on the rental income, not your personal income. Typically ICR 140 to 160% on prime investment, DSCR 130 to 145% on portfolio. Lease length and tenant covenant carry as much weight as LTV, and in Oxford the Oxford University Hospitals NHS Trust, Magdalen College and Oxford Science Park occupier covenant chain underwrites a meaningful share of the lab and clinic investment stock. <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong> and <strong>Santander</strong> all compete on prime single-asset commercial investment mortgages in Oxford. <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and Together sit at the trickier end of investing in commercial property (multi-let, short lease, semi-commercial). Rate range for the commercial investment mortgage: 6.5 to 8.5% pa. See <a href="/services/commercial-investment-mortgage" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">commercial investment mortgages</a> or <a href="/services/portfolio-refinance" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">portfolio refinance</a>. For the wider local market read see our editorial on <a href="/oxford-commercial-property-market" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">the Oxford commercial property market in 2026</a>, or visit <a href="https://commercialmortgagesbroker.co.uk/locations/oxfordshire/oxford" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">our Oxford commercial mortgage broker hub</a>.',

      // Trading business
      '<strong>3. Trading business: owner-operator buying a going concern.</strong> The freehold hotel off the Cornmarket OX1 tourist spine. The CQC-rated care home off the John Radcliffe ancillary belt in <a href="/areas/headington" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">Headington</a>. The MOT and petrol forecourt off the Oxford ring road in <a href="/areas/littlemore-blackbird-leys" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">Littlemore</a>. The day nursery off the Botley Road in <a href="/areas/botley" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">Botley</a>. The independent pub on Walton Street, Jericho OX2. These are sector-specialist commercial mortgage applications. Lenders weigh goodwill, barrelage, CQC ratings, occupancy and Ofsted alongside bricks-and-mortar value. Oxford&rsquo;s 7 million visitor-a-year tourism overlay sustains unusually high hospitality and retail values per square foot, which anchors finance terms on small hotels, B&amp;Bs, restaurants and cafe-retail differently to a comparable Midlands or Northern market. EBITDA cover 1.5 to 2.0 times. LTV typically 60 to 70% on bricks, sometimes 70%-plus where goodwill is strong and the trading covenant is well evidenced. Allica Bank, <strong>Shawbrook</strong>, Cambridge &amp; Counties Bank and Hampshire Trust Bank dominate this segment of business mortgage and business loan demand in Oxford. <strong>Cynergy Bank</strong> for smaller SME operators and business owners. Rate range: 7.0 to 9.0% pa. See <a href="/services/trading-business-mortgage" class="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4">trading-business commercial mortgages</a>.',
    ],
  },

  calculatorIntro: {
    eyebrow: "Sense-check the numbers",
    h2: "Will the rent cover it? Will EBITDA cover it? <em class=\"font-editorial italic text-[color:var(--color-accent)]\">Try here first.</em>",
    body:
      "Drop in your purchase price or current valuation, the LTV you are aiming for, and the loan term you want. Pre-set at 7.5%, the 2026 mid-market interest rate locally for prime owner-occupier and commercial investment mortgages, with the slider running 6 to 9% across fixed and variable rate commercial mortgages. The output is a clean monthly mortgage repayments number you can put against your rent roll, your EBITDA, or your business cash flow. For ICR or DSCR stress testing on commercial investment mortgage deals, send the rent roll through and we will model lender-by-lender across our range of commercial lenders.",
    phoneNudge: "For a quote against live lender appetite",
  },

  areasIntro: {
    eyebrow: "Where the deals are",
    h2: "Twelve Oxford and Oxfordshire districts, twelve different commercial property profiles.",
  },

  caseStudies: {
    eyebrow: "Recent placements",
    h2: "Real Oxford commercial mortgage deals: every finance option, every lender, real numbers.",
    items: [
      {
        name: "Oxford Science Park lab investment refinance",
        detail: "Single-let lab investment, OX4, 15yr",
        facility: "4.2M, 65% LTV, 6.75%, NatWest",
      },
      {
        name: "Headington dental practice owner-occupier",
        detail: "Owner-occupier dental freehold, OX3, 20yr",
        facility: "1.95M, 70% LTV, 6.85%, Allica",
      },
      {
        name: "Cowley industrial owner-occupier",
        detail: "Trade-counter warehouse freehold, OX4, 20yr",
        facility: "2.4M, 65% LTV, 6.55%, Lloyds",
      },
    ],
  },

  testimonials: {
    eyebrow: "Recent client feedback",
    items: [
      {
        quote:
          "I had been quoted 8.1% by my own bank for the London Road surgery freehold in Headington. The team placed it at 6.85% with a challenger lender, 70% LTV, 20-year term, and walked me through the EBITDA cover model so I knew the deal was sound before legals. No surprises at credit committee.",
        name: "Dr A. Patel",
        company: "Practice principal, Headington, Oxford",
      },
      {
        quote:
          "Refinancing four shop-with-flat units off a maturing 5-year fix on Cowley Road in East Oxford. They benchmarked nine lenders, narrowed to three, and got us 65% LTV at 6.95% on a 5-year fix inside a 25-year term. ICR comfortably 145%. Took six weeks start to finish.",
        name: "S. Khan",
        company: "Portfolio landlord, Cowley Road, Oxford",
      },
      {
        quote:
          "First-time freeholder buying my MOT garage off the landlord on the Cowley industrial belt. They told me upfront which commercial lenders would and would not touch a single-asset trading business, saved me three weeks of chasing. Completed inside seven weeks with a high-street challenger.",
        name: "J. Hardcastle",
        company: "MOT garage owner, Cowley, Oxford",
      },
    ],
  },

  essentialsExplainer: {
    eyebrow: "Commercial mortgage essentials",
    h2: "Compare commercial mortgage solutions in Oxford: available lenders and interest rates, commercial investment mortgage, owner-occupier commercial mortgages, and the commercial mortgage journey.",
    body: [
      // What a CM is
      '<strong>What a commercial mortgage is.</strong> A commercial mortgage is a long-term commercial loan secured against a non-residential property in the United Kingdom used for business purposes, the cornerstone of real estate investing and commercial property finance. The property itself sits as security for the loan: if the borrower (the debtor) does not repay, the lender (the creditor) can repossess and recover the debt against the asset value under the rules on default (finance). That principle is the same as a standard residential mortgage, but the underwriting is different. A standard residential mortgage tests personal income and FCA-regulated affordability. A commercial mortgage in Oxford tests the business premises, the trading business inside it, and the rental income or lease income from any leasehold estate let inside the building. Commercial mortgages on non-dwelling commercial properties fall outside the FCA regulated mortgage perimeter, so this product is not regulated by the Financial Conduct Authority. We are not authorised and regulated by the FCA because the products we arrange are unregulated; in the financial services market this is called unregulated commercial lending. Where a deal would require FCA authorisation we refer the enquiry to a firm authorised and regulated for the relevant residential or commercial product. We act as a credit broker, not a lender, sourcing commercial finance for Oxford business owners and property investors, with the loan amount and loan-to-value ratio modelled deal-by-deal across our range of commercial lenders.',
      // Owner-occupier vs investment vs semi-commercial vs trading
      '<strong>The four core deal types we see across Oxford, Oxfordshire and the Thames Valley.</strong> <strong>Owner-occupied commercial mortgages</strong>: a trading business buys the business premises it operates from, dental, accountancy, life sciences SME, light-industrial, Class E retail, an Oxford Science Park floor plate, a Begbroke Innovation District unit or a Harwell Campus suite. Repayments on your mortgage come from EBITDA, so lenders model 1.3 to 1.5 times trading-profit cover on the owner-occupied mortgage. The owner-occupied route is the standard product available for Oxford SMEs buying a commercial property to trade from. <strong>Commercial investment mortgage</strong>: an investment property let to third-party tenants on commercial leases, tested on rental cover (ICR 140 to 160%) rather than your personal income. Most property investors choose this investment commercial mortgage route for let commercial property and existing commercial property held as a leasehold estate inside a limited company or SPV (ltd structure for tax). Limited companies dominate the investment commercial mortgage book on the Oxford side, with a single SPV per asset on stretched LTV deals. <strong>Semi-commercial mortgages</strong>: the classic flat above a shop on Cowley Road, the High Street or Walton Street, blended retail and residential income in mixed-use properties, 70 to 75% LTV on the strong shop-and-flat archetype. <strong>Trading-business mortgages</strong>: a pub, hotel, care home, MOT garage or day nursery bought as a going concern, where goodwill and sector ratings (CQC, Ofsted) shape the deal alongside bricks-and-mortar value. None of this overlaps with buy to let mortgages, which are a residential mortgage product tested on personal income and rental yield. A residential buy-to-let mortgage sits with a different panel of buy-to-let commercial lenders. We focus on commercial mortgage applications on existing commercial property and on property to let for business use.',
      // LTV, DSCR, ICR, rates
      '<strong>What drives commercial mortgage rates in Oxford.</strong> The loan-to-value ratio (LTV) is the lever. Owner-occupier reaches 75% on bricks-and-mortar property value, semi-commercial 70 to 75%, trading-business 60 to 70%. Lender appetite, lending criteria and property value are confirmed by a RICS Red Book property valuation (a real estate appraisal) commissioned before the binding mortgage offer. DSCR (debt-service coverage ratio) tests net rental income against the full mortgage repayments on a commercial investment mortgage, typically at 130 to 145%. ICR (interest cover ratio) tests rent against the interest payments component at 140 to 160%. The Bank of England base rate trajectory and the gilt curve set lender funding costs, then individual commercial lenders price margin on top. Mid-2026 Oxford commercial mortgage rates: 6.0 to 7.5% pa on owner-occupier, 6.5 to 8.5% pa on commercial investment and semi-commercial, 7.0 to 9.0% pa on trading business. Five-year fixes price roughly 0.25 to 0.50% above two-year fixes on the fixed rate side, with fixed and variable rate commercial mortgages running alongside each other for any fixed period 2 to 10 years. Bridging finance for change-of-use, auction purchases, or chain-break funding sits at 0.75 to 1.10% pm. When clients search for a bridging loan in Oxford we route the deal to a different set of commercial lenders: the bridge market is a higher-risk specialist area with its own products available and its own appetite. A bridge can run six to 24 months on rolled-up interest, with the bridge exit either a sale or a refinance to a term commercial mortgage. Bridging finance examples we see weekly include a Cornmarket retail-to-hotel change-of-use bridge, a vacant Botley warehouse bridge to refurb, and a Cowley industrial bridge for lab conversion, typical loan amounts from £500K to £5M. Interest-only structures are available on most commercial investment mortgage deals across our panel, supporting cash flow on let property to let stock like retail units, lab investment, care homes and HMOs renting to students and post-docs across the OX1 to OX4 belt. Interest-only on owner-occupier is rarer, lenders prefer capital and interest on owner-occupier so the loan amortises against the trading business, but a part interest-only and part repayment structure is possible. The interest-only window on most investment products runs five to ten years before the lender reviews. Lenders weigh credit score, business banking history, and the property local market on every deal.',
      // Refinance, capital raise, business growth
      '<strong>Refinance, remortgage, capital raise and business growth.</strong> Around a third of the deals we run for Oxford clients are not a fresh purchase commercial property transaction at all. They are a refinance or commercial remortgage off a maturing fix, capital raise to release equity against rising asset value to fund business growth, or release on sale of part of a property portfolio. Tight Oxford supply means that asset values index high and lenders trend conservative on fresh investment, so refinance and equity release dominate flow. The same panel and the same metrics apply: LTV, DSCR, ICR, EBITDA, lease length, tenant covenant, affordability. Competitive rates on commercial funding are most readily available on prime owner-occupier and prime investment, where high-street commercial desks compete hardest for the best deal and the best commercial mortgage offer. Stretched LTV, short-lease investment or sector-specialist trading business pushes the deal to a challenger or specialist commercial lender on a slightly higher margin, but the deal still completes. The auction purchases route, where speed kills the term option, runs via bridging finance first then a refinance to term once the asset is stabilised. Applying for a commercial mortgage in Oxford starts with a property pack, two years filed accounts (or rent roll for the investment commercial mortgage), a one-page business plan, a clear sense of the deposit you can put in, and a clear sense of business needs and intended business use of the property.',
      // Why a broker, fees, finance option summary
      '<strong>Why use a commercial mortgage broker rather than going direct.</strong> The high-street desks price within their own credit policy and rarely compare commercial mortgage offers across the whole of market. We do, every deal. For Oxford business owners choosing between two or three lenders direct, the spread between cheapest and most expensive viable mortgage offer is routinely 0.40 to 0.90% on rate plus 0.50 to 1.50% on arrangement fee, on a 1 million pound facility that compounds across the term. We map commercial mortgage solutions across the panel and present every finance option and every product available: high-street commercial, challenger bank, specialist mortgage lender, private finance, business loans secured against trading-asset value, development finance for a practically-complete Oxford scheme exiting senior dev debt, and bridging finance where the timing demands it. Oxford mortgage advice on commercial deals from our team is product-neutral and starts with a free initial consultation, by phone or in person, on the Oxford 01865 line. We will sit on the phone with a property investor weighing two letting routes, or an Oxford SME weighing freehold against lease renewal, and walk through the numbers without pushing a single lender. Whether the deal is an owner-occupier purchase, a commercial investment mortgage on a single let investment property, a portfolio refinance across a property portfolio, or a commercial mortgage refinance to reduce mortgage repayments off a maturing fix, we model it lender-by-lender first. As your whole of market commercial mortgage broker we run the available lenders and interest rates table, weigh the rates and terms, and shortlist three to five lenders for the best deal on the day. The broker fee is transparent and disclosed on completion, no upfront retainers. If the numbers will not work for any sensible commercial purposes or business use, we say so inside two business hours. Looking for a commercial mortgage that completes in four to eight weeks from application to completion? Most Oxford deals run in that window. The commercial mortgage journey is shorter when the borrower has a clean business plan, a clean credit history, and the lender has recent comparable approvals on file. As experts in commercial mortgages covering Oxford, Oxfordshire, Buckinghamshire and Berkshire we tailor every deal to your specific needs, with expert guidance from initial consultation through property valuation, due diligence, solicitor instruction and completion of the transaction. Our Oxford 01865 line is the fastest way to a same-day product-neutral steer on residential or commercial property finance, and on whether your deal is regulated by the Financial Conduct Authority or sits outside the FCA perimeter.',
      // Oxford market context paragraph (market snapshot)
      '<strong>The Oxford commercial property market in 2026, in numbers.</strong> Oxford is a knowledge-economy commercial market with one of the tightest planning frameworks in the United Kingdom, structurally low new commercial stock and an unusually high asset value per square foot. Oxford Science Park (Magdalen College joint venture, OX4), Begbroke Innovation District at Oxford North (OX5 adjacency), Harwell Campus (Didcot adjacency) and The Oxford Centre for Innovation anchor a deal flow dominated by lab and office investment, owner-occupier life sciences operators, tight-supply central retail and a hospitality overlay. The University of Oxford (~24,000 students) and Oxford Brookes (~17,000) anchor a young working-age population that drives HMO, student-adjacent semi-commercial and leisure demand across OX1 to OX4. Oxford University Hospitals NHS Foundation Trust (John Radcliffe, Churchill, Nuffield Orthopaedic Centre) sits at the heart of a Headington (OX3) healthcare ancillary cluster, dental, GP, allied health, private clinics, that drives steady owner-occupier freehold flow. BMW Plant Oxford at Cowley anchors an automotive supply-chain industrial belt in OX4 with consistent owner-occupier and refinance demand. Tourism (~7 million visitors a year) sustains hospitality and retail values per square foot at a meaningful premium to comparable UK secondary cities. Westgate Oxford, Oxford Castle Quarter and the Cornmarket / Queen Street spine anchor central retail; Cowley Road, Walton Street in Jericho and Magdalen Road in East Oxford anchor independent food and beverage; Templars Square serves the Cowley district shopping role. Oxford City Council planning is processing around 396 applications a year of which 131 are commercial-mortgage-relevant change-of-use, mixed-use or commercial schemes, with active hotel and capsule-hotel conversions on central retail upper floors and steady C3-to-C4 HMO churn in OX4. The most recent town-stats reading puts the residential median at 450,000 pounds with commercial values indexing strongly above that. For the commercial mortgages in Oxford market this means a structural bias toward owner-occupier life sciences and professional-services freehold purchase, a refinance-heavy investment book on tight-supply central retail and lab stock, and a long-running flow of HMO and semi-commercial activity driven by the student and post-doc population.',
      // Practical glossary and additional context to align with top rankers
      '<strong>Practical notes for Oxford business owners and property investors considering a commercial mortgage.</strong> Commercial mortgages typically run on a 3 to 25 years term, with capital and interest the default and interest-only available on most commercial investment mortgage deals. Commercial mortgages work differently to a standard residential mortgage: unlike residential mortgages, which the Financial Conduct Authority regulates, commercial mortgage products are unregulated and we operate as a commercial mortgage brokerage and adviser sourcing finance lender-by-lender. We arrange commercial mortgages and bridging finance to buy or refinance commercial property or land used for business purposes, including retail units, warehouse and industrial stock, mixed-use properties, semi-commercial parade, hospitality and care. Lenders offer different rates available depending on tenant covenant strength: prime national-covenant leases secure finance at competitive mortgage rates, while shorter leases or weaker tenants push deals to specialist commercial lenders at higher interest rates. We help property investors invest in commercial property, build property portfolios and service the debt against the rental income stream, with equity release at refinance where commercial property values have moved. The mortgage process for mortgages for commercial property in Oxford runs broadly the same as commercial mortgages in the UK more generally: we assess your financial standing, the type of loan that fits, model affordability, run the panel and present mortgage products that secure finance on the day. The Oxford property and oxford property finance market is one of the tightest commercial mortgage markets in the UK, so we benchmark across the panel of lenders every time, including specialist commercial lenders for sector-specific cases, to get the best deal for the client and find the right mortgage. Lender indemnity insurance may be required on stretched LTV cases. Frequently asked questions on Oxford commercial mortgages are covered in the FAQs below.',
      // Lender panel paragraph (named lenders explicit)
      '<strong>Oxford commercial lender panel in 2026.</strong> Our 90-plus lender panel covers every viable commercial lender active on Oxford stock. <strong>Lloyds</strong> Commercial Banking, <strong>NatWest</strong> (Cornmarket branch and Thames Valley commercial team), <strong>Barclays</strong>, <strong>Santander</strong> Commercial and HSBC cover the high-street commercial book on prime owner-occupier and prime commercial investment, with NatWest and Lloyds the most relationship-active in central Oxford. On the challenger and specialist side, <strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, <strong>LendInvest</strong> and <strong>Cynergy Bank</strong> are the most active commercial lenders we place Oxford deals with on semi-commercial, multi-let investment, trading-business and stretched-LTV cases. Allica Bank, Hampshire Trust Bank (HTB), Aldermore, YBS Commercial, Paragon Bank, OakNorth and Together complete the panel, with OakNorth picking up the structured 2 million pound-plus owner-occupier and lab investment deals on the Oxford Science Park and Begbroke flank. Cambridge &amp; Counties Bank is also on panel and is a defensible specialist on local owner-occupier, semi-commercial and trading-business deals across the Thames Valley. Private credit and fund finance (Octopus Real Estate, ASK Partners, Pluto Finance) sit on selected 5 million pound-plus Oxford or Begbroke / Harwell-adjacent deals. We approach two to five lenders for indicative terms on every Oxford deal we run.',
    ],
  },

  faqs: [
    {
      question: "What is a commercial mortgage and how does it work in Oxford?",
      answer:
        'A commercial mortgage in Oxford is a loan secured against income-producing or owner-occupied <em>commercial</em> property: offices, retail units, lab and life sciences premises, industrial, semi-commercial shop-and-flats, healthcare, hospitality, trading businesses. The lender takes a first charge on the property as security for the loan. Commercial mortgages on non-dwelling property are <strong>unregulated lending</strong>, they fall outside the Financial Conduct Authority regulated mortgage perimeter. We do not hold FCA authorisation because the products we arrange are unregulated. We refer regulated enquiries (residential mortgages, regulated semi-commercial where the borrower will occupy the residential element, regulated bridging) to regulated firms. For Oxford mortgage advice on the commercial side, we work case-by-case: every enquiry gets product-neutral mortgage advice before a lender is approached. Underwriting is fundamentally different from residential mortgages and buy to let: a residential buy-to-let mortgage leans on personal income and rental yield, a commercial mortgage in Oxford weighs tenant covenant, lease length, EBITDA or DSCR/ICR cover. Buy to let on a single dwelling is a residential product. Buy to let on a multi-let portfolio held in a limited company crosses into commercial investment mortgage territory where the borrower has four or more investment properties under a single ltd company.',
    },
    {
      question: "What types of commercial mortgages in Oxford are available?",
      answer:
        'Four main types of property finance for commercial use. <strong>Owner-occupied commercial mortgages</strong>: a business buys its own business premises (dental, accountancy, life sciences SME, light-industrial, Class E retail, an Oxford Science Park floor plate, a Begbroke Innovation District unit or a Harwell Campus suite). <strong>Commercial investment mortgage</strong>: investment properties let to third parties, tested on rental cover. <strong>Semi-commercial</strong>: shop-with-flat or Class E plus residential, blended income in mixed-use buildings on Cowley Road, the High Street and Walton Street. <strong>Trading-business mortgage</strong>: pub, hotel, care home, day nursery, bought as a going concern. Alongside these, <strong>bridging loan</strong> or bridging finance funds auction purchases, change-of-use or chain-break, repaid by sale or refinance onto term debt. Each commercial mortgage type carries its own panel of commercial lenders, fixed rates and rates and terms across fixed and variable rate commercial mortgages. Tailored commercial mortgage solutions are sourced lender-by-lender across our range of commercial lenders.',
    },
    {
      question: "How much can I borrow on a commercial mortgage in Oxford in 2026?",
      answer:
        'For owner-occupier and standard commercial investment mortgage, the maximum loan-to-value commonly stretches to <span class="figure-inline">75%</span>. Semi-commercial reaches <span class="figure-inline">75%</span> on the strong shop-and-flat archetype on Cowley Road, the High Street or Walton Street. Trading-business mortgages (pub, hotel, care homes, dental, MOT, nursery) sit tighter, <span class="figure-inline">60 to 70%</span> against bricks-and-mortar value, with affordability driven by EBITDA cover. Facility size 150K to 10M for the broker panel. 2M-plus structured deals route through OakNorth and private finance, particularly on Oxford Science Park and Begbroke Innovation District lab and office investment. Lenders assess the borrower covenant, deposit, business banking, the value of the property and the rental income stream together when they make a mortgage offer. Additional security in the form of a personal guarantee, a debenture over the trading company, or a second charge on another commercial asset can lift the LTV by 5 to 10% on borderline deals. Lenders obtain a RICS Red Book valuation on every commercial property before issuing a binding mortgage offer.',
    },
    {
      question: "What are commercial mortgage interest rates and fees in Oxford right now?",
      answer:
        'Mid-2026 ranges, by product. Owner-occupier on strong covenants: <span class="figure-inline">6.0 to 7.5%</span> pa. Commercial investment mortgage with prime tenant: <span class="figure-inline">6.5 to 8.5%</span> pa. Semi-commercial: <span class="figure-inline">6.5 to 8.5%</span> pa. Trading business: <span class="figure-inline">7.0 to 9.0%</span> pa. Commercial bridging: <span class="figure-inline">0.75 to 1.10%</span> pm. Both fixed and variable rate commercial mortgages are available across the panel: fixed rate periods 2, 3, 5 and 10 years, variable trackers floating over Bank of England base rate. Five-year fixes typically price 0.25 to 0.50% above two-year fixes. Arrangement fees 1.0 to 2.0% of facility, valuation 1.5K to 8K, legal fees 4K to 15K on the commercial side. Drivers on commercial mortgage rates: LTV, ICR/DSCR cover, lease length, tenant covenant, sector and borrower credit score / credit history.',
    },
    {
      question: "Can I get an interest-only commercial mortgage in Oxford?",
      answer:
        'Yes. Interest-only is widely available on commercial investment mortgage deals across our panel of commercial lenders, particularly where the borrower wants to maximise rental income cash flow on an Oxford lab investment, multi-let office or Cowley Road shop-with-flat portfolio. Owner-occupier deals are usually capital and interest (the bank wants the loan amortising against the business), but some lenders allow part-and-part. Trading-business mortgages can also flex to part interest-only on a case basis. Stress testing assumes a capital-and-interest payment in most lender affordability models even where the headline product is interest-only, to ensure long-term affordability and a clean repayment route at refinance. The interest payments are tax-deductible against rental income on a let investment commercial mortgage held in a limited company. The end of the term refinance can roll the deal onto a new fixed or variable product across our range of commercial lenders.',
    },
    {
      question: "Can I use a commercial mortgage to buy a commercial property in Oxford?",
      answer:
        'Yes. An owner-occupied mortgage is the standard product for an Oxford SME looking to purchase its own business premises, whether that is a London Road OX3 dental surgery in Headington, an Oxford Science Park OX4 office or lab floor, a Begbroke Innovation District OX5 unit, a Cowley industrial trade-counter warehouse, or a Cowley Road OX4 retail unit with flats above. Underwriting is built around your filed business accounts and EBITDA cover. Maximum loan-to-value reaches 75% on a strong business covenant. Best commercial mortgage rates sit between 6.0 and 7.5% pa for clean owner-occupier deals on the mainstream panel, with <strong>Lloyds</strong>, <strong>NatWest</strong>, <strong>Barclays</strong>, <strong>Santander</strong>, Allica Bank, Cambridge &amp; Counties Bank and <strong>Shawbrook</strong> the most active commercial lenders on this product. OakNorth picks up the 5M-plus owner-occupier deals on the Oxford Science Park and Begbroke flank. As Oxford-focused commercial finance experts we advise on whether to buy or continue to lease, and where to buy the first property to fit your business goals. Buyer-side legal advice from a commercial solicitor is essential, we work with a panel of Oxford solicitors who already act for the chosen creditor.',
    },
    {
      question: "How does bridging finance work for Oxford commercial property?",
      answer:
        'Commercial bridging is short-term debt (typically 6 to 18 months) used to bridge a timing gap. Common Oxford uses: auction purchases of a vacant Botley OX2 warehouse, change-of-use Class E to hotel on the Cornmarket OX1 retail spine, refurb-to-term on a Cowley OX4 industrial parcel, the renovation of an older Walton Street OX2 retail parade in Jericho, or a chain-break on a Headington OX3 mixed-use plot near the John Radcliffe. Rate range 0.75 to 1.10% pm, LTV to 70%, no monthly mortgage repayments on rolled-up product. The bridge exit is by sale or by refinance onto a term commercial mortgage. A bridging loan is a different product family from term commercial mortgages, so we treat it as a separate workstream, but we model both routes when timing matters.',
    },
    {
      question: "How long does an Oxford commercial mortgage take to complete?",
      answer:
        'Indicative terms within <span class="figure-inline">48</span> hours of a complete enquiry. Full application to completion typically <span class="figure-inline">4 to 8</span> weeks. The critical-path item is almost always the RICS Red Book valuation. Legals can run in parallel. Faster turnaround is possible on clean owner-occupier deals: we have completed in <span class="figure-inline">22</span> working days where the borrower had filed accounts, a clean legal pack, and the lender had recent comparable approvals on file. The commercial mortgage journey is shorter where the borrower comes prepared, the deposit is in place, and the solicitor is responsive. Trust and clean evidence at credit committee shortens the mortgage process meaningfully.',
    },
    {
      question: "What commercial property types do you fund in Oxford?",
      answer:
        'Every mainstream commercial property type across Oxford, Oxfordshire and the Thames Valley: <a href="/property-types/retail">retail units</a> (Westgate Oxford, Cornmarket, Queen Street, Cowley Road, Templars Square, suburban parade), <a href="/property-types/office">offices</a> (New Road, George Street, Park End Street, Banbury Road, Oxford Science Park, Begbroke Innovation District), lab and life sciences premises across Oxford Science Park, Begbroke and Harwell, <a href="/property-types/industrial-warehouse">industrial and warehouse</a> on the Cowley BMW Plant supply-chain belt and Botley fringe, <a href="/property-types/leisure-hospitality">leisure and hospitality</a> on Oxford Castle Quarter and the Cornmarket tourist spine, <a href="/property-types/healthcare-care-home">healthcare and care homes</a> on the Headington John Radcliffe ancillary belt, <a href="/property-types/pub-restaurant">pub and restaurant</a> on Walton Street and Cowley Road, <a href="/property-types/mot-garage-petrol">MOT, garage and petrol forecourt</a>, day nursery and independent school, <a href="/property-types/mixed-use">mixed-use buildings</a>, <a href="/property-types/semi-commercial">semi-commercial</a>, <a href="/property-types/hmo-block">HMO blocks</a> in Cowley and East Oxford, and <a href="/property-types/holiday-let-portfolio">holiday-let portfolios</a>. We do not fund pure residential or unsecured business loans.',
    },
    {
      question: "What is DSCR and ICR, and why do they matter?",
      answer:
        '<strong>DSCR</strong> (debt-service coverage ratio) tests whether your property net rental income covers the full mortgage repayments, typically at <span class="figure-inline">130 to 145%</span>. <strong>ICR</strong> (interest cover ratio) tests rent against interest only, typically at <span class="figure-inline">140 to 160%</span> on a commercial investment mortgage. Lenders assess these against a stressed notional rate 1 to 2% above the pay rate. For owner-occupier the test is <strong>EBITDA cover</strong>, your trading profit against the mortgage payment, typically 1.3 to 1.5 times. Get these models wrong and the offer prices down at credit committee, or falls over completely. We model them up front before approaching a lender, so the borrower walks into credit with an evidence pack the lender can already underwrite. Due diligence is faster when the numbers are tight from day one.',
    },
    {
      question: "Which lenders do you place Oxford commercial mortgages with?",
      answer:
        '90-plus lender panel. <strong>High-street commercial:</strong> <strong>NatWest</strong>, <strong>Lloyds</strong>, <strong>Barclays</strong>, <strong>Santander</strong>, HSBC, all with Thames Valley commercial desks active in central Oxford. <strong>Challenger banks:</strong> Allica, <strong>Shawbrook</strong>, Hampshire Trust Bank (HTB), YBS Commercial, Aldermore, Cambridge &amp; Counties Bank, <strong>Cynergy Bank</strong>, Paragon Bank, Recognise, Atom Bank for the smaller owner-occupier ticket. <strong>Specialist:</strong> OakNorth (active on Oxford Science Park and Begbroke 5M-plus lab and office deals), <strong>InterBay Commercial</strong> (OSB Group), <strong>LendInvest</strong>, Together, Reliance Bank, Handelsbanken. Private finance for 2M-plus structured deals through Octopus Real Estate, ASK Partners and Pluto Finance. Commercial mortgages in Oxford clients usually settle on a shortlist of three to five viable commercial lenders per deal.',
    },
    {
      question: "Do you cover the wider Oxfordshire and Thames Valley area too?",
      answer:
        'Yes, the full City of Oxford plus the immediate commercial flank: Cherwell District (Begbroke, Oxford North, Bicester, Banbury), South Oxfordshire District (Didcot, Henley-on-Thames, Wallingford, Wheatley), Vale of White Horse District (Abingdon, Wantage, Faringdon), West Oxfordshire District (Witney, Chipping Norton, Carterton), and the wider Thames Valley catchment into Reading, High Wycombe, Aylesbury and Swindon. We routinely fund deals across the A34 corridor, the M40 spine north and south of Oxford, and the broader Thames Valley catchment from the same panel. The 2025 BoE base rate trajectory has tightened high-street margins on prime, leaving more space for challenger banks on regional deals. That benefits Oxford, Oxfordshire and Thames Valley borrowers materially.',
    },
    {
      question: "Can I get a commercial mortgage with limited trading history or a thin credit score?",
      answer:
        'For owner-occupier, two years of clean accounts is the typical minimum, but we routinely place deals with <span class="figure-inline">12 to 18</span> months trading where the sector is well understood (dental, GP, pharmacy, life sciences spin-out from the University of Oxford, established trades). For commercial investment mortgage applications we focus on tenant covenant, lease length and ICR. Your personal trading history and credit score matter less. <strong>InterBay Commercial</strong> and Cambridge &amp; Counties Bank have meaningful flexibility on borrower history that high-street desks will not entertain. Atom Bank and Aldermore will look at limited-history owner-occupier where the affordability is clean.',
    },
    {
      question: "Why use an Oxford commercial mortgage broker rather than going direct to my own bank?",
      answer:
        'Two reasons. First, even your strongest high-street relationship prices within their own credit policy, and they do not benchmark you against the rest of the market. We do, every deal, every time. We act as a credit broker, not a lender. Second, the deals high-street desks decline (semi-commercial, trading-business, stretched LTV, sector-specific covenants, life sciences and lab investment) often place comfortably with a challenger or specialist at sensible rates and terms, but you have to know which desk to ring on the day. With 250M-plus arranged across a deep range of commercial lenders, that is our entire job as commercial mortgage brokers covering Oxford. If looking for a commercial mortgage in Oxford and the numbers do not work, we say so up front.',
    },
  ],

  finalCta: {
    eyebrow: "Send the deal",
    h2: "Three to five lenders.<br /><span class=\"text-[color:var(--color-accent)]\">Indicative terms in 48 hours.</span>",
    body:
      "Send the property details, the LTV you are aiming for, and a rough sense of the trading position or rental income. We will shortlist three to five commercial lenders, run live appetite, and come back with structured terms covering rate, LTV, term, fees and conditions. If the numbers do not work, you will know inside two business hours and will not have wasted a valuer time.",
  },

  areaDescriptions: {
    "city-centre-carfax":
      "OX1 city centre core, Cornmarket, Queen Street, the High Street and Westgate Oxford retail spine, plus the Oxford Castle Quarter leisure cluster. Prime central retail investment and central owner-occupier territory. NatWest (Cornmarket branch), Lloyds and Barclays active on the central pitches.",
    "jericho-north-oxford":
      "OX2 affluent professional-services and F&B district running north from the city centre up Banbury Road and Woodstock Road. Solicitors, accountants, surveyors, IFAs, dental and medical clinicians on 1,200 to 8,000 sq ft floor plates. Walton Street independent F&B spine. Owner-occupier dominant, multi-let townhouse investment at 6 to 8% yield.",
    headington:
      "OX3 hospital-adjacent district anchored by Oxford University Hospitals NHS FT, John Radcliffe, Churchill, Nuffield Orthopaedic and the NOC. Healthcare ancillary owner-occupier territory: dental, GP, allied health, private clinics. London Road retail strip plus emerging hotel and student-adjacent stock.",
    "cowley-east-oxford":
      "OX4 independent food and beverage spine on Cowley Road and Magdalen Road, the city most active semi-commercial parade district. Two-storey Victorian shop-with-flat archetype, independent coffee, restaurants, delis, butchers and boutiques. Owner-occupier dominant, mixed-use parade investment at 7 to 9% gross yield, HMO above retail in many stretches. Templars Square district shopping anchor.",
    summertown:
      "OX2 affluent retail and professional-services strip north of Jericho on Banbury Road. Independent retail, F&B, dental and medical clinic concentration, boutique office above. Owner-occupier dominant with small-cap semi-commercial investment territory.",
    botley:
      "OX2 district retail centre on Botley Road / Westway west of the city centre. Suburban retail anchor, day nursery, GP and clinic concentration, plus a regen pipeline on the Botley West gateway. Mixed-use semi-commercial and small-cap industrial owner-occupier territory.",
    "iffley-iffley-road":
      "OX4 sports and leisure cluster anchored by the Iffley Road athletic stadia and the Iffley Sports Centre. Student-adjacent HMO blocks and leisure-led trading-business mortgages, including university-adjacent F&B and small hotels. Specialist underwriting on tighter LTVs.",
    marston:
      "OX3 suburban district between Headington and Summertown. Light commercial, suburban retail parade, healthcare ancillary, day nursery and small-cap owner-occupier candidates. Hospital-adjacent stock spills over from the John Radcliffe footprint.",
    "littlemore-blackbird-leys":
      "OX4 outer suburban district south of the Cowley industrial belt. Trade businesses, MOT and forecourt, healthcare ancillary, day nursery and small-cap retail. Specialist lender territory at 60 to 65% LTV on trading-business cases.",
    "oxford-science-park":
      "OX4 flagship lab and office investment park, Magdalen College joint venture, anchor occupiers Oxford Nanopore, Adaptimmune, Sophia Genetics and Oxford Instruments. Lab and office investment refinance on single-let assets at 5.5 to 7% net yields, owner-occupier for life sciences SMEs and tech operators. OakNorth and high-street commercial active on 2M-plus deals.",
    "begbroke-oxford-north":
      "OX5 adjacency, Begbroke Innovation District and Oxford North masterplan north of the city. Innovation-district lab and R&D investment, life sciences owner-occupier, mixed-use scheme finance on emerging pipeline. Cherwell District planning authority. OakNorth, NatWest and private credit active on 5M-plus deals.",
    "westgate-castle-quarter":
      "OX1 retail and leisure flagship, Westgate Oxford (Land Securities and Crown Estate) plus the Oxford Castle Quarter leisure-led mixed-use district. Prime central retail investment territory, upper-floor hotel and serviced-office investment, owner-occupier on central professional-services freehold. National-covenant lease investment dominant.",
  },
};
