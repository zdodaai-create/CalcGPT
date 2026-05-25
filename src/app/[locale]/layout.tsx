import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ 
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "CalcGPT – Free AI-Powered Calculators for Everything",
  description: "CalcGPT offers 1000+ free AI-powered calculators for everything — finance, math, health, engineering, ecommerce, marketing, business, education, science, technology, and everyday calculations. Fast, accurate, responsive, and easy-to-use tools for everyone.",
  keywords: ["calculator", "math", "finance", "health", "physics", "statistics", "biology", "gpt", "ai"],
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  openGraph: {
    title: "CalcGPT – Free AI-Powered Calculators for Everything",
    description: "CalcGPT offers 1000+ free AI-powered calculators for everything — finance, math, health, engineering, ecommerce, marketing, business, education, science, technology, and everyday calculations. Fast, accurate, responsive, and easy-to-use tools for everyone.",
    url: "https://calcgpt.ai",
    siteName: "CalcGPT AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CalcGPT – Free AI-Powered Calculators for Everything",
    description: "CalcGPT offers 1000+ free AI-powered calculators for everything — finance, math, health, engineering, ecommerce, marketing, business, education, science, technology, and everyday calculations. Fast, accurate, responsive, and easy-to-use tools for everyone.",
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${poppins.variable} font-poppins min-h-screen bg-background text-foreground antialiased`}>
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9176484091341823"
          crossOrigin="anonymous"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <AuthProvider>
              <Navbar />
              <main className="pt-16 min-h-screen">
                {children}
              </main>
              <Footer />
            </AuthProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
