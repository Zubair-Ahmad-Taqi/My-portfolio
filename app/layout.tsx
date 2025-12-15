import type { Metadata } from "next";
import { Exo_2 } from "next/font/google"; // import Exo 2
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  weight: "400",       // normal weight
  variable: "--font-exo2", 
});

export const metadata: Metadata = {
  title: "Zubair Ahmed | Portfolio",
  description: "Personal portfolio showcasing projects, skills, and AI experiments.",
  authors: [{ name: "Zubair Ahmed" }],
  keywords: [
    "Portfolio",
    "Zubair Ahmed",
    "AI",
    "Next.js",
    "Full Stack",
    "Web Developer",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Zubair Ahmed | Portfolio",
    description: "Personal portfolio showcasing projects, skills, and AI experiments.",
    url: "https://portfolio-sigma-dun-zixzbign8y.vercel.app",
    siteName: "Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${exo2.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
