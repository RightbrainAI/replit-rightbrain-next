"use client";

import { Output_profile_image_verification } from "@/generated";
import { isProfileImageVerificationOutput } from "@/types";
// Component for analyzing profile pictures using Rightbrain AI
// Handles file upload, API communication, and result display

import { useState } from "react";

export function ProfileAnalyzer() {
  // State management for file upload and analysis
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] =
    useState<Output_profile_image_verification | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle form submission and API communication
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    setResult(null);
    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/analyze-profile", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (isProfileImageVerificationOutput(data)) {
        setResult(data);
      } else {
        console.error("Invalid response format:", data);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Profile Picture
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="mt-1 block w-full"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !file}
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Analyze Profile Picture"}
        </button>
      </form>

      {result && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-900">Analysis Result</h3>
          <pre className="mt-2 p-4 bg-gray-50 rounded-md overflow-auto">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
