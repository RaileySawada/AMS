import { submissions } from "../data/mockData";
import { StatusBadge } from "./ui/Badges";

export function SubmissionTable({ compact = false }: { compact?: boolean }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[860px] text-left text-sm">
        <thead>
          <tr className="border-b border-[#d8e0ed] text-xs uppercase text-[#667085]">
            <th className="py-3 pr-4">Tracking ID</th>
            <th className="py-3 pr-4">School</th>
            <th className="py-3 pr-4">Status</th>
            <th className="py-3 pr-4">Completeness</th>
            {!compact ? <th className="py-3 pr-4">Updated</th> : null}
            <th className="py-3 pr-4">Remarks</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#e6edf7]">
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td className="py-4 pr-4 font-semibold text-[#0b4bb3]">
                {submission.id}
              </td>
              <td className="py-4 pr-4">
                <p className="font-semibold">{submission.school}</p>
                <p className="mt-1 text-xs text-[#667085]">
                  {submission.district} - {submission.amount}
                </p>
              </td>
              <td className="py-4 pr-4">
                <StatusBadge status={submission.status} />
              </td>
              <td className="py-4 pr-4">{submission.completeness}%</td>
              {!compact ? (
                <td className="py-4 pr-4 text-[#667085]">
                  {submission.lastUpdate}
                </td>
              ) : null}
              <td className="py-4 pr-4 text-[#667085]">
                {submission.missing.length
                  ? `${submission.missing.length} missing`
                  : "Complete"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
