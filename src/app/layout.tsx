import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xavier Lacey - Software Engineer",
  description:
    "Software engineer living in Lisbon with eight years experience building great products specialising in Node.js, TypeScript and React.",
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
