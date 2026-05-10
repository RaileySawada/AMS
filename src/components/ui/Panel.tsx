import type { ReactNode } from "react";

export function Panel({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <section className="page-enter rounded-lg border border-[#d8e0ed] bg-white p-5 shadow-sm shadow-[#0b1b33]/5">
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase text-[#d8182f]">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-xl font-bold text-[#142033]">{title}</h2>
      </div>
      {children}
    </section>
  );
}
