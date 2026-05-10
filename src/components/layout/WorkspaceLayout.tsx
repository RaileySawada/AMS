import { useState, type ReactNode } from "react";
import { Icon } from "../Icon";
import {
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
      <div className="grid min-h-screen xl:grid-cols-[280px_1fr]">
        <aside className="border-b border-[#d8e0ed] bg-white px-4 py-4 sm:px-5 xl:sticky xl:top-0 xl:h-screen xl:border-b-0 xl:border-r xl:px-4 xl:py-5">
          <div className="flex items-center gap-3 xl:px-2">
            <img
              src="/logo.png"
              alt="Commission on Audit logo"
              className="h-12 w-12 rounded-lg border border-[#d8e0ed] object-contain p-1 sm:h-14 sm:w-14"
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

          <div className="mt-4 rounded-lg border border-[#d8e0ed] bg-[#f8fafc] p-3 lg:mt-6 lg:p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="font-semibold">{roleDetails[role].label}</span>
              <span className="rounded-full bg-[#f3c848] px-2.5 py-1 text-xs font-bold text-[#1b2430]">
                Active
              </span>
            </div>
          </div>

          <nav
            className="mt-4 flex flex-wrap gap-2 pb-1 xl:mt-6 xl:block xl:space-y-1 xl:pb-0"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`flex min-w-max items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition xl:w-full xl:min-w-0 xl:gap-3 xl:py-3 ${
                  activePage === item.id
                    ? "bg-[#0b4bb3] text-white shadow-lg shadow-[#0b4bb3]/20"
                    : "text-[#344054] hover:bg-[#eef4ff] hover:text-[#0b4bb3]"
                }`}
              >
                <Icon name={item.icon} className="h-4 w-4 shrink-0 xl:h-5 xl:w-5" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-6 hidden rounded-lg border border-[#d8e0ed] p-4 xl:block">
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
          <header className="sticky top-0 z-20 border-b border-[#d8e0ed] bg-white/95 px-4 py-3 backdrop-blur sm:px-6 lg:px-8 lg:py-4">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase text-[#d8182f]">
                  {roleDetails[role].label}
                </p>
                <h2 className="mt-1 text-xl font-bold sm:text-2xl">{pageTitle}</h2>
              </div>
              <div className="flex w-full flex-wrap items-center justify-between gap-3 md:w-auto md:justify-end">
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
                    <div className="dropdown-enter absolute right-0 z-30 mt-2 w-56 max-w-[calc(100vw-2rem)] rounded-lg border border-[#d8e0ed] bg-white p-2 shadow-2xl shadow-[#0b1b33]/15">
                      <button
                        type="button"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-[#344054] transition hover:bg-[#eef4ff] hover:text-[#0b4bb3]"
                      >
                        <Icon name="profile" className="h-4 w-4" />
                        My Profile
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-[#344054] transition hover:bg-[#eef4ff] hover:text-[#0b4bb3]"
                      >
                        <Icon name="settings" className="h-4 w-4" />
                        Settings
                      </button>
                      <button
                        type="button"
                        onClick={onSwitchRole}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-[#d8182f] transition hover:bg-[#fff1f2]"
                      >
                        <Icon name="logout" className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </header>

          <div className="min-w-0 px-4 py-4 sm:px-6 sm:py-6 xl:px-8">{children}</div>
        </section>
      </div>
    </main>
  );
}
