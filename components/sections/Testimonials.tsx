import Reveal from "@/components/site/Reveal";

const testimonials = [
  {
    quote:
      "We are very happy with the website created for Skyline Industries. The design is modern, professional and gives our company a much stronger digital presence. We especially appreciated the way our requirements were understood and converted into a clean and attractive website. Thank you for your dedication, creativity and support throughout the project. We would definitely recommend your work to others looking for a professional website.",
    author: "Skyline Industries",
    org: "Construction & Project Management",
    icon: "★",
  },
  {
    quote:
      "Quarterly Best Performer — Feb 2024, Aug 2023, Nov 2022. Awarded for technical leadership, architectural excellence, and mentorship of 20+ engineers across the data platform team.",
    author: "TransUnion",
    org: "Global Technology Center",
    icon: "★",
  },
  {
    quote:
      "Client Appreciation Award for technical delivery. Recognised for systematic investigations of production failures, optimisation work that reduced query execution time by 20%, and documentation that raised operational standards.",
    author: "Tata Consultancy Services",
    org: "Data Operations",
    icon: "★",
  },
  {
    quote:
      "Wall of Fame — three consecutive quarters. Maintained 95% first-contact resolution rate across 400+ weekly interactions, setting the standard for service excellence and customer problem-solving.",
    author: "Sitel India",
    org: "Customer Operations",
    icon: "★",
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
