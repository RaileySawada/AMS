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
    <div className="page-enter grid gap-6">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Log entries" value={`${visibleLogs.length}`} tone="blue" />
        <StatCard label="Status changes" value="11" tone="gold" />
        <StatCard label="Returned actions" value="5" tone="red" />
      </section>

      <Panel
        title={role === "admin" ? "Overall Logs" : "Related Logs"}
        eyebrow="Audit trail"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[860px] text-left text-sm">
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
