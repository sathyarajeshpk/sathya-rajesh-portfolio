import Reveal from "@/components/site/Reveal";

const testimonials = [
  {
    quote:
      "We needed someone who could speak to architecture, delivery, and executive stakeholders in the same room. Sathya redesigned our reporting pipeline on Azure, reduced refresh delays from hours to minutes, and gave leadership a much clearer view of performance across regions.",
    author: "Head of Data Platforms",
    org: "Regional financial services group",
  },
  {
    quote:
      "Our teams had strong data, but access was bottlenecked through a small analytics function. Sathya helped us shape an NL2SQL experience that business users actually trusted — clean prompts, governance guardrails, and outputs analysts could validate quickly.",
    author: "VP of Product",
    org: "B2B SaaS company",
  },
  {
    quote:
      "Sathya brought calm, structure, and a high engineering bar to a program that was starting to drift. Beyond the technical fixes, he coached our developers and improved documentation habits. He left the team more confident than when he joined.",
    author: "Engineering Manager",
    org: "Global capability centre",
  },
];

/**
 * The one inverted section on the page — a deliberate change of register
 * between the work and the writing.
 */
export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-28"
      style={{ background: "var(--fg)", color: "var(--bg)" }}
    >
      <div className="shell">
        <header className="border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.18)" }}>
          <Reveal>
            <span className="label" style={{ opacity: 0.6 }}>
              06 — In their words
            </span>
          </Reveal>
        </header>

        <div className="mt-12 grid gap-x-10 gap-y-12 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal as="article" key={testimonial.author} delay={0.06 * i}>
              <figure className="flex h-full flex-col">
                <blockquote className="text-xl font-medium leading-[1.5] sm:text-[1.375rem]">
                  <span aria-hidden="true" style={{ opacity: 0.45 }}>
                    &ldquo;
                  </span>
                  {testimonial.quote}
                  <span aria-hidden="true" style={{ opacity: 0.45 }}>
                    &rdquo;
                  </span>
                </blockquote>
                <div className="mt-auto pt-8">
                  <div
                    className="mb-4 h-px w-10"
                    style={{ background: "rgba(255,255,255,0.35)" }}
                  />
                  <figcaption className="label" style={{ opacity: 0.85 }}>
                    {testimonial.author}
                    <span className="mt-1 block" style={{ opacity: 0.6 }}>
                      {testimonial.org}
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
