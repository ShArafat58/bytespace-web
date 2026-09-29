import type { Metadata } from "next";
import type { ReactNode } from "react";
import { poppins, satoshi } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "ByteSpace | Hundreds of Courses Available",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={cn(poppins.variable, satoshi.variable)}>
      <body>{children}</body>
    </html>
  );
}
