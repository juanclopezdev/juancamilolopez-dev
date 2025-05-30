import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";
import ThemeSwitch from "@/components/ThemeSwitch";

export const metadata: Metadata = {
  title: "Juan-dev",
  description:
    "Hi! I'm Juan Camilo Lopez, a  web developer, with a degree in Systems technology. I am interested in UX/UI design,ai,video games.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="overflow-x-hidden">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
