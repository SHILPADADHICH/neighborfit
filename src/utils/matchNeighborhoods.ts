import { SurveyInput } from "../types/survey";
import { Neighborhood } from "../types/neighborhood";
import { MatchResult } from "../types/match";

/**
 * Normalize a value between min and max to 0-1.
 * @param value The value to normalize
 * @param min The minimum value in the range
 * @param max The maximum value in the range
 * @returns Normalized value between 0 and 1
 */
function normalize(value: number, min: number, max: number): number {
  if (max === min) return 0.5;
  return (value - min) / (max - min);
}

/**
 * Match user input to neighborhoods and return sorted results.
 * @param input The user's survey input
 * @param neighborhoods List of neighborhoods to compare
 * @returns Top 5 matched neighborhoods with scores
 */
export function matchNeighborhoods(
  input: SurveyInput,
  neighborhoods: Neighborhood[]
): MatchResult[] {
  // Find min/max for normalization
  const rentVals = neighborhoods.map((n) => n.averageRent);
  const crimeVals = neighborhoods.map((n) => n.crimeIndex);
  const walkVals = neighborhoods.map((n) => n.walkability);
  const greenVals = neighborhoods.map((n) => n.greenSpaces);
  const commuteVals = neighborhoods.map((n) => n.distanceToBusinessHub);

  const minMax = {
    rent: { min: Math.min(...rentVals), max: Math.max(...rentVals) },
    crime: { min: Math.min(...crimeVals), max: Math.max(...crimeVals) },
    walk: { min: Math.min(...walkVals), max: Math.max(...walkVals) },
    green: { min: Math.min(...greenVals), max: Math.max(...greenVals) },
    commute: { min: Math.min(...commuteVals), max: Math.max(...commuteVals) },
  };

  // Weights for each factor (can be tuned)
  const weights = {
    budget: 0.25,
    safety: 0.25,
    walkability: 0.2,
    commute: 0.15,
    greenery: 0.15,
  };

  return neighborhoods
    .map((n) => {
      // Lower rent is better, so invert
      const rentScore =
        1 - normalize(n.averageRent, minMax.rent.min, minMax.rent.max);
      // Lower crime is better, so invert
      const crimeScore =
        1 - normalize(n.crimeIndex, minMax.crime.min, minMax.crime.max);
      const walkScore = normalize(
        n.walkability,
        minMax.walk.min,
        minMax.walk.max
      );
      const greenScore = normalize(
        n.greenSpaces,
        minMax.green.min,
        minMax.green.max
      );
      // Lower distance is better, so invert
      const commuteScore =
        1 -
        normalize(
          n.distanceToBusinessHub,
          minMax.commute.min,
          minMax.commute.max
        );

      // Weighted sum
      const score =
        weights.budget * rentScore * input.budget +
        weights.safety * crimeScore * input.safety +
        weights.walkability * walkScore * input.walkability +
        weights.commute * commuteScore * input.commute +
        weights.greenery * greenScore * input.greenery;

      return {
        neighborhood: n,
        score: Math.round(score * 100),
      };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
}
