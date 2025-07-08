"use client";
import { useEffect, useState } from "react";
import ResultCard from "../../components/ResultCard";
import { MatchResult } from "../../types/match";

export default function ResultsPage() {
  const [results, setResults] = useState<MatchResult[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem("neighborfit_results");
    if (stored) {
      setResults(JSON.parse(stored));
    }
  }, []);

  return (
    <section className="w-full max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">
        Your Top Neighborhood Matches
      </h2>
      {results.length === 0 ? (
        <div className="text-gray-500 text-center">
          No results found. Please complete the survey.
        </div>
      ) : (
        results.map((result) => (
          <ResultCard key={result.neighborhood.id} result={result} />
        ))
      )}
    </section>
  );
}
