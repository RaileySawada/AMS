export type Role = "clerk" | "accountant" | "auditor" | "admin";

export type PageId =
  | "dashboard"
  | "upload"
  | "tracking"
  | "audit"
  | "analytics"
  | "reports"
  | "users";

export type SubmissionStatus =
  | "Submitted"
  | "Received"
  | "Under Review"
  | "Returned"
  | "Completed";

export type DocumentState = "Uploaded" | "Pending" | "Missing" | "Duplicate";

export type IconName =
  | "analytics"
  | "audit"
  | "bell"
  | "check"
  | "chevron"
  | "dashboard"
  | "download"
  | "file"
  | "filter"
  | "lock"
  | "logout"
  | "profile"
  | "report"
  | "search"
  | "settings"
  | "shield"
  | "tracking"
  | "upload"
  | "users";
