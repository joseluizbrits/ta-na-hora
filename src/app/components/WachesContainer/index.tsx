"use client";

import { Container } from "./styles";
import { FetchWatches } from "../FetchWatches";

function WatchesContainer({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

export default WatchesContainer;
