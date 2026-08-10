const quotes = [
  {
    text: "We needed someone who could speak to architecture, delivery and executive stakeholders in the same room. Sathya redesigned our reporting pipeline on Azure, reduced refresh delays from hours to minutes, and gave leadership a much clearer view of performance across regions.",
    from: "Head of Data Platforms, financial services group",
  },
  {
    text: "Our teams had strong data, but access was bottlenecked through a small analytics function. Sathya helped us shape an NL2SQL experience that business users actually trusted, with clean prompts, governance guardrails, and outputs analysts could validate quickly.",
    from: "VP of Product, B2B SaaS company",
  },
  {
    text: "Sathya brought calm and structure to a program that was starting to drift. Beyond the technical fixes he coached our developers and improved documentation habits. He left the team more confident than when he joined.",
    from: "Engineering Manager, global capability centre",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="wrap border-t rule py-10">
      <h2 className="mb-4">What clients have said</h2>

      {quotes.map((quote) => (
        <blockquote key={quote.from} className="mb-6 border-l-2 rule pl-4">
          <p className="mb-1">{quote.text}</p>
          <footer className="muted text-[0.95rem]">{quote.from}</footer>
        </blockquote>
      ))}
    </section>
  );
}
