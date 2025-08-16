import type { Metadata } from "next";
import ThemeRegistry from '@/components/ThemeRegistry';
import "./globals.css";

export const metadata: Metadata = {
  title: "Travel Planner",
  description: "A travel planning application to find travel companions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
