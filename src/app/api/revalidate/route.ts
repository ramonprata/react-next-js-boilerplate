import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, message: "Invalid secret" },
      { status: 401 }
    );
  }

  // opcional: inspecione body do webhook (req.json()) para verificar se é product
  revalidatePath("/products");
  return NextResponse.json({ ok: true, revalidated: "/products" });
}
