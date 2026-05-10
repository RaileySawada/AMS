import { useState, type ReactNode } from "react";
import { Icon } from "../Icon";
import { InfoLine } from "../ui/Stats";
import {
  mockUsername,
  navByRole,
  pageTitles,
  profileName,
  roleDetails,
  statusFlow,
} from "../../data/mockData";
import type { PageId, Role } from "../../types";

export function WorkspaceLayout({
  role,
  activePage,
  onNavigate,
  onSwitchRole,
  children,
}: {
  role: Role;
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  onSwitchRole: () => void;
  children: ReactNode;
}) {
  const navItems = navByRole[role];
  const pageTitle = pageTitles[activePage];
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4f7fb] text-[#142033]">
      <div className="grid min-h-screen lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-[#d8e0ed] bg-white px-4 py-5 lg:sticky lg:top-0 lg:h-screen">
          <div className="flex items-center gap-3 px-2">
            <img
              src="/logo.png"
              alt="Commission on Audit logo"
              className="h-14 w-14 rounded-lg border border-[#d8e0ed] object-contain p-1"
            />
            <div>
              <p className="text-xs font-semibold uppercase text-[#0b4bb3]">
                AMS
              </p>
              <h1 className="text-lg font-bold leading-tight">
                Audit Management
              </h1>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-[#d8e0ed] bg-[#f8fafc] p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold">{roleDetails[role].label}</span>
              <span className="rounded-full bg-[#f3c848] px-2.5 py-1 text-xs font-bold text-[#1b2430]">
                Active
              </span>
            </div>
          </div>

          <nav className="mt-6 space-y-1" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-semibold transition ${
                  activePage === item.id
                    ? "bg-[#0b4bb3] text-white shadow-lg shadow-[#0b4bb3]/20"
                    : "text-[#344054] hover:bg-[#eef4ff] hover:text-[#0b4bb3]"
                }`}
              >
                <Icon name={item.icon} className="h-5 w-5 shrink-0" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-6 rounded-lg border border-[#d8e0ed] p-4">
            <p className="text-sm font-semibold">Workflow</p>
            <div className="mt-4 space-y-3">
              {statusFlow.slice(3).map((stage) => (
                <div key={stage} className="flex items-center gap-3 text-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f3c848]" />
                  <span className="text-[#475467]">{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="min-w-0">
          <header className="sticky top-0 z-20 border-b border-[#d8e0ed] bg-white/95 px-5 py-4 backdrop-blur sm:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase text-[#d8182f]">
                  {roleDetails[role].label}
                </p>
                <h2 className="mt-1 text-2xl font-bold">{pageTitle}</h2>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <div className="flex items-center gap-2 rounded-lg border border-[#d8e0ed] bg-white px-3 py-2 text-sm text-[#475467]">
                  <Icon name="bell" className="h-4 w-4 text-[#0b4bb3]" />
                  4 pending
                </div>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsProfileOpen((current) => !current)}
                    className="flex items-center gap-3 rounded-lg border border-[#d8e0ed] bg-white px-2.5 py-2 text-left transition hover:border-[#0b4bb3]"
                    aria-expanded={isProfileOpen}
                  >
                    <img
                      src="/profile.png"
                      alt={`${profileName} profile`}
                      className="h-10 w-10 rounded-full border border-[#d8e0ed] object-cover"
                    />
                    <span className="hidden min-w-0 sm:block">
                      <span className="block max-w-40 truncate text-sm font-bold text-[#142033]">
                        {profileName}
                      </span>
                      <span className="block text-xs font-semibold text-[#667085]">
                        {roleDetails[role].label}
                      </span>
                    </span>
                    <Icon
                      name="chevron"
                      className={`h-4 w-4 text-[#667085] transition ${
                        isProfileOpen ? "-rotate-90" : "rotate-90"
                      }`}
                    />
                  </button>

                  {isProfileOpen ? (
                    <div className="dropdown-enter absolute right-0 z-30 mt-2 w-72 rounded-lg border border-[#d8e0ed] bg-white p-4 shadow-2xl shadow-[#0b1b33]/15">
                      <div className="flex items-center gap-3 border-b border-[#e6edf7] pb-4">
                        <img
                          src="/profile.png"
                          alt={`${profileName} profile`}
                          className="h-14 w-14 rounded-full border border-[#d8e0ed] object-cover"
                        />
                        <div className="min-w-0">
                          <p className="truncate font-bold text-[#142033]">
                            {profileName}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-[#0b4bb3]">
                            {roleDetails[role].label}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 space-y-3 text-sm">
                        <InfoLine label="Username" value={mockUsername} />
                      </div>
                      <button
                        type="button"
                        onClick={onSwitchRole}
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-[#d8e0ed] px-3 py-2.5 text-sm font-semibold text-[#344054] transition hover:border-[#0b4bb3] hover:text-[#0b4bb3]"
                      >
                        <Icon name="logout" className="h-4 w-4" />
                        Switch role
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </header>

          <div className="px-5 py-6 sm:px-8">{children}</div>
        </section>
      </div>
    </main>
  );
}
