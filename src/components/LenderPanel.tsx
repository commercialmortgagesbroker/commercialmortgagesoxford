import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * A representative slice of UK commercial mortgage lenders, shown to describe
 * the market. Naming a lender does not imply a relationship with it.
 */

interface Lender {
  name: string;
  category: string;
  /** Legacy flag; not rendered. */
  named: boolean;
}

const lenders: Lender[] = [
  { name: "NatWest", category: "High street", named: true },
  { name: "Lloyds", category: "High street", named: true },
  { name: "Barclays", category: "High street", named: true },
  { name: "Santander", category: "High street", named: true },
  { name: "Allica Bank", category: "Challenger bank", named: false },
  { name: "Shawbrook", category: "Challenger bank", named: true },
  { name: "Hampshire Trust Bank", category: "Challenger bank", named: false },
  { name: "Aldermore", category: "Challenger bank", named: false },
  { name: "Cambridge & Counties", category: "Challenger bank", named: false },
  { name: "Cynergy Bank", category: "Challenger bank", named: true },
  { name: "Paragon Bank", category: "Challenger bank", named: false },
  { name: "YBS Commercial", category: "Building society", named: false },
  { name: "OakNorth Bank", category: "Specialist bank", named: false },
  { name: "InterBay Commercial", category: "Specialist (OSB)", named: true },
  { name: "LendInvest", category: "Specialist", named: true },
  { name: "Together", category: "Specialist", named: false },
  { name: "Recognise Bank", category: "Challenger bank", named: false },
  { name: "Handelsbanken", category: "Relationship bank", named: false },
];

interface LenderPanelProps {
  locationName: string;
}

export function LenderPanel({ locationName }: LenderPanelProps) {
  return (
    <section className="section bg-[color:var(--color-paper-deep)]">
      <div className="container-editorial">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <ScrollReveal>
            <div>
              <span className="eyebrow">The lender market</span>
              <h2 className="mt-6 font-editorial text-4xl md:text-5xl">
                High-street, challenger and specialist lenders. Eighteen of them on this page.
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[color:var(--color-muted)]">
                The {locationName} commercial mortgage market spans high-street
                commercial divisions, challenger banks and specialist lenders for
                semi-commercial and trading-business deals. We look at the
                high-street, challenger and specialist lenders whose criteria fit
                the deal, not three calls to whoever picked up.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--color-muted)]">
                Naming a lender describes the market; it does not mean we have a
                relationship with it. Specialist sectors (CQC-regulated care, hotel
                EBITDA, dental goodwill, MOT and petrol forecourt) and private
                credit for larger structured deals sit with further specialist
                lenders.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-md border border-[color:var(--color-rule)] bg-[color:var(--color-rule)] sm:grid-cols-3">
              {lenders.map((lender) => (
                <div
                  key={lender.name}
                  className="bg-[color:var(--color-paper)] p-5 transition-colors duration-200 hover:bg-[color:var(--color-white)]"
                >
                  <p className="font-editorial text-lg">{lender.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                    {lender.category}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
