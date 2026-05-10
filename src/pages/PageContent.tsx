import { AnalyticsPage } from "./AnalyticsPage";
import { AuditTrailsPage } from "./AuditTrailsPage";
import { AuditorDashboardPage } from "./AuditorDashboardPage";
import { ClerkUploadPage } from "./ClerkUploadPage";
import { DocumentTrackingPage } from "./DocumentTrackingPage";
import { ReportsPage } from "./ReportsPage";
import { UserManagementPage } from "./UserManagementPage";
import type { PageId, Role } from "../types";

export function PageContent({ role, page }: { role: Role; page: PageId }) {
  if (page === "upload") {
    return <ClerkUploadPage />;
  }

  if (page === "dashboard") {
    return <AuditorDashboardPage />;
  }

  if (page === "tracking") {
    return <DocumentTrackingPage role={role} />;
  }

  if (page === "audit") {
    return <AuditTrailsPage role={role} />;
  }

  if (page === "analytics") {
    return <AnalyticsPage />;
  }

  if (page === "reports") {
    return <ReportsPage role={role} />;
  }

  return <UserManagementPage />;
}
