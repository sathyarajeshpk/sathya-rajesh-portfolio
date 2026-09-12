export type Project = {
  slug: string;
  year: string;
  discipline: string;
  title: string;
  image: string;
  /** One-line card summary, used on every theme's project grid. */
  summary: string;
  outcome: string;
  tags: string[];
  /** Case-study page fields — reorganized from the same real facts already
   *  on the site (About/Experience/Testimonials), not new claims. */
  problem: string;
  approach: string;
  service: string;
  /** Slug of a matching entry in TESTIMONIALS below, if this project has one. */
  testimonialOrg?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "pharma-omnichannel-lakehouse",
    year: "2026",
    discipline: "Data engineering",
    title: "Pharma omnichannel lakehouse",
    image: "/images/projects/fabric-platform.svg",
    summary: "100+ datasets across eight marketing and commercial domains, ingested from REST APIs and SFTP into a Landing → Bronze → Silver → Data Cloud medallion on Databricks and ADLS Gen2, with Key Vault-backed secret scopes throughout.",
    outcome: "New sources onboarded by configuration, not code",
    tags: ["Databricks", "ADLS Gen2", "Key Vault"],
    service: "Data Platform",
    problem: "A pharmaceutical client's marketing and commercial data lived across eight fragmented domains, ingested by REST APIs and SFTP drops with no consistent onboarding path — every new source meant a new bespoke notebook.",
    approach: "Built a Landing → Bronze → Silver → Data Cloud medallion on Databricks and ADLS Gen2, with a metadata-driven configuration layer so new sources are onboarded by filling in config, not writing code. Credentials run through Key Vault-backed secret scopes to platform security standards.",
  },
  {
    slug: "aura-root-cause-analyzer",
    year: "2025",
    discipline: "AI operations",
    title: "AURA — root cause analyzer",
    image: "/images/projects/incident-analyzer.svg",
    summary: "Pipeline logs land in ADLS Gen2, get parsed into failure signatures, and an LLM proposes probable root causes with supporting evidence. Validated resolutions feed back into a knowledge base.",
    outcome: "60% faster incident triage, less alert fatigue",
    tags: ["RAG", "LangChain", "Log analysis"],
    service: "AI Solution",
    problem: "Pipeline failures were diagnosed manually — engineers re-tracing logs across systems to find a root cause, with no memory of how the same failure was resolved last time.",
    approach: "Pipeline logs land in ADLS Gen2 and get parsed into failure signatures. An LLM (via a RAG pattern over prior incidents) proposes probable root causes with supporting evidence, and validated resolutions feed back into a knowledge base so the system gets sharper with use.",
  },
  {
    slug: "nl2sql",
    year: "2024",
    discipline: "Applied AI",
    title: "Natural language to SQL",
    image: "/images/projects/nl2sql.svg",
    summary: "Plain-English questions become SQL, PySpark, and charts — grounded in a curated semantic layer, with the generated query and its assumptions always shown back to the user.",
    outcome: "Analyst queue bypassed for routine questions",
    tags: ["NL2SQL", "Python", "Semantic layer"],
    service: "AI Solution",
    problem: "Routine reporting questions were queuing up behind the same analysts who owned the harder analytical work, simply because writing SQL was the bottleneck.",
    approach: "A curated semantic layer maps business terms to the real schema, so plain-English questions become SQL, PySpark, or charts without a model guessing at table structure. The generated query and its assumptions are always shown back to the user, so nobody has to blindly trust the answer.",
  },
  {
    slug: "power-bi-suite",
    year: "2023",
    discipline: "Business intelligence",
    title: "Executive Power BI suite",
    image: "/images/projects/power-bi-dashboard.svg",
    summary: "Star-schema model and a DAX measure library behind a C-suite dashboard set, replacing a monthly deck assembled by hand.",
    outcome: "~60% less manual reporting effort",
    tags: ["Power BI", "DAX", "Dimensional modelling"],
    service: "Power BI Dashboard",
    problem: "Leadership reporting was a monthly deck assembled by hand — slow to produce, inconsistent between cycles, and impossible to drill into.",
    approach: "Modelled the business on a proper star schema with a shared DAX measure library, then built the executive dashboard set directly on top of it, so every number traces back to the same governed definitions.",
  },
  {
    slug: "skyline-industries-hardening",
    year: "2026",
    discipline: "Full-stack",
    title: "Skyline Industries — hardening",
    image: "/images/projects/skyline-industries-light.png",
    summary: "Security audit and visual rebuild of a construction company's site: hardcoded secrets removed, rate limiting and input validation added, layout defects fixed.",
    outcome: "Three critical vulnerabilities eliminated",
    tags: ["Next.js", "TypeScript", "Security"],
    service: "Web Application",
    testimonialOrg: "Skyline Industries",
    problem: "A construction company's public site shipped with hardcoded secrets, no rate limiting, and no input validation on its forms — alongside layout defects that undercut the brand on every page.",
    approach: "Ran a full security audit and closed each finding directly: secrets moved out of source, rate limiting and input validation added, then a visual rebuild in Next.js and TypeScript to fix the layout defects and bring the site up to the standard the brand deserved.",
  },
  {
    slug: "workforce-analytics",
    year: "2022",
    discipline: "People analytics",
    title: "Workforce analytics",
    image: "/images/projects/hr-analytics.svg",
    summary: "Attrition, hiring funnel, and performance reporting built on Apache Superset for a team without a Power BI licence.",
    outcome: "Attrition drivers identified by department",
    tags: ["Superset", "SQL", "Workforce planning"],
    service: "Analytics",
    problem: "HR needed attrition, hiring-funnel, and performance visibility, but had no Power BI licence and no existing reporting layer to build on.",
    approach: "Built the reporting layer in SQL and stood up the dashboard set in Apache Superset — a fully open-source path to the same operational visibility, department by department.",
  },
];

export const TESTIMONIALS = [
  { org: "Skyline Industries", role: "Construction & Project Management", quote: "Our requirements were understood and converted into a clean, attractive website. We would definitely recommend your work." },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
