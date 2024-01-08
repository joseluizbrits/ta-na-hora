import { IBagWatch } from "../interfaces/bag";

export const getStorageBag = (): [] | IBagWatch[] => {
  const bag = localStorage.getItem("bag");

  if (!bag) return [];

  return JSON.parse(bag);
};

export const setStorageBag = (bagItem: IBagWatch) => {
  const bag = getStorageBag();

  const repetedWatch = bag.filter(
    ({ watch }) => watch._id === bagItem.watch._id
  );

  if (repetedWatch.length > 0) {
    const newBag = changeAmountBagWatch(bag, bagItem.watch._id);

    localStorage.setItem("bag", JSON.stringify(newBag));

    return getStorageBag();
  }

  localStorage.setItem("bag", JSON.stringify([bagItem, ...bag]));

  return getStorageBag();
};

export const changeAmountBagWatch = (bag: IBagWatch[], watchId: string) => {
  const newBag = bag.map((bagItem) => {
    if (bagItem.watch._id === watchId) ({ watchId, amount: bagItem.amount++ });

    return bagItem;
  });

  return newBag;
};

export const removeItemStorageBag = (watchId: string) => {
  const bag = getStorageBag();

  const newBag = bag.filter(({ watch }) => watch._id !== watchId);

  localStorage.setItem("bag", JSON.stringify(newBag));

  return getStorageBag();
};
