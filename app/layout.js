import "./globals.css";
import { Raleway, Enriqueta } from "next/font/google";
import Provider from "@/functions/provider";

const raleway = Raleway({ weight: "500", subsets: ["latin"] });
const enriqueta = Enriqueta({
  weight: "700",
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
      <body className={raleway.className + " " + enriqueta.variable}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
