import WatchCard from "../WatchCard";
import Slider from "../Slider";
import FilterChecker from "../FilterCheck";
import { getWatches } from "@/app/utils/fetchApi";

export async function FetchWatches({ brand }: { brand?: string }) {
  const watches = await getWatches();

  return (
    <>
      {!brand
        ? watches?.map((watch) => (
            <FilterChecker key={watch._id} watchBox={watch.box}>
              <WatchCard watch={watch} />
            </FilterChecker>
          ))
        : watches && <Slider watches={watches} brand={brand} />}
    </>
  );
}
