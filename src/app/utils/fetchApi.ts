import { IWatch } from "../interfaces/watch";

export async function getWatches(): Promise<IWatch[] | undefined> {
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

export async function getWatch(id = ""): Promise<IWatch | undefined> {
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
