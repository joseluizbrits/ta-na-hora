import { IWatch } from "./watch";
export interface IBagWatch {
  watch: IWatch;
  amount: number;
}
export interface IBagContext {
  getBag: () => IBagWatch[];
  setBag: (bagItem: IBagWatch, decrease?: boolean) => void;
  removeItem: (watchId: string) => void;
}
