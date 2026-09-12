"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import { prefillContact } from "@/lib/prefill";
import { PROJECTS as projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="shell">
        <SectionHeader
          index="03"
          label="Selected work"
          title="Six projects, and what changed because of them."
        />

        <div className="mt-14 grid gap-x-10 gap-y-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal as="article" key={project.title} delay={0.06 * i}>
              <div className="group flex h-full flex-col border-t border-rule pt-6 transition-all duration-500 hover:translate-y-[-4px]">
                <div className="mb-5 flex items-baseline justify-between gap-4">
                  <span className="label text-subtle">{project.discipline}</span>
                  <span className="label nums text-subtle">{project.year}</span>
                </div>

                <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden border border-rule bg-sunken group">
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 90vw, 44vw"
                    className="object-cover transition-all duration-700 ease-editorial group-hover:scale-[1.05] group-hover:brightness-110"
                  />
                </div>

                <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>

                <p className="mt-4 flex items-baseline gap-2.5 text-[0.9375rem]">
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block h-px w-4 shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  <span className="text-[var(--fg)]">{project.outcome}</span>
                </p>

                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                  {project.tags.map((tag) => (
                    <li key={tag} className="label text-subtle">
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex-1" />

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pb-6">
                  <Link
                    href={`/work/${project.slug}`}
                    className="label link-underline self-start text-[var(--fg)] hover:text-[var(--accent)]"
                  >
                    Case study
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() =>
                      prefillContact({
                        service: project.service,
                        description: `I'd like to discuss a project along the lines of "${project.title}".`,
                      })
                    }
                    className="label link-underline self-start text-muted hover:text-[var(--fg)]"
                  >
                    Discuss something similar
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal as="article" delay={0.24}>
            <div className="flex h-full flex-col justify-between border-t border-rule pt-6">
              <div>
                <span className="label text-subtle">Next</span>
                <h3 className="mt-5 text-2xl font-bold leading-tight">
                  There is space here for whatever you are building.
                </h3>
                <p className="mt-3 max-w-measure leading-relaxed text-muted">
                  If your reporting is drifting out of sync, your pipelines need an owner, or the
                  platform decision has been deferred twice — that is the conversation I want.
                </p>
              </div>
              <a
                href="#contact"
                className="label mt-8 inline-flex h-12 w-fit items-center rounded-full px-6 transition-opacity duration-200 hover:opacity-85"
                style={{ background: "var(--fg)", color: "var(--bg)" }}
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
