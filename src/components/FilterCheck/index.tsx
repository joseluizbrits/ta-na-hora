"use client";

import { useFilter } from "@/hooks/useFilter";
import { getWatchBoxMaterial } from "@/utils/getWatchBoxMaterial";
import { ReactNode } from "react";

interface IFilterProvider {
  children: ReactNode;
  watchBox: string;
}

function FilterCheck({ children, watchBox }: IFilterProvider) {
  const material = getWatchBoxMaterial(watchBox);
  const { filter } = useFilter();

  const matchAll = filter === "all";
  const matchMaterial = filter === material;

  const isFilteredByMaterial = matchAll || matchMaterial;

  if (isFilteredByMaterial) return <>{children}</>;
  else return null;
}

export default FilterCheck;
