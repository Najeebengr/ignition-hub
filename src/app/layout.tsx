import type { Metadata } from "next";
import { Poppins} from "next/font/google";

import "./globals.css";
import Navbar from "@/components/ui/navbar";
import { navItems } from "@/data";
import Footer from "@/components/ui/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ignition Hub - Best Car Blogging Site",
  description: "Best Car Blogging Site developed in Next.js and Tailwind.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        
      <Navbar navItems={navItems}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
