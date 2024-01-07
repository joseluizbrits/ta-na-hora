"use client";

import { createContext, useState, ReactNode } from "react";
import { IWatch } from "@/interfaces/watch";

interface IFilter {
  watches: IWatch[];
  setWatches: React.Dispatch<React.SetStateAction<IWatch[]>>;
}

export const WatchesContext = createContext({} as IFilter);

export default function WatchesProvider({ children }: { children: ReactNode }) {
  const [watches, setWatches] = useState<IWatch[]>([]);

  return (
    <WatchesContext.Provider value={{ watches, setWatches }}>
      {children}
    </WatchesContext.Provider>
  );
}
