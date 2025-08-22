import { NextRequest, NextResponse } from "next/server";
import { revalidateProducts } from "../../actions";

enum Event {
  PUBLISHED = "published",
  UNPUBLISHED = "unpublished",
  DELETED = "deleted",
}
export interface StoryblokWebhook {
  event: Event | string; // outros eventos possíveis
  story: {
    id: number;
    name: string;
    slug: string;
    full_slug: string;
    content: Record<string, unknown>; // conteúdo do story (JSON dinâmico)
  };
  user: {
    id: number;
    name: string;
  };
  space_id: number;
  timestamp: number;
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
      body.event === Event.PUBLISHED &&
      body.story.full_slug.startsWith("products/");

    if (!shouldRevalidate) {
      return NextResponse.json({ ok: true, message: "Event ignored" });
    }

    revalidateProducts();
    return NextResponse.json({ ok: true, revalidated: "/products" });
  } catch (error) {
    return NextResponse.json({ ok: false, error }, { status: 500 });
  }
}
