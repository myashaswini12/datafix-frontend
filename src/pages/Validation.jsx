import React, { useState } from "react";
import {
  ShieldCheck,
  CheckCircle,
  AlertTriangle,
  XCircle,
  Database,
  RefreshCw,
  TrendingUp,
  FileCheck,
  Activity,
  Clock,
} from "lucide-react";

const Validation = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [validationComplete, setValidationComplete] = useState(true);

  const checks = [
    {
      id: 1,
      name: "Missing Value Check",
      description: "Verifies that required fields do not contain unexpected null values.",
      status: "Passed",
      result: "All required fields validated",
      icon: Database,
    },
    {
      id: 2,
      name: "Duplicate Record Check",
      description: "Checks whether duplicate records remain after the repair process.",
      status: "Passed",
      result: "No unresolved duplicates found",
      icon: FileCheck,
    },
    {
      id: 3,
      name: "Data Type Validation",
      description: "Verifies that columns contain consistent and expected data types.",
      status: "Passed",
      result: "All column types are valid",
      icon: Activity,
    },
    {
      id: 4,
      name: "Format Validation",
      description: "Checks emails, phone numbers, dates, and other formatted fields.",
      status: "Warning",
      result: "3 records require review",
      icon: AlertTriangle,
    },
    {
      id: 5,
      name: "Data Integrity Check",
      description: "Ensures relationships and important dataset constraints remain valid.",
      status: "Passed",
      result: "Integrity checks completed",
      icon: ShieldCheck,
    },
  ];

  const runValidation = () => {
    setIsRunning(true);
    setValidationComplete(false);

    setTimeout(() => {
      setIsRunning(false);
      setValidationComplete(true);
    }, 1800);
  };

  const passedChecks = checks.filter(
    (check) => check.status === "Passed"
  ).length;

  const warningChecks = checks.filter(
    (check) => check.status === "Warning"
  ).length;

  const validationScore = validationComplete ? 96 : 0;

  return (
    <div className="min-h-screen bg-slate-50 p-5 sm:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

        <div>
          <p className="text-sm font-semibold tracking-wide text-blue-600">
            DATA VALIDATION
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Validation
          </h1>

          <p className="mt-2 max-w-2xl text-slate-500">
            Verify that your repaired dataset is accurate, consistent,
            and ready for downstream analysis.
          </p>
        </div>

        <button
          onClick={runValidation}
          disabled={isRunning}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <RefreshCw
            className={`h-4 w-4 ${isRunning ? "animate-spin" : ""}`}
          />

          {isRunning ? "Running Validation..." : "Run Validation"}
        </button>

      </div>

      {/* Validation Status */}
      <div
        className={`rounded-2xl border p-6 shadow-sm ${
          validationComplete
            ? "border-green-200 bg-green-50"
            : "border-blue-200 bg-blue-50"
        }`}
      >

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-4">

            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                validationComplete
                  ? "bg-green-100"
                  : "bg-blue-100"
              }`}
            >
              {validationComplete ? (
                <CheckCircle className="h-7 w-7 text-green-600" />
              ) : (
                <RefreshCw className="h-7 w-7 animate-spin text-blue-600" />
              )}
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {validationComplete
                  ? "Validation Completed"
                  : "Validation in Progress"}
              </h2>

              <p className="mt-1 text-sm text-slate-600">
                {validationComplete
                  ? "Your repaired dataset has passed the main quality checks."
                  : "DataFix is checking your repaired dataset..."}
              </p>
            </div>

          </div>

          {validationComplete && (
            <div className="rounded-xl bg-white px-5 py-3 shadow-sm">

              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Validation Score
              </p>

              <p className="mt-1 text-2xl font-bold text-green-600">
                {validationScore}%
              </p>

            </div>
          )}

        </div>
      </div>

      {/* Statistics */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {/* Checks */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3">
              <FileCheck className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Total Checks
              </p>

              <p className="text-2xl font-bold text-slate-900">
                {checks.length}
              </p>
            </div>
          </div>

        </div>

        {/* Passed */}
        <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-100 p-3">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Passed
              </p>

              <p className="text-2xl font-bold text-green-600">
                {passedChecks}
              </p>
            </div>
          </div>

        </div>

        {/* Warnings */}
        <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-orange-100 p-3">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Warnings
              </p>

              <p className="text-2xl font-bold text-orange-600">
                {warningChecks}
              </p>
            </div>
          </div>

        </div>

        {/* Integrity */}
        <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-purple-100 p-3">
              <ShieldCheck className="h-5 w-5 text-purple-600" />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Integrity
              </p>

              <p className="text-2xl font-bold text-slate-900">
                98%
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Validation Checks */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-200 p-6">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-blue-100 p-3">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Validation Checks
              </h2>

              <p className="text-sm text-slate-500">
                Detailed results from the dataset validation process
              </p>
            </div>

          </div>

        </div>

        <div className="divide-y divide-slate-100">

          {checks.map((check) => {
            const Icon = check.icon;

            const isPassed = check.status === "Passed";

            return (
              <div
                key={check.id}
                className="p-6 transition hover:bg-slate-50"
              >

                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  {/* Check Info */}
                  <div className="flex items-start gap-4">

                    <div
                      className={`rounded-xl p-3 ${
                        isPassed
                          ? "bg-green-100"
                          : "bg-orange-100"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          isPassed
                            ? "text-green-600"
                            : "text-orange-600"
                        }`}
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {check.name}
                      </h3>

                      <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                        {check.description}
                      </p>

                      <p
                        className={`mt-2 text-xs font-semibold ${
                          isPassed
                            ? "text-green-600"
                            : "text-orange-600"
                        }`}
                      >
                        {check.result}
                      </p>
                    </div>

                  </div>

                  {/* Status */}
                  <div className="flex items-center">

                    <span
                      className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold ${
                        isPassed
                          ? "bg-green-50 text-green-700"
                          : "bg-orange-50 text-orange-700"
                      }`}
                    >
                      {isPassed ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <AlertTriangle className="h-4 w-4" />
                      )}

                      {check.status}
                    </span>

                  </div>

                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* Quality Comparison */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">

        {/* Before vs After */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-purple-100 p-3">
              <TrendingUp className="h-5 w-5 text-purple-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Quality Improvement
              </h2>

              <p className="text-sm text-slate-500">
                Dataset quality before and after repair
              </p>
            </div>

          </div>

          <div className="mt-6 space-y-6">

            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-semibold text-slate-600">
                  Before Repair
                </span>

                <span className="text-sm font-bold text-slate-800">
                  72%
                </span>
              </div>

              <div className="h-3 rounded-full bg-slate-100">
                <div className="h-full w-[72%] rounded-full bg-orange-400" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm font-semibold text-slate-600">
                  After Repair
                </span>

                <span className="text-sm font-bold text-green-600">
                  94%
                </span>
              </div>

              <div className="h-3 rounded-full bg-slate-100">
                <div className="h-full w-[94%] rounded-full bg-green-500" />
              </div>
            </div>

            <div className="rounded-xl bg-green-50 p-4">

              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-green-600" />

                <div>
                  <p className="text-sm font-bold text-green-800">
                    +22% Quality Improvement
                  </p>

                  <p className="mt-1 text-xs text-green-700">
                    Repair actions significantly improved dataset quality.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Validation Activity */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-blue-100 p-3">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Validation Activity
              </h2>

              <p className="text-sm text-slate-500">
                Recent validation information
              </p>
            </div>

          </div>

          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-slate-800">
                  Validation completed
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  All primary validation checks completed successfully.
                </p>
              </div>

              <span className="text-xs font-semibold text-slate-400">
                Just now
              </span>

            </div>

            <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                <RefreshCw className="h-5 w-5 text-blue-600" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-slate-800">
                  Repair process verified
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Repaired records were checked for consistency.
                </p>
              </div>

              <span className="text-xs font-semibold text-slate-400">
                2 min ago
              </span>

            </div>

            <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                <Database className="h-5 w-5 text-purple-600" />
              </div>

              <div className="flex-1">
                <p className="text-sm font-bold text-slate-800">
                  Dataset loaded
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  customer_data.csv was processed successfully.
                </p>
              </div>

              <span className="text-xs font-semibold text-slate-400">
                5 min ago
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Final Status */}
      <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-green-100 p-3">
              <ShieldCheck className="h-6 w-6 text-green-600" />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                Dataset Ready
              </h2>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                Validation is complete. Your repaired dataset has passed
                the major quality checks and is ready for reporting
                and downstream analysis.
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm">
            <CheckCircle className="h-5 w-5 text-green-600" />

            <span className="text-sm font-bold text-green-700">
              Ready for Analysis
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Validation;