"use client";

import { IWatch } from "@/interfaces/watch";
import WatchCard from "../WatchCard";
import { useFilter } from "@/hooks/useFilter";
import { useWatch } from "@/hooks/useWatch";
import { useEffect } from "react";
import { pagination } from "@/utils/pagination";

function Watches({ watches }: { watches: IWatch[] }) {
  const { material } = useFilter();
  const { setWatches, getWatchesByMaterial } = useWatch();

  useEffect(() => {
    setWatches(watches);
  }, [setWatches, watches]);

  let watchesDisplayed = watches;

  if (material) watchesDisplayed = getWatchesByMaterial(material);

  return (
    <>
      {watchesDisplayed.map((watch) => (
        <WatchCard key={watch._id} watch={watch} />
      ))}
    </>
  );
}

export default Watches;
