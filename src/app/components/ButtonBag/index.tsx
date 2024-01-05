"use client";

import { ButtonWrapper } from "./styles";
import { poppins } from "@/app/lib/fonts";
import { useBag } from "@/app/hooks/useBag";

function ButtonBag({ children, id }: React.PropsWithChildren & { id: string }) {
  const { setBag } = useBag();

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
