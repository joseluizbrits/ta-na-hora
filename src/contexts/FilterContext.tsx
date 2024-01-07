"use client";

import { createContext, useState, ReactNode } from "react";
import { IWatch } from "@/interfaces/watch";

interface IFilter {
  material: string;
  pages: Array<IWatch[]>;
  pageActive: string;
  setMaterial: React.Dispatch<React.SetStateAction<string>>;
  setPages: React.Dispatch<React.SetStateAction<Array<IWatch[]>>>;
  setPageActive: React.Dispatch<React.SetStateAction<string>>;
}

export const FilterContext = createContext({} as IFilter);

export default function FilterProvider({ children }: { children: ReactNode }) {
  const [material, setMaterial] = useState("");
  const [pages, setPages] = useState([] as Array<IWatch[]>);
  const [pageActive, setPageActive] = useState("page-1");

  return (
    <FilterContext.Provider
      value={{
        material,
        pages,
        pageActive,
        setMaterial,
        setPages,
        setPageActive,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
