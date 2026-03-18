import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-provider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OOH Stack — Sales Deck",
  description: "Interactive sales presentation for OOH Stack",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  openGraph: {
    title: "OOH Stack — Sales Deck",
    description: "Interactive sales presentation for OOH Stack",
    type: "website",
    images: [
      {
        url: "/ooh-stack-logo.png",
        alt: "OOH Stack logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OOH Stack — Sales Deck",
    description: "Interactive sales presentation for OOH Stack",
    images: ["/ooh-stack-logo.png"],
  },
  icons: {
    icon: [{ url: "/ooh-stack-logo.png" }],
    shortcut: [{ url: "/ooh-stack-logo.png" }],
    apple: [{ url: "/ooh-stack-logo.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
