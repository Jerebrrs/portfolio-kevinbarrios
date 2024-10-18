import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Outfit } from 'next/font/google'





const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const outfit = Outfit({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Kevin Barrios",
  description: "Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={outfit.className}
      >
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

      </body>
    </html>
  );
}
