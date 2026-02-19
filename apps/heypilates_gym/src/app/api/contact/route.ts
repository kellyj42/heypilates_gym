import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "next-sanity";

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(1),
  source: z.string().optional(),
});

export async function POST(req: Request) {
  const token = process.env.SANITY_API_WRITE_TOKEN;
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const apiVersion =
    process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-30";

  if (!token) {
    return NextResponse.json({
      ok: true,
      skipped: true,
      reason: "Missing SANITY_API_WRITE_TOKEN",
    });
  }

  if (!projectId || !dataset) {
    return NextResponse.json({
      ok: true,
      skipped: true,
      reason: "Missing Sanity project configuration",
    });
  }

  const payload = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid form data", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, phone, message, source } = parsed.data;

  const sanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
  });

  await sanityClient.create({
    _type: "contactMessage",
    name,
    email,
    phone: phone || undefined,
    message,
    source: source || "contact-page",
    submittedAt: new Date().toISOString(),
    status: "new",
  });

  return NextResponse.json({ ok: true });
}
