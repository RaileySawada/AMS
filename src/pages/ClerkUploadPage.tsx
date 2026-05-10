import { useMemo, useState } from "react";
import { Icon } from "../components/Icon";
import { StatusTimeline } from "../components/StatusTimeline";
import { SubmissionTable } from "../components/SubmissionTable";
import { DocumentBadge } from "../components/ui/Badges";
import { Panel } from "../components/ui/Panel";
import { InfoLine } from "../components/ui/Stats";
import { requiredDocuments, submissions } from "../data/mockData";
import { getDocumentState } from "../utils/documentState";

export function ClerkUploadPage() {
  const [selectedSchool, setSelectedSchool] = useState(submissions[0].school);
  const selectedSubmission =
    submissions.find((submission) => submission.school === selectedSchool) ??
    submissions[0];
  const documentRows = useMemo(
    () =>
      requiredDocuments.map((document, index) => {
        const state = getDocumentState(
          document,
          selectedSubmission.missing,
          selectedSubmission.duplicate,
          selectedSubmission.completeness,
        );
        return {
          document,
          state,
          owner: index < 8 ? "Procurement" : "Receiving",
        };
      }),
    [selectedSubmission],
  );

  return (
    <div className="page-enter grid gap-4 sm:gap-6">
      <section className="grid gap-4 xl:grid-cols-[360px_1fr]">
        <Panel title="School Selection" eyebrow="Upload source">
          <label className="block">
            <span className="text-sm font-semibold text-[#344054]">
              School
            </span>
            <select
              value={selectedSchool}
              onChange={(event) => setSelectedSchool(event.target.value)}
              className="mt-2 w-full rounded-lg border border-[#c9d4e5] bg-white px-4 py-3 text-sm outline-none focus:border-[#0b4bb3] focus:ring-4 focus:ring-[#0b4bb3]/10"
            >
              {submissions.map((submission) => (
                <option key={submission.id} value={submission.school}>
                  {submission.school}
                </option>
              ))}
            </select>
          </label>

          <div className="mt-5 grid gap-3 min-[520px]:grid-cols-2 xl:grid-cols-1">
            <InfoLine label="Tracking ID" value={selectedSubmission.id} />
            <InfoLine label="District" value={selectedSubmission.district} />
            <InfoLine label="Purchase type" value={selectedSubmission.type} />
            <InfoLine label="Amount" value={selectedSubmission.amount} />
          </div>
        </Panel>

        <Panel title="Documents" eyebrow="Goods purchase">
          <div className="grid gap-4 lg:grid-cols-[1fr_260px]">
            <div className="rounded-lg border-2 border-dashed border-[#aebbd0] bg-[#f8fafc] p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#eef4ff] text-[#0b4bb3]">
                    <Icon name="upload" className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">Add attachments</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <DocumentBadge state="Uploaded" />
                    <DocumentBadge state="Missing" />
                    <DocumentBadge state="Duplicate" />
                  </div>
                </div>
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0b4bb3] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#083d94] sm:w-auto"
                >
                  <Icon name="file" className="h-5 w-5" />
                  Choose files
                </button>
              </div>
            </div>

            <div className="rounded-lg border border-[#d8e0ed] p-4">
              <p className="text-sm font-semibold text-[#344054]">
                Validation
              </p>
              <div className="mt-4 space-y-3">
                <InfoLine
                  label="Uploaded"
                  value={`${requiredDocuments.length - selectedSubmission.missing.length}/13`}
                />
                <InfoLine
                  label="Missing"
                  value={`${selectedSubmission.missing.length}`}
                />
                <InfoLine label="Duplicate" value={selectedSubmission.duplicate} />
              </div>
              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-[#0b4bb3] px-4 py-2.5 text-sm font-semibold text-[#0b4bb3] transition hover:bg-[#eef4ff]"
              >
                <Icon name="check" className="h-4 w-4" />
                Validate
              </button>
            </div>
          </div>
        </Panel>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_380px]">
        <Panel title="Attachments" eyebrow="Checklist">
          <div className="grid gap-3 xl:hidden">
            {documentRows.map((row, index) => (
              <article
                key={row.document}
                className="rounded-lg border border-[#d8e0ed] p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#667085]">
                      Document {index + 1}
                    </p>
                    <h3 className="mt-1 break-words font-bold text-[#142033]">
                      {row.document}
                    </h3>
                    <p className="mt-1 text-sm text-[#667085]">{row.owner}</p>
                  </div>
                  <DocumentBadge state={row.state} />
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-lg border border-[#d8e0ed] px-3 py-2 text-xs font-semibold text-[#344054] hover:border-[#0b4bb3] hover:text-[#0b4bb3]"
                >
                  Replace
                </button>
              </article>
            ))}
          </div>

          <div className="hidden xl:block">
            <table className="w-full table-auto text-left text-sm">
              <thead>
                <tr className="border-b border-[#d8e0ed] text-xs uppercase text-[#667085]">
                  <th className="py-3 pr-4">No.</th>
                  <th className="py-3 pr-4">Document</th>
                  <th className="py-3 pr-4">Owner</th>
                  <th className="py-3 pr-4">Status</th>
                  <th className="py-3 pr-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e6edf7]">
                {documentRows.map((row, index) => (
                  <tr key={row.document}>
                    <td className="py-3 pr-4 font-semibold text-[#667085]">
                      {index + 1}
                    </td>
                    <td className="py-3 pr-4 font-semibold text-[#142033]">
                      {row.document}
                    </td>
                    <td className="py-3 pr-4 text-[#667085]">{row.owner}</td>
                    <td className="py-3 pr-4">
                      <DocumentBadge state={row.state} />
                    </td>
                    <td className="py-3 pr-4">
                      <button
                        type="button"
                        className="rounded-lg border border-[#d8e0ed] px-3 py-1.5 text-xs font-semibold text-[#344054] hover:border-[#0b4bb3] hover:text-[#0b4bb3]"
                      >
                        Replace
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel title="Status" eyebrow="School package">
          <StatusTimeline status={selectedSubmission.status} />
          <div className="mt-6 rounded-lg border border-[#d8e0ed] bg-[#f8fafc] p-4">
            <p className="text-sm leading-6 text-[#667085]">
              {selectedSubmission.lastUpdate}: {selectedSubmission.reviewStatus}
            </p>
          </div>
        </Panel>
      </section>

      <Panel title="Submissions" eyebrow="All schools">
        <SubmissionTable compact />
      </Panel>
    </div>
  );
}
