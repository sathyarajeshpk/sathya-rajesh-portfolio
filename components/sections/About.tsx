export default function About() {
  return (
    <section id="about" className="wrap border-t rule py-10">
      <h2 className="mb-4">About me</h2>

      <p>
        I worked at TransUnion&rsquo;s technology centre in Chennai from 2019 to 2025, leading the
        design of ETL and ELT pipelines. They processed a few million records a night. We held them
        at 99.5% uptime against SLA, which I am reasonably proud of.
      </p>

      <p>
        Before that I spent years watching batch jobs fail at three in the morning and writing up
        why. That looks less impressive on a CV, but it taught me more about architecture than any
        of the design work did. I know which decisions cause pages at 3am because I was the one
        getting paged.
      </p>

      <p>
        I now work independently. Most projects are Azure data platforms, Fabric implementations, or
        Power BI reporting. Often all three, because they tend to arrive together.
      </p>

      <p>Some things I try to do on every project:</p>

      <ul className="list">
        <li>Work out the data contracts and who owns what before writing any pipelines.</li>
        <li>Leave behind documentation and a team that can maintain the thing without me.</li>
        <li>
          Keep cloud costs down by getting partitioning and cluster sizing right early, rather than
          trying to optimise after the first big invoice.
        </li>
        <li>
          Make reporting people actually trust. In practice that means being able to show where any
          number came from.
        </li>
      </ul>

      <p>
        Tools I use most: Azure Data Factory, Databricks, Microsoft Fabric, Delta Lake, Power BI,
        PySpark, Synapse, Python and SQL.
      </p>
    </section>
  );
}
