import { Panel } from "../components/ui/Panel";
import { StatCard } from "../components/ui/Stats";
import { auditLogs } from "../data/mockData";
import type { Role } from "../types";

export function AuditTrailsPage({ role }: { role: Role }) {
  const visibleLogs = auditLogs.filter((log) => {
    if (role === "admin") {
      return true;
    }
    if (role === "auditor") {
      return log.scope === "auditor" || log.scope === "accountant";
    }
    if (role === "accountant") {
      return log.scope === "accountant" || log.scope === "clerk";
    }
    return log.scope === "clerk";
  });

  return (
    <div className="page-enter grid gap-4 sm:gap-6">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard
          label="Log entries"
          value={`${visibleLogs.length}`}
          tone="blue"
        />
        <StatCard label="Status changes" value="11" tone="gold" />
        <StatCard label="Returned actions" value="5" tone="red" />
      </section>

      <Panel
        title={role === "admin" ? "Overall Logs" : "Related Logs"}
        eyebrow="Audit trail"
      >
        <div className="grid gap-3 xl:hidden">
          {visibleLogs.map((log) => (
            <article
              key={`${log.time}-${log.action}`}
              className="rounded-lg border border-[#d8e0ed] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="break-words font-bold">{log.user}</p>
                  <p className="mt-1 text-xs text-[#667085]">{log.time}</p>
                </div>
                <span className="rounded-full bg-[#eef4ff] px-3 py-1 text-xs font-semibold text-[#0b4bb3]">
                  {log.role}
                </span>
              </div>
              <p className="mt-4 font-semibold text-[#142033]">{log.action}</p>
              <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase text-[#667085]">
                    Target
                  </p>
                  <p className="mt-1 font-bold text-[#0b4bb3]">{log.target}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-[#667085]">
                    Result
                  </p>
                  <p className="mt-1 font-bold">{log.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden xl:block">
          <table className="w-full table-auto text-left text-sm">
            <thead>
              <tr className="border-b border-[#d8e0ed] text-xs uppercase text-[#667085]">
                <th className="py-3 pr-4">Time</th>
                <th className="py-3 pr-4">User</th>
                <th className="py-3 pr-4">Role</th>
                <th className="py-3 pr-4">Action</th>
                <th className="py-3 pr-4">Target</th>
                <th className="py-3 pr-4">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e6edf7]">
              {visibleLogs.map((log) => (
                <tr key={`${log.time}-${log.action}`}>
                  <td className="py-4 pr-4 text-[#667085]">{log.time}</td>
                  <td className="py-4 pr-4 font-semibold">{log.user}</td>
                  <td className="py-4 pr-4">{log.role}</td>
                  <td className="py-4 pr-4">{log.action}</td>
                  <td className="py-4 pr-4 font-semibold text-[#0b4bb3]">
                    {log.target}
                  </td>
                  <td className="py-4 pr-4">{log.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
