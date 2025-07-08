import { NextResponse } from "next/server";
import { neighborhoods } from "../../../lib/mockNeighborhoods";

export async function GET() {
  return NextResponse.json(neighborhoods);
}
