import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import Navbar from "@/components/global/navbar";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olha a Chuva!",
  description: "Fique informado sobre os riscos de inundações. Se atualize em tempo real sobre áreas propensas a enchentes. Mantenha-se seguro e informado!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
