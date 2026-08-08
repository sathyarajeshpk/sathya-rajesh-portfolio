import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeaderProps = {
  /** Two-digit index, e.g. "01". Sits in the left column as a running order. */
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Rendered at the far right on wide screens — a link or aside. */
  aside?: ReactNode;
};

/**
 * Asymmetric section masthead: a hairline, a mono index on the left,
 * and the title set left-aligned in the wide column. Deliberately not centred —
 * the running index is what tells you where you are in the page.
 */
export default function SectionHeader({ index, label, title, intro, aside }: SectionHeaderProps) {
  return (
    <header className="border-t border-rule pt-6">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-12">
        <Reveal className="md:col-span-3 lg:col-span-2">
          <div className="flex items-baseline gap-3 md:flex-col md:gap-1">
            <span className="label nums text-accent">{index}</span>
            <span className="label text-subtle">{label}</span>
          </div>
        </Reveal>

        <div className="md:col-span-9 lg:col-span-8">
          <Reveal delay={0.05}>
            <h2 className="text-display-sm font-normal text-balance">{title}</h2>
          </Reveal>
          {intro ? (
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-measure text-lg leading-relaxed text-muted">{intro}</p>
            </Reveal>
          ) : null}
        </div>

        {aside ? (
          <Reveal delay={0.15} className="md:col-span-9 md:col-start-4 lg:col-span-2 lg:col-start-11">
            <div className="flex h-full items-start lg:justify-end">{aside}</div>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
