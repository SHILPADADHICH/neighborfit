import { MatchResult } from "../types/match";

interface ResultCardProps {
  result: MatchResult;
}

export default function ResultCard({ result }: ResultCardProps) {
  const { neighborhood, score } = result;
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-blue-700">
          {neighborhood.name}, {neighborhood.city}
        </h3>
        <span className="text-lg font-bold text-green-600">{score}% match</span>
      </div>
      <div className="text-gray-600 text-sm">
        <div>Avg. Rent: ${neighborhood.averageRent}</div>
        <div>Crime Index: {neighborhood.crimeIndex}</div>
        <div>Walkability: {neighborhood.walkability}</div>
        <div>Green Spaces: {neighborhood.greenSpaces}</div>
        <div>
          Distance to Business Hub: {neighborhood.distanceToBusinessHub} km
        </div>
      </div>
    </div>
  );
}
