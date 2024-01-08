import { IWatch } from "./watch";
export interface IBagWatch {
  watch: IWatch;
  amount: number;
}
export interface IBagContext {
  getBag: () => IBagWatch[];
  setBag: (bagItem: IBagWatch) => void;
  removeItem: (watchId: string) => void;
}
