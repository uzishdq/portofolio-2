import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "uzishdq — Full-Stack Web Developer",
  description:
    "Full-Stack Web Developer specializing in Next.js, modern UI, and scalable web applications. I build clean, performant, and real-world solutions.",
  keywords: [
    "Full-Stack Developer",
    "Next.js Developer",
    "Web Developer",
    "JavaScript",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "uzishdq" }],
  creator: "uzishdq",
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
