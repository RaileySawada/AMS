import { Icon } from "../Icon";

export function StatCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "blue" | "red" | "gold" | "green";
}) {
  const toneClass = {
    blue: "bg-[#eef4ff] text-[#0b4bb3]",
    red: "bg-[#fff1f2] text-[#d8182f]",
    gold: "bg-[#fff6d7] text-[#7a4d00]",
    green: "bg-[#eaf8ee] text-[#17663a]",
  }[tone];

  return (
    <section className="page-enter min-w-0 rounded-lg border border-[#d8e0ed] bg-white p-4 shadow-sm shadow-[#0b1b33]/5 sm:p-5">
      <div
        className={`mb-4 grid h-10 w-10 place-items-center rounded-lg ${toneClass}`}
      >
        <Icon name="analytics" className="h-5 w-5" />
      </div>
      <p className="text-sm font-semibold text-[#667085]">{label}</p>
      <p className="mt-2 text-2xl font-bold text-[#142033] sm:text-3xl">
        {value}
      </p>
    </section>
  );
}

export function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/15 bg-white/5 p-3">
      <p className="text-xl font-bold text-white sm:text-2xl">{value}</p>
      <p className="mt-1">{label}</p>
    </div>
  );
}

export function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3 text-sm">
      <span className="text-[#667085]">{label}</span>
      <span className="max-w-[65%] break-words text-right font-semibold text-[#142033]">
        {value}
      </span>
    </div>
  );
}

export function ProgressMetric({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold">{label}</span>
        <span className="text-[#667085]">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-[#e6edf7]">
        <div
          className="h-2 rounded-full bg-[#0b4bb3]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function Finding({
  label,
  count,
  tone,
}: {
  label: string;
  count: string;
  tone: "blue" | "red" | "gold";
}) {
  const toneClass = {
    blue: "bg-[#eef4ff] text-[#0b4bb3]",
    red: "bg-[#fff1f2] text-[#d8182f]",
    gold: "bg-[#fff6d7] text-[#7a4d00]",
  }[tone];

  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-[#d8e0ed] p-4">
      <span className="font-semibold">{label}</span>
      <span className={`rounded-full px-3 py-1 text-sm font-bold ${toneClass}`}>
        {count}
      </span>
    </div>
  );
}
