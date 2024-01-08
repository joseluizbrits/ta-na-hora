"use client";

import { Card } from "./styles";
import { useBag } from "@/hooks/useBag";
import { toCurrencyBRL } from "@/utils/toCurrencyBRL";
import ButtonOrder from "../ButtonOrder";

function BagOrder() {
  const { getBag } = useBag();

  if (getBag().length === 0) return null;

  const prices = getBag().map(({ watch, amount }) => watch.price * amount);
  const subtotal = prices.reduce((acc, value) => acc + value, 0);

  return (
    <Card>
      <ul>
        <li>
          <span>Subtotal</span>
          <span>{toCurrencyBRL(subtotal)}</span>
        </li>
        <li>
          <span>Descontos</span>
          <span>R$ 0,00</span>
        </li>
        <li>
          <span>Taxas</span>
          <span>R$ 0,00</span>
        </li>
      </ul>
      <div>
        <span>Total</span>
        <span>{toCurrencyBRL(subtotal)}</span>
      </div>
      <ButtonOrder>Finalizar pedido</ButtonOrder>
    </Card>
  );
}

export default BagOrder;
