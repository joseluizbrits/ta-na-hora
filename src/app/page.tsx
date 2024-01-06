import Filter from "@/components/Filter";
import WatchesContainer from "@/components/WachesContainer";
import { FetchWatches } from "@/components/FetchWatches";

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
