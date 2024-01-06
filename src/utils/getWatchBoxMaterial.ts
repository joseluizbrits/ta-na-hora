export const getWatchBoxMaterial = (watchBox: string) => {
  const boxMaterial = watchBox.split(" ")[0].toLocaleLowerCase();

  if (boxMaterial === "ouro") return "gold";
  if (boxMaterial === "aço") return "steel";
  if (boxMaterial === "bronze") return "bronze";
  if (boxMaterial === "titânio") return "titanium";
  if (boxMaterial === "cerâmica") return "ceramic";
};
