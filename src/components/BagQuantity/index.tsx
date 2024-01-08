import { MouseEvent, ReactNode } from "react";
import { Container } from "./styles";
import { IWatch } from "@/interfaces/watch";
import { useBag } from "@/hooks/useBag";

interface IBagQuantity {
  watch: IWatch;
  amount: number;
}

function BagQuantity({ watch, amount }: IBagQuantity) {
  const { setBag } = useBag();

  const bagWatch = { watch, amount };

  const handleQuantity = (e: MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.id === "increase") setBag(bagWatch);
    if (e.currentTarget.id === "decrease")
      amount !== 1 && setBag(bagWatch, true);
  };

  return (
    <Container>
      <button id="decrease" onClick={handleQuantity}>
        -
      </button>
      {amount}
      <button id="increase" onClick={handleQuantity}>
        +
      </button>
    </Container>
  );
}

export default BagQuantity;
