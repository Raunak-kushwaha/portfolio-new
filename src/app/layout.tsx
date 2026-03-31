import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { CustomCursor } from "@/components/CustomCursor";
import { SpotlightBackground } from "@/components/SpotlightBackground";
import { DesignModeProvider } from "@/components/DesignModeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raunak Kushwaha | UI/UX Designer & Full-Stack Developer",
  description: "Portfolio of Raunak Kushwaha, an aspiring UI/UX Designer and MERN Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen text-foreground flex flex-col font-sans">
        <DesignModeProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <SpotlightBackground />
            <CustomCursor />
            <Header />
            <main className="flex-1 flex flex-col">{children}</main>
          </ThemeProvider>
        </DesignModeProvider>
      </body>
    </html>
  );
}
