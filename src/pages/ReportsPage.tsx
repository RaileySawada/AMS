import { Icon } from "../components/Icon";
import { Panel } from "../components/ui/Panel";
import type { Role } from "../types";

export function ReportsPage({ role }: { role: Role }) {
  const reportTypes =
    role === "auditor"
      ? [
          "Audit Observation Memo",
          "School Compliance Summary",
          "Returned Document Register",
        ]
      : [
          "Accounting Completeness Summary",
          "Duplicate Upload Register",
          "Monthly Submission Summary",
        ];

  return (
    <div className="page-enter grid gap-6 xl:grid-cols-[1fr_380px]">
      <Panel title="Reports" eyebrow="Library">
        <div className="grid gap-4 md:grid-cols-2">
          {reportTypes.map((report, index) => (
            <div key={report} className="rounded-lg border border-[#d8e0ed] p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[#eef4ff] text-[#0b4bb3]">
                  <Icon name="report" className="h-5 w-5" />
                </div>
                <span className="rounded-full bg-[#f8fafc] px-3 py-1 text-xs font-semibold text-[#667085]">
                  RPT-0{index + 1}
                </span>
              </div>
              <h3 className="mt-4 font-bold">{report}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold text-[#0b4bb3]">
                  Status history
                </span>
                <span className="rounded-full bg-[#fff6d7] px-3 py-1 text-xs font-semibold text-[#7a4d00]">
                  Findings
                </span>
              </div>
              <button
                type="button"
                className="mt-4 flex items-center gap-2 rounded-lg border border-[#0b4bb3] px-3 py-2 text-sm font-semibold text-[#0b4bb3] hover:bg-[#eef4ff]"
              >
                <Icon name="download" className="h-4 w-4" />
                Export
              </button>
            </div>
          ))}
        </div>
      </Panel>

      <Panel title="Generate" eyebrow="Report">
        <label className="block">
          <span className="text-sm font-semibold text-[#344054]">
            Report type
          </span>
          <select className="mt-2 w-full rounded-lg border border-[#c9d4e5] bg-white px-3 py-2.5 text-sm outline-none focus:border-[#0b4bb3]">
            {reportTypes.map((report) => (
              <option key={report}>{report}</option>
            ))}
          </select>
        </label>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <label className="block">
            <span className="text-sm font-semibold text-[#344054]">From</span>
            <input
              type="date"
              defaultValue="2026-05-01"
              className="mt-2 w-full rounded-lg border border-[#c9d4e5] px-3 py-2.5 text-sm outline-none focus:border-[#0b4bb3]"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-[#344054]">To</span>
            <input
              type="date"
              defaultValue="2026-05-10"
              className="mt-2 w-full rounded-lg border border-[#c9d4e5] px-3 py-2.5 text-sm outline-none focus:border-[#0b4bb3]"
            />
          </label>
        </div>
        <div className="mt-5 space-y-3">
          {[
            "Include audit trail",
            "Include validation findings",
            "Include school status history",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-3 rounded-lg border border-[#d8e0ed] p-3 text-sm font-semibold"
            >
              <input type="checkbox" defaultChecked className="h-4 w-4" />
              {item}
            </label>
          ))}
        </div>
        <button
          type="button"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#0b4bb3] px-4 py-3 font-semibold text-white hover:bg-[#083d94]"
        >
          <Icon name="report" className="h-5 w-5" />
          Generate
        </button>
      </Panel>
    </div>
  );
}
