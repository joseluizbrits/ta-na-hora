import FilterCheck from "../FilterCheck";
import WatchCard from "../WatchCard";
import Slider from "../Slider";

import { getWatches } from "@/utils/fetchApi";

export async function FetchWatches({ brand }: { brand?: string }) {
  const watches = await getWatches();

  if (watches)
    return (
      <>
        {!brand ? (
          watches.map((watch) => (
            <FilterCheck key={watch._id} watchBox={watch.box}>
              <WatchCard watch={watch} />
            </FilterCheck>
          ))
        ) : (
          <Slider watches={watches} brand={brand} />
        )}
      </>
    );
  else return <div>Nenhum relógio foi encontrado...</div>;
}
