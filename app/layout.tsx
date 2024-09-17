import { MainHeader } from "@/components/header";
import { MobileHeader } from "@/components/mobile-header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Floorwalk",
  description: "Generated by Floorwalk",
};
const fontRoboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
});
const fontLato = Roboto({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "500", "700", "900"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/fevicon.svg" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen  bg-white text-skin-primary-1000  font-sans antialiased",
          fontRoboto.variable,
          fontLato.variable
        )}
      >
        <MainHeader />
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
