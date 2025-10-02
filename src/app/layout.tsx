import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight:"300",
  subsets: ["latin","devanagari"],
});



export const metadata: Metadata = {
  title: "Shahariar Sohan | Portfolio",
  description: "Backend Developer Portfolio - MERN + PostgreSQL + Prisma",
  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster richColors position="bottom-right" />
            <div className={`${poppins.className}`}> {children}</div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
