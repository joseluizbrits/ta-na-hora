import { useContext } from "react";
import { WatchContext } from "../contexts/WatchContext";

export const useWatch = () => useContext(WatchContext);
