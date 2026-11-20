import React from "react";

import {
  LayoutDashboard,
  Upload,
  BarChart3,
  AlertTriangle,
  Wrench,
  ShieldCheck,
  FileText,
  Database,
} from "lucide-react";

const Sidebar = ({ activePage, setActivePage }) => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Upload",
      icon: Upload,
    },
    {
      name: "Profiling",
      icon: BarChart3,
    },
    {
      name: "Issues",
      icon: AlertTriangle,
    },
    {
      name: "Repair",
      icon: Wrench,
    },
    {
      name: "Validation",
      icon: ShieldCheck,
    },
    {
      name: "Reports",
      icon: FileText,
    },
  ];

  return (
    <aside className="hidden w-64 flex-col bg-slate-950 text-white lg:flex">

      {/* Logo */}
      <div className="border-b border-slate-800 px-6 py-6">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
            <Database className="h-5 w-5" />
          </div>

          <div>
            <h1 className="text-xl font-bold">
              DataFix
            </h1>

            <p className="text-xs text-slate-400">
              Data Quality Platform
            </p>
          </div>

        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Workspace
        </p>

        <div className="space-y-1">

          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = activePage === item.name;

            return (
              <button
                key={item.name}
                onClick={() => setActivePage(item.name)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  active
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />

                <span>{item.name}</span>

                {item.name === "Issues" && (
                  <span
                    className={`ml-auto rounded-full px-2 py-0.5 text-xs ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-red-500/10 text-red-400"
                    }`}
                  >
                    5
                  </span>
                )}
              </button>
            );
          })}

        </div>
      </nav>

      {/* Bottom Card */}
      <div className="border-t border-slate-800 p-4">

        <div className="rounded-xl bg-slate-900 p-4">

          <div className="mb-3 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-xs font-medium text-slate-300">
              System Status
            </span>
          </div>

          <p className="text-sm font-semibold text-white">
            All systems operational
          </p>

          <p className="mt-1 text-xs text-slate-500">
            DataFix is ready to process your data.
          </p>

        </div>

      </div>

    </aside>
  );
};

export default Sidebar;