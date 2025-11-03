import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CleanBot Pro - Aspiradora Robot Inteligente",
  description: "La mejor aspiradora robot con tecnología de navegación láser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>   
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}