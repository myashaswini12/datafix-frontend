import React from "react";
import {
  FileText,
  Download,
  CheckCircle,
  AlertTriangle,
  Database,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  Clock,
  Calendar,
} from "lucide-react";

const Reports = () => {
  const qualityData = [
    {
      name: "Completeness",
      score: 96,
      color: "bg-green-500",
    },
    {
      name: "Accuracy",
      score: 94,
      color: "bg-blue-500",
    },
    {
      name: "Consistency",
      score: 91,
      color: "bg-purple-500",
    },
    {
      name: "Validity",
      score: 93,
      color: "bg-orange-500",
    },
  ];

  const reportHistory = [
    {
      id: 1,
      name: "Customer Data Quality Report",
      date: "Nov 20, 2026",
      status: "Completed",
      type: "Full Analysis",
    },
    {
      id: 2,
      name: "Data Repair Summary",
      date: "Nov 20, 2026",
      status: "Completed",
      type: "Repair Report",
    },
    {
      id: 3,
      name: "Validation Report",
      date: "Nov 19, 2026",
      status: "Completed",
      type: "Validation",
    },
  ];

  const handleDownload = (reportName) => {
    alert(`Downloading ${reportName}...`);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-5 sm:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

        <div>
          <p className="text-sm font-semibold tracking-wide text-blue-600">
            DATA REPORTING
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Reports
          </h1>

          <p className="mt-2 max-w-2xl text-slate-500">
            View your data quality results, repair activity, and validation
            summaries in one place.
          </p>
        </div>

        <button
          onClick={() => handleDownload("DataFix Quality Report")}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
        >
          <Download className="h-4 w-4" />
          Download Report
        </button>

      </div>

      {/* Report Overview */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <FileText className="h-7 w-7 text-blue-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Customer Data Quality Report
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Generated on November 20, 2026 • customer_data.csv
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2.5">
            <CheckCircle className="h-5 w-5 text-green-600" />

            <span className="text-sm font-semibold text-green-700">
              Analysis Complete
            </span>
          </div>

        </div>
      </div>

      {/* Main Statistics */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {/* Quality Score */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-green-100 p-3">
              <ShieldCheck className="h-5 w-5 text-green-600" />
            </div>

            <span className="text-xs font-bold text-green-600">
              EXCELLENT
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Overall Quality Score
          </p>

          <p className="mt-1 text-3xl font-bold text-slate-900">
            94%
          </p>

          <div className="mt-3 h-2 rounded-full bg-slate-100">
            <div className="h-full w-[94%] rounded-full bg-green-500" />
          </div>

        </div>

        {/* Total Records */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-blue-100 p-3">
              <Database className="h-5 w-5 text-blue-600" />
            </div>

            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Total Records
          </p>

          <p className="mt-1 text-3xl font-bold text-slate-900">
            12,450
          </p>

          <p className="mt-1 text-xs text-green-600">
            Dataset successfully processed
          </p>

        </div>

        {/* Issues */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-orange-100 p-3">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>

            <span className="text-xs font-bold text-orange-600">
              REVIEWED
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Detected Issues
          </p>

          <p className="mt-1 text-3xl font-bold text-slate-900">
            342
          </p>

          <p className="mt-1 text-xs text-orange-600">
            257 issues resolved
          </p>

        </div>

        {/* Repaired */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-purple-100 p-3">
              <BarChart3 className="h-5 w-5 text-purple-600" />
            </div>

            <CheckCircle className="h-4 w-4 text-green-500" />
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Repair Success Rate
          </p>

          <p className="mt-1 text-3xl font-bold text-slate-900">
            75%
          </p>

          <p className="mt-1 text-xs text-green-600">
            257 of 342 issues resolved
          </p>

        </div>

      </div>

      {/* Quality Breakdown + Summary */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">

        {/* Quality Breakdown */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-100 p-3">
              <BarChart3 className="h-5 w-5 text-blue-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Quality Breakdown
              </h2>

              <p className="text-sm text-slate-500">
                Performance across key quality dimensions
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-5">

            {qualityData.map((item) => (
              <div key={item.name}>

                <div className="mb-2 flex items-center justify-between">

                  <span className="text-sm font-semibold text-slate-600">
                    {item.name}
                  </span>

                  <span className="text-sm font-bold text-slate-900">
                    {item.score}%
                  </span>

                </div>

                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.score}%` }}
                  />
                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Issue Summary */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-orange-100 p-3">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Issue Summary
              </h2>

              <p className="text-sm text-slate-500">
                Detected issues by severity
              </p>
            </div>

          </div>

          <div className="mt-6 space-y-4">

            <div className="flex items-center justify-between rounded-xl bg-red-50 p-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />

                <span className="text-sm font-semibold text-slate-700">
                  Critical Issues
                </span>
              </div>

              <span className="text-lg font-bold text-red-600">
                18
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-orange-50 p-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-orange-500" />

                <span className="text-sm font-semibold text-slate-700">
                  Warning Issues
                </span>
              </div>

              <span className="text-lg font-bold text-orange-600">
                67
              </span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-blue-500" />

                <span className="text-sm font-semibold text-slate-700">
                  Informational
                </span>
              </div>

              <span className="text-lg font-bold text-blue-600">
                257
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Validation Summary */}
      <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-start gap-4">

            <div className="rounded-xl bg-green-100 p-3">
              <ShieldCheck className="h-6 w-6 text-green-600" />
            </div>

            <div>
              <h2 className="font-bold text-slate-900">
                Validation Status
              </h2>

              <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
                The repaired dataset passed the validation checks.
                No major integrity issues were detected after the
                repair process.
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2 whitespace-nowrap rounded-xl bg-white px-4 py-3 shadow-sm">
            <CheckCircle className="h-5 w-5 text-green-600" />

            <span className="text-sm font-bold text-green-700">
              Validation Passed
            </span>
          </div>

        </div>

      </div>

      {/* Report History */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-200 p-6">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-purple-100 p-3">
              <Clock className="h-5 w-5 text-purple-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Report History
              </h2>

              <p className="text-sm text-slate-500">
                Previously generated DataFix reports
              </p>
            </div>

          </div>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[750px]">

            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">

                <th className="px-6 py-4">
                  Report
                </th>

                <th className="px-6 py-4">
                  Type
                </th>

                <th className="px-6 py-4">
                  Generated
                </th>

                <th className="px-6 py-4">
                  Status
                </th>

                <th className="px-6 py-4">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {reportHistory.map((report) => (
                <tr
                  key={report.id}
                  className="border-b border-slate-100 last:border-0 transition hover:bg-slate-50"
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-3">

                      <div className="rounded-lg bg-blue-50 p-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>

                      <span className="font-semibold text-slate-800">
                        {report.name}
                      </span>

                    </div>

                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                      {report.type}
                    </span>
                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      {report.date}
                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <span className="flex w-fit items-center gap-1.5 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                      <CheckCircle className="h-3.5 w-3.5" />
                      {report.status}
                    </span>

                  </td>

                  <td className="px-6 py-5">

                    <button
                      onClick={() => handleDownload(report.name)}
                      className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </button>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </div>

      {/* Recommendation */}
      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">

        <div className="flex items-start gap-4">

          <div className="rounded-xl bg-blue-100 p-3">
            <FileText className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              DataFix Report Summary
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Your dataset achieved an overall quality score of 94%.
              Most detected issues have been identified and repaired.
              The dataset has also passed validation and is ready
              for downstream analysis.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Reports;