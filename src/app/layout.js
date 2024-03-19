import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
  description: "Google clone created by Ahmed Monem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.className} relative min-h-screen`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
