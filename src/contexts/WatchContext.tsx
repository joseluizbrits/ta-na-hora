"use client";

import { createContext, useState, ReactNode } from "react";
import { IWatch, IWatchContext } from "@/interfaces/watch";
import { getWatchBoxMaterial } from "@/utils/getWatchBoxMaterial";

export const WatchContext = createContext({} as IWatchContext);

export default function WatchProvider({ children }: { children: ReactNode }) {
  const [watchesState, setWatchesState] = useState<IWatch[]>([]);

  const getWatches = () => watchesState;

  const setWatches = (watches: IWatch[]) => setWatchesState(watches);

  const getWatch = (id: string) => {
    const watch = watchesState.filter(({ _id }) => _id === id);
    return watch[0];
  };

  const getWatchesByBrand = (brand: string) =>
    watchesState.filter((watch) => watch.brand === brand);

  const getWatchesByMaterial = (material: string) => {
    return watchesState.filter(
      ({ box }) => getWatchBoxMaterial(box) === material
    );
  };

  return (
    <WatchContext.Provider
      value={{
        getWatches,
        getWatch,
        getWatchesByBrand,
        getWatchesByMaterial,
        setWatches,
      }}
    >
      {children}
    </WatchContext.Provider>
  );
}
