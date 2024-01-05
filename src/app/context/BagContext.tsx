"use client";

import { createContext, useState, ReactNode } from "react";
import { IBag, IBagWatch } from "../interfaces/bag";
import { getStorageBag, setStorageBag } from "../utils/localBagStorage";

export const BagContext = createContext<IBag>({} as IBag);

export default function BagProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<IBagWatch[] | []>([]);

  const getBag = () => {
    const bag = getStorageBag();

    if (bag.length > 1) setState(bag);

    return state;
  };

  const setBag = (watch: IBagWatch) => {
    const bag = getBag();

    const newBag = setStorageBag(bag, watch);

    setState(newBag);
  };

  return (
    <BagContext.Provider value={{ getBag, setBag }}>
      {children}
    </BagContext.Provider>
  );
}
