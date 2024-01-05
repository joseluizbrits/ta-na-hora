import { IBagWatch } from "../interfaces/bag";

export const getStorageBag = (): [] | IBagWatch[] => {
  const bag = localStorage.getItem("bag");

  if (!bag) return [];

  return JSON.parse(bag);
};

export const setStorageBag = (watch: IBagWatch) => {
  const bag = getStorageBag();

  const repetedWatch = bag.filter((bagWatch) => bagWatch.id === watch.id);

  if (repetedWatch.length > 0) {
    const newBag = changeAmountBagWatch(bag, watch.id);

    localStorage.setItem("bag", JSON.stringify(newBag));

    return getStorageBag();
  }

  localStorage.setItem("bag", JSON.stringify([watch, ...bag]));

  return getStorageBag();
};

export const changeAmountBagWatch = (bag: IBagWatch[], watchId: string) => {
  const newBag = bag.map((bagWatch) => {
    if (bagWatch.id === watchId) ({ watchId, amount: bagWatch.amount++ });

    return bagWatch;
  });

  return newBag;
};
