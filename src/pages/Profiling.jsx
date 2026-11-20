import React from "react";
import {
  BarChart3,
  Database,
  Columns3,
  Rows3,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Hash,
  Type,
  Calendar,
} from "lucide-react";

const Profiling = () => {
  const columns = [
    {
      name: "Customer ID",
      type: "Integer",
      icon: Hash,
      unique: "100%",
      missing: "0%",
      quality: "Excellent",
    },
    {
      name: "Name",
      type: "Text",
      icon: Type,
      unique: "92%",
      missing: "1.2%",
      quality: "Good",
    },
    {
      name: "Email",
      type: "Text",
      icon: Type,
      unique: "96%",
      missing: "8.4%",
      quality: "Warning",
    },
    {
      name: "Age",
      type: "Integer",
      icon: Hash,
      unique: "68%",
      missing: "0.5%",
      quality: "Good",
    },
    {
      name: "Phone",
      type: "Text",
      icon: Type,
      unique: "89%",
      missing: "3.1%",
      quality: "Good",
    },
    {
      name: "Join Date",
      type: "Date",
      icon: Calendar,
      unique: "74%",
      missing: "0.8%",
      quality: "Excellent",
    },
  ];

  const qualityStyle = {
    Excellent: "bg-green-50 text-green-700",
    Good: "bg-blue-50 text-blue-700",
    Warning: "bg-orange-50 text-orange-700",
  };

  return (
    <div className="min-h-screen bg-slate-50 p-5 sm:p-8">

      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-semibold tracking-wide text-blue-600">
          DATA ANALYSIS
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Data Profiling
        </h1>

        <p className="mt-2 text-slate-500">
          Analyze your dataset structure, quality, and column-level statistics.
        </p>
      </div>

      {/* Dataset Overview */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
              <Database className="h-7 w-7 text-blue-600" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                customer_data.csv
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Last profiled just now • CSV Dataset
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2.5">
            <CheckCircle className="h-5 w-5 text-green-600" />

            <span className="text-sm font-semibold text-green-700">
              Profiling Complete
            </span>
          </div>

        </div>
      </div>

      {/* Statistics */}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-blue-100 p-3">
              <Rows3 className="h-5 w-5 text-blue-600" />
            </div>

            <TrendingUp className="h-4 w-4 text-green-500" />
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Total Rows
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900">
            12,450
          </p>

          <p className="mt-1 text-xs text-green-600">
            +4.8% from previous dataset
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-purple-100 p-3">
              <Columns3 className="h-5 w-5 text-purple-600" />
            </div>

            <CheckCircle className="h-4 w-4 text-green-500" />
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Total Columns
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900">
            24
          </p>

          <p className="mt-1 text-xs text-slate-500">
            18 text • 4 numeric • 2 dates
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-green-100 p-3">
              <BarChart3 className="h-5 w-5 text-green-600" />
            </div>

            <span className="text-xs font-bold text-green-600">
              GOOD
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Overall Quality
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900">
            94%
          </p>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[94%] rounded-full bg-green-500" />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-orange-100 p-3">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
            </div>

            <span className="text-xs font-bold text-orange-600">
              REVIEW
            </span>
          </div>

          <p className="mt-4 text-sm text-slate-500">
            Missing Values
          </p>

          <p className="mt-1 text-2xl font-bold text-slate-900">
            186
          </p>

          <p className="mt-1 text-xs text-orange-600">
            Across 5 columns
          </p>
        </div>

      </div>

      {/* Quality Breakdown */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">

        {/* Quality Score */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Data Quality
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Overall dataset health
              </p>
            </div>

            <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-green-100">
              <span className="text-xl font-bold text-green-600">
                94%
              </span>
            </div>
          </div>

          <div className="mt-6 space-y-5">

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-600">
                  Completeness
                </span>

                <span className="font-bold text-slate-800">
                  96%
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-full w-[96%] rounded-full bg-green-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-600">
                  Accuracy
                </span>

                <span className="font-bold text-slate-800">
                  94%
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-full w-[94%] rounded-full bg-blue-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-600">
                  Consistency
                </span>

                <span className="font-bold text-slate-800">
                  91%
                </span>
              </div>

              <div className="h-2 rounded-full bg-slate-100">
                <div className="h-full w-[91%] rounded-full bg-purple-500" />
              </div>
            </div>

          </div>
        </div>

        {/* Column Distribution */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Column Distribution
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Data types detected in your dataset
            </p>
          </div>

          <div className="mt-6 space-y-5">

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-100 p-3">
                <Type className="h-5 w-5 text-blue-600" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-slate-700">
                    Text
                  </span>

                  <span className="text-sm font-bold text-slate-800">
                    18 columns
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[75%] rounded-full bg-blue-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-purple-100 p-3">
                <Hash className="h-5 w-5 text-purple-600" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-slate-700">
                    Numeric
                  </span>

                  <span className="text-sm font-bold text-slate-800">
                    4 columns
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[17%] rounded-full bg-purple-500" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-orange-100 p-3">
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>

              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="text-sm font-semibold text-slate-700">
                    Date
                  </span>

                  <span className="text-sm font-bold text-slate-800">
                    2 columns
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-slate-100">
                  <div className="h-full w-[8%] rounded-full bg-orange-500" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Column Analysis Table */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-200 p-6">
          <h2 className="text-lg font-bold text-slate-900">
            Column Analysis
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Detailed statistics for each detected column
          </p>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[800px]">

            <thead>
              <tr className="border-b border-slate-100 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">

                <th className="px-6 py-4">
                  Column
                </th>

                <th className="px-6 py-4">
                  Data Type
                </th>

                <th className="px-6 py-4">
                  Unique Values
                </th>

                <th className="px-6 py-4">
                  Missing
                </th>

                <th className="px-6 py-4">
                  Quality
                </th>

              </tr>
            </thead>

            <tbody>

              {columns.map((column) => {
                const Icon = column.icon;

                return (
                  <tr
                    key={column.name}
                    className="border-b border-slate-100 last:border-0 transition hover:bg-slate-50"
                  >

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">

                        <div className="rounded-lg bg-slate-100 p-2">
                          <Icon className="h-4 w-4 text-slate-600" />
                        </div>

                        <span className="font-semibold text-slate-800">
                          {column.name}
                        </span>

                      </div>
                    </td>

                    <td className="px-6 py-5">
                      <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                        {column.type}
                      </span>
                    </td>

                    <td className="px-6 py-5 text-sm font-semibold text-slate-700">
                      {column.unique}
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`text-sm font-semibold ${
                          column.missing === "0%"
                            ? "text-green-600"
                            : "text-orange-600"
                        }`}
                      >
                        {column.missing}
                      </span>
                    </td>

                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold ${qualityStyle[column.quality]}`}
                      >
                        {column.quality}
                      </span>
                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>
        </div>
      </div>

      {/* Bottom Recommendation */}
      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">

        <div className="flex items-start gap-4">

          <div className="rounded-xl bg-blue-100 p-3">
            <BarChart3 className="h-5 w-5 text-blue-600" />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              Profiling Insight
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Your dataset has a strong overall quality score of 94%.
              The Email column requires attention because it contains
              the highest percentage of missing values.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Profiling;