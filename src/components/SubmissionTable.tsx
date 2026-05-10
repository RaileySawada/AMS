import { submissions } from "../data/mockData";
import { StatusBadge } from "./ui/Badges";

export function SubmissionTable({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <div className="grid gap-3 xl:hidden">
        {submissions.map((submission) => (
          <article
            key={submission.id}
            className="rounded-lg border border-[#d8e0ed] p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-semibold text-[#0b4bb3]">{submission.id}</p>
                <h3 className="mt-1 break-words font-bold text-[#142033]">
                  {submission.school}
                </h3>
                <p className="mt-1 text-xs text-[#667085]">
                  {submission.district} - {submission.amount}
                </p>
              </div>
              <StatusBadge status={submission.status} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase text-[#667085]">
                  Complete
                </p>
                <p className="mt-1 font-bold">{submission.completeness}%</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-[#667085]">
                  Remarks
                </p>
                <p className="mt-1 font-bold">
                  {submission.missing.length
                    ? `${submission.missing.length} missing`
                    : "Complete"}
                </p>
              </div>
            </div>
            {!compact ? (
              <p className="mt-3 text-xs leading-5 text-[#667085]">
                {submission.lastUpdate}
              </p>
            ) : null}
          </article>
        ))}
      </div>

      <div className="hidden xl:block">
        <table className="w-full table-auto text-left text-sm">
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
    </>
  );
}
