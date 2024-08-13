import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Yukash's App",
  description: "This is an app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
