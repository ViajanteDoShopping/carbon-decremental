import type { Metadata } from "next";
import { Jersey_20 } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const jersey20 = Jersey_20({
  weight: "400",
  variable: "--font-jersey-20",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carbon Decremental",
  description: "Uma aventura para melhorar o mundo.",
  keywords: ["carbon", "decremental", "incremental", "tmt"],
  authors: [
    {
      name: "Breno Santos Adami",
      url: "https://github.com/ViajanteDoShopping/ViajanteDoShopping"
    },
    {
      name: "João Vitor Pires",
      url: "https://github.com/ProfJotaVIdros/ProfJotaVidros"
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${jersey20.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        <Header />

        <div className="flex-1">
          {children}
        </div>
        
        <Footer />

      </body>

    </html>
  );
}
