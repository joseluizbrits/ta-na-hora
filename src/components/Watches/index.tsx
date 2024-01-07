"use client";

import { IWatch } from "@/interfaces/watch";
import WatchesPage from "../WatchesPage";
import WatchCard from "../WatchCard";

import { useWatch } from "@/hooks/useWatch";
import { useFilter } from "@/hooks/useFilter";

import { pagination } from "@/utils/pagination";
import { useEffect } from "react";

function Watches({ watches }: { watches: IWatch[] }) {
  const { setWatches, getWatchesByMaterial } = useWatch();
  const { material } = useFilter();

  useEffect(() => {
    setWatches(watches);
  }, [setWatches, watches]);

  let watchesDisplayed = watches;

  if (material) watchesDisplayed = getWatchesByMaterial(material);

  const pages = pagination(watchesDisplayed, 9);

  return (
    <>
      {pages.map((watches, index) => (
        <WatchesPage
          key={`page-${index + 1}`}
          currentPage={`page-${index + 1}`}
          pages={pages}
        >
          {watches.map((watch) => (
            <WatchCard key={watch._id} watch={watch} />
          ))}
        </WatchesPage>
      ))}
    </>
  );
}

export default Watches;
