const SENDER_NAME = "Ali Al Kindi";

const QUOTE_STYLE =
  "margin: 0; padding: 4px 16px; border-left: 4px solid #ccc; font-style: italic; white-space: pre-wrap;";

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function quoteText(text) {
  return text
    .split("\n")
    .map((line) => `> ${line}`)
    .join("\n");
}

// Email to me about a new message, with Reply-To set to the visitor
export function buildNotificationEmail({ name, email, message }, contactEmail) {
  return {
    from: { name: SENDER_NAME, address: contactEmail },
    to: contactEmail,
    replyTo: { name, address: email },
    subject: `New message from ${name}`,
    text: [
      "Hi Ali,",
      "",
      "You got a new message from:",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      quoteText(message),
      "",
      "Kind Regards,",
      "You ;)",
    ].join("\n"),
    html: `
      <p>Hi Ali,</p>
      <p>You got a new message from:</p>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Message:</b></p>
      <blockquote style="${QUOTE_STYLE}">${escapeHtml(message)}</blockquote>
      <p>Kind Regards,<br />You ;)</p>
    `,
  };
}

// Confirmation email to the visitor
export function buildConfirmationEmail({ name, email, message }, contactEmail) {
  return {
    from: { name: SENDER_NAME, address: contactEmail },
    to: { name, address: email },
    subject: `${name}, thanks for your message`,
    text: [
      `Hi ${name},`,
      "",
      "Thank you for contacting me.",
      "",
      "I have received your message:",
      quoteText(message),
      "",
      "I will reply as soon as possible.",
      "",
      "Kind Regards,",
      "Ali Al Kindi",
    ].join("\n"),
    html: `
      <p>Hi ${escapeHtml(name)},</p>
      <p>Thank you for contacting me.</p>
      <p>I have received your message:</p>
      <blockquote style="${QUOTE_STYLE}">${escapeHtml(message)}</blockquote>
      <p>I will reply as soon as possible.</p>
      <p>Kind Regards,<br />Ali Al Kindi</p>
    `,
  };
}
