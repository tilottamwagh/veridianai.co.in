import type { Metadata } from "next";
import { DM_Sans, Syne, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "@/app/globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Veridian AI Tech | Intelligence, Engineered.",
  description: "From automation to advanced analytics — we deploy production-ready AI systems that reduce operational costs by up to 60% and deliver ROI within 90 days.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://veridianaitech.com",
    title: "Veridian AI Tech",
    description: "From automation to advanced analytics — we deploy production-ready AI systems.",
    siteName: "Veridian AI Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veridian AI Tech",
    description: "From automation to advanced analytics.",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F19" }
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${dmSans.variable} ${syne.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg-primary font-body text-text-primary antialiased selection:bg-accent-blue selection:text-white flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="sr-only focus:not-sr-only focus-ring p-4 absolute top-0 left-0 z-50 bg-bg-surface glass">Skip to main content</a>
          <Navbar />
          <ExitIntentPopup />
          <ChatbotWidget />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
