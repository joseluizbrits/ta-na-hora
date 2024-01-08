"use client";

import { ButtonWrapper } from "./styles";
import { poppins } from "@/lib/fonts";

function ButtonOrder({ children }: React.PropsWithChildren) {
  return (
    <ButtonWrapper>
      <span className={poppins.className}>{children}</span>
    </ButtonWrapper>
  );
}

export default ButtonOrder;
