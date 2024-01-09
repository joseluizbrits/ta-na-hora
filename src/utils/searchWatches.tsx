import { IWatch } from "@/interfaces/watch";

export const searchWatches = (watches: IWatch[], query: string) =>
  watches.filter(
    ({ model, brand, desc }) =>
      model?.toLowerCase().includes(query.toLowerCase()) ||
      brand?.toLowerCase().includes(query.toLowerCase()) ||
      desc?.toLowerCase().includes(query.toLowerCase())
  );
