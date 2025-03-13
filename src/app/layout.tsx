import type { Metadata } from "next";
import '@fontsource/firago/400.css';
import '@fontsource/firago/500.css';
import { Fredoka } from 'next/font/google';
import "./globals.css";

export const fredoka = Fredoka({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

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
        {children}
      </body>
    </html>
  );
}
