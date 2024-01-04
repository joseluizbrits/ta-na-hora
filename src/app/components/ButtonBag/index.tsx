"use client";

import { ButtonWrapper } from "./styles";
import { poppins } from "@/app/lib/fonts";

function ButtonBag({ children }: React.PropsWithChildren) {
  return (
    <ButtonWrapper>
      <span className={poppins.className}>{children}</span>
    </ButtonWrapper>
  );
}

export default ButtonBag;
