/**
 * /about page content, Commercial Mortgages Oxford.
 *
 * Voice: editorial, broker-led, first-person plural ("we").
 *
 * Regulatory position (2026-05-13): Commercial mortgages are
 * UNREGULATED lending. The broker is NOT FCA-authorised because
 * the products arranged sit outside the FCA's regulated mortgage
 * perimeter. Where a deal would require FCA authorisation, we
 * refer to a regulated firm. Never claim FCA authorisation.
 *
 * Rate range mid-2026: 6.0-9.0% pa overall.
 */

export interface AboutContent {
  hero: {
    h1: string;
    lede: string;
  };
  story: {
    h2: string;
    body: string[];
  };
  numbers: Array<{ value: string; label: string }>;
  approach: {
    h2: string;
    items: Array<{ label: string; detail: string }>;
  };
  credibility: {
    h2: string;
    body: string;
  };
}

export const aboutContent: AboutContent = {
  hero: {
    h1: "An experienced commercial mortgage broker for Oxford and Oxfordshire",
    lede:
      "Founded by Matt Lenzie: 25 years in financial services, raising debt and equity, and around £400m of property finance arranged. We arrange unregulated commercial mortgages across owner-occupier, investment, semi-commercial, portfolio refinancing and trading-business deals, approaching the high-street, challenger and specialist lenders whose criteria fit the deal.",
  },

  story: {
    h2: "Specialist, not generalist",
    body: [
      "We are led by founder Matt Lenzie, who has 25 years in financial services, raising debt and equity, and has arranged around £400m of property finance. We work on the borrower side, and that shapes how we structure and present every commercial mortgage application. We package an application the way a credit officer wants to read it: fewer decline surprises, faster decisions, sharper terms. We set out what an underwriter will need to see, what tends to trigger a decline, and where there is genuine flexibility versus where there is not.",

      "We broker commercial mortgages and only commercial mortgages. Owner-occupier, commercial investment, semi-commercial (the unregulated cases), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. We do not place residential mortgages, residential buy-to-let, regulated bridging, car finance, asset finance or unsecured business loans. Those are different markets with different lenders and different broker specialisms. We would rather be excellent at one product family than mediocre across six. If you call us about a residential remortgage, regulated semi-commercial, or anything else that would require FCA authorisation, we will refer you to a regulated firm that handles it properly.",

      'Matt has arranged around <span class="figure-inline">&pound;400m</span> of property finance. Facility sizes from <span class="figure-inline">&pound;150K</span> to <span class="figure-inline">&pound;10M+</span>, terms 5 to 25 years, and every mainstream sector: laboratory and life-sciences office investment, owner-occupier life-sciences operators, professional-services freehold, retail and leisure, healthcare and dental, hotels, pubs and restaurants, MOT and forecourt, day nursery, semi-commercial shop+flats (unregulated), mixed-use blocks and HMO portfolios. Our work focuses on Oxford, the OX1 to OX4 city core, the wider Oxfordshire county fringe and the research-and-innovation belt running through Oxford Science Park, Begbroke and the Harwell Campus adjacency to the south. Headington and the John Radcliffe hospital cluster, Jericho and North Oxford, Summertown, Cowley and East Oxford, Iffley, Marston, Botley, Littlemore, Blackbird Leys and the Westgate / Castle Quarter retail flagship all sit comfortably inside the same lender pool. See <a href="/case-studies" class="text-secondary font-medium hover:underline">our illustrative scenarios</a> for the kinds of deals we structure.',

      "Commercial Mortgages Oxford is a trading name of Lenzie Consulting Ltd. <strong>We are not FCA-authorised because commercial mortgages on commercial property are an unregulated activity in the UK.</strong> They fall outside the Financial Conduct Authority's regulated mortgage perimeter. Where a deal would require FCA authorisation, we refer the enquiry to a regulated firm. That position is not unusual. Most commercial mortgage brokers operate the same way, because the products themselves are unregulated by definition. What it does mean: the discipline we apply to every deal comes from packaging applications to the standard lenders expect, not from a regulated obligation. Where a deal would require FCA authorisation, we refer the enquiry to an appropriately authorised firm.",
    ],
  },

  numbers: [
    { value: "£400m+", label: "Property finance arranged" },
    { value: "25 yrs", label: "Financial services, raising debt and equity" },
    { value: "48 hrs", label: "Indicative terms" },
  ],

  approach: {
    h2: "How we work",
    items: [
      {
        label: "Specialist focus",
        detail:
          "Unregulated commercial mortgages only. No cross-selling, no loss-leader products, no residential, no regulated bridging, no unsecured. Single product family, deep expertise.",
      },
      {
        label: "Credit-ready packaging",
        detail:
          "We package an application the way a credit officer wants to read it: fewer decline surprises, faster decisions, sharper terms.",
      },
      {
        label: "Oxford market depth",
        detail:
          "We follow which Oxford and Thames Valley lenders are active. NatWest commercial banking out of the Cornmarket branch, Lloyds Commercial out of the Thames Valley regional team, Barclays and Santander Commercial covering Headington owner-occupier deals and Oxford Science Park investment lots. Shawbrook, InterBay Commercial and LendInvest cover the central retail and semi-commercial stock on Cornmarket, High Street, Jericho's Walton Street and the Cowley Road independent F&B spine. Cynergy Bank prices well on licensed-trade refinance across the central hotel and restaurant cluster. Allica Bank and Hampshire Trust Bank also write actively into Oxford freehold owner-occupier and stabilised investment cases. We prepare the comparable evidence a Thames Valley RICS valuer will expect to see. Naming a lender describes the market; it does not mean we have a relationship with it.",
      },
      {
        label: "Straight answers",
        detail:
          "If the deal does not work, wrong sector for that LTV, EBITDA cover too tight, ERC kills the remortgage maths, vendor's price unsupported by RICS comparables, you hear it on day one. Not after a wasted valuation fee.",
      },
      {
        label: "End-to-end execution",
        detail:
          "Single point of contact from initial enquiry through indicative terms, full application, RICS Red Book valuation, credit approval, solicitor instruction, completion and drawdown. You speak to one person; we coordinate everything else.",
      },
      {
        label: "Repeat clients",
        detail:
          "Most clients return for the next deal. Second freehold acquisition, portfolio addition, end-of-fix refinancing. The knowledge of your business and track record we build up makes the next case quicker to package.",
      },
    ],
  },

  credibility: {
    h2: "Why a specialist Oxford broker",
    body: 'The Oxford commercial mortgage market has genuine regional nuance: Oxford City Council and Cherwell District Council planning portals running side by side (Cherwell DC governs Begbroke, Oxford North and the wider Kidlington fringe rather than Oxford City), Oxford Science Park on Sandford-on-Thames Road as the flagship Magdalen College joint-venture office and lab cluster, Begbroke Innovation District / Oxford North to the city fringe, Harwell Campus to the south as a Thames Valley research anchor, Headington and the John Radcliffe / Churchill / Nuffield Orthopaedic hospital strip driving healthcare ancillary stock, the Westgate Oxford and Castle Quarter retail-and-leisure flagship, Cornmarket / High Street as the historic hospitality tourist spine, Walton Street and Jericho for independent F&B, Cowley Road for the East Oxford independent and HMO market, and the BMW Plant Oxford supply chain at the Cowley industrial edge. Lenders active in this market include Shawbrook, InterBay Commercial, LendInvest, Cynergy Bank, Lloyds, NatWest, Barclays and Santander, Allica Bank and Hampshire Trust Bank (each active on Thames Valley and Oxford freehold and stabilised investment cases), Aldermore, Together, Paragon Bank, OakNorth, YBS Commercial, Handelsbanken, Octopus Real Estate and ASK Partners on the larger Oxford Science Park and Harwell-adjacent investment lots, plus the long tail of specialist commercial mortgage desks. Naming a lender describes the market; it does not mean we have a relationship with it. We look for the lender whose criteria fit your deal most cleanly, and we will tell you which kind of lender that is on the first call.',
  },
};
