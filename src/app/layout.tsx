import type { Metadata } from "next";
import { poppins } from "./lib/fonts";
import StylesProvider from "./styles/StylesProvider";

import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Tá na Hora",
  description: "Loja virtual de rológios Tá na Hora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <StylesProvider>
          <Header />
          {children}
        </StylesProvider>
      </body>
    </html>
  );
}
