import { NextResponse } from "next/server";
import { contactMethods, customerTypes, quoteServices } from "@/data/content";

type QuotePayload = {
  fullName?: string;
  phone?: string;
  email?: string;
  location?: string;
  customerType?: string;
  serviceNeeded?: string;
  projectDetails?: string;
  preferredContact?: string;
};

function isQuoteService(value: string): value is (typeof quoteServices)[number] {
  return (quoteServices as readonly string[]).includes(value);
}

function isCustomerType(value: string): value is (typeof customerTypes)[number] {
  return (customerTypes as readonly string[]).includes(value);
}

function isContactMethod(value: string): value is (typeof contactMethods)[number] {
  return (contactMethods as readonly string[]).includes(value);
}

export async function POST(request: Request) {
  let body: QuotePayload;

  try {
    body = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const fullName = body.fullName?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const location = body.location?.trim() ?? "";
  const customerType = body.customerType?.trim() ?? "";
  const serviceNeeded = body.serviceNeeded?.trim() ?? "";
  const preferredContact = body.preferredContact?.trim() ?? "";

  if (fullName.length < 2 || phone.length < 7 || location.length < 2) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }
  if (!isCustomerType(customerType) || !isQuoteService(serviceNeeded) || !isContactMethod(preferredContact)) {
    return NextResponse.json({ ok: false, error: "Invalid selections." }, { status: 400 });
  }
  if (preferredContact === "Email" && !email) {
    return NextResponse.json({ ok: false, error: "Email is required." }, { status: 400 });
  }

  const destination = process.env.QUOTE_WEBHOOK_URL;

  if (!destination) {
    return NextResponse.json(
      {
        ok: false,
        code: "NOT_CONFIGURED",
        message:
          "Quote submissions are structured for a future email or webhook connection. No message was sent.",
      },
      { status: 503 },
    );
  }

  const response = await fetch(destination, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName,
      phone,
      email,
      location,
      customerType,
      serviceNeeded,
      projectDetails: body.projectDetails?.trim() ?? "",
      preferredContact,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ ok: false, error: "Delivery failed." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
