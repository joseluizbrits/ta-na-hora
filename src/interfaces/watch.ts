export interface IWatch {
  _id: string;
  model: string;
  brand: string;
  price: number;
  description: string;
  image: string;
  box: string;
  bracelet: string;
  desc: string;
}

export interface IWatchContext {
  setWatches: (watches: IWatch[]) => void;
  getWatches: () => IWatch[];
  getWatch: (id: string) => IWatch;
  getWatchesByBrand: (brand: string) => IWatch[];
  getWatchesByMaterial: (material: string) => IWatch[];
}
