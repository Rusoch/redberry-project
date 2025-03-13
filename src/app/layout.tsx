import type { Metadata } from "next";
import '@fontsource/firago/400.css';
import '@fontsource/firago/500.css';
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Redberry Project",
  description: "Created by me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-firago font-normal">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
