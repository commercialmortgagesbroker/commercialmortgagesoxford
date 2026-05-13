import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { SchemaInjector } from "@/components/SchemaInjector";
import { ScrollReveal } from "@/components/ScrollReveal";
import { generateContactPageSchema, generateFAQSchema } from "@/lib/schema";
import { siteConfig } from "@/data/site-config";
import { PHONE_NUMBER, EMAIL } from "@/lib/constants";

const loc = siteConfig.locationName;
const phoneDigits = PHONE_NUMBER.replace(/\s/g, "");

export const metadata: Metadata = {
  title: `Contact ${loc} Commercial Mortgages | Free Quote in 48 Hours`,
  description: `Contact ${loc}'s specialist commercial mortgage broker. Free quote within 48 hours. Call ${PHONE_NUMBER} or submit your deal online.`,
  alternates: {
    canonical: `https://${siteConfig.domain}/contact`,
  },
};

const contactFaqs = [
  {
    question: `How quickly will I hear back after contacting ${loc} Commercial Mortgages?`,
    answer: `We respond to all enquiries within 2 hours during business hours (Monday to Friday, 8am to 6pm). Initial deal feedback and indicative terms are typically delivered within 48 hours of receiving full property and trading details.`,
  },
  {
    question: "What information do you need to give me an indicative quote?",
    answer:
      "At minimum: property address and type (owner-occupier, investment, semi-commercial, trading-business, life-sciences lab investment), purchase price or current value, your deposit or existing equity, the rental income or trading EBITDA, and a brief borrower background. For investment deals we also want the lease summary; for owner-occupiers and trading businesses we want the last 2 to 3 years of accounts.",
  },
  {
    question: "Is there a cost for the initial consultation?",
    answer:
      "No. The initial deal assessment, indicative terms and lender shortlisting are always free. We are only paid by the lender on successful completion of your mortgage; our fee is included in the arrangement fee shown on the term sheet.",
  },
  {
    question: "Do you cover the whole Oxford and Oxfordshire area?",
    answer:
      'Yes. The full Oxford City boundary across OX1, OX2, OX3 and OX4 (including <a href="/areas/city-centre-carfax">Oxford City Centre and Carfax</a>, <a href="/areas/jericho-north-oxford">Jericho and North Oxford</a>, <a href="/areas/headington">Headington</a>, <a href="/areas/cowley-east-oxford">Cowley and East Oxford</a>, <a href="/areas/summertown">Summertown</a>, <a href="/areas/oxford-science-park">Oxford Science Park</a>, <a href="/areas/westgate-castle-quarter">Westgate and Castle Quarter</a>) plus the Cherwell District Council fringe at <a href="/areas/begbroke-oxford-north">Begbroke and Oxford North</a>, and the wider Oxfordshire county footprint out to the Harwell Campus adjacency.',
  },
  {
    question: "What loan sizes do you work on?",
    answer:
      "Commercial mortgage facilities from \u00a3150K to \u00a310M and beyond on Oxford Science Park life-sciences investment lots. Smaller deals below \u00a3150K are typically better served by high-street SME products; we can still refer those where appropriate.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SchemaInjector schema={generateContactPageSchema()} />
      <SchemaInjector
        schema={generateFAQSchema(
          contactFaqs.map((f) => ({
            question: f.question,
            answer: f.answer.replace(/<[^>]+>/g, ""),
          })),
        )}
      />
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      {/* Hero */}
      <section className="bg-primary py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold md:text-5xl">
              Send us your {loc} commercial mortgage enquiry
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-gray-300">
              Indicative terms within 48 hours. No cost for the initial
              assessment. Your deal stays confidential.
            </p>
          </div>
        </div>
      </section>

      {/* Form + contact block */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <span className="accent-line mb-4" />
                <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                  Deal enquiry
                </h2>
                <p className="mt-4 text-base text-gray-600">
                  Tell us about the property and the borrower. We\u2019ll come
                  back to you within 2 business hours to discuss.
                </p>
                <div className="mt-8">
                  <LeadCaptureForm />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <span className="accent-line mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
                    Get in touch
                  </h2>
                  <div className="mt-6 space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Phone
                      </p>
                      <a
                        href={`tel:${phoneDigits}`}
                        className="text-xl font-bold text-primary hover:text-secondary"
                      >
                        {PHONE_NUMBER}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Email
                      </p>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-lg font-bold text-primary hover:text-secondary"
                      >
                        {EMAIL}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Hours
                      </p>
                      <p className="text-base text-gray-700">
                        Monday\u2013Friday, 8am\u20136pm
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-gray-500">
                        Coverage
                      </p>
                      <p className="text-base text-gray-700">
                        Full Oxford City and Oxfordshire, the Cherwell District
                        fringe at Begbroke and Oxford North, and the
                        research-and-innovation belt out to the Harwell Campus
                        adjacency.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6">
                  <p className="font-heading text-lg font-bold text-primary">
                    Prefer to explore first?
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    <li>
                      \u2192 <Link href="/calculator" className="text-secondary hover:underline">Model your repayments</Link> with our commercial mortgage calculator
                    </li>
                    <li>
                      \u2192 <Link href="/services" className="text-secondary hover:underline">Review mortgage products</Link> owner-occupier / investment / semi-commercial / portfolio / trading-business
                    </li>
                    <li>
                      \u2192 <Link href="/areas" className="text-secondary hover:underline">Browse Oxford areas we cover</Link>
                    </li>
                    <li>
                      \u2192 <Link href="/how-it-works" className="text-secondary hover:underline">How the process works</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="accent-line mb-4" />
            <h2 className="font-heading text-2xl font-bold text-primary md:text-3xl">
              Contact FAQs
            </h2>
            <div className="mt-8 space-y-4">
              {contactFaqs.map((f) => (
                <div key={f.question} className="rounded-lg border border-gray-200 bg-white p-5">
                  <p className="font-heading text-base font-bold text-primary">
                    {f.question}
                  </p>
                  <p
                    className="mt-2 text-sm leading-relaxed text-gray-700"
                    dangerouslySetInnerHTML={{ __html: f.answer }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
