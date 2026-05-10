import { Icon } from "../components/Icon";
import { Panel } from "../components/ui/Panel";
import { StatCard } from "../components/ui/Stats";
import { navByRole, roleDetails, roleOptions, users } from "../data/mockData";

export function UserManagementPage() {
  return (
    <div className="page-enter grid gap-4 sm:gap-6">
      <section className="grid gap-4 md:grid-cols-3">
        <StatCard label="Active users" value="24" tone="blue" />
        <StatCard label="Role groups" value="4" tone="gold" />
        <StatCard label="Pending review" value="2" tone="red" />
      </section>

      <Panel title="Users" eyebrow="Access">
        <div className="grid gap-3 xl:hidden">
          {users.map((user) => (
            <article
              key={user.name}
              className="rounded-lg border border-[#d8e0ed] p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="break-words font-bold">{user.name}</h3>
                  <p className="mt-1 text-sm text-[#667085]">{user.school}</p>
                </div>
                <span className="rounded-full bg-[#eaf8ee] px-3 py-1 text-xs font-semibold text-[#17663a]">
                  {user.status}
                </span>
              </div>
              <select
                defaultValue={user.role}
                className="mt-4 w-full rounded-lg border border-[#c9d4e5] bg-white px-3 py-2 text-sm outline-none focus:border-[#0b4bb3]"
              >
                {["School Clerk", "Accountant", "Auditor", "Admin"].map(
                  (role) => (
                    <option key={role}>{role}</option>
                  ),
                )}
              </select>
              <div className="mt-3 flex items-center justify-between gap-3">
                <span className="text-sm text-[#667085]">{user.lastSeen}</span>
                <button
                  type="button"
                  className="rounded-lg border border-[#d8e0ed] px-3 py-2 text-xs font-semibold text-[#344054] hover:border-[#0b4bb3] hover:text-[#0b4bb3]"
                >
                  Save
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden xl:block">
          <table className="w-full table-auto text-left text-sm">
            <thead>
              <tr className="border-b border-[#d8e0ed] text-xs uppercase text-[#667085]">
                <th className="py-3 pr-4">Name</th>
                <th className="py-3 pr-4">Role</th>
                <th className="py-3 pr-4">Office / School</th>
                <th className="py-3 pr-4">Status</th>
                <th className="py-3 pr-4">Last seen</th>
                <th className="py-3 pr-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e6edf7]">
              {users.map((user) => (
                <tr key={user.name}>
                  <td className="py-4 pr-4 font-semibold">{user.name}</td>
                  <td className="py-4 pr-4">
                    <select
                      defaultValue={user.role}
                      className="rounded-lg border border-[#c9d4e5] bg-white px-3 py-2 text-sm outline-none focus:border-[#0b4bb3]"
                    >
                      {[
                        "School Clerk",
                        "Accountant",
                        "Auditor",
                        "Admin",
                      ].map((role) => (
                        <option key={role}>{role}</option>
                      ))}
                    </select>
                  </td>
                  <td className="py-4 pr-4 text-[#667085]">{user.school}</td>
                  <td className="py-4 pr-4">
                    <span className="rounded-full bg-[#eaf8ee] px-3 py-1 text-xs font-semibold text-[#17663a]">
                      {user.status}
                    </span>
                  </td>
                  <td className="py-4 pr-4 text-[#667085]">{user.lastSeen}</td>
                  <td className="py-4 pr-4">
                    <button
                      type="button"
                      className="rounded-lg border border-[#d8e0ed] px-3 py-2 text-xs font-semibold text-[#344054] hover:border-[#0b4bb3] hover:text-[#0b4bb3]"
                    >
                      Save
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>

      <Panel title="Permissions" eyebrow="Modules">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {roleOptions.map((role) => (
            <div key={role} className="rounded-lg border border-[#d8e0ed] p-4">
              <p className="font-bold">{roleDetails[role].label}</p>
              <div className="mt-4 space-y-2">
                {navByRole[role].map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-2 text-sm text-[#667085]"
                  >
                    <Icon name="check" className="h-4 w-4 text-[#17663a]" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
