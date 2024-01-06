import { IWatch } from "@/app/interfaces/watch";
import WatchDescription from "../WatchDescription";
import WatchDetails from "../WatchDetails";
import SeeMore from "../SeeMore";
import WatchesContainer from "../WachesContainer";
import { FetchWatches } from "../FetchWatches";

async function getWatch(id: string): Promise<IWatch | undefined> {
  try {
    const res = await fetch(`http://localhost:1023/watches/${id}/`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.error(err);
  }
}

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
