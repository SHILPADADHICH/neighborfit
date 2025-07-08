import { Neighborhood } from "./neighborhood";

export interface MatchResult {
  neighborhood: Neighborhood;
  score: number; // 0-100
}
