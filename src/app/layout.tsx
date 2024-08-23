import type { Metadata } from "next";
import "./globals.css";
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";

export const metadata: Metadata = {
  title: "Yukash's Personal Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleCaptchaWrapper>
          {children}
        </GoogleCaptchaWrapper>
      </body>
    </html>
  );
}
