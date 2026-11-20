import React from "react";

import {
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

const Navbar = ({ activePage }) => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">

      <div className="flex h-20 items-center justify-between px-5 sm:px-8">

        {/* Left */}
        <div>

          <div className="flex items-center gap-2 text-sm text-slate-500">
            <span>DataFix</span>

            <span>/</span>

            <span className="font-medium text-slate-800">
              {activePage}
            </span>
          </div>

          <h2 className="mt-1 text-lg font-semibold text-slate-900">
            {activePage}
          </h2>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <div className="hidden items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 md:flex">

            <Search className="h-4 w-4 text-slate-400" />

            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-32 bg-transparent text-sm outline-none placeholder:text-slate-400"
            />

          </div>

          {/* Notification */}
          <button className="relative rounded-lg p-2.5 text-slate-500 hover:bg-slate-100">
            <Bell className="h-5 w-5" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* User */}
          <button className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-slate-100">

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
              Y
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold text-slate-800">
                Data Analyst
              </p>

              <p className="text-xs text-slate-500">
                Admin
              </p>
            </div>

            <ChevronDown className="hidden h-4 w-4 text-slate-400 sm:block" />

          </button>

        </div>

      </div>

    </header>
  );
};

export default Navbar;