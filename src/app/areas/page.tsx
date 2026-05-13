import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AreaMap } from "@/components/AreaMap";
import { AreaCard } from "@/components/AreaCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SchemaInjector } from "@/components/SchemaInjector";
import { generateCollectionPageSchema } from "@/lib/schema";
import { AREAS } from "@/lib/constants";
import { AREAS_INDEX_IMAGE, getAreaImage } from "@/data/area-images";
import { homeContent } from "@/data/pages/home-content";
import { siteConfig } from "@/data/site-config";

const loc = siteConfig.locationName;

export const metadata: Metadata = {
  title: `${loc} Areas We Cover | Commercial Mortgages Across Oxford and Oxfordshire`,
  description: `Commercial mortgages across ${AREAS.length} ${loc} commercial sub-markets. From Oxford City Centre and Carfax to Jericho, Headington, Cowley Road, Oxford Science Park and Begbroke, local lender knowledge for every OX postcode.`,
  alternates: { canonical: `https://${siteConfig.domain}/areas` },
};

export default function AreasPage() {
  return (
    <>
      <SchemaInjector
        schema={generateCollectionPageSchema(
          `${loc} Areas We Cover`,
          `Commercial mortgages across ${AREAS.length} sub-markets in Oxford and Oxfordshire. Area-specific lender appetite, valuation context and product mix for owner-occupiers, investors and trading businesses.`,
          `https://${siteConfig.domain}/areas`,
        )}
      />
      <Breadcrumbs items={[{ label: "Areas We Cover", href: "/areas" }]} />

      {/* Hero with image */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl mb-10">
              <Image
                src={`https://images.unsplash.com/photo-${AREAS_INDEX_IMAGE.id}?w=1400&h=600&fit=crop`}
                alt={AREAS_INDEX_IMAGE.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h1 className="font-heading text-3xl font-extrabold md:text-4xl lg:text-5xl">
                  {loc} Areas We Cover
                </h1>
                <p className="mt-2 max-w-2xl text-lg text-gray-200">
                  Commercial mortgages across {AREAS.length} sub-markets in Oxford and Oxfordshire
                </p>
              </div>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-4xl">
            <ScrollReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-gray-700">
                Commercial Mortgages Oxford arranges commercial mortgages across the full Oxford City LPA and the wider Oxfordshire region. From <Link href="/areas/city-centre-carfax" className="text-secondary hover:underline">Oxford City Centre and Carfax</Link>, the prime retail and hospitality spine, to <Link href="/areas/jericho-north-oxford" className="text-secondary hover:underline">Jericho and North Oxford</Link> professional services, <Link href="/areas/headington" className="text-secondary hover:underline">Headington</Link> hospital-adjacent healthcare, and the <Link href="/areas/oxford-science-park" className="text-secondary hover:underline">Oxford Science Park</Link> life sciences cluster, our team has the local knowledge and lender relationships to secure competitive <Link href="/services" className="text-secondary hover:underline">commercial mortgage</Link> terms for your Oxford property.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                The Oxford commercial property market is one of the tightest in the UK. Planning is constrained, supply is structurally limited and the city carries an unusual blend of knowledge-economy demand (University of Oxford, Oxford Brookes, Oxford Science Park, Begbroke Innovation District, Harwell Campus adjacency), healthcare anchor demand from Oxford University Hospitals NHS Trust at Headington, BMW Plant supply chain industrial demand at Cowley, and tourism overlay supporting unusually high hospitality and retail values per sq ft. Lender appetite tracks postcode and asset class closely, the area pages below set out which lenders price keenly where.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Full map */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <span className="accent-line-center mb-4" />
            <h2 className="text-center font-heading text-2xl font-bold text-primary md:text-3xl">
              {loc} Commercial Property Map
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Explore our coverage across Oxford and Oxfordshire. Each pin marks a sub-market we work in regularly, with notes on lender appetite for owner-occupier, investment, semi-commercial and trading-business mortgages in that postcode.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-8">
              <AreaMap variant="full" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Area cards grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <span className="accent-line-center mb-4" />
            <h2 className="text-center font-heading text-2xl font-bold text-primary md:text-3xl">
              Key Oxford Sub-Markets
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
              Click any area below to explore local commercial property activity, recent commercial planning applications, named regeneration zones, and the types of commercial mortgage available.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area, index) => (
              <ScrollReveal key={area.slug} delay={index * 0.05}>
                <AreaCard
                  areaName={area.name}
                  description={homeContent.areaDescriptions[area.slug] || ""}
                  recentSchemes={area.activeSchemeCount}
                  linkUrl={`/areas/${area.slug}`}
                  imageId={getAreaImage(area.slug).id}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
