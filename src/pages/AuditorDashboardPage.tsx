import { submissions } from "../data/mockData";
import { StatusBadge } from "../components/ui/Badges";
import { Panel } from "../components/ui/Panel";
import { ProgressMetric, StatCard } from "../components/ui/Stats";

export function AuditorDashboardPage() {
  const pending = submissions.filter(
    (submission) => submission.status !== "Completed",
  );

  return (
    <div className="page-enter grid gap-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Pending review" value="18" tone="blue" />
        <StatCard label="Returned packages" value="5" tone="red" />
        <StatCard label="Completed audits" value="42" tone="green" />
        <StatCard label="Average completion" value="88%" tone="gold" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1fr_380px]">
        <Panel title="Tasks" eyebrow="Audit queue">
          <div className="space-y-3">
            {pending.map((submission) => (
              <div
                key={submission.id}
                className="rounded-lg border border-[#d8e0ed] p-4"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-semibold">{submission.school}</p>
                    <p className="mt-1 text-sm text-[#667085]">
                      {submission.id} - {submission.amount}
                    </p>
                  </div>
                  <StatusBadge status={submission.status} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {submission.missing.length > 0 ? (
                    submission.missing.map((document) => (
                      <span
                        key={document}
                        className="rounded-full bg-[#fff6d7] px-3 py-1 text-xs font-semibold text-[#7a4d00]"
                      >
                        {document}
                      </span>
                    ))
                  ) : (
                    <span className="rounded-full bg-[#eaf8ee] px-3 py-1 text-xs font-semibold text-[#17663a]">
                      Ready for completion
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Review" eyebrow="Today">
          <div className="space-y-5">
            <ProgressMetric label="Completeness checks" value={76} />
            <ProgressMetric label="Duplicate checks" value={64} />
            <ProgressMetric label="Final reports" value={48} />
          </div>
          <div className="mt-6 rounded-lg bg-[#0b1b33] p-5 text-white">
            <p className="text-sm font-semibold text-[#f3c848]">Priority</p>
            <p className="mt-2 text-xl font-bold">Rizal National High School</p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              3 missing attachments
            </p>
          </div>
        </Panel>
      </section>
    </div>
  );
}
