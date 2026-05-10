import { useState } from "react";
import { WorkspaceLayout } from "./components/layout/WorkspaceLayout";
import { roleDetails } from "./data/mockData";
import { LoginPage } from "./pages/LoginPage";
import { PageContent } from "./pages/PageContent";
import type { PageId, Role } from "./types";

export default function App() {
  const [selectedRole, setSelectedRole] = useState<Role>("clerk");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [activePage, setActivePage] = useState<PageId>(roleDetails.clerk.home);

  const handleRoleChange = (role: Role) => {
    setSelectedRole(role);
    setActivePage(roleDetails[role].home);
  };

  if (!isSignedIn) {
    return (
      <LoginPage
        selectedRole={selectedRole}
        onSelectRole={handleRoleChange}
        onEnter={() => {
          setActivePage(roleDetails[selectedRole].home);
          setIsSignedIn(true);
        }}
      />
    );
  }

  return (
    <WorkspaceLayout
      activePage={activePage}
      role={selectedRole}
      onNavigate={setActivePage}
      onSwitchRole={() => setIsSignedIn(false)}
    >
      <PageContent role={selectedRole} page={activePage} />
    </WorkspaceLayout>
  );
}
