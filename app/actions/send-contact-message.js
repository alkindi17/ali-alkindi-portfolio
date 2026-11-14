"use server";

import nodemailer from "nodemailer";

import { isLikelyBot, parseContactForm } from "@/functions/contact-form";
import {
  buildConfirmationEmail,
  buildNotificationEmail,
} from "@/functions/contact-emails";

function createTransport() {
  const port = Number(process.env.SMTP_PORT);

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function sendContactMessage(formData) {
  // Pretend it worked so bots don't learn they were caught
  if (isLikelyBot(formData)) return { ok: true };

  const contactMessage = parseContactForm(formData);
  if (!contactMessage) return { ok: false };

  const contactEmail = process.env.CONTACT_EMAIL;
  const transport = createTransport();

  try {
    await transport.sendMail(
      buildNotificationEmail(contactMessage, contactEmail),
    );
  } catch (error) {
    console.error("Failed to send contact notification:", error);
    return { ok: false };
  }

  // The message already reached me, so a failed confirmation still counts as sent
  try {
    await transport.sendMail(
      buildConfirmationEmail(contactMessage, contactEmail),
    );
  } catch (error) {
    console.error("Failed to send contact confirmation:", error);
  }

  return { ok: true };
}
