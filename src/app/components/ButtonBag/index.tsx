"use client";

import { ButtonWrapper } from "./styles";
import { poppins } from "@/app/lib/fonts";
import { setBag } from "@/app/utils/localStorage";

function ButtonBag({ children, id }: React.PropsWithChildren & { id: string }) {
  function handleBag() {
    const watch = { id, amount: 1 };

    setBag(watch);
  }

  return (
    <ButtonWrapper onClick={handleBag}>
      <span className={poppins.className}>{children}</span>
    </ButtonWrapper>
  );
}

export default ButtonBag;
