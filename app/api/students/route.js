// app/api/students/route.js
import { NextResponse } from "next/server";
import { getStudents } from "@/lib/notion";

export async function GET() {
  try {
    const data = await getStudents();
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    console.error("Error fetching from Notion:", err);
    return NextResponse.json(
      { ok: false, error: err.message || "Failed to fetch" },
      { status: 500 }
    );
  }
}
