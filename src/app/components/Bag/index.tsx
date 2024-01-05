"use client";

import { Wrapp } from "./styles";
import { BagContext } from "@/app/context/BagContext";
import { useContext, useEffect, useState } from "react";
import BagIcon from "../../icons/BagIcon";

function Bag() {
  // const { getBag } = useContext(BagContext);

  return (
    <Wrapp>
      <BagIcon />
      {0 > 0 && (
        <div>
          <span>{}</span>
        </div>
      )}
    </Wrapp>
  );
}

export default Bag;
