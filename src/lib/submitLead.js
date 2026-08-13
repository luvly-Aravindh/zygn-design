const DESK_URL = "https://deskbackend.getnos.io/v1/lead";
const API_KEY = "lh_r0Y-6snypPWGYLoOeSfBrMIAr_xPiRN30sl3eIvyuDU";

let submitting = false;

export async function submitLead(fields) {
  if (submitting) return { duplicate: true, skipped: true };

  submitting = true;
  try {
    const response = await fetch(DESK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({ form: "contact", honeypot: fields.honeypot || "", ...fields }),
      keepalive: true,
    });

    let data = {};
    try {
      data = await response.json();
    } catch {
      // Desk may return an empty response body.
    }

    if (data.duplicate) return data;
    if (!response.ok) throw new Error(data.message || `Lead submit failed (${response.status})`);
    return data;
  } finally {
    submitting = false;
  }
}
