import WatchDescription from "../WatchDescription";
import WatchDetails from "../WatchDetails";
import SeeMore from "../SeeMore";
import WatchesContainer from "../WachesContainer";
import { FetchWatches } from "../FetchWatches";
import { getWatch } from "@/utils/fetchApi";

export async function FetchWatch({ id }: { id: string }) {
  const watch = await getWatch(id);

  return (
    <>
      {watch ? (
        <>
          <WatchDescription watch={watch} />
          <WatchDetails watch={watch} />
          <SeeMore brand={watch.brand}>
            <WatchesContainer>
              <FetchWatches brand={watch.brand} />
            </WatchesContainer>
          </SeeMore>
        </>
      ) : (
        <span>Relógio não encontrado</span>
      )}
    </>
  );
}
