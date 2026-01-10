import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arpit Singh Bhatia | Blockchain Developer",
  description: "Blockchain Developer & Solana Ecosystem Builder. Building the future of decentralized finance and AI-powered blockchain applications.",
  keywords: ["Solana", "Blockchain", "Web3", "AI Agents", "DeFi", "Developer"],
  authors: [{ name: "Arpit Singh Bhatia" }],
  openGraph: {
    title: "Arpit Singh Bhatia | Blockchain Developer",
    description: "Blockchain Developer & Solana Ecosystem Builder",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
