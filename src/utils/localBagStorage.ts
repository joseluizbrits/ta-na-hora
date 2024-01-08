import { IBagWatch } from "../interfaces/bag";

export const getStorageBag = (): [] | IBagWatch[] => {
  const bag = localStorage.getItem("bag");

  if (!bag) return [];

  return JSON.parse(bag);
};

export const setStorageBag = (bagItem: IBagWatch, decrease = false) => {
  const bag = getStorageBag();

  const repetedWatch = bag.filter(
    ({ watch }) => watch._id === bagItem.watch._id
  );

  if (repetedWatch.length > 0) {
    let newBag;

    if (decrease) newBag = decreaseAmountBagWatch(bag, bagItem.watch._id);
    if (!decrease) newBag = increaseAmountBagWatch(bag, bagItem.watch._id);

    localStorage.setItem("bag", JSON.stringify(newBag));

    return getStorageBag();
  }

  localStorage.setItem("bag", JSON.stringify([bagItem, ...bag]));

  return getStorageBag();
};

export const increaseAmountBagWatch = (bag: IBagWatch[], watchId: string) => {
  const newBag = bag.map((bagItem) => {
    if (bagItem.watch._id === watchId) ({ watchId, amount: bagItem.amount++ });

    return bagItem;
  });

  return newBag;
};

export const decreaseAmountBagWatch = (bag: IBagWatch[], watchId: string) => {
  const newBag = bag.map((bagItem) => {
    if (bagItem.watch._id === watchId) ({ watchId, amount: bagItem.amount-- });

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
