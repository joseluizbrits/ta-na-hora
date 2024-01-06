import WatchCard from "../WatchCard";
import Slider from "../Slider";
import FilterChecker from "../FilterCheck";
import { getWatches } from "@/app/utils/fetchApi";
import { IWatch } from "@/app/interfaces/watch";
import { pagination } from "@/app/utils/pagination";

export async function FetchWatches({ brand }: { brand?: string }) {
  const watches = await getWatches();

  if (watches) {
    const pages = pagination<IWatch>(watches, 9);

    return (
      <>
        {!brand ? (
          watches.map((watch) => (
            <FilterChecker key={watch._id} watchBox={watch.box}>
              <WatchCard watch={watch} />
            </FilterChecker>
          ))
        ) : (
          <Slider watches={watches} brand={brand} />
        )}
      </>
    );
  } else return <div>Relógios não encontrados...</div>;
}
