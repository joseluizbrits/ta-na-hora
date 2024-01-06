"use client";

import { createContext, useState, ReactNode } from "react";

interface IFilter {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterContext = createContext({} as IFilter);

export default function FilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState("all");

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
