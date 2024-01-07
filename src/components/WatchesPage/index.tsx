"use client";

import { ReactNode } from "react";
import { useFilter } from "@/hooks/useFilter";
import Pagination from "../Pagination";
import { IWatch } from "@/interfaces/watch";

interface IWatchesPage {
  children: ReactNode;
  currentPage: string;
  pages: Array<IWatch[]>;
}

function WatchesPage({ children, currentPage, pages }: IWatchesPage) {
  const { pageActive } = useFilter();

  if (pageActive !== currentPage) return null;

  return (
    <>
      {children}
      <Pagination pages={pages} />
    </>
  );
}

export default WatchesPage;
