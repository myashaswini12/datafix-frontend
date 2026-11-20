import React, { useState } from "react";
import { uploadDataset } from "../../api/datasetApi";
import API from "../../api/axios";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [fileId, setFileId] = useState("");
  const [uploading, setUploading] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    const allowed = /\.(csv|xlsx|xls)$/i.test(selectedFile.name);

    if (!allowed) {
      setError("Please select a CSV or Excel file.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
    setFileId("");
    setResult(null);
    setError("");
    setMessage("File selected successfully.");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a dataset first.");
      return;
    }

    try {
      setUploading(true);
      setError("");
      setMessage("Uploading dataset...");

      const response = await uploadDataset(file);

      const id =
        response.file_id ||
        response.id ||
        response.dataset_id;

      if (!id) {
        throw new Error(
          "Upload response lo file_id dorakaledu. Backend response check cheyyali."
        );
      }

      setFileId(String(id));
      setMessage("Dataset uploaded successfully. Now click Analyze & Repair.");
    } catch (err) {
      console.error("Upload error:", err);
      setError(
        err.response?.data?.detail ||
        err.message ||
        "Dataset upload failed."
      );
      setMessage("");
    } finally {
      setUploading(false);
    }
  };

  const handleAnalyze = async () => {
    if (!fileId) {
      setError("First upload the dataset.");
      return;
    }

    try {
      setAnalyzing(true);
      setError("");
      setMessage("Analyzing and repairing dataset...");

      const response = await API.post(
        `/api/process/${encodeURIComponent(fileId)}`
      );

      const data = response.data;

      const beforeScore =
        data.quality_report?.before_cleaning?.quality?.quality_score ?? 0;

      const afterScore =
        data.quality_report?.after_cleaning?.quality?.quality_score ?? 0;

      const issues =
        data.final_validation_report?.total_invalid_values ??
        data.validation_report?.total_invalid_values ??
        0;

      const repairs =
        data.repair_report?.total_repairs ?? 0;

      const suggestions =
        data.repair_report?.total_suggestions ?? 0;

      const datasetResult = {
        fileId,
        fileName: file.name,
        qualityScore: afterScore,
        beforeScore,
        issues,
        repairs,
        suggestions,
        originalRows:
          data.quality_report?.dataset_summary?.original_rows ??
          data.cleaning_report?.original_rows ??
          0,
        finalRows:
          data.quality_report?.dataset_summary?.final_rows ??
          data.cleaning_report?.changes?.rows_after_cleaning ??
          0,
        columns:
          data.quality_report?.dataset_summary?.final_columns ??
          data.cleaning_report?.original_columns ??
          0,
        processedAt: new Date().toISOString(),
        fullResponse: data,
      };

      const existing = JSON.parse(
        localStorage.getItem("datafix_datasets") || "[]"
      );

      const updated = [
        datasetResult,
        ...existing.filter((item) => item.fileId !== fileId),
      ];

      localStorage.setItem(
        "datafix_datasets",
        JSON.stringify(updated)
      );

      localStorage.setItem(
        "datafix_latest_dataset",
        JSON.stringify(datasetResult)
      );

      window.dispatchEvent(
        new Event("datafix-datasets-updated")
      );

      setResult(datasetResult);
      setMessage("Dataset analyzed and processed successfully.");
    } catch (err) {
      console.error("Processing error:", err);
      setError(
        err.response?.data?.detail ||
        err.message ||
        "Dataset analysis failed."
      );
      setMessage("");
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-5xl">

        <div className="mb-8">
          <p className="mb-2 text-sm text-blue-400">
            DataFix / Upload
          </p>
          <h1 className="text-3xl font-bold">
            Upload Dataset
          </h1>
          <p className="mt-2 text-slate-400">
            Upload, analyze and automatically repair your dataset.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900 p-8">

          <div className="mb-6 text-center">
            <div className="text-5xl">📁</div>
            <h2 className="mt-4 text-xl font-semibold">
              Upload your dataset
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Supported formats: CSV, XLSX, XLS
            </p>
          </div>

          <label className="flex cursor-pointer flex-col items-center rounded-xl border-2 border-dashed border-slate-600 bg-slate-800 p-8 hover:border-blue-500">
            <span className="mb-3 text-3xl">⬆</span>
            <span className="font-medium">
              Select Dataset
            </span>
            <span className="mt-2 text-sm text-slate-400">
              Click here to choose a file
            </span>

            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>

          {file && (
            <div className="mt-5 rounded-lg bg-slate-800 p-4">
              <p className="text-sm text-slate-400">
                Selected file
              </p>
              <p className="mt-1 break-all font-medium">
                {file.name}
              </p>
            </div>
          )}

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            <button
              onClick={handleUpload}
              disabled={!file || uploading || analyzing}
              className="rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {uploading ? "Uploading..." : "Upload Dataset"}
            </button>

            <button
              onClick={handleAnalyze}
              disabled={!fileId || analyzing || uploading}
              className="rounded-lg bg-emerald-600 px-5 py-3 font-semibold hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {analyzing
                ? "Analyzing..."
                : "Analyze & Repair Dataset"}
            </button>

          </div>

          {message && (
            <p className="mt-5 rounded-lg bg-blue-950 p-3 text-sm text-blue-300">
              {message}
            </p>
          )}

          {error && (
            <p className="mt-5 rounded-lg bg-red-950 p-3 text-sm text-red-300">
              {error}
            </p>
          )}
        </div>

        {result && (
          <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">

            <h2 className="mb-5 text-xl font-bold">
              Processing Results
            </h2>

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">
                  Quality Score
                </p>
                <p className="mt-2 text-3xl font-bold text-emerald-400">
                  {result.qualityScore}%
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">
                  Remaining Issues
                </p>
                <p className="mt-2 text-3xl font-bold text-orange-400">
                  {result.issues}
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">
                  Repairs Completed
                </p>
                <p className="mt-2 text-3xl font-bold text-blue-400">
                  {result.repairs}
                </p>
              </div>

              <div className="rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">
                  Suggestions
                </p>
                <p className="mt-2 text-3xl font-bold">
                  {result.suggestions}
                </p>
              </div>

            </div>

            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <p>Dataset: {result.fileName}</p>
              <p>Before cleaning: {result.beforeScore}%</p>
              <p>Original rows: {result.originalRows}</p>
              <p>Final rows: {result.finalRows}</p>
              <p>Columns: {result.columns}</p>
            </div>

            <button
              onClick={async () => {
                try {
                  const response = await API.get(
                    `/api/download/${encodeURIComponent(fileId)}`,
                    { responseType: "blob" }
                  );

                  const url = window.URL.createObjectURL(
                    response.data
                  );

                  const link = document.createElement("a");
                  link.href = url;
                  link.download = `cleaned_${file.name}`;
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                  window.URL.revokeObjectURL(url);
                } catch (err) {
                  setError(
                    err.response?.data?.detail ||
                    "Download failed."
                  );
                }
              }}
              className="mt-6 rounded-lg bg-indigo-600 px-5 py-3 font-semibold hover:bg-indigo-500"
            >
              Download Cleaned Dataset
            </button>

          </div>
        )}

      </div>
    </div>
  );
}