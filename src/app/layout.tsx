import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ISP Manager BD - Complete ISP Management System",
  description: "Bangladesh ISP Management System - Manage clients, billing, hotspot, and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
