import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chat Buddy",
  description: "Your chat buddy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleCaptchaWrapper>
          {children}
        </GoogleCaptchaWrapper>
      </body>
    </html>
  );
}
