"use client";

import { Container } from "./styles";
import { cormorant } from "@/lib/fonts";
import { ReactNode } from "react";

function SeeMore({ children, brand }: { children: ReactNode; brand: string }) {
  return (
    <Container>
      <h2 className={cormorant.className}>Veja mais relógios {brand}:</h2>
      {children}
    </Container>
  );
}

export default SeeMore;
