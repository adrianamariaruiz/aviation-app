import type { Metadata } from "next";

import "./globals.css";
import { geistMono, geistSans } from "@/config/fonts";

// gotham black 500, 42.6px


export const metadata: Metadata = {
  title: "Aviationstack-app",
  description: "Application for visualizing aviation data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
