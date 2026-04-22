import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner"; 
import "./globals.css";
import { Providers } from "@/features/theme-provider";
import ClientLayout from "@/features/LayoutLoading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aniket Kumar | Developer & Strategist",
  description: "Software Engineer specializing in scalable high-performance applications and clean architecture.",
  keywords: ["Full-stack Developer", "System Architect", "Next.js", "Software Engineer"],
  authors: [{ name: "Aniket Kumar" }],
  icons: {
    icon: "/favicon.ico", 
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="">
       {/* <ClientLayout> */}
          <Providers>
            {children}
          </Providers>
          {/* </ClientLayout> */}
       

        {/* Global UI Components */}
        <Toaster 
          position="bottom-right" 
          theme="dark" 
          richColors 
          closeButton 
        />
      </body>
    </html>
  );
}