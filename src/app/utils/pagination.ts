export const pagination = <T>(items: T[], itemsPerPage: number) => {
  const totalOfItems = items.length;
  const numberOfPages = Math.ceil(+(totalOfItems / itemsPerPage));

  let pages = [] as Array<T[]>;

  for (let i = 0; i <= numberOfPages; i++) {
    if (i === 0) continue;
    pages.push(items.slice(itemsPerPage * (i - 1), itemsPerPage * i));
  }

  return pages;
};
