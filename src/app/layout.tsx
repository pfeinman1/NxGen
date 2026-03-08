import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NxGeN | Where Capital and Culture Collide",
  description: "The invitation-only community for next-generation leaders shaping the future of capital, entrepreneurship, and impact.",
  keywords: ["NxGeN", "community", "capital", "entrepreneurship", "impact", "next generation", "investors", "builders"],
  openGraph: {
    title: "NxGeN | Where Capital and Culture Collide",
    description: "The invitation-only community for next-generation leaders shaping the future of capital, entrepreneurship, and impact.",
    url: "https://nxgen.club",
    siteName: "NxGeN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NxGeN | Where Capital and Culture Collide",
    description: "The invitation-only community for next-generation leaders shaping the future of capital, entrepreneurship, and impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
