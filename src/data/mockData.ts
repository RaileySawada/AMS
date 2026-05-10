import type { IconName, PageId, Role, SubmissionStatus } from "../types";

export const roleDetails: Record<
  Role,
  {
    label: string;
    access: string;
    home: PageId;
  }
> = {
  clerk: {
    label: "School Clerk",
    access: "Upload documents and track school submissions.",
    home: "upload",
  },
  accountant: {
    label: "Accountant",
    access: "Review completeness, missing files, and duplicates.",
    home: "tracking",
  },
  auditor: {
    label: "Auditor",
    access: "Review status, audit trails, analytics, and reports.",
    home: "dashboard",
  },
  admin: {
    label: "Admin",
    access: "Manage users and monitor overall logs.",
    home: "audit",
  },
};

export const navByRole: Record<
  Role,
  Array<{
    id: PageId;
    label: string;
    icon: IconName;
  }>
> = {
  clerk: [{ id: "upload", label: "Document Upload", icon: "upload" }],
  accountant: [
    { id: "tracking", label: "Document Tracking", icon: "tracking" },
    { id: "audit", label: "Audit Trails", icon: "audit" },
    { id: "analytics", label: "Analytics", icon: "analytics" },
    { id: "reports", label: "Reports", icon: "report" },
  ],
  auditor: [
    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "tracking", label: "Document Tracking", icon: "tracking" },
    { id: "audit", label: "Audit Trails", icon: "audit" },
    { id: "analytics", label: "Analytics", icon: "analytics" },
    { id: "reports", label: "Reports", icon: "report" },
  ],
  admin: [
    { id: "audit", label: "Audit Trails", icon: "audit" },
    { id: "users", label: "User Management", icon: "users" },
  ],
};

export const pageTitles: Record<PageId, string> = {
  dashboard: "Dashboard",
  upload: "Document Upload",
  tracking: "Document Tracking",
  audit: "Audit Trails",
  analytics: "Analytics",
  reports: "Reports",
  users: "User Management",
};

export const requiredDocuments = [
  "Purchase Order",
  "Purchase Request",
  "Canvass Form from 3 Different Suppliers",
  "BAC Resolution",
  "Notice of Award",
  "Notice to Proceed",
  "Proof of PhilGEPS Posting",
  "Inspection and Acceptance Report",
  "Sales Invoice",
  "Official Receipt",
  "Delivery Receipt",
  "Notice of Delivery",
  "Pictures of Delivered Items or Goods",
];

export const statusFlow = [
  "School Upload",
  "System Validation",
  "COA Received",
  "Submitted",
  "Received",
  "Under Review",
  "Returned or Completed",
];

export const submissions = [
  {
    id: "AMS-2026-001",
    school: "Mabini Elementary School",
    district: "District 1",
    amount: "PHP 128,400",
    type: "Goods / Item Purchase",
    status: "Under Review" as SubmissionStatus,
    clerk: "Maria Liza Garcia",
    completeness: 92,
    missing: ["Official Receipt"],
    duplicate: "Sales Invoice flagged from April batch",
    lastUpdate: "May 10, 2026 10:48 AM",
    accountingStatus: "Completeness checked",
    reviewStatus: "Auditor review in progress",
  },
  {
    id: "AMS-2026-002",
    school: "Rizal National High School",
    district: "District 2",
    amount: "PHP 246,980",
    type: "Goods / Item Purchase",
    status: "Returned" as SubmissionStatus,
    clerk: "Jose Marco Dela Cruz",
    completeness: 77,
    missing: ["BAC Resolution", "Notice to Proceed", "Delivery Receipt"],
    duplicate: "None detected",
    lastUpdate: "May 9, 2026 3:18 PM",
    accountingStatus: "Returned for completion",
    reviewStatus: "Awaiting corrected attachments",
  },
  {
    id: "AMS-2026-003",
    school: "Bonifacio Integrated School",
    district: "District 3",
    amount: "PHP 94,125",
    type: "Goods / Item Purchase",
    status: "Completed" as SubmissionStatus,
    clerk: "Nora Mae Santos",
    completeness: 100,
    missing: [],
    duplicate: "None detected",
    lastUpdate: "May 8, 2026 11:26 AM",
    accountingStatus: "Accounting cleared",
    reviewStatus: "Completed",
  },
  {
    id: "AMS-2026-004",
    school: "Del Pilar Central School",
    district: "District 1",
    amount: "PHP 173,650",
    type: "Goods / Item Purchase",
    status: "Received" as SubmissionStatus,
    clerk: "Ana Marie Villanueva",
    completeness: 85,
    missing: ["Proof of PhilGEPS Posting", "Pictures of Delivered Items or Goods"],
    duplicate: "Official Receipt needs review",
    lastUpdate: "May 10, 2026 9:12 AM",
    accountingStatus: "For duplicate check",
    reviewStatus: "Queued for review",
  },
];

export const auditLogs = [
  {
    time: "May 10, 2026 11:02 AM",
    user: "Maria Liza Garcia",
    role: "Clerk",
    scope: "clerk",
    action: "Uploaded Delivery Receipt",
    target: "AMS-2026-001",
    result: "Validation refreshed",
  },
  {
    time: "May 10, 2026 10:48 AM",
    user: "Graciela Mercado",
    role: "Accountant",
    scope: "accountant",
    action: "Marked completeness checked",
    target: "AMS-2026-001",
    result: "Forwarded to review queue",
  },
  {
    time: "May 10, 2026 10:22 AM",
    user: "Eduardo Ramos",
    role: "Auditor",
    scope: "auditor",
    action: "Updated review status",
    target: "AMS-2026-003",
    result: "Completed",
  },
  {
    time: "May 9, 2026 4:05 PM",
    user: "Graciela Mercado",
    role: "Accountant",
    scope: "accountant",
    action: "Returned missing attachments",
    target: "AMS-2026-002",
    result: "Clerk notified",
  },
  {
    time: "May 9, 2026 2:44 PM",
    user: "Gina G. Bantolin",
    role: "Admin",
    scope: "admin",
    action: "Assigned Auditor access",
    target: "Eduardo Ramos",
    result: "Role updated",
  },
];

export const users = [
  {
    name: "Maria Liza Garcia",
    role: "School Clerk",
    school: "Mabini Elementary School",
    status: "Active",
    lastSeen: "Today",
  },
  {
    name: "Graciela Mercado",
    role: "Accountant",
    school: "Division Office",
    status: "Active",
    lastSeen: "Today",
  },
  {
    name: "Eduardo Ramos",
    role: "Auditor",
    school: "COA Review Team",
    status: "Active",
    lastSeen: "Yesterday",
  },
  {
    name: "Gina G. Bantolin",
    role: "Admin",
    school: "System Office",
    status: "Active",
    lastSeen: "Today",
  },
];

export const mockUsername = "Admin";
export const mockPassword = "Admin123";
export const profileName = "Gina G. Bantolin";
export const roleOptions = Object.keys(roleDetails) as Role[];
