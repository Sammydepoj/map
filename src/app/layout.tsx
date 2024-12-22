import type { Metadata } from "next";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: "MAP",
  description: "Revolutionize Healthcare Management with MAP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader
          color="#175CFF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          easing="ease"
          speed={100}
          showSpinner={false}
        />
        {children}
      </body>
    </html>
  );
}
