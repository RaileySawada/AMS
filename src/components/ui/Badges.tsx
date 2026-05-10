import type { DocumentState, SubmissionStatus } from "../../types";

export function StatusBadge({ status }: { status: SubmissionStatus }) {
  const classes: Record<SubmissionStatus, string> = {
    Submitted: "bg-[#eef4ff] text-[#0b4bb3]",
    Received: "bg-[#fff6d7] text-[#7a4d00]",
    "Under Review": "bg-[#e8f5ff] text-[#075985]",
    Returned: "bg-[#fff1f2] text-[#d8182f]",
    Completed: "bg-[#eaf8ee] text-[#17663a]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${classes[status]}`}
    >
      {status}
    </span>
  );
}

export function DocumentBadge({ state }: { state: DocumentState }) {
  const classes: Record<DocumentState, string> = {
    Uploaded: "bg-[#eaf8ee] text-[#17663a]",
    Pending: "bg-[#eef4ff] text-[#0b4bb3]",
    Missing: "bg-[#fff6d7] text-[#7a4d00]",
    Duplicate: "bg-[#fff1f2] text-[#d8182f]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${classes[state]}`}
    >
      {state}
    </span>
  );
}
