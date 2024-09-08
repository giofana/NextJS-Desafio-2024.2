import type { Metadata } from "next";
import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";

const Libre = Libre_Baskerville({
  weight: ['400', '700'],
  style: "normal",
  subsets: ['latin']
});

const fontClasses = Libre.className;

export const metadata: Metadata = {
  title: "Essence",
  description: "Um toque de Elegância em um só lugar!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head />
      <body className={`${fontClasses} font-libre flex flex-col min-h-screen bg-fundo`}>
        {children}
      </body>
    </html>
  );
}
