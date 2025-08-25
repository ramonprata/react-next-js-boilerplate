import { NextRequest, NextResponse } from "next/server";
import { revalidateProducts } from "../../actions";

enum Event {
  PUBLISHED = "published",
}
export interface StoryblokWebhook {
  action: Event | string;
  text: string;
  space_id: number;
  story_id: number;
  full_slug: string;
}

export async function POST(req: NextRequest) {
  try {
    const secret = req.nextUrl.searchParams.get("secret");

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { ok: false, message: "Invalid secret" },
        { status: 401 }
      );
    }

    const body: StoryblokWebhook = await req.json();
    const shouldRevalidate =
      body.action === Event.PUBLISHED && body.full_slug.startsWith("products/");

    if (!shouldRevalidate) {
      return NextResponse.json({ ok: true, message: "Event ignored" });
    }

    revalidateProducts();
    return NextResponse.json({ ok: true, revalidated: "/products" });
  } catch (error) {
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
