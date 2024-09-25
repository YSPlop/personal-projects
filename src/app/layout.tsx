import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleCaptchaWrapper from "./GoogleCaptchaWrapper";
import Navigation from "@/components/NavBar/Navigation";

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
      <body
        className="bg-gray-100 text-gray-900 h-screen w-screen font-sans"
        suppressHydrationWarning={true}
      >
        <Navigation />
        <GoogleCaptchaWrapper>
          {children}
        </GoogleCaptchaWrapper>
      </body>
    </html>
  );
}
