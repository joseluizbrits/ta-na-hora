"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { IBag, IBagWatch } from "../interfaces/bag";
import { getStorageBag, setStorageBag } from "../utils/localBagStorage";

export const BagContext = createContext<IBag>({} as IBag);

export default function BagProvider({ children }: { children: ReactNode }) {
  const [storage, setStorage] = useState<IBagWatch[] | []>([]);

  useEffect(() => {
    const bag = getStorageBag();

    if (bag.length > 0) setStorage(bag);
  }, []);

  const getBag = () => storage;

  const setBag = (watch: IBagWatch) => {
    setStorage(setStorageBag(watch));
  };

  return (
    <BagContext.Provider value={{ getBag, setBag }}>
      {children}
    </BagContext.Provider>
  );
}
