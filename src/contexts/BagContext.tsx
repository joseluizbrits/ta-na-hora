"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { IBagContext, IBagWatch } from "../interfaces/bag";
import {
  getStorageBag,
  removeItemStorageBag,
  setStorageBag,
} from "../utils/localBagStorage";

export const BagContext = createContext({} as IBagContext);

export default function BagProvider({ children }: { children: ReactNode }) {
  const [storage, setStorage] = useState<IBagWatch[] | []>([]);

  useEffect(() => {
    const bag = getStorageBag();

    if (bag.length > 0) setStorage(bag);
  }, []);

  const getBag = () => storage;

  const setBag = (bagItem: IBagWatch, decrease?: boolean) => {
    setStorage(setStorageBag(bagItem, decrease));
  };

  const removeItem = (watchId: string) => {
    setStorage(removeItemStorageBag(watchId));
  };

  return (
    <BagContext.Provider value={{ getBag, setBag, removeItem }}>
      {children}
    </BagContext.Provider>
  );
}
