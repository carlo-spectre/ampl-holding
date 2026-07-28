import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

const moonWalk = localFont({
  src: "../fonts/MoonWalk.otf",
  variable: "--font-moon-walk",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "../fonts/Inter-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Inter-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Inter-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL(`https://${site.domain}`),
  icons: {
    icon: "/logomark-white.svg",
  },
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${moonWalk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
