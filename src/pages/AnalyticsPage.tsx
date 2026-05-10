import { Panel } from "../components/ui/Panel";
import { Finding, StatCard } from "../components/ui/Stats";

export function AnalyticsPage() {
  const completionByDistrict = [
    { label: "District 1", value: 88, color: "#0b4bb3" },
    { label: "District 2", value: 71, color: "#d8182f" },
    { label: "District 3", value: 96, color: "#17663a" },
    { label: "District 4", value: 82, color: "#c58a00" },
  ];

  return (
    <div className="page-enter grid gap-4 sm:gap-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total submissions" value="96" tone="blue" />
        <StatCard label="Complete packages" value="68" tone="green" />
        <StatCard label="Missing documents" value="23" tone="gold" />
        <StatCard label="Duplicate alerts" value="7" tone="red" />
      </section>

      <section className="grid gap-4 sm:gap-6 xl:grid-cols-[1fr_420px]">
        <Panel title="Completion by District" eyebrow="Analytics">
          <div className="space-y-5">
            {completionByDistrict.map((metric) => (
              <div key={metric.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold">{metric.label}</span>
                  <span className="text-[#667085]">{metric.value}%</span>
                </div>
                <div className="h-4 rounded-full bg-[#e6edf7]">
                  <div
                    className="h-4 rounded-full"
                    style={{
                      width: `${metric.value}%`,
                      backgroundColor: metric.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Findings" eyebrow="Documents">
          <div className="space-y-4">
            <Finding label="Missing Official Receipt" count="9" tone="gold" />
            <Finding label="Incomplete supplier canvass" count="6" tone="red" />
            <Finding label="Duplicate Sales Invoice" count="4" tone="red" />
            <Finding label="Late PhilGEPS posting" count="4" tone="blue" />
          </div>
        </Panel>
      </section>

      <Panel title="Volume" eyebrow="Monthly">
        <div className="grid h-56 grid-cols-6 items-end gap-2 sm:h-64 sm:gap-3">
          {[42, 58, 75, 61, 84, 96].map((value, index) => (
            <div key={value} className="flex h-full flex-col justify-end gap-2">
              <div
                className="rounded-t-lg bg-[#0b4bb3]"
                style={{ height: `${value}%` }}
              />
              <span className="text-center text-xs font-semibold text-[#667085]">
                M{index + 1}
              </span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
