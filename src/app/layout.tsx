import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight:"300",
  subsets: ["latin","devanagari"],
});



export const metadata: Metadata = {
  title: "Shahariar Sohan Portfolio Website",
  description: "I am a MERN stack developer.Passionate about database,server,system design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
