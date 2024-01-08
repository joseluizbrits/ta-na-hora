"use client";

import ButtonOrder from "../ButtonOrder";
import { Card } from "./styles";

function BagOrder() {
  return (
    <Card>
      <ul>
        <li>
          <span>Subtotal</span>
          <span>R$ 92.574,00</span>
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
        <span>R$ 92.574,00</span>
      </div>
      <ButtonOrder>Finalizar pedido</ButtonOrder>
    </Card>
  );
}

export default BagOrder;
