import { useContext } from "react";
import { BagContext } from "../contexts/BagContext";

export const useBag = () => useContext(BagContext);
