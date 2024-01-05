import { useContext } from "react";
import { BagContext } from "../context/BagContext";

export const useBag = () => useContext(BagContext);
