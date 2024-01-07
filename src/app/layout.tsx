import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";

import StylesProvider from "@/styles/StylesProvider";
import BagProvider from "@/contexts/BagContext";
import FilterProvider from "@/contexts/FilterContext";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WatchProvider from "@/contexts/WatchContext";

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
          <BagProvider>
            <WatchProvider>
              <Header />
              <FilterProvider>
                <main>{children}</main>
              </FilterProvider>
            </WatchProvider>
          </BagProvider>
          <Footer />
        </StylesProvider>
      </body>
    </html>
  );
}
