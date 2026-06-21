import { NextResponse } from "next/server";

const STATS_QUERY =
  "username=ayomidemi&hide=contribs&theme=transparent&hide_border=true&title_color=567CE4&text_color=1B202D&icon_color=567CE4&text_bold=true";

export const revalidate = 3600;

export async function GET() {
  const baseUrl =
    process.env.NEXT_PUBLIC_GITHUB_STATS_URL ??
    "https://github-readme-stats.vercel.app";

  try {
    const response = await fetch(`${baseUrl}/api?${STATS_QUERY}`, {
      next: { revalidate: 3600 },
      headers: {
        Accept: "image/svg+xml,image/png,image/*",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch GitHub stats" },
        { status: response.status }
      );
    }

    const image = await response.arrayBuffer();
    const contentType =
      response.headers.get("content-type") ?? "image/svg+xml";

    return new NextResponse(image, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 502 }
    );
  }
}
