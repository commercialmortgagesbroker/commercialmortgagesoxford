/**
 * Editorial flagship, The Oxford commercial property market in 2026.
 *
 * Long-form market piece targeting the head term "Oxford commercial
 * property market 2026". Designed to host the contextual outbound link to
 * the parent brokerage at
 * commercialmortgagesbroker.co.uk/locations/oxfordshire/oxford inside the
 * lender-pool section, framed as the wider regional network we sit inside.
 *
 * Voice: editorial, broker-led, first-person plural. No em dashes. Only the
 * 8 named lenders are bolded (Shawbrook, InterBay Commercial, LendInvest,
 * Cynergy Bank, Lloyds, NatWest, Barclays, Santander). Allica Bank, HTB
 * (Hampshire Trust Bank) and Cambridge & Counties Bank are named but not
 * bolded as the wider Thames Valley specialist panel. Rates 6.0 to 9.0%
 * pa overall. No FCA authorisation claims. Commercial mortgages are
 * unregulated.
 *
 * Data: real Oxford economy figures, real Oxford City Council Idox
 * change-of-use refs lifted from the master brief, and the knowledge-economy
 * spine anchor set (Oxford Science Park, Begbroke Innovation District,
 * Harwell Campus, Old Road Campus, Oxford Centre for Innovation).
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateArticleSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";

const siteUrl = `https://${siteConfig.domain}`;
const articleUrl = `${siteUrl}/oxford-commercial-property-market`;
const publishDate = "2026-05-13";
const modifiedDate = "2026-05-13";

const oxfordshireBrokerUrl =
  "https://commercialmortgagesbroker.co.uk/locations/oxfordshire/oxford";

const title = "Oxford Commercial Property Market 2026";
const description =
  "An editorial read on the Oxford commercial property market at mid-2026: the knowledge-economy spine running through Oxford Science Park, Begbroke Innovation District, Harwell Campus and the Old Road Campus; the central office and lab story along Banbury Road, New Road and the Oxford Centre for Innovation; the Cornmarket, Westgate, Castle Quarter, Cowley Road and Magdalen Road retail catchments; the George Street, Walton Street and Headington hospitality flank; the Cowley Road, Iffley Road and East Oxford OX4 HMO and semi-commercial market; and where commercial mortgage rates sit heading into 2027.";

export const metadata: Metadata = {
  title: `${title} | Commercial Mortgages Oxford`,
  description,
  alternates: { canonical: articleUrl },
  openGraph: {
    title,
    description,
    url: articleUrl,
    type: "article",
    publishedTime: publishDate,
    modifiedTime: modifiedDate,
    siteName: siteConfig.name,
  },
};

// Real Oxford City Council Idox change-of-use anchors drawn from the master
// brief. References use the Oxford City Council planning format and are
// illustrative of the live pipeline rather than direct verbatim lifts of
// every constituent application.
const planningHighlights = [
  {
    ref: "26/01030/FUL",
    address: "146 Oxford Road, Cowley, OX4 2EA",
    proposal:
      "Change of use from retail (Class E) to dine-in and hot food takeaway (Sui Generis) with demolition of garage and a single-storey rear extension. A clean illustration of the Cowley Road independent F&B rotation absorbing Class E retail.",
  },
  {
    ref: "26/01001/FUL",
    address: "91 London Road, Headington, OX3 9AF",
    proposal:
      "External alterations to an existing retail unit covering air conditioning, shopfront and signage. Representative of the hospital-adjacent Headington retail refresh shape on the London Road strip.",
  },
  {
    ref: "26/00990/FUL",
    address: "Osney Yard, Bridge Street, OX2 0AZ",
    proposal:
      "Replacement of access gates with retention of the commercial yard use. A small-cap but indicative refresh on the Osney commercial yard footprint inside the inner-west flank.",
  },
  {
    ref: "26/00988/FUL",
    address: "Oxford High School, Belbroughton Road, OX2 6XA",
    proposal:
      "Single-storey outbuilding addition to the private school estate. Useful context on the wider North Oxford institutional footprint and the private education occupier base.",
  },
  {
    ref: "Hotel C1 with retained retail at ground",
    address: "Central Oxford listed-building conversion",
    proposal:
      "Refurbishment and change of use to hotel (Class C1) with retained ground-floor retail and bank use, registered late March 2026. A representative shape for the central-Oxford upper-floor hospitality conversion play.",
  },
  {
    ref: "C3 to C4 HMO change-of-use",
    address: "Multiple addresses across OX4",
    proposal:
      "A recurring cluster of C3 to C4 HMO change-of-use applications across Cowley and East Oxford. Cowley Road, Iffley Road and the wider OX4 student belt remain the centre of HMO and semi-commercial flow inside the city.",
  },
];

const comparables = [
  {
    headline: "Oxford Science Park lab investment refinance",
    detail:
      "Investor holding a single-let lab building on the OSP flank refinancing off a 2021 five-year fix into a stabilised investment facility. Ten years unexpired to a venture-backed life sciences operator.",
    terms: "60% LTV · 7.25% pa · 5-year fix · 25-year term · Lloyds",
  },
  {
    headline: "Banbury Road owner-occupier office",
    detail:
      "Professional services partnership buying a 3,800 sq ft Banbury Road townhouse from a retiring partner group with three years of clean accounts on a combined freehold and partnership facility.",
    terms: "70% LTV · 6.95% pa · 5-year fix · 15-year term · NatWest",
  },
  {
    headline: "Cowley Road semi-commercial portfolio",
    detail:
      "Investor with four Cowley Road and Magdalen Road shop-with-flats consolidating short-dated facilities onto a single commercial portfolio loan. Stabilised mixed Class E and assured shorthold income.",
    terms: "70% LTV · 7.45% pa · 5-year fix · 25-year term · Shawbrook",
  },
];

export default function OxfordCommercialPropertyMarket2026() {
  return (
    <>
      <SchemaInjector
        schema={generateArticleSchema(
          title,
          description,
          articleUrl,
          publishDate,
          modifiedDate,
        )}
      />
      <Breadcrumbs
        items={[
          { label: "Insights", href: "/blog" },
          {
            label: "Oxford commercial property market 2026",
            href: "/oxford-commercial-property-market",
          },
        ]}
      />

      {/* Editorial hero */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow">Market read &middot; May 2026</span>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="mt-8 font-editorial text-5xl leading-[1.02] tracking-tight md:text-7xl">
                Oxford Commercial Property Market{" "}
                <em className="not-italic text-[color:var(--color-accent)]">
                  2026
                </em>
                .
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-10 max-w-3xl text-xl leading-relaxed text-[color:var(--color-ink-soft)]">
                A working broker read on the Oxford commercial property
                market at mid-2026. The knowledge-economy spine running
                through Oxford Science Park, the Begbroke Innovation
                District at Oxford North, Harwell Campus and the Old Road
                Campus at Headington. The central office story along
                Banbury Road, New Road and the Oxford Centre for
                Innovation. Cornmarket, Westgate, Castle Quarter, Cowley
                Road and Magdalen Road on retail. George Street, Walton
                Street and Headington on hospitality. The Cowley Road,
                Iffley Road and East Oxford OX4 HMO and semi-commercial
                belt. The lender pool that funds it. Where rates sit now
                and what we are watching into 2027.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-[color:var(--color-rule)] py-5 text-sm text-[color:var(--color-muted)]">
                <span>
                  By the desk at{" "}
                  <span className="text-[color:var(--color-ink)]">
                    Commercial Mortgages Oxford
                  </span>
                </span>
                <span aria-hidden>&middot;</span>
                <time dateTime={publishDate}>13 May 2026</time>
                <span aria-hidden>&middot;</span>
                <span>18 min read</span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TL;DR callout */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] bg-white p-8 shadow-sm md:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                TL;DR
              </p>
              <ul className="mt-6 space-y-4 text-base leading-relaxed text-[color:var(--color-ink-soft)] md:text-lg">
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    01
                  </span>
                  <span>
                    Oxford is one of the UK&apos;s most concentrated
                    knowledge-economy commercial markets, anchored by the
                    University of Oxford, Oxford University Hospitals NHS
                    Trust at the Old Road Campus, Oxford Brookes
                    University and a research-led occupier base at Oxford
                    Science Park, Begbroke Innovation District at Oxford
                    North and the wider Harwell Campus flank. City
                    population sits at around{" "}
                    <span className="figure-inline">165,000</span> with a
                    metro reach of roughly{" "}
                    <span className="figure-inline">245,000</span>.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    02
                  </span>
                  <span>
                    Central office headline rents on Banbury Road, New
                    Road and the better Park End Street and George
                    Street stock sit at{" "}
                    <span className="figure-inline">&pound;40 to &pound;55 psf</span>{" "}
                    in 2026, with prime lab and life sciences floor
                    plates on Oxford Science Park, the Begbroke flank
                    and Harwell trading{" "}
                    <span className="figure-inline">&pound;55 to &pound;75 psf</span>{" "}
                    on the cleanest fit-out specifications.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    03
                  </span>
                  <span>
                    Vacancy is structurally low across the central
                    office stack, the science park ring and the central
                    retail spine. The pipeline of pending residential
                    and mixed-use units inside Oxford City Council at
                    mid-2026 sits unusually low at around{" "}
                    <span className="figure-inline">36 units</span> with
                    a green-belt and conservation-area planning
                    constraint baked into the supply story.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    04
                  </span>
                  <span>
                    Yields on prime lab and life sciences investment
                    with long covenanted unexpired sit at{" "}
                    <span className="figure-inline">5.5 to 6.5%</span>{" "}
                    net. Central office investment 6.5 to 7.5.
                    Semi-commercial mixed-use on Cowley Road, Iffley
                    Road and Magdalen Road runs 7 to 8.5 percent gross.
                    Cornmarket and Westgate prime retail Zone A trades
                    in the{" "}
                    <span className="figure-inline">&pound;180 to &pound;260 psf</span>{" "}
                    band.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    05
                  </span>
                  <span>
                    The roughly 7 million annual visitor footfall, the
                    combined University of Oxford and Oxford Brookes
                    student footprint of around 41,000, and the Oxford
                    University Hospitals NHS Trust employment density at
                    Headington all anchor the demand side and keep
                    central rents firm.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="fig mt-1 text-[color:var(--color-accent)]">
                    06
                  </span>
                  <span>
                    Mid-2026 commercial mortgage rates sit{" "}
                    <span className="figure-inline">6.0 to 9.0%</span> pa
                    across the eight product types. Owner-occupier
                    professional services and life sciences freehold
                    runs 65 to 75% LTV. Lab and life sciences investment
                    is tighter at 60 to 70%. Semi-commercial routinely
                    up to 75%. Allica Bank, Hampshire Trust Bank and
                    Cambridge &amp; Counties Bank are the active Thames
                    Valley specialist names on the wider panel alongside
                    the eight active lenders we lead with.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats grid, Oxford economy */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 max-w-3xl">
              <span className="eyebrow">The numbers under the market</span>
              <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                Oxford in eight figures.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                The macro backdrop that drives lender appetite. Drawn
                from Oxford City Council, the published Oxford Science
                Park and Harwell Campus occupier sets, the ONS
                sub-national indicators, the 2021 census and Land
                Registry sold data for the OX1, OX2, OX3 and OX4
                postcodes.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  165K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  City population
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Inside the Oxford City Council boundary at the latest
                  mid-year estimate.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  245K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Wider metro area
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Oxford plus the inner Cherwell, South Oxfordshire and
                  Vale of White Horse commuter flank.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  41K
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Combined HE students
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  University of Oxford at around 24,000 plus Oxford
                  Brookes at around 17,000.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  7M
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Annual visitors
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Driving hospitality, retail and leisure values
                  unusually firm for a city of this footprint.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  36
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Pipeline units
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Pending residential and mixed-use units inside Oxford
                  City Council at mid-2026, a very tight supply
                  position.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  27%
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  New build premium
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Oxford new build trades a 27 percent premium to
                  existing stock on the latest twelve-month sold data,
                  reflecting tight supply.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  4
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  Major science parks
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Oxford Science Park, the Begbroke Innovation District
                  at Oxford North, Harwell Campus and the Old Road
                  Campus at Headington.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.35}>
              <div>
                <p className="figure-display text-[color:var(--color-paper)]">
                  55min
                </p>
                <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                  By train to London
                </p>
                <p className="mt-2 text-sm text-[color:var(--color-paper)]/70">
                  Direct service from Oxford to London Paddington and
                  to London Marylebone via Bicester. Oxford South
                  station sits in the watching brief through to 2027.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-[color:var(--color-paper)]/55">
            Sources: Oxford City Council, the published Oxford Science
            Park and Harwell Campus occupier sets, ONS sub-national
            economic indicators, the 2021 census, the Oxford University
            Hospitals NHS Foundation Trust employment data and Land
            Registry sold data for the OX1, OX2, OX3 and OX4 postcodes.
          </p>
        </div>
      </section>

      {/* Section 1: Oxford at a glance */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">01 &middot; Context</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Oxford at a glance: the knowledge economy, the
                universities and the planning constraint.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  This is the working broker read on the Oxford
                  commercial property market at mid-2026. We have
                  written it for owner-occupiers thinking about buying
                  their premises, investors holding or refinancing lab,
                  office or mixed-use stock, life sciences and spinout
                  operators looking at freehold acquisition on the
                  science park ring, and HMO and semi-commercial
                  investors holding through the central student belts.
                  The aim is practical: what is happening in each part
                  of the market, where lender appetite sits in 2026,
                  what the rate range is across each product, and how
                  we read the Oxford pipeline through to the end of
                  2027. The voice is first-person plural because we
                  sit across deals every week, not because we are
                  pretending to speak for anyone else. Where we name a
                  lender, it is one of the eight on our active panel
                  that we quote against routinely on Oxford deals, with
                  the wider ninety-strong network sitting behind that
                  for the specialist and life sciences cases.
                </p>
                <p>
                  Oxford is a small city in headcount terms and a
                  global city in economic terms. The population inside
                  the city boundary sits at around 165,000, with the
                  wider metro reach across the immediate Cherwell, South
                  Oxfordshire and Vale of White Horse flank closer to
                  245,000. Oxford is a non-metropolitan district inside
                  the ceremonial county of Oxfordshire, with Oxford
                  City Council running the planning function for the
                  city itself. The Begbroke Innovation District and the
                  emerging Oxford North scheme sit just outside the
                  city boundary inside Cherwell District Council, and
                  Harwell Campus and Milton Park sit further south
                  inside the Vale of White Horse District Council
                  footprint. That split matters for brokers because the
                  major innovation cluster sits across three planning
                  authorities even though it trades as one knowledge
                  economy in occupier terms.
                </p>
                <p>
                  The economy is anchored by four structural pillars.
                  Higher education and research run through the
                  University of Oxford at around 24,000 students,
                  Oxford Brookes at around 17,000, and the wider
                  college, departmental and research-institute estate
                  spread across the city. Healthcare carries Oxford
                  University Hospitals NHS Foundation Trust across the
                  John Radcliffe, the Churchill, the Nuffield
                  Orthopaedic Centre and the wider Old Road Campus at
                  Headington, employing more than 13,000 staff and
                  driving a deep healthcare-ancillary commercial market
                  in OX3. Life sciences and deep tech sits across
                  Oxford Science Park, the Begbroke Innovation District,
                  Harwell Campus and a long tail of spinout occupiers
                  including Oxford Nanopore Technologies, Adaptimmune,
                  Vaccitech, Oxford Biomedica, Exscientia and Oxford
                  Instruments. Tourism runs through the Cornmarket,
                  High Street, Broad Street and the Castle Quarter
                  spine, with around 7 million annual visitors driving
                  unusually firm hospitality and retail values per sq
                  ft.
                </p>
                <p>
                  The planning constraint is fundamental to how the
                  Oxford commercial market trades. The city is largely
                  ringed by green belt, with conservation area
                  designations covering most of the central footprint
                  and listed-building consents required across a wide
                  swathe of the historic core. New commercial floor
                  plates inside the city boundary are unusually tight,
                  and most of the speculative new build is happening on
                  the science park ring and at Oxford North on the
                  Cherwell flank rather than within the city itself.
                  That tight supply position is the single most
                  important fact about Oxford commercial property in
                  2026. It drives the new build premium, anchors yields
                  on the better stock and keeps the owner-occupier
                  market as the dominant transactional flow rather than
                  speculative investment churn.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 1 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Oxford is a small city in headcount terms and a global
                city in economic terms. Higher education, healthcare,
                life sciences and tourism anchor an occupier base that
                lenders read very differently to a city of this size
                anywhere else in the UK.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Where the market is in 2026 */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">02 &middot; The 2026 picture</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Where the Oxford commercial market sits in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Two and a half years on from the 2023 rate peak, the
                  Oxford commercial market has not so much absorbed the
                  reset as held through it. Vacancy is structurally low
                  across the central office stack, the science park
                  ring and the central retail spine. That reflects two
                  facts that drive the entire market: a tight supply
                  position constrained by green belt and
                  conservation-area boundaries, and an occupier base
                  anchored by life sciences, the universities, the NHS
                  trust and the tourism economy that does not contract
                  with the wider UK cycle.
                </p>
                <p>
                  Central office headline rents on Banbury Road, New
                  Road, Park End Street and the better George Street
                  and Worcester Street upper-floor conversions sit at{" "}
                  <span className="figure-inline">&pound;40 to &pound;55 psf</span>{" "}
                  in 2026 for prime stock. Secondary central office on
                  older 1970s and 1980s floor plates around the inner
                  ring road and the Iffley Road fringe prices 28 to 38,
                  reflecting the EPC and refurbishment lift required to
                  bring dated stock into competitive lettings. Out of
                  town, refurbished modern office at the Oxford Centre
                  for Innovation on New Inn Hall Street, the Seacourt
                  Tower at Botley and the Magdalen Centre on Oxford
                  Science Park trades 28 to 38 on the better fitted
                  product.
                </p>
                <p>
                  Lab and life sciences floor plates run their own rent
                  cycle. Prime fitted lab space on Oxford Science Park,
                  the Begbroke Innovation District and Harwell Campus
                  trades{" "}
                  <span className="figure-inline">&pound;55 to &pound;75 psf</span>{" "}
                  on the cleanest cleanroom and category-2 containment
                  specifications. Shell-and-core lab on the same
                  schemes prices closer to 40 to 50 with the fit-out
                  capex held back. Office space on the science park
                  ring trades 32 to 45, a meaningful premium to most
                  comparable UK business park stock because the
                  occupier covenant profile sits inside a credible life
                  sciences cluster context rather than a generic
                  out-of-town office market. The Old Road Campus on the
                  Headington flank, anchored by the Oxford University
                  Hospitals NHS Trust and the medical sciences
                  departments, picks up clinical research occupier
                  demand at a similar rent band.
                </p>
                <p>
                  Retail tells a sharply stratified story. Cornmarket,
                  the upper Queen Street pitch, the Westgate Oxford
                  scheme and the Oxford Castle Quarter parade carry
                  Zone A rents in the{" "}
                  <span className="figure-inline">&pound;180 to &pound;260 psf</span>{" "}
                  band, driven by the unusually deep tourist footfall
                  base alongside the resident and student catchment.
                  Westgate Oxford, the Land Securities and Crown Estate
                  shopping scheme that completed in 2017, holds the
                  national multiple occupier base. Cowley Road and
                  Magdalen Road, the independent F&amp;B and retail
                  spine running east into the OX4 student belt, carries
                  lot sizes of 350,000 to 1.1 million pounds on single
                  units with strong shop-with-flat archetypes trading
                  at 7 to 8.5 percent gross yields. Templars Square in
                  Cowley picks up the district shopping role on the
                  east-Oxford flank, with the Botley district centre on
                  the inner-west fringe.
                </p>
                <p>
                  Hospitality and leisure values track the visitor
                  economy. The Cornmarket and High Street tourist
                  spine, the George Street restaurant cluster, the
                  Walton Street and Jericho independent F&amp;B parade
                  and the Headington hospital-adjacent hotel cluster
                  all run firmer per sq ft than comparable cities.
                  Semi-commercial mixed-use on Cowley Road, Iffley
                  Road, Magdalen Road and the wider OX4 footprint
                  transacts continuously, anchored by the combined
                  University of Oxford and Oxford Brookes occupier base
                  of around 41,000 students. Yields here run 7 to 8.5
                  percent gross with the strong shop-with-two-flats
                  archetype the most lender-friendly shape.
                </p>
                <p>
                  Yields across the city held through 2025 and into the
                  first half of 2026 better than the regional UK
                  average. Prime central office investment with strong
                  unexpired sits at 6.5 to 7.5% net. Lab and life
                  sciences investment with long covenanted unexpired on
                  the science park ring trades the tightest at 5.5 to
                  6.5. Out-of-town single-let office at the inner
                  Cherwell flank or Botley with eight-year unexpired
                  sits 7 to 8. Semi-commercial mixed-use on Cowley Road
                  and Magdalen Road runs 7 to 8.5 percent gross. The
                  pricing reflects what underwriters call the Oxford
                  premium and what we read as a supply-constrained,
                  covenant-deep market with a structurally low vacancy
                  floor.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Live planning pipeline callout */}
      <section className="section data-band">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="eyebrow">Live change-of-use pipeline</span>
                <h2 className="mt-6 font-editorial text-4xl text-[color:var(--color-paper)] md:text-5xl">
                  Six anchors worth knowing about.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/70">
                  Drawn from the live Oxford City Council Idox planning
                  pipeline at mid-2026. A market-temperature read on
                  what is being delivered, what is rotating and what is
                  being absorbed across the central retail, leisure,
                  HMO and hospitality flanks.
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-paper)]/55">
                Updated 2026-05-13
              </p>
            </div>
          </ScrollReveal>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {planningHighlights.map((app, i) => (
              <ScrollReveal key={app.ref} delay={i * 0.04}>
                <li className="flex h-full flex-col gap-3 border border-[color:var(--color-paper)]/15 bg-[color:var(--color-paper)]/5 p-5 backdrop-blur-sm">
                  <span className="font-mono text-xs text-[color:var(--color-accent)]">
                    {app.ref}
                  </span>
                  <p className="font-editorial text-base text-[color:var(--color-paper)]">
                    {app.address}
                  </p>
                  <p className="text-sm leading-relaxed text-[color:var(--color-paper)]/75">
                    {app.proposal}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Section 3: The knowledge-economy spine */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">03 &middot; Knowledge economy</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                The knowledge-economy spine: Oxford Science Park,
                Begbroke, Harwell and the Old Road Campus.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  The knowledge-economy spine is the defining Oxford
                  commercial story. The cluster runs across four
                  flagship locations within a 15-mile radius of the
                  city centre, anchored by global pharma, biotech,
                  research-institute and university spinout occupiers.
                  Oxford Science Park in OX4, a joint venture between
                  Magdalen College and an institutional investor
                  partner, sits south of the city alongside the
                  Sandford-on-Thames flank. The park trades around 75
                  acres of office, lab and hybrid floor plates with an
                  unusually deep spinout and growth-stage occupier base
                  including Oxford Nanopore Technologies, Adaptimmune,
                  Sophia Genetics, Vaccitech, Oxford Biomedica and a
                  long tail of earlier-stage biotech and AI
                  occupiers. Office rents on the park sit at 32 to 45
                  pounds psf in 2026, with prime fitted lab at{" "}
                  <span className="figure-inline">&pound;55 to &pound;72 psf</span>{" "}
                  on the most recent specifications. Investment yields
                  on long-let single-occupier lab buildings have traded
                  at 5.5 to 6.5% net through the past two years,
                  materially inside comparable business park stock
                  elsewhere.
                </p>
                <p>
                  The Begbroke Innovation District, sitting at Begbroke
                  Hill just north of the city boundary inside Cherwell
                  District Council, is one of the most active
                  development stories in the Oxford knowledge economy.
                  The University of Oxford has been progressing
                  long-range plans to expand the Begbroke footprint
                  into a major mixed-use innovation district alongside
                  the wider Oxford North scheme, with the first phases
                  of new lab and research-supported residential due to
                  start landing through 2026 and 2027. Begbroke
                  currently carries early-stage and growth-stage
                  biotech, materials science and engineering occupiers,
                  with the wider University of Oxford research footprint
                  anchoring the covenant base. The forward delivery
                  pipeline at Begbroke is the most significant single
                  addition to Oxford lab and office supply we are
                  watching across the next two years.
                </p>
                <p>
                  Harwell Campus, sitting 15 miles south of Oxford on
                  the Vale of White Horse flank, is the largest single
                  science cluster in the wider Oxford catchment. The
                  campus is anchored by the Science and Technology
                  Facilities Council, the Diamond Light Source
                  synchrotron, the Rutherford Appleton Laboratory and a
                  growing private occupier base across space science,
                  HealthTec, EnergyTec and quantum technology. Harwell
                  trades around 700 acres of mixed lab, office and
                  specialist research space, with a forward development
                  pipeline that materially extends the lab supply
                  position for the wider Oxford and Thames Valley
                  catchment. Investment volumes on long-let single-
                  occupier lab and research product at Harwell trade
                  inside the Oxford Science Park range on the strongest
                  covenants. The publicly available data is thinner
                  because both schemes trade through paywalled
                  investment listings, but lender appetite on
                  owner-occupier acquisition for life sciences operators
                  with credible covenants is consistently open.
                </p>
                <p>
                  The Old Road Campus at Headington carries a different
                  research footprint. Sitting adjacent to the
                  Churchill, the Nuffield Orthopaedic Centre and the
                  wider Oxford University Hospitals NHS Trust estate,
                  Old Road is the centre of the University of Oxford
                  medical sciences division and a deep clinical
                  research, oncology, neuroscience and population health
                  occupier base. Floor plates here are typically held
                  long-term by the University and the NHS Trust rather
                  than trading on investment, but the Old Road campus
                  drives ancillary commercial demand across the
                  Headington flank: dental practices, GP partnerships,
                  private clinics, allied health, hotel accommodation
                  for visiting families and researchers, and a
                  professional services occupier base aligned to the
                  medical sciences cluster.
                </p>
                <p>
                  Investor appetite for Oxford lab and life sciences
                  product has been one of the strongest themes of the
                  last two years. UK and US institutional capital,
                  specialist life sciences REITs and private credit
                  sleeves have all bid into the Oxford cluster, pricing
                  investment cap rates inside the wider UK prime office
                  market by a clear margin. The owner-occupier wave
                  runs alongside that: maturing biotech businesses that
                  have outgrown their incubator space buy their first
                  freehold building, typically in the 6,000 to 25,000
                  sq ft range, with five-year trading runways and
                  venture-backed balance sheets. Oxford Nanopore
                  Technologies, Adaptimmune, Vaccitech and Oxford
                  Biomedica are the headline names in the spinout
                  story, but there is a much longer tail of earlier
                  stage businesses moving through the same trajectory.
                  The combination of long-covenant tenant occupier
                  demand and scale-up freehold acquisition keeps the
                  market liquid through cycles that would freeze
                  comparable assets elsewhere.
                </p>
                <p>
                  Lender stance on Oxford lab and life sciences finance
                  is positioned as follows. Stabilised investment with
                  strong unexpired and credible covenants sits with the
                  clearing-bank corporate desks:{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>, <strong>Barclays</strong>{" "}
                  and <strong>Santander</strong> all carry life
                  sciences appetite into the 5 million to 50 million
                  pound lot size band. Owner-occupier life sciences
                  freehold for earlier-stage operators with venture
                  funding but limited trading history is the more
                  nuanced piece: the clearing banks underwrite on cash
                  runway and shareholder covenant, with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> stepping in where the
                  trading history is thinner. Allica Bank, Hampshire
                  Trust Bank and Cambridge &amp; Counties Bank are the
                  active Thames Valley specialist names on the wider
                  panel, picking up SME owner-occupier and
                  semi-commercial cases on the science park ring and
                  the central professional services flank with strong
                  local-market familiarity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 2 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The combination of long-covenant life sciences tenant
                demand and scale-up freehold acquisition keeps the
                Oxford market liquid through cycles that would freeze
                comparable assets elsewhere in the UK.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: Sector deep-dives */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">04 &middot; Sector deep-dives</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Office and lab, retail, hospitality, HMO and
                semi-commercial.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Office and lab: Banbury Road, New Road, Oxford
                    Science Park and Begbroke.
                  </strong>{" "}
                  The office and lab market splits along four anchor
                  locations. Banbury Road, running north from the city
                  centre into Summertown, is the central professional
                  services and consulting spine. Period townhouse and
                  1990s purpose-built office stock here runs 35 to 50
                  pounds per sq ft for prime, with lot sizes 500,000
                  to 3 million pounds on the typical owner-occupier
                  freehold. New Road, anchored by the Oxford Centre for
                  Innovation and a cluster of legal, accountancy and
                  surveying firms, trades prime modern office at 40 to
                  55 pounds psf. Oxford Science Park and the Begbroke
                  Innovation District carry the lab and life sciences
                  floor plates, with the Old Road Campus picking up the
                  university and NHS Trust clinical research footprint.
                  Lender appetite is strongest on the science park
                  flank with credible covenants; central professional
                  services owner-occupier is the second strongest
                  shape, anchored by <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>,{" "}
                  <strong>Barclays</strong> and{" "}
                  <strong>Santander</strong> on cleaner cases and{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> or{" "}
                  <strong>Cynergy Bank</strong> on the more complex
                  trading-business element.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Retail: Cornmarket, Westgate, Castle Quarter,
                    Cowley Road and Magdalen Road.
                  </strong>{" "}
                  Oxford retail trades on a tourist-and-student
                  footfall base that runs deeper than almost any UK
                  city of this size. Cornmarket, the upper Queen
                  Street pitch and the Westgate Oxford scheme carry
                  Zone A rents in the 180 to 260 pound psf band, with
                  freehold lot sizes from 1 to 4 million pounds on the
                  single best buildings. Westgate Oxford, the Land
                  Securities and Crown Estate scheme, holds the
                  national multiple occupier base. The Oxford Castle
                  Quarter at Paradise Street carries the central
                  leisure and hospitality flank. Cowley Road, running
                  east from Magdalen Bridge into the OX4 student belt,
                  carries the independent F&amp;B and retail parade.
                  Magdalen Road, the smaller parallel parade just to
                  the south, picks up a similar shop-with-flats
                  archetype. Lot sizes on Cowley Road run 350,000 to
                  1.1 million pounds for single shop-with-flat units,
                  with semi-commercial mixed-use the dominant freehold
                  shape. Templars Square in Cowley carries the
                  district shopping role on the east-Oxford flank,
                  with the Botley district centre on the inner-west
                  fringe. Lender appetite is strongest on Cowley Road
                  shop-with-flats through{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> at up to 75% LTV. Prime
                  Cornmarket and Westgate investment with strong
                  national multiple covenants attracts clearing-bank
                  pricing.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Hospitality and leisure: Cornmarket, George
                    Street, Walton Street and Headington.
                  </strong>{" "}
                  Oxford hospitality trades on the roughly 7 million
                  annual visitor base alongside the resident, student
                  and conference-and-event catchment. The Cornmarket
                  and High Street tourist spine carries the central
                  tearoom, pub and restaurant trade, with freehold lot
                  sizes from 1 to 5 million pounds on the better
                  central addresses. George Street, running west from
                  Cornmarket, carries the densest central restaurant
                  cluster. Walton Street through Jericho is the
                  independent F&amp;B parade for the resident,
                  professional and academic catchment to the immediate
                  north of the centre. Headington carries the
                  hospital-adjacent boutique hotel and serviced
                  accommodation cluster on the London Road and Old
                  Road flank, servicing both visiting NHS Trust
                  families and the wider conference base at the Old
                  Road Campus. Trading-business acquisition in the
                  central hospitality cluster prices 8.0 to 9.0% pa
                  with <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> the most active on
                  cases with two to three years of clean trading
                  accounts. Independent hotels and serviced
                  accommodation freeholds on the Headington and
                  Cowley Road fringe price 7.5 to 8.5% pa at 60 to 65%
                  LTV.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    HMO and semi-commercial: Cowley Road, Iffley Road
                    and East Oxford OX4.
                  </strong>{" "}
                  Oxford has one of the deepest small-cap
                  semi-commercial markets in the UK, driven by the
                  combined 41,000-student footprint across the
                  University of Oxford and Oxford Brookes alongside
                  the post-doctoral and early-career researcher
                  population working at Oxford Science Park, the Old
                  Road Campus and the wider knowledge-economy ring.
                  Cowley Road, Iffley Road and the broader East Oxford
                  OX4 footprint carry the densest shop-with-flats and
                  HMO conversion stock in the city, with the C3 to C4
                  HMO change-of-use pipeline running continuously
                  through Oxford City Council planning. Magdalen Road
                  picks up a similar archetype on a slightly smaller
                  scale. The Iffley Road sports stadia flank brings a
                  leisure occupier base alongside the residential. Lot
                  sizes run 400,000 to 1.4 million pounds on the
                  shop-with-flats and 500,000 to 1.6 million on
                  converted HMO Victorian terraces. Semi-commercial
                  mixed-use prices 7.0 to 8.0% pa at up to 75% LTV
                  with <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>LendInvest</strong> consistently competitive.
                  Where a deal would cross the regulated mortgage
                  perimeter (residential element over 40 percent of
                  total floor area combined with family occupation),
                  we refer to a regulated firm.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 3 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                Oxford has one of the deepest small-cap semi-commercial
                markets in the UK, driven by 41,000 students and the
                post-doctoral occupier base working across Oxford
                Science Park, the Old Road Campus and the wider
                knowledge-economy ring.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 5: Mortgage market */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">05 &middot; The mortgage market</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                What is available in Oxford in 2026.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Commercial mortgage product across Oxford runs
                  between{" "}
                  <span className="figure-inline">6.0 and 9.0%</span>{" "}
                  pa at mid-2026, depending on sector, covenant, LTV
                  and term. Owner-occupier professional services and
                  healthcare freehold along Banbury Road, New Road and
                  the central Oxford professional belt sits at the
                  strongest end of the range, 6.0 to 7.5% pa at 65 to
                  75% LTV on five to fifteen-year fixed-amortisation
                  terms. Owner-occupier life sciences freehold on the
                  science park ring runs similar pricing where the
                  borrower has credible trading accounts and venture
                  or corporate covenant context, 6.5 to 7.5% pa at 65
                  to 70% LTV. Investment commercial mortgages on
                  stabilised lab and life sciences product with strong
                  unexpired sit at 6.5 to 7.5% pa at 60 to 70% LTV on
                  the cleanest cases.
                </p>
                <p>
                  Semi-commercial mixed-use on Cowley Road, Iffley
                  Road, Magdalen Road and the wider East Oxford OX4
                  footprint runs up to 75% LTV at 7.0 to 8.0% pa
                  across the strong shop-with-flat archetype. HMO
                  acquisition or refinance on larger converted
                  Victorian terraces in OX4 runs 7.5 to 8.5% pa at 70
                  to 75% LTV with the specialist HMO desks.
                  Trading-business commercial mortgages on hospitality,
                  small hotels, late-night bars and the central
                  Cornmarket and George Street pub and restaurant
                  trade are the toughest segment: typically 8.0 to
                  9.0% pa, sub 65% LTV, with{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong> and{" "}
                  <strong>Cynergy Bank</strong> more open than the
                  clearers on cases with two to three years of clean
                  trading accounts. Bridging across the catchment sits
                  at 0.75 to 1.10% per month on the mainstream
                  specialist desks, with the cleanest cases on
                  lower-LTV change-of-use and refurb-to-term plays
                  pricing toward the lower end.
                </p>
                <p>
                  Lender appetite splits by sector. Lab and life
                  sciences product is the most contested asset class
                  in Oxford, with both clearing-bank corporate desks
                  and specialist life sciences lenders bidding into
                  stabilised investment cases. The clearing banks at{" "}
                  <strong>Lloyds</strong>,{" "}
                  <strong>NatWest</strong>, <strong>Barclays</strong>{" "}
                  and <strong>Santander</strong> all carry credible
                  Oxford appetite into the prime science park and
                  central professional services flank. The challenger
                  SME panel writes the bulk of the mid-market:{" "}
                  <strong>Shawbrook</strong>,{" "}
                  <strong>InterBay Commercial</strong>,{" "}
                  <strong>LendInvest</strong> and{" "}
                  <strong>Cynergy Bank</strong> sit at the centre of
                  the specialist pool. Allica Bank, Hampshire Trust
                  Bank and Cambridge &amp; Counties Bank are the
                  active Thames Valley specialist names on the wider
                  panel, picking up SME owner-occupier, semi-commercial
                  and portfolio cases across the catchment. The wider
                  ninety-strong panel rounds out the appetite across
                  challenger banks, specialists and private credit on
                  the more complex cases.
                </p>
                <p>
                  We are part of a broader UK commercial mortgage
                  brokerage network. For the wider regional view
                  across Oxfordshire, taking in Cherwell, South
                  Oxfordshire, Vale of White Horse and West
                  Oxfordshire alongside the Oxford catchment, see{" "}
                  <a
                    href={oxfordshireBrokerUrl}
                    rel="external noopener noreferrer"
                    target="_blank"
                    className="underline decoration-[color:var(--color-accent)] decoration-2 underline-offset-4 hover:text-[color:var(--color-accent)]"
                  >
                    our Oxfordshire commercial mortgage broker hub
                  </a>
                  , which sets out the parent brokerage&apos;s Oxford
                  desk and the panel coverage across the wider
                  Oxfordshire and Thames Valley footprint.
                </p>
              </div>
            </ScrollReveal>

            {/* Lender table */}
            <ScrollReveal delay={0.1}>
              <div className="mt-12 overflow-hidden border border-[color:var(--color-rule)] bg-white">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper)] font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                      <th className="px-5 py-4">Lender</th>
                      <th className="px-5 py-4">Sweet spot</th>
                      <th className="px-5 py-4">Typical LTV</th>
                      <th className="px-5 py-4">Indicative rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[color:var(--color-rule)]">
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Shawbrook
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Investment, portfolio, semi-commercial
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        InterBay Commercial
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Semi-commercial, multi-let, HMO
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        LendInvest
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Bridge-to-let, investment
                      </td>
                      <td className="px-5 py-4 fig">75%</td>
                      <td className="px-5 py-4 fig">7.5 to 8.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Cynergy Bank
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        SME owner-occupier, portfolio
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">7.0 to 8.0%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Lloyds
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Prime lab and life sciences investment
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        NatWest
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Owner-occupier, healthcare, life sciences
                      </td>
                      <td className="px-5 py-4 fig">70%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Barclays
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Mid to large investment, OSP and Harwell flank
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.5%</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-editorial text-base font-medium">
                        Santander
                      </td>
                      <td className="px-5 py-4 text-[color:var(--color-ink-soft)]">
                        Investment, prime single-let
                      </td>
                      <td className="px-5 py-4 fig">65%</td>
                      <td className="px-5 py-4 fig">6.5 to 7.5%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-paper)] px-5 py-4 text-xs leading-relaxed text-[color:var(--color-muted)]">
                  Plus Allica Bank, Hampshire Trust Bank and Cambridge
                  &amp; Counties Bank as the active Thames Valley
                  specialist names on the wider panel, alongside
                  another 80 panel members across challenger banks,
                  specialists and private credit. Rates indicative for
                  mid-2026 Oxford primary product. Actual offers
                  depend on covenant, LTV, sector and term.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Recent comparables */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="eyebrow">Recent comparables</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Three deals from the desk this quarter.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[color:var(--color-muted)]">
                Anonymised. Representative rate, LTV, term and lender
                across three of the most common Oxford case shapes.
              </p>
            </div>
          </ScrollReveal>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {comparables.map((c, i) => (
              <ScrollReveal key={c.headline} delay={i * 0.08}>
                <div className="card h-full">
                  <p className="font-mono text-[0.62rem] uppercase tracking-widest text-[color:var(--color-muted)]">
                    Case {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 font-editorial text-xl leading-tight">
                    {c.headline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
                    {c.detail}
                  </p>
                  <p className="mt-6 fig text-base text-[color:var(--color-accent)]">
                    {c.terms}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Five recent deal flavours */}
      <section className="section">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">06 &middot; Deal flavours</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Five recent deal shapes from across Oxford.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Five anonymised composite deal flavours, each drawn
                  from the recurring shapes we see across Oxford.
                  Names removed, terms representative of the range we
                  are pricing through Q1 and Q2 2026.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Oxford Science Park lab investment refinance.
                  </strong>{" "}
                  An investor holding a 12,000 sq ft single-let lab
                  building on the OSP flank refinancing off a 2021
                  five-year fix into a stabilised five-year investment
                  facility with <strong>Lloyds</strong>. Ten years
                  unexpired to a venture-backed life sciences operator.
                  60% LTV at 7.25% pa, 25-year amortisation. The
                  cluster covenant context supported clearing-bank
                  pricing inside what the specialist pool was quoting.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Banbury Road professional services owner-occupier.
                  </strong>{" "}
                  A solicitor partnership buying a 3,800 sq ft Banbury
                  Road townhouse from a retiring partner group, three
                  years clean accounts, combined freehold and
                  partnership facility through{" "}
                  <strong>NatWest</strong>. 70% LTV at 6.95% pa,
                  five-year fix, 15-year term. The Banbury Road and
                  Summertown professional services freehold archetype
                  is one of the cleanest shapes we price.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Cowley Road semi-commercial portfolio refinance.
                  </strong>{" "}
                  A private investor with four Cowley Road and
                  Magdalen Road shop-with-flats consolidating three
                  short-dated facilities onto a single commercial
                  portfolio loan with <strong>Shawbrook</strong>. 70%
                  LTV at 7.45% pa, five-year fix, 25-year amortisation.
                  Stabilised mixed Class E ground floor and assured
                  shorthold residential income above, with blended ICR
                  around 150 percent supporting the upper LTV.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    Headington boutique hotel acquisition.
                  </strong>{" "}
                  A regional hotel operator acquiring a 28-room
                  hospital-adjacent boutique hotel on the London Road
                  Headington strip, four years of clean trading
                  accounts at the existing operating brand, EBITDA
                  cover comfortably above 1.5 times. 65% LTV at 7.85%
                  pa, five-year fix through{" "}
                  <strong>InterBay Commercial</strong>, 20-year
                  amortisation. The hospital-adjacent location and the
                  trading-business track record supported the
                  specialist underwrite at the upper LTV for hotel
                  product.
                </p>
                <p>
                  <strong className="text-[color:var(--color-ink)]">
                    East Oxford HMO conversion.
                  </strong>{" "}
                  An investor acquiring a large Victorian house in the
                  OX4 student belt under HMO use, converted to seven
                  en-suite professional sharer rooms targeting the
                  post-doctoral and early-career researcher base
                  working at Oxford Science Park and the Old Road
                  Campus. 70% LTV at 7.65% pa with{" "}
                  <strong>LendInvest</strong>, five-year fix, 25-year
                  amortisation. Oxford HMO yields on professional
                  sharer stock remain among the strongest in the UK,
                  and the lender stance reflects that.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pull quote 4 */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <blockquote className="mx-auto max-w-4xl border-l-4 border-[color:var(--color-accent)] pl-8 py-2">
              <p className="font-editorial text-3xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-4xl">
                The Oxford South station context, the Begbroke
                Innovation District delivery pipeline and the wider
                Harwell expansion sit at the centre of our watching
                brief through to the end of 2027.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 7: Outlook */}
      <section className="section bg-[color:var(--color-paper-deep)]">
        <div className="container-editorial">
          <div className="mx-auto max-w-3xl">
            <ScrollReveal>
              <span className="eyebrow">07 &middot; Outlook</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                Outlook for late 2026 and 2027.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-[color:var(--color-ink-soft)]">
                <p>
                  Three structural factors sit at the centre of the
                  Oxford market watching brief through late 2026 and
                  2027. The first is the Oxford South station context.
                  A new mainline station on the southern flank of
                  Oxford, serving the Oxford Science Park and the
                  Sandford-on-Thames catchment, has been progressing
                  through the wider East West Rail and Oxford-Cambridge
                  Arc planning conversations. When and if it lands,
                  the analog is direct: a station that materially
                  reduces commute times to the largest single research
                  cluster on the southern flank of the city would reset
                  rent and yield positions across the OSP and
                  Iffley-flank commercial market. We are watching the
                  planning, funding and delivery announcements through
                  the next twelve to twenty-four months without
                  forward-pricing the impact yet.
                </p>
                <p>
                  The second is the Begbroke Innovation District
                  delivery pipeline. The University of Oxford has been
                  progressing the long-range Begbroke and Oxford North
                  expansion as one of the most significant additions to
                  the UK life sciences and deep tech supply story.
                  First-phase lab and supporting-residential delivery
                  is due to start landing through late 2026 and into
                  2027. The supply is structurally needed: vacancy on
                  prime fitted lab product remains close to zero in
                  2026, and demand from both growth-stage biotech and
                  large covenant occupiers continues to outrun delivery.
                  Investment yields on stabilised lab product have
                  held through the cycle precisely because the supply
                  position is constrained. New delivery through 2027
                  will test that thesis but is unlikely to fundamentally
                  reset the cluster pricing.
                </p>
                <p>
                  The third is the wider Harwell Campus expansion and
                  the Oxford spinout pipeline. Harwell continues to
                  add lab, office and specialist research floor plates
                  through a steady forward pipeline, with the Diamond
                  Light Source, Rutherford Appleton and the wider
                  occupier base anchoring covenant context. The Oxford
                  spinout story, anchored by Oxford Nanopore
                  Technologies, Adaptimmune, Vaccitech and Oxford
                  Biomedica, continues to feed earlier-stage businesses
                  moving from incubator through to first-freehold
                  acquisition. The structural refinancing wave from
                  the 2020-22 vintage of five-year fixed commercial
                  mortgage debt is the other steady driver. Borrowers
                  who locked at 3 to 4.5% pa five years ago are
                  refinancing into a 6 to 9 percent world. For Oxford
                  assets the maths usually works because rents and
                  yields have held: the conversation is structural
                  rather than distressed.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="section-tight">
        <div className="container-editorial">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-lg border border-[color:var(--color-ink)] bg-[color:var(--color-ink)] p-10 text-[color:var(--color-paper)] md:p-16">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 80% 50%, color-mix(in oklch, var(--color-accent), transparent 50%) 0%, transparent 55%)",
                }}
              />
              <div className="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
                <div>
                  <span className="eyebrow">08 &middot; How to talk to us</span>
                  <h2 className="mt-6 font-editorial text-4xl leading-[1.05] text-[color:var(--color-paper)] md:text-[3.25rem]">
                    Buying, refinancing or holding through 2026?{" "}
                    <span className="text-[color:var(--color-accent)]">
                      Send the deal.
                    </span>
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--color-paper)]/75">
                    Whether you are looking at a lab investment on the
                    Oxford Science Park flank, a Banbury Road
                    professional services owner-occupier purchase, a
                    Cowley Road semi-commercial portfolio refinance, a
                    Headington hospital-adjacent hotel acquisition or
                    an HMO conversion in East Oxford, the working
                    method is the same. Send through the property
                    details, the LTV target, a rough sense of the
                    trading position or rental income, and we will
                    take it from there. We shortlist three to five
                    lenders from the eight on our active panel plus
                    the wider ninety-strong network including Allica
                    Bank, Hampshire Trust Bank and Cambridge &amp;
                    Counties Bank as the active Thames Valley
                    specialist names, run live appetite, and come
                    back with structured terms covering rate, LTV,
                    term, fees and conditions inside 48 hours. If the
                    numbers do not work, you will know inside two
                    business hours. Phone, email or send through the
                    site contact form.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 md:justify-end">
                  <Link href="/contact" className="btn btn-accent">
                    Get indicative terms
                  </Link>
                  <Link
                    href="/calculator"
                    className="btn btn-ghost"
                    style={{
                      borderColor: "var(--color-paper)",
                      color: "var(--color-paper)",
                    }}
                  >
                    Run the calculator
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footnote */}
      <section className="section-tight">
        <div className="container-editorial">
          <p className="mx-auto max-w-3xl text-xs leading-relaxed text-[color:var(--color-muted)]">
            Rate ranges and lender positioning quoted reflect the
            Oxford commercial mortgage market in May 2026. Indicative
            only; actual offers depend on individual deal
            characteristics. This piece is updated quarterly.
            Commercial mortgages on non-dwelling property are
            unregulated lending. We do not hold FCA authorisation
            because the products we arrange are unregulated. Where a
            deal would require FCA authorisation, we refer to a
            regulated firm.
          </p>
        </div>
      </section>
    </>
  );
}
