import React, { useState } from "react";
import {
  AlertTriangle,
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Info,
  Wrench,
} from "lucide-react";

const Issues = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const issues = [
    {
      id: 1,
      type: "Missing Values",
      column: "Email",
      records: 124,
      severity: "Critical",
      description: "Email values are missing for multiple customer records.",
    },
    {
      id: 2,
      type: "Duplicate Records",
      column: "Customer ID",
      records: 38,
      severity: "Critical",
      description: "Duplicate customer IDs were detected.",
    },
    {
      id: 3,
      type: "Invalid Format",
      column: "Phone",
      records: 16,
      severity: "Warning",
      description: "Some phone numbers do not match the expected format.",
    },
    {
      id: 4,
      type: "Missing Values",
      column: "Address",
      records: 72,
      severity: "Warning",
      description: "Address information is missing from some records.",
    },
    {
      id: 5,
      type: "Outlier",
      column: "Age",
      records: 7,
      severity: "Info",
      description: "Unusual age values were detected.",
    },
    {
      id: 6,
      type: "Invalid Format",
      column: "Date",
      records: 11,
      severity: "Warning",
      description: "Date values contain inconsistent formats.",
    },
  ];

  const filteredIssues = issues.filter((issue) => {
    const matchesFilter =
      filter === "All" || issue.severity === filter;

    const matchesSearch =
      issue.type.toLowerCase().includes(search.toLowerCase()) ||
      issue.column.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const severityStyle = {
    Critical: {
      bg: "bg-red-50",
      text: "text-red-700",
      icon: "text-red-600",
    },
    Warning: {
      bg: "bg-orange-50",
      text: "text-orange-700",
      icon: "text-orange-600",
    },
    Info: {
      bg: "bg-blue-50",
      text: "text-blue-700",
      icon: "text-blue-600",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50 p-5 sm:p-8">

      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold tracking-wide text-blue-600">
          DATA QUALITY
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Data Quality Issues
        </h1>

        <p className="mt-2 text-slate-500">
          Review detected problems and take corrective action.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-100 p-3">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Total Issues
              </p>

              <p className="text-2xl font-bold text-slate-900">
                342
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-100 p-3">
              <XCircle className="h-5 w-5 text-red-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Critical
              </p>

              <p className="text-2xl font-bold text-red-600">
                18
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-100 p-3">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Warnings
              </p>

              <p className="text-2xl font-bold text-orange-600">
                67
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-100 p-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Resolved
              </p>

              <p className="text-2xl font-bold text-green-600">
                257
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Toolbar */}
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="flex w-full items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 lg:max-w-md">
            <Search className="h-5 w-5 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search issues or columns..."
              className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Filter className="h-4 w-4" />
              Filter:
            </div>

            {["All", "Critical", "Warning", "Info"].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  filter === item
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Issues Table */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-900">
            Detected Issues
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {filteredIssues.length} issue types found in your dataset
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">

            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">

                <th className="px-6 py-4">
                  Issue
                </th>

                <th className="px-6 py-4">
                  Column
                </th>

                <th className="px-6 py-4">
                  Records
                </th>

                <th className="px-6 py-4">
                  Severity
                </th>

                <th className="px-6 py-4">
                  Description
                </th>

                <th className="px-6 py-4">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>
              {filteredIssues.map((issue) => {
                const style = severityStyle[issue.severity];

                return (
                  <tr
                    key={issue.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                  >

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">

                        <div
                          className={`rounded-lg p-2 ${style.bg}`}
                        >
                          <AlertTriangle
                            className={`h-4 w-4 ${style.icon}`}
                          />
                        </div>

                        <div>
                          <p className="font-semibold text-slate-800">
                            {issue.type}
                          </p>
                        </div>

                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">
                        {issue.column}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span className="font-bold text-slate-800">
                        {issue.records}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${style.bg} ${style.text}`}
                      >
                        {issue.severity}
                      </span>
                    </td>

                    <td className="max-w-xs px-6 py-5 text-sm leading-6 text-slate-500">
                      {issue.description}
                    </td>

                    <td className="px-6 py-5">
                      <button
                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"
                        onClick={() =>
                          alert(
                            `Repair action selected for ${issue.type}`
                          )
                        }
                      >
                        <Wrench className="h-3.5 w-3.5" />
                        Fix Issue
                      </button>
                    </td>

                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>

        {/* Empty State */}
        {filteredIssues.length === 0 && (
          <div className="p-12 text-center">
            <Info className="mx-auto h-10 w-10 text-slate-300" />

            <h3 className="mt-3 font-semibold text-slate-800">
              No issues found
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Try changing your search or filter.
            </p>
          </div>
        )}

      </div>

      {/* Bottom Recommendation */}
      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">

        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-blue-100 p-3">
            <Wrench className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              DataFix Recommendation
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Start with the critical issues first. Resolving missing
              values and duplicate records can significantly improve
              your overall data quality score.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Issues;