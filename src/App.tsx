import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { WorkspaceLayout } from "./components/layout/WorkspaceLayout";
import { navByRole, roleDetails, roleOptions } from "./data/mockData";
import { LoginPage } from "./pages/LoginPage";
import { PageContent } from "./pages/PageContent";
import type { PageId, Role } from "./types";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginRoute />} />
      <Route path="/:role" element={<RoleRedirect />} />
      <Route path="/:role/:page" element={<WorkspaceRoute />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function LoginRoute() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<Role>("clerk");

  return (
    <LoginPage
      selectedRole={selectedRole}
      onSelectRole={setSelectedRole}
      onEnter={() =>
        navigate(`/${selectedRole}/${roleDetails[selectedRole].home}`, {
          replace: true,
        })
      }
    />
  );
}

function RoleRedirect() {
  const { role } = useParams();

  if (!isRole(role)) {
    return <Navigate to="/" replace />;
  }

  return <Navigate to={`/${role}/${roleDetails[role].home}`} replace />;
}

function WorkspaceRoute() {
  const navigate = useNavigate();
  const { role, page } = useParams();

  if (!isRole(role)) {
    return <Navigate to="/" replace />;
  }

  if (!isPageForRole(role, page)) {
    return <Navigate to={`/${role}/${roleDetails[role].home}`} replace />;
  }

  return (
    <WorkspaceLayout
      activePage={page}
      role={role}
      onNavigate={(nextPage) => navigate(`/${role}/${nextPage}`)}
      onSwitchRole={() => navigate("/")}
    >
      <PageContent role={role} page={page} />
    </WorkspaceLayout>
  );
}

function isRole(value: string | undefined): value is Role {
  return roleOptions.includes(value as Role);
}

function isPageForRole(role: Role, page: string | undefined): page is PageId {
  return navByRole[role].some((item) => item.id === page);
}
