import { FetchWatches } from "./components/FetchWatches";
import Filter from "./components/Filter";
import WatchesContainer from "./components/WachesContainer";

export default function Home() {
  return (
    <>
      <Filter />
      <WatchesContainer>
        <FetchWatches />
      </WatchesContainer>
    </>
  );
}
