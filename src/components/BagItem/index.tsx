"use client";

import { Card, Delete, Text } from "./styles";
import Quantity from "../Quantity";
import DeleteIcon from "@/icons/DeleteIcon";

import Link from "next/link";
import Image from "next/image";

import { useBag } from "@/hooks/useBag";
import { toCurrencyBRL } from "@/utils/toCurrencyBRL";

function BagItem() {
  const { getBag } = useBag();

  if (!getBag()) return null;

  return (
    <>
      {getBag().map(({ watch, amount }, index) => (
        <Card key={`bag_item-${index + 1}`}>
          <table>
            <tbody>
              <tr>
                <th style={{ textAlign: "start" }}>Relógio</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>
                  <Link href={`/relogios/${watch._id}`}>
                    <div>
                      <Image
                        src={watch.image}
                        width={100}
                        height={80}
                        priority
                        alt={`Relógio ${watch.brand} ${watch.model}`}
                      />
                    </div>
                    <Text>
                      <span>
                        {watch.brand} {watch.model}
                      </span>
                      <span>{watch.desc}</span>
                    </Text>
                  </Link>
                </td>
                <td>{toCurrencyBRL(watch.price)}</td>
                <td>
                  <Quantity amount={amount} />
                </td>
                <td>{toCurrencyBRL(watch.price * amount)}</td>
              </tr>
            </tbody>
          </table>
          <Delete>
            <DeleteIcon />
          </Delete>
        </Card>
      ))}
    </>
  );
}

export default BagItem;
