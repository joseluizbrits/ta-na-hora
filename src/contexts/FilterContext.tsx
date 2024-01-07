"use client";

import { createContext, useState, ReactNode } from "react";
import { IWatch } from "@/interfaces/watch";

interface IFilter {
  filter: string;
  pages: Array<IWatch[]>;
  pageActive: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setPages: React.Dispatch<React.SetStateAction<Array<IWatch[]>>>;
  setPageActive: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterContext = createContext({} as IFilter);

export default function FilterProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState("all");
  const [pages, setPages] = useState([] as Array<IWatch[]>);
  const [pageActive, setPageActive] = useState("page-1");

  return (
    <FilterContext.Provider
      value={{ filter, pages, pageActive, setFilter, setPages, setPageActive }}
    >
      {children}
    </FilterContext.Provider>
  );
}
