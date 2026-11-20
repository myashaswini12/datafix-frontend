
import React, { useEffect, useState } from "react";

const STORAGE_KEY = "datafix_datasets";

const getDatasetMetrics = (item) => {
  const response = item.fullResponse || {};

  const qualityReport = response.quality_report || {};
  const cleaningReport = response.cleaning_report || {};
  const repairReport = response.repair_report || {};
  const validationReport =
    response.final_validation_report ||
    response.validation_report ||
    {};

  return {
    fileId: item.fileId || item.file_id || item.id || "",
    fileName: item.fileName || item.filename || item.name || "Unknown dataset",

    qualityScore:
      item.qualityScore ??
      qualityReport.after_cleaning?.quality?.quality_score ??
      0,

    beforeScore:
      item.beforeScore ??
      qualityReport.before_cleaning?.quality?.quality_score ??
      0,

    issues:
      item.issues ??
      validationReport.total_invalid_values ??
      0,

    repairs:
      item.repairs ??
      repairReport.total_repairs ??
      0,

    suggestions:
      item.suggestions ??
      repairReport.total_suggestions ??
      0,

    originalRows:
      item.originalRows ??
      qualityReport.dataset_summary?.original_rows ??
      cleaningReport.original_rows ??
      0,

    finalRows:
      item.finalRows ??
      qualityReport.dataset_summary?.final_rows ??
      cleaningReport.changes?.rows_after_cleaning ??
      0,

    columns:
      item.columns ??
      qualityReport.dataset_summary?.final_columns ??
      cleaningReport.original_columns ??
      0,

    processedAt: item.processedAt || item.processed_at || null,
  };
};

const Dashboard = () => {
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadDashboardData = () => {
    try {
      const savedData = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      const normalized = Array.isArray(savedData)
        ? savedData.map(getDatasetMetrics)
        : [];

      setDatasets(normalized);
    } catch (error) {
      console.error("Dashboard data loading error:", error);
      setDatasets([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();

    const handleUpdate = () => loadDashboardData();

    window.addEventListener(
      "datafix-datasets-updated",
      handleUpdate
    );

    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener(
        "datafix-datasets-updated",
        handleUpdate
      );

      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  const latest = datasets[0] || null;

  const averageScore =
    datasets.length > 0
      ? (
          datasets.reduce(
            (total, item) => total + Number(item.qualityScore || 0),
            0
          ) / datasets.length
        ).toFixed(2)
      : "0.00";

  const totalRepairs = datasets.reduce(
    (total, item) => total + Number(item.repairs || 0),
    0
  );

  const totalIssues = datasets.reduce(
    (total, item) => total + Number(item.issues || 0),
    0
  );

  const formatDate = (date) => {
    if (!date) return "Not available";

    const parsed = new Date(date);

    return Number.isNaN(parsed.getTime())
      ? "Not available"
      : parsed.toLocaleString();
  };

  const statCards = [
    {
      title: "Processed Datasets",
      value: datasets.length,
      description: "Successfully processed datasets",
      icon: "📁",
    },
    {
      title: "Latest Quality Score",
      value: latest ? `${latest.qualityScore}%` : "0%",
      description: latest ? latest.fileName : "No dataset processed",
      icon: "📊",
    },
    {
      title: "Remaining Issues",
      value: latest ? latest.issues : 0,
      description: "Issues in latest dataset",
      icon: "⚠️",
    },
    {
      title: "Total Repairs",
      value: totalRepairs,
      description: "Repairs across processed datasets",
      icon: "🛠️",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 p-8 text-white">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-sm text-blue-400">
              DataFix / Dashboard
            </p>

            <h1 className="text-3xl font-bold">
              Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              Live dataset quality and repair statistics.
            </p>
          </div>

          <button
            onClick={loadDashboardData}
            className="rounded-lg bg-blue-600 px-5 py-3 font-medium hover:bg-blue-500"
          >
            ↻ Refresh Data
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {statCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-700 bg-slate-900 p-6"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <span className="text-2xl">
                  {card.icon}
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-bold">
                {card.value}
              </h2>

              <p className="mt-2 truncate text-xs text-slate-500">
                {card.description}
              </p>
            </div>
          ))}

        </div>

        {/* Quality Overview */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold">
              Latest Dataset Quality
            </h2>

            {latest ? (
              <>
                <p className="mt-2 break-all text-sm text-slate-400">
                  {latest.fileName}
                </p>

                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-sm text-slate-400">
                      Before Cleaning
                    </p>

                    <p className="mt-1 text-2xl font-bold">
                      {latest.beforeScore}%
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      After Cleaning
                    </p>

                    <p className="mt-1 text-3xl font-bold text-emerald-400">
                      {latest.qualityScore}%
                    </p>
                  </div>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-emerald-500"
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(0, Number(latest.qualityScore))
                      )}%`,
                    }}
                  />
                </div>
              </>
            ) : (
              <p className="mt-6 text-slate-400">
                Upload and analyze a dataset to view quality results.
              </p>
            )}

          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="text-xl font-semibold">
              Overall Statistics
            </h2>

            <div className="mt-6 space-y-5">

              <div className="flex items-center justify-between">
                <span className="text-slate-400">
                  Average Quality Score
                </span>

                <span className="font-bold text-emerald-400">
                  {averageScore}%
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">
                  Total Repairs
                </span>

                <span className="font-bold text-blue-400">
                  {totalRepairs}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">
                  Latest Dataset Issues
                </span>

                <span className="font-bold text-orange-400">
                  {latest ? latest.issues : 0}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400">
                  Total Issues in Latest Results
                </span>

                <span className="font-bold">
                  {totalIssues}
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Dataset History */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900">

          <div className="border-b border-slate-700 p-6">
            <h2 className="text-xl font-semibold">
              Processed Datasets
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Individual results for each uploaded dataset.
            </p>
          </div>

          {datasets.length === 0 ? (
            <div className="p-10 text-center text-slate-400">
              No processed datasets found.
              <p className="mt-2 text-sm">
                Upload and analyze your first dataset to see results here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">

              <table className="w-full text-left text-sm">

                <thead className="bg-slate-800 text-slate-400">
                  <tr>
                    <th className="p-4">Dataset</th>
                    <th className="p-4">Before</th>
                    <th className="p-4">After</th>
                    <th className="p-4">Issues</th>
                    <th className="p-4">Repairs</th>
                    <th className="p-4">Rows</th>
                    <th className="p-4">Processed At</th>
                  </tr>
                </thead>

                <tbody>
                  {datasets.map((dataset, index) => (
                    <tr
                      key={dataset.fileId || `${dataset.fileName}-${index}`}
                      className="border-t border-slate-800 hover:bg-slate-800/60"
                    >
                      <td className="max-w-56 break-all p-4 font-medium">
                        {dataset.fileName}
                      </td>

                      <td className="p-4">
                        {dataset.beforeScore}%
                      </td>

                      <td className="p-4 font-semibold text-emerald-400">
                        {dataset.qualityScore}%
                      </td>

                      <td className="p-4 text-orange-400">
                        {dataset.issues}
                      </td>

                      <td className="p-4 text-blue-400">
                        {dataset.repairs}
                      </td>

                      <td className="p-4">
                        {dataset.originalRows} → {dataset.finalRows}
                      </td>

                      <td className="p-4 text-slate-400">
                        {formatDate(dataset.processedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          )}

        </div>

        <p className="mt-6 text-xs text-slate-500">
          Dashboard values are loaded from successfully processed
          dataset records stored in this browser.
        </p>

      </div>
    </div>
  );
};

export default Dashboard;