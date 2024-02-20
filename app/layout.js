import "./globals.css";
import { Montserrat, Enriqueta } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Provider from "@/functions/provider";

const dmSans = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const enriqueta = Enriqueta({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-enriqueta",
});

export const metadata = {
  title: "Ali Al Kindi",
  description: "Ali Al Kindi Portfolio",
  openGraph: {
    title: "Ali Al Kindi Portfolio",
    description:
      "Hi, I'm Ali Al Kindi, a Software Engineering student. Check out my portfolio! 🚀",
    url: "https://alialkindi.dev",
    images: [
      {
        url: "https://alialkindi.dev/data/metadata/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ali Al Kindi Portfolio",
        type: "image/jpeg",
        itemprop: "image",
      },
      {
        url: "https://alialkindi.dev/data/metadata/og-image2.jpg",
        width: 256,
        height: 256,
        alt: "Ali Al Kindi Portfolio",
        type: "image/jpeg",
        itemprop: "image",
      },
    ],
    type: "website",
    site_name: "Ali Al Kindi Portfolio",
    updated_time: new Date().toISOString(),
  },
  icons: {
    icon: "https://alialkindi.dev/data/metadata/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Al Kindi Portfolio",
    description:
      "Hi, I'm Ali Al Kindi, a Software Engineering student. Check out my portfolio! 🚀",
    creator: "@alkindi17",
    images: ["https://alialkindi.dev/data/metadata/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={dmSans.className + " " + enriqueta.variable}>
        <Provider>{children}</Provider>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-TYSFFDBDML" />
      </body>
    </html>
  );
}
