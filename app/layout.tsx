import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JAMB CBT Practice",
  description: "Practice JAMB past questions in a real CBT-style environment.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
