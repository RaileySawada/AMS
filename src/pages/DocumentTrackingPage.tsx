import { useState } from "react";
import { Icon } from "../components/Icon";
import { StatusBadge } from "../components/ui/Badges";
import { Panel } from "../components/ui/Panel";
import { StatCard } from "../components/ui/Stats";
import { submissions } from "../data/mockData";
import type { Role } from "../types";

export function DocumentTrackingPage({ role }: { role: Role }) {
  const [rowStatus, setRowStatus] = useState<Record<string, string>>(
    Object.fromEntries(
      submissions.map((submission) => [
        submission.id,
        role === "auditor"
          ? submission.reviewStatus
          : submission.accountingStatus,
      ]),
    ),
  );

  const statusOptions =
    role === "auditor"
      ? [
          "Queued for review",
          "Auditor review in progress",
          "Returned for correction",
          "Completed",
        ]
      : [
          "For duplicate check",
          "Completeness checked",
          "Returned for completion",
          "Accounting cleared",
        ];

  return (
    <div className="page-enter grid gap-4 sm:gap-6">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Submitted" value="31" tone="blue" />
        <StatCard label="Under review" value="12" tone="gold" />
        <StatCard label="Returned" value="5" tone="red" />
      </section>

      <Panel
        title={role === "auditor" ? "Review Status" : "Accounting Status"}
        eyebrow="Tracking"
      >
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md md:flex-1">
            <Icon
              name="search"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#667085]"
            />
            <input
              placeholder="Search tracking ID or school"
              className="w-full rounded-lg border border-[#c9d4e5] py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#0b4bb3] focus:ring-4 focus:ring-[#0b4bb3]/10"
            />
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#d8e0ed] px-4 py-2.5 text-sm font-semibold text-[#344054] hover:border-[#0b4bb3] hover:text-[#0b4bb3] md:w-auto"
          >
            <Icon name="filter" className="h-4 w-4" />
            Filter
          </button>
        </div>

        <div className="grid gap-3 xl:hidden">
          {submissions.map((submission) => (
            <article
              key={submission.id}
              className="rounded-lg border border-[#d8e0ed] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-semibold text-[#0b4bb3]">{submission.id}</p>
                  <h3 className="mt-1 break-words font-bold">{submission.school}</h3>
                  <p className="mt-1 text-xs text-[#667085]">
                    {submission.clerk} - {submission.amount}
                  </p>
                </div>
                <StatusBadge status={submission.status} />
              </div>
              <div className="mt-4">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold text-[#344054]">
                    Completeness
                  </span>
                  <span className="font-bold">{submission.completeness}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#e6edf7]">
                  <div
                    className="h-2 rounded-full bg-[#0b4bb3]"
                    style={{ width: `${submission.completeness}%` }}
                  />
                </div>
              </div>
              <select
                value={rowStatus[submission.id]}
                onChange={(event) =>
                  setRowStatus((current) => ({
                    ...current,
                    [submission.id]: event.target.value,
                  }))
                }
                className="mt-4 w-full rounded-lg border border-[#c9d4e5] bg-white px-3 py-2 text-sm outline-none focus:border-[#0b4bb3]"
              >
                {statusOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <button
                type="button"
                className="mt-3 w-full rounded-lg bg-[#0b4bb3] px-3 py-2 text-xs font-semibold text-white hover:bg-[#083d94]"
              >
                Update
              </button>
            </article>
          ))}
        </div>

        <div className="hidden xl:block">
          <table className="w-full table-auto text-left text-sm">
            <thead>
              <tr className="border-b border-[#d8e0ed] text-xs uppercase text-[#667085]">
                <th className="py-3 pr-4">Tracking ID</th>
                <th className="py-3 pr-4">School</th>
                <th className="py-3 pr-4">Completeness</th>
                <th className="py-3 pr-4">Current status</th>
                <th className="py-3 pr-4">Update status</th>
                <th className="py-3 pr-4">Action</th>
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
                      {submission.clerk} - {submission.amount}
                    </p>
                  </td>
                  <td className="py-4 pr-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 rounded-full bg-[#e6edf7]">
                        <div
                          className="h-2 rounded-full bg-[#0b4bb3]"
                          style={{ width: `${submission.completeness}%` }}
                        />
                      </div>
                      <span className="font-semibold">
                        {submission.completeness}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 pr-4">
                    <StatusBadge status={submission.status} />
                  </td>
                  <td className="py-4 pr-4">
                    <select
                      value={rowStatus[submission.id]}
                      onChange={(event) =>
                        setRowStatus((current) => ({
                          ...current,
                          [submission.id]: event.target.value,
                        }))
                      }
                      className="w-full rounded-lg border border-[#c9d4e5] bg-white px-3 py-2 text-sm outline-none focus:border-[#0b4bb3]"
                    >
                      {statusOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="py-4 pr-4">
                    <button
                      type="button"
                      className="rounded-lg bg-[#0b4bb3] px-3 py-2 text-xs font-semibold text-white hover:bg-[#083d94]"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </div>
  );
}
