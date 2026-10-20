
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Hassan Online Quran Academy",
  description:
    "Learn Quran reading, Tajweed, Hifz-ul-Quran and Islamic studies online. Quran education for children and adults in Pakistan and worldwide.",
  applicationName: "Ali Hassan Online Quran Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
