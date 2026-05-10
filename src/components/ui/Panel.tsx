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
    <section className="page-enter min-w-0 rounded-lg border border-[#d8e0ed] bg-white p-4 shadow-sm shadow-[#0b1b33]/5 sm:p-5">
      <div className="mb-4 sm:mb-5">
        <p className="text-xs font-semibold uppercase text-[#d8182f]">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-lg font-bold text-[#142033] sm:text-xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
