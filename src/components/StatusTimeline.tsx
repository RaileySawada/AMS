import { statusFlow } from "../data/mockData";
import type { SubmissionStatus } from "../types";

export function StatusTimeline({ status }: { status: SubmissionStatus }) {
  const activeIndex =
    status === "Submitted"
      ? 3
      : status === "Received"
        ? 4
        : status === "Under Review"
          ? 5
          : 6;

  return (
    <div className="space-y-4">
      {statusFlow.map((step, index) => {
        const isActive = index <= activeIndex;
        const isCurrent = index === activeIndex;

        return (
          <div key={step} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={`grid h-7 w-7 place-items-center rounded-full border text-xs font-bold ${
                  isActive
                    ? "border-[#0b4bb3] bg-[#0b4bb3] text-white"
                    : "border-[#c9d4e5] bg-white text-[#667085]"
                }`}
              >
                {index + 1}
              </span>
              {index < statusFlow.length - 1 ? (
                <span
                  className={`mt-2 h-6 w-px ${
                    isActive ? "bg-[#0b4bb3]" : "bg-[#c9d4e5]"
                  }`}
                />
              ) : null}
            </div>
            <div className="pb-2">
              <p
                className={`font-semibold ${
                  isCurrent ? "text-[#d8182f]" : "text-[#142033]"
                }`}
              >
                {step}
              </p>
              {isCurrent ? (
                <p className="mt-1 text-sm text-[#667085]">Current stage</p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
