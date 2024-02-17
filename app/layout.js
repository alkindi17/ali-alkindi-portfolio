import "./globals.css";
import { Montserrat, Enriqueta } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={dmSans.className + " " + enriqueta.variable}>
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
}
