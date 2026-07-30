import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bhuwanesh M — Full Stack Developer & AI Engineer",
  description:
    "Mission Control Portfolio — Interactive developer portfolio showcasing full-stack engineering, AI, and cloud expertise by Bhuwanesh M.",
  keywords: [
    "Bhuwanesh M",
    "Full Stack Developer",
    "AI Engineer",
    "Cloud Enthusiast",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Bhuwanesh M" }],
  creator: "Bhuwanesh M",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhuwanesh.dev",
    title: "Bhuwanesh M — Full Stack Developer & AI Engineer",
    description:
      "Interactive developer portfolio — engineering intelligent systems at the intersection of code, cloud, and cognition.",
    siteName: "Bhuwanesh M Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhuwanesh M — Full Stack Developer & AI Engineer",
    description:
      "Mission Control Portfolio — Full Stack Developer, AI Engineer, Cloud Enthusiast.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bhuwanesh M",
  jobTitle: "Full Stack Developer",
  description: "Full Stack Developer, AI Engineer, and Cloud Enthusiast",
  url: "https://bhuwanesh.dev",
  sameAs: [
    "https://github.com/bhuwaneshm",
    "https://linkedin.com/in/bhuwaneshm",
  ],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "AWS",
    "Machine Learning",
    "Cloud Computing",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bangalore",
    addressCountry: "India",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${inter.variable} ${jetbrains.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-primary font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
