export const toCurrencyBRL = (value: number | string) =>
  value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
