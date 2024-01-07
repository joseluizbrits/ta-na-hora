"use client";

import { Delete, Card, THeader } from "./styles";
import Quantity from "../Quantity";
import DeleteIcon from "@/icons/DeleteIcon";

function BagItem() {
  return (
    <Card>
      <table>
        <tbody>
          <tr>
            <THeader style={{ textAlign: "start" }}>Relógio</THeader>
            <THeader>Preço</THeader>
            <THeader>Quantidade</THeader>
            <THeader>Total</THeader>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  width: "100px",
                  height: "80px",
                  background: "var(--gray)",
                }}
              ></div>
              <div>
                <span>Rolex Cellini Time</span>
                <span>50407RBR 39MM 18K Gold Brown Dial Box Papers</span>
              </div>
            </td>
            <td>R$ 34.560</td>
            <td>
              <Quantity />
            </td>
            <td>R$ 69.120</td>
          </tr>
        </tbody>
      </table>
      <Delete>
        <DeleteIcon />
      </Delete>
    </Card>
  );
}

export default BagItem;
