import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { revalidateProducts } from "../../actions";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  console.log(
    "Ramon - fileName - line 6 - process.env.REVALIDATE_SECRET",
    process.env.REVALIDATE_SECRET
  );
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, message: "Invalid secret" },
      { status: 401 }
    );
  }

  // opcional: inspecione body do webhook (req.json()) para verificar se é product
  revalidateProducts();
  return NextResponse.json({ ok: true, revalidated: "/products" });
}
