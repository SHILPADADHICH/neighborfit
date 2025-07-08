import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { SurveyInput } from "../../../types/survey";
import { matchNeighborhoods } from "../../../utils/matchNeighborhoods";
import { neighborhoods } from "../../../lib/mockNeighborhoods";

const surveySchema = z.object({
  budget: z.number().min(1).max(5),
  safety: z.number().min(1).max(5),
  walkability: z.number().min(1).max(5),
  commute: z.number().min(1).max(5),
  greenery: z.number().min(1).max(5),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const input = surveySchema.parse(body) as SurveyInput;
    const results = matchNeighborhoods(input, neighborhoods);
    return NextResponse.json(results);
  } catch (e: unknown) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Unknown error" },
      { status: 400 }
    );
  }
}
