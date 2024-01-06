"use client";

import { Wrapp } from "./styles";
import { useBag } from "@/hooks/useBag";
import BagIcon from "../../icons/BagIcon";

function Bag() {
  const { getBag } = useBag();

  const amount = getBag().length;

  return (
    <Wrapp>
      <BagIcon />
      {amount > 0 && (
        <div>
          <span>{amount}</span>
        </div>
      )}
    </Wrapp>
  );
}

export default Bag;
