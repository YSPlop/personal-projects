import type { Metadata } from "next";
import "./globals.css";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Yukash's Personal Portfolio",
  description: "Showcasing my work as a junior developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 font-sans">
        <Nav />
        <GoogleCaptchaWrapper>
          {children}
        </GoogleCaptchaWrapper>
      </body>
    </html>
  );
}
