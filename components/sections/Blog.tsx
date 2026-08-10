const posts = [
  {
    title: "Building production Delta Lake architectures on Azure Databricks",
    date: "January 2025",
    body: "Notes on incremental loads, MERGE, and time travel. The short version: use CDC friendly merge pipelines to keep big fact tables current, keep time travel on because it will save you during an incident, and get partitioning and file sizes right early or you will be fighting them for years.",
  },
  {
    title: "Turning natural language into SQL",
    date: "December 2024",
    body: "Getting a model to write SQL is the easy half. The hard half is making business users trust the answer. Map the question to a curated semantic layer before generating anything, always show the query and the assumptions you made, and put hard limits on rows and access.",
  },
  {
    title: "Migrating 50TB to Azure",
    date: "November 2024",
    body: "What the migration plan looked like on paper versus what happened. Benchmark throughput and compression before the first full load, run dual reads during the stabilisation window, and keep rollback checkpoints so the business stays calm during cutover.",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="wrap border-t rule py-10">
      <h2 className="mb-4">Writing</h2>

      <p className="muted text-[0.95rem]">
        Summaries for now. I keep meaning to publish the full versions.
      </p>

      {posts.map((post) => (
        <div key={post.title} className="mb-6">
          <h3 className="mb-0.5">{post.title}</h3>
          <p className="muted mb-1 text-[0.95rem]">{post.date}</p>
          <p className="mb-0">{post.body}</p>
        </div>
      ))}
    </section>
  );
}
