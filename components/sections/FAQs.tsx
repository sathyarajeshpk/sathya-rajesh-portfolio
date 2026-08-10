const faqs = [
  {
    q: "How do you usually work?",
    a: "Project based, on a retainer, or as a fractional data lead. We start with a call to work out which one fits. Sometimes the answer is that you need to hire someone rather than bring me in, and I will say so.",
  },
  {
    q: "How long does a migration take?",
    a: "For something in the 10 to 50TB range, usually 8 to 12 weeks including assessment, building the pipelines, testing and cutover. You get a plan with milestones during discovery, before committing to anything.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. I am in Chennai and have worked with teams in the US, UK and across APAC. Mostly async, with a few hours of overlap scheduled where the work needs it.",
  },
  {
    q: "Which industries do you know?",
    a: "Financial services in the most depth, credit bureaus and banking especially. Also SaaS and enterprise tech. The architecture side carries across industries fine, but domain modelling is where knowing the sector actually helps.",
  },
  {
    q: "Can you train our team?",
    a: "Yes, and I would rather it be part of the scope than something bolted on at the end. Hands on training, documentation, and notes on how things work so your team can extend the platform after I have gone.",
  },
  {
    q: "What do you build on?",
    a: "Azure mainly: Data Factory, Databricks, Synapse, Data Lake. Power BI for reporting. Python, PySpark and SQL. Claude API for the AI work. React and Next.js for web.",
  },
];

export default function FAQs() {
  return (
    <section id="faqs" className="wrap border-t rule py-10">
      <h2 className="mb-4">Questions I get asked</h2>

      {faqs.map((faq) => (
        <div key={faq.q} className="mb-5">
          <h3 className="mb-1">{faq.q}</h3>
          <p className="mb-0">{faq.a}</p>
        </div>
      ))}
    </section>
  );
}
