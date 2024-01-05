"use client";

import { ButtonWrapper } from "./styles";
import { useContext } from "react";
import { BagContext } from "@/app/context/BagContext";
import { poppins } from "@/app/lib/fonts";

function ButtonBag({ children, id }: React.PropsWithChildren & { id: string }) {
  const { setBag } = useContext(BagContext);

  const handleBag = () => {
    const watch = { id, amount: 1 };

    setBag(watch);
  };

  return (
    <ButtonWrapper onClick={handleBag}>
      <span className={poppins.className}>{children}</span>
    </ButtonWrapper>
  );
}

export default ButtonBag;
