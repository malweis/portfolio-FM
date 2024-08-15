import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { PHProvider } from "./providers";

// @ts-expect-error - PostHogPageView dynamic import could have type issues
const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
});


const syne = Inter({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com/"),
  title: "Federico Molas Portfolio",
  description:
    "Portfolio of Federico Molas, a software developer and designer based in Paraguay.",
  generator: "Next.js",
  applicationName: "Portfolio Federico Molas",
  keywords: [
    "Eldora UI",
    "React",
    "developer",
    "frontend",
    "nextjs",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
    "creative engineer portfolio",
    "software developer portfolio",
    "frontend engineer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Federico Molas Portfolio",
    description:
      "Portfolio of Federico Molas, a software developer and designer based in Paraguay.",
    url: "https://www.eldoraui.site/",
    siteName: "www.eldoraui.site",
    images: [
      {
        url: "./public/metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio of Federico Molas",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Federico Molas Portfolio",
    description:
      "Portfolio of Federico Molas, a software developer and designer based in Paraguay.",
    creator: "@malweis01",
    creatorId: "0000000000",
    images: ["./public/metadata.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};




export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <PHProvider>
      <body
        className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        <PostHogPageView /> 
        {children}
      </body>
      </PHProvider>
    </html>
  );
}
