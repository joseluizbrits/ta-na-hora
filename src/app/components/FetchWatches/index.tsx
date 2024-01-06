import WatchCard from "../WatchCard";
import { IWatch } from "@/app/interfaces/watch";
import Slider from "../Slider";

async function getWatches(): Promise<IWatch[] | undefined> {
  try {
    const res = await fetch("http://localhost:1023/watches/");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.error(err);
  }
}

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
