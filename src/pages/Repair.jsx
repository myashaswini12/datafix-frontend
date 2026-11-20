import React, { useState } from "react";
import {
  Wrench,
  CheckCircle,
  AlertTriangle,
  Clock,
  Play,
  RotateCcw,
  ChevronRight,
  Database,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const Repair = () => {
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [repairedIssues, setRepairedIssues] = useState([]);
  const [running, setRunning] = useState(false);

  const repairOptions = [
    {
      id: 1,
      title: "Fill Missing Values",
      description:
        "Automatically identify missing values and fill them using appropriate data strategies.",
      issue: "Missing Values",
      records: 124,
      severity: "Critical",
      method: "Smart Imputation",
      icon: AlertTriangle,
      color: "red",
    },
    {
      id: 2,
      title: "Remove Duplicate Records",
      description:
        "Detect duplicate records using matching identifiers and keep the most reliable record.",
      issue: "Duplicate Records",
      records: 38,
      severity: "Critical",
      method: "Duplicate Detection",
      icon: Database,
      color: "purple",
    },
    {
      id: 3,
      title: "Standardize Phone Numbers",
      description:
        "Convert inconsistent phone number formats into a standardized format.",
      issue: "Invalid Format",
      records: 16,
      severity: "Warning",
      method: "Format Standardization",
      icon: Wrench,
      color: "orange",
    },
    {
      id: 4,
      title: "Clean Address Data",
      description:
        "Normalize missing and inconsistent address values across the dataset.",
      issue: "Missing Values",
      records: 72,
      severity: "Warning",
      method: "Data Normalization",
      icon: Sparkles,
      color: "blue",
    },
  ];

  const handleRepair = (id) => {
    setRunning(true);

    setTimeout(() => {
      setRepairedIssues((prev) => [...prev, id]);
      setRunning(false);
      setSelectedIssue(null);
    }, 1200);
  };

  const resetRepairs = () => {
    setRepairedIssues([]);
  };

  const getColorClasses = (color) => {
    const styles = {
      red: {
        bg: "bg-red-100",
        icon: "text-red-600",
        button: "bg-red-600 hover:bg-red-700",
      },
      purple: {
        bg: "bg-purple-100",
        icon: "text-purple-600",
        button: "bg-purple-600 hover:bg-purple-700",
      },
      orange: {
        bg: "bg-orange-100",
        icon: "text-orange-600",
        button: "bg-orange-600 hover:bg-orange-700",
      },
      blue: {
        bg: "bg-blue-100",
        icon: "text-blue-600",
        button: "bg-blue-600 hover:bg-blue-700",
      },
    };

    return styles[color];
  };

  const pendingIssues = repairOptions.filter(
    (item) => !repairedIssues.includes(item.id)
  );

  const totalIssues = repairOptions.reduce(
    (sum, item) => sum + item.records,
    0
  );

  const repairedRecords = repairOptions
    .filter((item) => repairedIssues.includes(item.id))
    .reduce((sum, item) => sum + item.records, 0);

  const progress =
    totalIssues === 0
      ? 0
      : Math.round((repairedRecords / totalIssues) * 100);

  return (
    <div className="min-h-screen bg-slate-50 p-5 sm:p-8">

      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold tracking-wide text-blue-600">
          DATA CLEANING
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Repair Data
        </h1>

        <p className="mt-2 max-w-2xl text-slate-500">
          Review recommended repair actions and fix detected data-quality
          issues automatically.
        </p>
      </div>

      {/* Repair Progress */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <Wrench className="h-7 w-7 text-blue-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Repair Progress
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {repairedRecords} of {totalIssues} affected records repaired
              </p>
            </div>
          </div>

          <div className="w-full lg:max-w-xs">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Overall Progress
              </span>

              <span className="text-sm font-bold text-blue-600">
                {progress}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Summary Cards */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-red-100 p-3">
              <AlertTriangle className="h-5 w-5 text-red-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Issues to Repair
              </p>

              <p className="text-2xl font-bold text-slate-900">
                {pendingIssues.length}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3">
              <Database className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Affected Records
              </p>

              <p className="text-2xl font-bold text-slate-900">
                {totalIssues - repairedRecords}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-100 p-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Repaired Records
              </p>

              <p className="text-2xl font-bold text-green-600">
                {repairedRecords}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-purple-100 p-3">
              <ShieldCheck className="h-5 w-5 text-purple-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Repair Status
              </p>

              <p className="mt-1 text-lg font-bold text-slate-900">
                {progress === 100 ? "Complete" : "In Progress"}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Repair Actions */}
      <div className="mt-6">

        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              Recommended Repairs
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Select a repair action to improve your dataset quality.
            </p>
          </div>

          {repairedIssues.length > 0 && (
            <button
              onClick={resetRepairs}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
            >
              <RotateCcw className="h-4 w-4" />
              Reset Demo
            </button>
          )}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">

          {repairOptions.map((item) => {
            const Icon = item.icon;
            const colors = getColorClasses(item.color);
            const repaired = repairedIssues.includes(item.id);

            return (
              <div
                key={item.id}
                className={`rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                  repaired
                    ? "border-green-200"
                    : "border-slate-200"
                }`}
              >

                {/* Card Header */}
                <div className="flex items-start justify-between">

                  <div className="flex items-start gap-4">

                    <div className={`rounded-xl p-3 ${repaired ? "bg-green-100" : colors.bg}`}>
                      {repaired ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <Icon className={`h-6 w-6 ${colors.icon}`} />
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-slate-500">
                        {item.issue}
                      </p>
                    </div>

                  </div>

                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                      item.severity === "Critical"
                        ? "bg-red-50 text-red-700"
                        : "bg-orange-50 text-orange-700"
                    }`}
                  >
                    {item.severity}
                  </span>

                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>

                {/* Details */}
                <div className="mt-5 grid grid-cols-2 gap-3">

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-400">
                      Affected Records
                    </p>

                    <p className="mt-1 text-lg font-bold text-slate-800">
                      {item.records}
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-400">
                      Repair Method
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      {item.method}
                    </p>
                  </div>

                </div>

                {/* Action */}
                <div className="mt-5">

                  {repaired ? (
                    <div className="flex items-center justify-between rounded-xl bg-green-50 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />

                        <span className="text-sm font-semibold text-green-700">
                          Repair completed successfully
                        </span>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setSelectedIssue(item)}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition ${colors.button}`}
                    >
                      <Wrench className="h-4 w-4" />
                      Review & Repair
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  )}

                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* Empty State */}
      {pendingIssues.length === 0 && (
        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-7 w-7 text-green-600" />
          </div>

          <h2 className="mt-4 text-xl font-bold text-slate-900">
            All repairs completed
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-600">
            Great job! All detected repair actions have been completed.
            Your dataset is ready for validation.
          </p>

        </div>
      )}

      {/* Repair Modal */}
      {selectedIssue && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">

          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3">
                  <Wrench className="h-5 w-5 text-blue-600" />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    Repair Issue
                  </h2>

                  <p className="text-sm text-slate-500">
                    Review before applying the repair
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedIssue(null)}
                className="text-2xl text-slate-400 hover:text-slate-700"
              >
                ×
              </button>

            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4">

              <h3 className="font-bold text-slate-900">
                {selectedIssue.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {selectedIssue.description}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">

                <div className="rounded-lg bg-white p-3">
                  <p className="text-xs text-slate-400">
                    Records
                  </p>

                  <p className="mt-1 font-bold text-slate-800">
                    {selectedIssue.records}
                  </p>
                </div>

                <div className="rounded-lg bg-white p-3">
                  <p className="text-xs text-slate-400">
                    Method
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-800">
                    {selectedIssue.method}
                  </p>
                </div>

              </div>
            </div>

            <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">

              <div className="flex gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                <p className="text-sm leading-6 text-slate-600">
                  DataFix will automatically apply the recommended
                  repair strategy to the affected records.
                </p>
              </div>

            </div>

            <div className="mt-6 flex gap-3">

              <button
                onClick={() => setSelectedIssue(null)}
                className="flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                disabled={running}
                onClick={() => handleRepair(selectedIssue.id)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {running ? (
                  <>
                    <Clock className="h-4 w-4 animate-spin" />
                    Repairing...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    Apply Repair
                  </>
                )}
              </button>

            </div>

          </div>
        </div>
      )}

      {/* Bottom Recommendation */}
      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">

        <div className="flex items-start gap-4">

          <div className="rounded-xl bg-blue-100 p-3">
            <ShieldCheck className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              DataFix Repair Engine
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Repairs are currently running in demo mode. When the
              backend API is connected, these actions will send the
              selected repair operation to your DataFix repair engine.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Repair;