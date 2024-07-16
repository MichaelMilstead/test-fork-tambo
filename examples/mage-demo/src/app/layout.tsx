import type { Metadata } from "next";
import { Inter, Orelega_One } from "next/font/google";
import "./globals.css";

const orelega_One = Orelega_One({ weight: "400", subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script
        async
        src="https://ackee-production-f4bf.up.railway.app/tracker.js"
        data-ackee-server="https://ackee-production-f4bf.up.railway.app"
        data-ackee-domain-id="40e4d09d-8535-4e39-91fa-ef6105d123a7"
      ></script>
      <body className={orelega_One.className}>{children}</body>
    </html>
  );
}
