"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SurveyForm from "../../components/SurveyForm";
import LoadingSpinner from "../../components/LoadingSpinner";
import ErrorToast from "../../components/ErrorToast";
import { SurveyInput } from "../../types/survey";

export default function SurveyPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (input: SurveyInput) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!res.ok) throw new Error("Failed to get matches");
      const data = await res.json();
      sessionStorage.setItem("neighborfit_results", JSON.stringify(data));
      router.push("/results");
    } catch (e: any) {
      setError(e.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <SurveyForm onSubmit={handleSubmit} loading={loading} />
      {loading && <LoadingSpinner />}
      {error && <ErrorToast message={error} />}
    </div>
  );
}
