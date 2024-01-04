import { IBagWatch } from "../interfaces/bag";

export const getBag = (): IBagWatch[] | [] => {
  const bag = localStorage.getItem("bag");

  if (!bag) return [];

  return JSON.parse(bag);
};

export const setBag = (watch: IBagWatch) => {
  const bag = getBag();

  const repetedWatch = bag.filter((bagWatch) => bagWatch.id === watch.id);

  if (repetedWatch.length > 0) {
    const newBag = changeAmountBagWatch(bag, watch.id);

    return localStorage.setItem("bag", JSON.stringify(newBag));
  }

  return localStorage.setItem("bag", JSON.stringify([watch, ...bag]));
};

export const changeAmountBagWatch = (bag: IBagWatch[], watchId: string) => {
  const newBag = bag.map((bagWatch) => {
    if (bagWatch.id === watchId) ({ watchId, amount: bagWatch.amount++ });

    return bagWatch;
  });

  return newBag;
};
