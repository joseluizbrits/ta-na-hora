"use client";

import { Benefits, Card } from "./styles";
import { IWatch } from "@/interfaces/watch";

import Truck from "@/icons/Truck";
import Gift from "@/icons/Gift";
import Phone from "@/icons/Phone";

function WatchDetails({ watch }: { watch: IWatch }) {
  return (
    <Card>
      <h2>Detalhes:</h2>
      <ul>
        <li>
          <h3>Marca</h3>
          <span>{watch.brand}</span>
        </li>
        <hr />
        <li>
          <h3>Modelo</h3>
          <span>{watch.model}</span>
        </li>
        <hr />
        <li>
          <h3>Material da caixa</h3>
          <span>{watch.box}</span>
        </li>
        <hr />
        <li>
          <h3>Material do bracelete</h3>
          <span>{watch.bracelet}</span>
        </li>
        <hr />
        <li>
          <h3>Preço</h3>
          <span>
            {watch.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </li>
      </ul>
      <Benefits>
        <div>
          <div>
            <Truck />
            <span>Envio & entregas rápidas</span>
          </div>
          <div>
            <Gift />
            <span>Embalagem para presente gratuita</span>
          </div>
          <div>
            <Phone />
            <span>Assistência personalizada para compras</span>
          </div>
        </div>
      </Benefits>
    </Card>
  );
}

export default WatchDetails;
