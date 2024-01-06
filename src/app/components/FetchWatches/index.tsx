import WatchCard from "../WatchCard";
import Slider from "../Slider";
import { getWatches } from "@/app/utils/fetchApi";

export async function FetchWatches({ brand }: { brand?: string }) {
  const watches = await getWatches();

  return (
    <>
      {!brand
        ? watches?.map((watch) => <WatchCard key={watch._id} watch={watch} />)
        : watches && <Slider watches={watches} brand={brand} />}
    </>
  );
}
