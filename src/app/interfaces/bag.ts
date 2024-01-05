export interface IBagWatch {
  id: string;
  amount: number;
}
export interface IBag {
  getBag: () => IBagWatch[] | [];
  setBag: (watch: IBagWatch) => void;
}
