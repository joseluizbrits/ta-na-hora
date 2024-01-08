"use client";

import { ButtonWrapper } from "./styles";
import { IWatch } from "@/interfaces/watch";
import { poppins } from "@/lib/fonts";
import { useBag } from "@/hooks/useBag";

type IButtonBag = React.PropsWithChildren & { watch: IWatch };

function ButtonBag({ children, watch }: IButtonBag) {
  const { setBag } = useBag();

  const handleBag = () => {
    const bagItem = { watch, amount: 1 };

    setBag(bagItem);
  };

  return (
    <ButtonWrapper onClick={handleBag}>
      <span className={poppins.className}>{children}</span>
    </ButtonWrapper>
  );
}

export default ButtonBag;
