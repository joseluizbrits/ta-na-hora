"use client";

import { Container } from "./styles";
import { ReactNode } from "react";

function BagContainer({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}

export default BagContainer;
