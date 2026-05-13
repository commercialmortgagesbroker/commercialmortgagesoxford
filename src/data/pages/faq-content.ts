/**
 * /faq page content, Commercial Mortgages Oxford.
 *
 * Four sections, 20 questions. Each answer 80 to 150 words for citable
 * passage-level depth. Required entities (used factually, never as
 * authorisation claims): mortgage, commercial mortgage, oxford, finance,
 * lender, broker, stamp duty, limited companies, refinance, residential.
 * Commercial mortgages are unregulated lending, do NOT claim FCA
 * authorisation. FAQ schema injected server-side.
 *
 * Voice: first-person plural ("we"). Rate range mid-2026: 6.0 to 9.0 pct pa.
 */

export interface FaqItem {
  question: string;
  answer: string; // HTML allowed
}

export interface FaqSection {
  heading: string;
  items: FaqItem[];
}

export const faqContent: FaqSection[] = [
  {
    heading: "The basics",
    items: [
      {
        question: "What is a commercial mortgage?",
        answer:
          'A commercial mortgage is long-term debt secured against income-producing or owner-occupied <strong>commercial</strong> property, offices, retail, industrial, semi-commercial shop+flats, healthcare, hospitality, life-sciences lab-enabled office and trading-business premises. In the Oxford market for mid-2026, typical facility size 150K to 10M pounds; LTV 65 to 75 percent; term 5 to 25 years; rate 6.0 to 9.0 percent pa. Repayment is normally monthly capital and interest on a reducing balance. The lender takes a first legal charge over the property and usually a personal or limited company guarantee. See <a href="/services">our commercial mortgage services</a> for the full eight-product breakdown across owner-occupier, investment, semi-commercial, portfolio refinance and trading-business.',
      },
      {
        question: "Do commercial mortgages sit inside the FCA regulated mortgage perimeter?",
        answer:
          'No. Commercial mortgages are unregulated lending and fall outside the FCA\'s regulated mortgage perimeter. <strong>We are not FCA-authorised</strong> because the products we arrange are unregulated by definition. We place owner-occupier, investment, semi-commercial (where the borrower does not occupy the residential element), portfolio refinance, trading-business, commercial remortgage, commercial bridging and second-charge commercial. Regulated cases (semi-commercial where the borrower occupies the residential element, regulated bridging, residential mortgages, consumer buy-to-let) are referred to an FCA-authorised firm. Most commercial mortgage brokers operate the same way, because the underlying products do not require FCA authorisation.',
      },
      {
        question: "Who is a commercial mortgage for?",
        answer:
          'Three primary audiences and our week splits roughly evenly across all three. <strong>Owner-occupier business buyers</strong>, buying or refinancing the freehold of premises their own business trades from. Dental partnerships in Headington and on London Road, accountancy and legal firms in Jericho and Summertown, life-sciences operators at Oxford Science Park, independent retail operators on Cowley Road, hospitality across the city centre. <strong>Commercial property investors and landlords</strong>, buying or refinancing let commercial assets, single-let or multi-let, sometimes a portfolio of five or more. <strong>Trading-business owner-operators</strong>, pubs, hotels, care homes, dental practices, MOT garages, day nurseries, buying the operational property and the going concern together. The product, the lender pool and the underwriting style are different across the three; the broker discipline is the same.',
      },
      {
        question: "What is the difference between a commercial mortgage and development finance?",
        answer:
          'A <strong>commercial mortgage</strong> funds the purchase or refinance of a completed, income-producing or owner-occupied commercial property. Funds drawn in a single tranche at completion. Term 5 to 25 years. Monthly capital and interest. <strong>Development finance</strong> funds construction or heavy refurbishment and is drawn in tranches against build-progress monitoring, with interest rolled or serviced and capital repaid at exit (sale or refinance) typically 12 to 24 months later. <strong>Bridge-to-let</strong> sits in between for short-term value-add, buy a vacant or under-let asset, refurbish or re-tenant, then term out onto a long-term commercial mortgage once stabilised. An Oxford Science Park vacant lab refit is a typical bridge-to-let candidate. We broker commercial mortgages and bridge-to-let; we do not place pure ground-up development finance.',
      },
    ],
  },
  {
    heading: "Eligibility, deposit and pricing",
    items: [
      {
        question: "What deposit do I need for a commercial mortgage in Oxford?",
        answer:
          'Typically <strong>25 to 30 percent</strong> for owner-occupier and commercial investment. Semi-commercial often 25 percent. Trading-business (pub, hotel, care home, MOT) and Oxford Science Park lab investment sit tighter at <strong>30 to 40 percent</strong>, reflecting the specialist underwrite. The deposit must be genuine equity and traceable: accumulated retained profit in the trading limited company, sale proceeds of another asset, family gift with a written declaration, or pension drawdown if structured cleanly. Lenders will not accept a second loan secured against the same property as the deposit. Personal guarantees do not count as equity. On owner-occupier deals where EBITDA cover is comfortable, occasional 80 percent LTV products exist but pricing is materially wider, usually not the right answer.',
      },
      {
        question: "Can I get a commercial mortgage with limited trading history?",
        answer:
          'For owner-occupier, two years of clean filed accounts is the comfortable minimum. We routinely place deals with <span class="figure-inline">12 to 18 months</span> trading where the sector is well understood, dental, GP, pharmacy, established skilled trades, regulated professions. The lender wants to see growing turnover, stable margins and a credible business case for the freehold purchase. For commercial investment the test is tenant covenant and lease length, not borrower trading history, a five-year-old single-asset SPV with a strong life-sciences tenant lease at Oxford Science Park prices well. <strong>InterBay Commercial</strong>, <strong>Cynergy Bank</strong>, Allica Bank and Hampshire Trust Bank (HTB) have meaningful flexibility on borrower history that high-street commercial desks will not entertain on the same case.',
      },
      {
        question: "Can a limited company take out a commercial mortgage?",
        answer:
          "Yes, and most commercial mortgages in the UK are written into <strong>limited companies</strong>. For commercial investment, a special-purpose vehicle (SPV) limited company is the standard structure: a single asset or portfolio held in a clean SPV with the SIC code 68209 (real-estate-related activities). For owner-occupier, the borrower is usually the trading limited company itself, with the property held on its balance sheet. Trading-business mortgages can be structured either way, into the trading company or into a separate property-holding limited company that leases the property back to the operating business. Lenders price both routes; the choice depends on tax efficiency, lender appetite and exit planning. We model the alternatives at indicative-terms stage.",
      },
      {
        question: "What rates are Oxford commercial mortgage lenders pricing at right now?",
        answer:
          'Mid-2026 ranges by product type, all inside the <span class="figure-inline">6.0 to 9.0 percent pa</span> band. Owner-occupier on strong covenants in defensive sectors: <span class="figure-inline">6.0 to 7.5 percent</span> pa. Commercial investment with prime tenant on a long lease, including life-sciences tenants at Oxford Science Park and Begbroke: <span class="figure-inline">6.5 to 8.0 percent</span> pa. Semi-commercial shop+flat: <span class="figure-inline">7.0 to 8.0 percent</span> pa. Trading-business (pub, hotel, care home, MOT, independent restaurant): <span class="figure-inline">7.5 to 9.0 percent</span> pa. Drivers: LTV, EBITDA or ICR / DSCR cover, lease length, tenant covenant, sector and borrower track record. Five-year fixed rates typically price 25 to 50 basis points above two-year fixes; 25-year terms price flat to 15-year terms.',
      },
      {
        question: "What fees should I expect on an Oxford commercial mortgage?",
        answer:
          '<strong>Arrangement fee:</strong> 1 to 2 percent of the facility, often added to the loan rather than paid up-front. <strong>RICS Red Book valuation fee:</strong> 1,500 to 8,000 pounds depending on asset complexity, sector-specialist (care, hotel, pub) and large investment or Oxford Science Park lab assets cost more. <strong>Legal fees:</strong> both sides, your solicitor 2,500 to 8,000 pounds typical for commercial conveyancing, the lender\'s solicitor recharged at cost 1,500 to 4,000 pounds. <strong>Broker fee:</strong> usually included in the arrangement fee with no extra charge to the borrower; on complex specialist cases a separate broker fee is sometimes agreed. <strong>Exit / redemption fee:</strong> some 5-year fixes carry early-repayment charges of 3 to 5 percent in years 1 to 2, tapering. Total fee cost typically lands at 2 to 3 percent of the facility.',
      },
      {
        question: "Do I pay stamp duty on commercial property in Oxford?",
        answer:
          'Yes, Stamp Duty Land Tax (SDLT) applies to commercial property purchases in England, including Oxford. The non-residential bands run 0 percent on the first 150,000 pounds, 2 percent on the next 100,000 pounds, and 5 percent on the balance above 250,000 pounds. There is no first-time-buyer relief, no second-property surcharge and no annual tax on enveloped dwellings issue (commercial does not engage ATED). Mixed-use property, a semi-commercial shop with a flat above, is taxed entirely on the non-residential rates if the commercial element is genuine, which is materially cheaper than residential stamp duty. SDLT is paid by the buyer at completion through the solicitor. SDLT is a cost the lender will not finance, it must come from your equity.',
      },
    ],
  },
  {
    heading: "Process and timing",
    items: [
      {
        question: "How long does a commercial mortgage take to complete in Oxford?",
        answer:
          'Indicative terms within <span class="figure-inline">48 hours</span> of a complete enquiry. Full completion typically <span class="figure-inline">4 to 8 weeks</span> for mainstream owner-occupier, commercial investment and semi-commercial. <span class="figure-inline">6 to 10 weeks</span> for trading-business cases (care home, hotel, pub, MOT) and Oxford Science Park lab investment reflecting the sector-specialist underwrite, environmental due diligence and specialist RICS valuation. The critical-path item is almost always the RICS Red Book valuation. Faster turnaround is possible on clean owner-occupier deals, fastest recent completion was <strong>24 working days</strong> from initial enquiry on a Jericho professional firm freehold, where the borrower had filed accounts ready, a tight legal pack and the lender had recent comparable approvals on file at the same Thames Valley valuer.',
      },
      {
        question: "What is a RICS Red Book valuation and why does it matter?",
        answer:
          "The Royal Institution of Chartered Surveyors (RICS) Red Book is the global standard for property valuation. Every commercial mortgage lender requires a Red Book valuation by a RICS-registered surveyor on its panel before it will draw down funds. The valuer inspects the property, reviews leases and tenant covenants, examines comparable evidence in the local market, considers the physical condition, and reports on market value, vacant possession value, and (for trading-business) sometimes goodwill value separately. The lender lends against this figure, not against the price the buyer is paying or the seller is asking. Aggressive valuation assumptions are the most common reason commercial deals stall at credit committee. Thames Valley valuers cost 1,500 to 8,000 pounds depending on asset complexity.",
      },
      {
        question: "Do I need a solicitor for a commercial mortgage?",
        answer:
          "Yes, and you need a solicitor experienced in commercial property and commercial finance, not your residential conveyancer. The lender instructs its own solicitor to act on the loan documentation; you instruct your solicitor to act on the property purchase or refinance. The two solicitors negotiate the facility agreement, the first legal charge, the debenture, the personal guarantee, the security pack, conditions precedent and CPSE replies. Standard commercial conveyancing runs three to four weeks from instruction; complex multi-asset cases longer. Legal fees both sides typically 4,000 to 12,000 pounds combined. We can recommend Oxford commercial property solicitors who are familiar with the lender desks on our panel, which materially helps the timeline.",
      },
      {
        question: "What documents will I need to apply?",
        answer:
          "<strong>Owner-occupier:</strong> two years of filed accounts, current management figures, a six-month projection, deposit proof, identity and address verification, the property sale memorandum, source-of-funds documents. <strong>Commercial investment:</strong> the lease, tenant covenant pack (tenant\'s accounts where relevant), rent roll, occupancy history, the SPV pack (incorporation, beneficial ownership, accounts if seasoned), deposit proof, identity. <strong>Trading-business:</strong> sector-specific evidence on top of the owner-occupier pack, CQC inspection reports for care, Ofsted for nursery, VOSA approval for MOT, NHS contract value for dental, occupancy and ADR for hotel, barrelage and licence for pub. We send a tailored document checklist on the first call.",
      },
    ],
  },
  {
    heading: "Oxford-specific questions",
    items: [
      {
        question: "Which planning portal do I use for Oxford commercial property?",
        answer:
          'Two planning authorities cover the Oxford commercial market and which one matters depends on where the property sits. For property inside the Oxford City boundary (OX1 to OX4 plus parts of OX2 and OX3), the planning authority is <strong>Oxford City Council</strong>, public access portal <a href="https://public.oxford.gov.uk/online-applications/">public.oxford.gov.uk/online-applications</a> (Idox-hosted). For Begbroke, Oxford North, Kidlington and the wider northern Oxfordshire fringe inside the OX5 catchment, the planning authority is <strong>Cherwell District Council</strong>, public access portal <a href="https://planningregister.cherwell.gov.uk/">planningregister.cherwell.gov.uk</a>. Filter by application type "Full" and use class E(g), B2 or B8 to surface offices, light industrial and storage / distribution. Where a property purchase depends on a planning consent, lenders want sight of the decision notice and any conditions before drawdown.',
      },
      {
        question: "Which Oxford postcodes do you cover?",
        answer:
          'The full OX postcode footprint that touches the Oxford commercial market. <strong>OX1</strong> covers the city centre, Carfax, Cornmarket, High Street and the Westgate / Castle Quarter retail and leisure flagship. <strong>OX2</strong> covers Jericho, North Oxford, Summertown and Botley. <strong>OX3</strong> covers Headington, Marston and the John Radcliffe hospital cluster. <strong>OX4</strong> covers Cowley, East Oxford, Cowley Road, Iffley, Littlemore, Blackbird Leys and Oxford Science Park. <strong>OX5</strong> covers Kidlington, Begbroke and Oxford North (Cherwell District Council jurisdiction). We also cover the wider Oxfordshire county fringe down to the Harwell Campus adjacency at Didcot (OX11) and the M40 corridor where the borrower or asset connects back to Oxford.',
      },
      {
        question: "Does Oxford Science Park affect lender appetite?",
        answer:
          'Yes, materially. Lab-enabled office and pure life-sciences investment at <strong>Oxford Science Park</strong> attracts a specific lender pool, the assets carry strong tenant covenants on long FRI leases to occupiers like Oxford Nanopore, Adaptimmune, Sophia Genetics and Oxford Instruments, and the underlying yields hold up well through cycles. Specialist and challenger desks (<strong>Shawbrook</strong>, <strong>InterBay Commercial</strong>, OakNorth and private credit such as Octopus Real Estate and ASK Partners on 5M-pound-plus lots) lead the lender competition; high-street commercial desks compete on the cleaner stabilised assets. Pricing for an 8-year-plus unexpired lease to an established life-sciences covenant: <span class="figure-inline">6.5 to 7.5 percent</span> pa. Shorter leases or vacant lab refits push deals to specialist bridge-to-let or value-add structures. We know the underwriters who quote on lab investment lot sizes.',
      },
      {
        question: "Are Headington healthcare premises a specialist underwrite?",
        answer:
          'Yes. Headington concentrates the Oxford University Hospitals NHS Foundation Trust footprint, John Radcliffe, Churchill Hospital and the Nuffield Orthopaedic Centre, which in turn drives a dense cluster of healthcare ancillary stock: dental practices, GP surgeries, allied-health clinics, private specialist consulting rooms and pharmacy freeholds along London Road, Old High Street and the Headington Quarry fringe. <strong>Lloyds</strong> and <strong>NatWest</strong> healthcare desks lead the lender competition on owner-occupier dental and primary-care freehold; Allica Bank health and Hampshire Trust Bank quote on the same files. Pricing for a strong NHS-contract dental purchase: <span class="figure-inline">6.5 to 7.5 percent</span> pa at 70 to 75 percent LTV on a 20-year term. We package healthcare cases against the practising principal\'s contract value and adjusted EBITDA, not just bricks and mortar.',
      },
      {
        question: "How does the East Oxford Article 4 stance affect HMO finance?",
        answer:
          'Oxford City Council operates one of the strictest Article 4 regimes in the country across most of East Oxford, removing the permitted-development right for C3 (single dwelling) to C4 (small HMO) conversion in the core HMO catchment around Cowley Road, Iffley Road, Divinity Road and the wider OX4 1 streets. New HMO conversions require full planning permission and consent rates are tight. The lending implication: stabilised HMO portfolios with existing C4 or Sui Generis consents are financeable cleanly at 65 to 75 percent LTV with <strong>InterBay Commercial</strong>, Paragon Bank and Together; speculative C3-to-C4 conversion finance is much harder to place without an existing planning consent in hand. We need to see the planning consent or lawful-development certificate before submitting to credit.',
      },
      {
        question: "Does the BMW Plant Oxford supply chain affect Cowley industrial finance?",
        answer:
          'Yes. The BMW Plant Oxford on Eastern By-Pass Road in Cowley is the assembly site for the MINI brand and anchors a long supply chain of tier-one and tier-two suppliers across the Cowley industrial estates and the wider OX4 / OX44 industrial corridor. Owner-occupier industrial freehold purchases by suppliers and adjacent trade businesses underwrite well where the borrower has a multi-year customer relationship with the plant or its tier-one suppliers, evidenced by purchase orders and the customer concentration disclosure. <strong>NatWest</strong> and <strong>Barclays</strong> commercial banking quote actively, Allica Bank and Hampshire Trust Bank price competitively on the same files on stabilised industrial investment lots at 65 to 70 percent LTV. Pricing typically <span class="figure-inline">6.5 to 7.5 percent</span> pa.',
      },
    ],
  },
];
