"use client";

import { Select, Wrapp } from "./styles";
import ArrowDrop from "@/app/icons/ArrowDrop";

function Installments({ price }: { price: number }) {
  const parcels = (price: number, n: number) =>
    Number((price / n).toFixed()).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

  return (
    <Wrapp>
      <Select name="installments" id="installments">
        <option value="">1x de {parcels(price, 1)}</option>
        <option value="">2x de {parcels(price, 2)}</option>
        <option value="">3x de {parcels(price, 3)}</option>
        <option value="">4x de {parcels(price, 4)}</option>
        <option value="">5x de {parcels(price, 5)}</option>
        <option value="">6x de {parcels(price, 6)}</option>
        <option value="">7x de {parcels(price, 7)}</option>
        <option value="">8x de {parcels(price, 8)}</option>
        <option value="">9x de {parcels(price, 9)}</option>
        <option value="">10x de {parcels(price, 10)}</option>
      </Select>
      <ArrowDrop />
    </Wrapp>
  );
}

export default Installments;
