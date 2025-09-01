import nodemailer from "nodemailer";

const escapeHtml = (str = "") => {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const stripHeaderBreaks = (str = "") => {
  return String(str).replace(/(\r|\n)/g, " ").trim();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { name, phone, email, content } = req.body || {};

    const safeName = stripHeaderBreaks(name) || "Webseiten-Besucher";
    const safePhone = stripHeaderBreaks(phone);
    const safeEmail = stripHeaderBreaks(email);
    const safeContent = escapeHtml(content);

    const receivedAt = new Date().toLocaleString("de-DE", {
      timeZone: "Europe/Berlin",
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.strato.de",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASS
      }
    })

    const subject = `[Kontakt] Neue Nachricht von ${safeName}` + (safePhone ? ` — ${safePhone}` : "");
    const preheader = `Nachricht von ${safeName}${safePhone ? ` · ${safePhone}` : ""}${safeEmail ? ` · ${safeEmail}` : ""}`;

    const html = `
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
    <style>
      .preheader { display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; overflow:hidden; mso-hide:all; }
      @media (prefers-color-scheme: dark) {
        .card { background-color: oklch(1 0 0) !important; }
        .text { color: oklch(0.145 0 0) !important; }
        .muted { color: oklch(0.556 0 0) !important; }
      }
    </style>
  </head>
<body style="margin:0; padding:0;">
    <span class="preheader">${escapeHtml(preheader)}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; border: 1px solid oklch(0.922 0 0); box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);">
            <!-- Header -->
            <tr>
              <td style="padding:16px 32px; background:oklch(0.97 0 0); font-family:Arial, Helvetica, sans-serif; font-size:18px; font-weight:bold;">
                Neue Nachricht von ${escapeHtml(safeName)}
              </td>
            </tr>

            <!-- Card -->
            <tr>
              <td class="card" style="border-top:0; border-radius:0 0 8px 8px; overflow:hidden;">
                <!-- Meta -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:32px 32px 16px 32px; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height: 24px; color:oklch(0.145 0 0);" class="muted">
                      Eingegangen: ${escapeHtml(receivedAt)}
                    </td>
                  </tr>
                </table>

                <!-- Details -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding: 0px 32px; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height: 24px; " class="text">
                      <strong>Kontaktdaten</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 16px 32px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="font-family:Arial, Helvetica, sans-serif; font-size:16px;">
                        <tr>
                          <td style="padding:6px 0; width:110px; color:#6b7280;" class="muted">Name</td>
                          <td style="padding:6px 0;" class="text">${escapeHtml(safeName)}</td>
                        </tr>
                        ${safeEmail ? `
                        <tr>
                          <td style="padding:6px 0; color:#6b7280;" class="muted">E-Mail</td>
                          <td style="padding:6px 0;" class="text">${escapeHtml(safeEmail)}</td>
                        </tr>` : ``}
                        ${safePhone ? `
                        <tr>
                          <td style="padding:6px 0; color:#6b7280;" class="muted">Telefon</td>
                          <td style="padding:6px 0;" class="text">${escapeHtml(safePhone)}</td>
                        </tr>` : ``}
                      </table>
                    </td>
                  </tr>
                </table>

                <!-- Nachricht -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0px 32px 8px 32px; font-family:Arial, Helvetica, sans-serif; font-size:16px; line-height: 24px;" class="text"><strong>Nachricht</strong></td>
                  </tr>
                  <tr>
                    <td style="padding:0px 32px 32px 32px;">
                      <div style="font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:20px; color:#111827; background:#f9fafb; border:1px solid #e5e7eb; padding:16px;">
                        ${safeContent}
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim()

    const text = [
      `Neue Nachricht von ${safeName}`,
      safeEmail ? `E-Mail: ${safeEmail}` : null,
      safePhone ? `Telefon: ${safePhone}` : null,
      `Eingegangen: ${receivedAt}`,
      "",
      "Nachricht:",
      content || "",
    ].filter(Boolean).join("\n");

    await transporter.sendMail({
      from: `"Xsportwagen-Kontaktformular" <${process.env.SMTP_MAIL}>`,
      to: process.env.SMTP_MAIL,
      replyTo: safeEmail ? `"${safeName}" <${safeEmail}>` : undefined,
      subject,
      text,
      html,
      headers: {
        "X-Entity-Ref-ID": Date.now().toString(),
      }
    })
    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "Failed to send" });
  }
}