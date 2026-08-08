import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Notes on medicine",
  description: "Illustrating complex topics in healthcare and medicine.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
