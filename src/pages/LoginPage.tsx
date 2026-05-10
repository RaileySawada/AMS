import { useState, type FormEvent } from "react";
import { Icon } from "../components/Icon";
import { MetricPill } from "../components/ui/Stats";
import {
  mockPassword,
  mockUsername,
  navByRole,
  roleDetails,
  roleOptions,
} from "../data/mockData";
import type { Role } from "../types";

export function LoginPage({
  selectedRole,
  onSelectRole,
  onEnter,
}: {
  selectedRole: Role;
  onSelectRole: (role: Role) => void;
  onEnter: () => void;
}) {
  const [username, setUsername] = useState(mockUsername);
  const [password, setPassword] = useState(mockPassword);
  const [loginError, setLoginError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.trim() !== mockUsername || password !== mockPassword) {
      setLoginError("Use the mock credentials Admin / Admin123.");
      return;
    }

    setLoginError("");
    onEnter();
  };

  return (
    <main className="min-h-screen bg-white text-[#142033]">
      <div className="grid min-h-screen xl:grid-cols-[1.1fr_0.9fr]">
        <section className="relative flex min-h-155 flex-col justify-between bg-[#0b1b33] px-4 py-6 text-white sm:min-h-170 sm:px-8 sm:py-8 xl:min-h-screen xl:px-14">
          <div className="absolute inset-x-0 top-0 h-1.5 bg-[#d8182f]" />
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#f3c848]" />

          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Commission on Audit logo"
              className="h-14 w-14 rounded-lg bg-white object-contain p-1 shadow-lg shadow-black/20 sm:h-16 sm:w-16"
            />
            <div>
              <p className="text-xs font-semibold uppercase text-[#f3c848]">
                Commission on Audit
              </p>
              <h1 className="mt-1 text-xl font-bold leading-tight sm:text-3xl">
                Audit Management System
              </h1>
            </div>
          </div>

          <div className="relative my-8 max-w-3xl sm:my-12">
            <h2 className="max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">
              School purchase audit workflow
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8 sm:grid-cols-4">
              {["Upload", "Validate", "Review", "Complete"].map((stage) => (
                <div
                  key={stage}
                  className="rounded-lg border border-white/15 bg-white/5 p-3 text-center sm:text-left"
                >
                  <span className="text-sm font-semibold text-white">
                    {stage}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {roleOptions.map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => onSelectRole(role)}
                  className={`hover-rise rounded-lg border p-4 text-left transition hover:border-[#f3c848] ${
                    selectedRole === role
                      ? "border-[#f3c848] bg-white text-[#142033] shadow-xl shadow-black/20"
                      : "border-white/15 bg-white/5 text-white"
                  }`}
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-semibold">
                      {roleDetails[role].label}
                    </span>
                    {selectedRole === role ? (
                      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#d8182f] text-white">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                    ) : null}
                  </span>
                  <span
                    className={`mt-2 block text-sm leading-5 ${
                      selectedRole === role ? "text-[#4a5568]" : "text-white/70"
                    }`}
                  >
                    {roleDetails[role].access}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-3 text-sm text-white/70 sm:grid-cols-3">
            <MetricPill label="Required docs" value="13" />
            <MetricPill label="Stages" value="7" />
            <MetricPill label="Roles" value="4" />
          </div>
        </section>

        <section className="border-t border-[#d8e0ed] bg-[#fbfcfe] px-4 py-6 sm:px-8 xl:min-h-screen xl:border-l xl:border-t-0 xl:px-10">
          <div className="flex flex-col gap-8 xl:min-h-[calc(100vh-3rem)] xl:justify-between">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex items-center justify-between gap-4 border-b border-[#d8e0ed] pb-5">
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#eef4ff] text-[#0b4bb3] sm:h-14 sm:w-14">
                    <Icon name="lock" className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#d8182f]">
                      {roleDetails[selectedRole].label}
                    </p>
                    <h2 className="text-2xl font-bold text-[#142033] sm:text-3xl">
                      Sign in
                    </h2>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-5">
                <label className="block">
                  <span className="text-sm font-semibold text-[#344054]">
                    Role
                  </span>
                  <select
                    value={selectedRole}
                    onChange={(event) =>
                      onSelectRole(event.target.value as Role)
                    }
                    className="mt-2 w-full rounded-lg border border-[#c9d4e5] bg-white px-4 py-3 text-[#142033] outline-none transition focus:border-[#0b4bb3] focus:ring-4 focus:ring-[#0b4bb3]/10"
                  >
                    {roleOptions.map((role) => (
                      <option key={role} value={role}>
                        {roleDetails[role].label}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-[#344054]">
                    Username
                  </span>
                  <input
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    autoComplete="username"
                    aria-invalid={Boolean(loginError)}
                    className="mt-2 w-full rounded-lg border border-[#c9d4e5] bg-white px-4 py-3 text-[#142033] outline-none transition focus:border-[#0b4bb3] focus:ring-4 focus:ring-[#0b4bb3]/10"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-[#344054]">
                    Password
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    autoComplete="current-password"
                    aria-invalid={Boolean(loginError)}
                    className="mt-2 w-full rounded-lg border border-[#c9d4e5] bg-white px-4 py-3 text-[#142033] outline-none transition focus:border-[#0b4bb3] focus:ring-4 focus:ring-[#0b4bb3]/10"
                  />
                </label>
              </div>

              {loginError ? (
                <div className="mt-5 rounded-lg border border-[#fecdd3] bg-[#fff1f2] px-4 py-3 text-sm font-semibold text-[#d8182f]">
                  {loginError}
                </div>
              ) : null}

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#0b4bb3] px-4 py-3 font-semibold text-white shadow-lg shadow-[#0b4bb3]/20 transition hover:bg-[#083d94]"
              >
                <Icon name="shield" className="h-5 w-5" />
                Enter Workspace
              </button>
            </form>

            <div className="border-t border-[#d8e0ed] pt-5">
              <div className="grid gap-3 min-[420px]:grid-cols-2">
                {navByRole[selectedRole].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 rounded-lg border border-[#d8e0ed] bg-white px-3 py-3 text-sm font-semibold text-[#344054]"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#eef4ff] text-[#0b4bb3]">
                      <Icon name={item.icon} className="h-4 w-4" />
                    </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
