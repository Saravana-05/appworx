const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";

export interface ContactUsPayload {
  customer_name: string;
  contact: string;
  company_name?: string;
  email: string;
  priority?: "low" | "medium" | "high";
  remarks?: string;
}

export async function submitContactUs(payload: ContactUsPayload) {
  const response = await fetch(`${API_BASE_URL}/api/contact-us`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const message = data?.message ?? "Something went wrong. Please try again.";
    throw new Error(message);
  }

  return data;
}
