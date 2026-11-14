// Field names shared by the contact form and the server action
export const HONEYPOT_FIELD = "website";
export const FILL_TIME_FIELD = "fillTimeMs";

const MIN_FILL_TIME_MS = 3000;
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 500;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LINE_BREAK_PATTERN = /[\r\n]/;

// Bots fill the hidden honeypot field, or submit faster than a person can type
export function isLikelyBot(formData) {
  const honeypot = formData.get(HONEYPOT_FIELD);
  const fillTimeMs = Number(formData.get(FILL_TIME_FIELD));

  return (
    Boolean(honeypot) ||
    !Number.isFinite(fillTimeMs) ||
    fillTimeMs < MIN_FILL_TIME_MS
  );
}

// Returns the cleaned message, or null when any field is invalid
export function parseContactForm(formData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const isNameValid =
    name.length > 0 &&
    name.length <= MAX_NAME_LENGTH &&
    !LINE_BREAK_PATTERN.test(name);
  const isEmailValid =
    email.length <= MAX_EMAIL_LENGTH && EMAIL_PATTERN.test(email);
  const isMessageValid =
    message.length > 0 && message.length <= MAX_MESSAGE_LENGTH;

  if (!isNameValid || !isEmailValid || !isMessageValid) return null;

  return { name, email, message };
}
