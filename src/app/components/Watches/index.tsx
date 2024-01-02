import WatchCard from "../WatchCard";
import { IWatch } from "@/app/interfaces/watch";

async function getWatches(): Promise<IWatch[] | undefined> {
  try {
    const res = await fetch("http://localhost:1023/watches/3");

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (err) {
    console.error(err);
  }
}

export async function Watches() {
  const watches = await getWatches();

  console.log(watches);

  return (
    <>
      {watches?.map((watch) => (
        <div key={watch._id}>
          <WatchCard watch={watch} />
          <span>{watch.model}</span>
        </div>
      ))}
    </>
  );
}
