"use client";

import { Container, Card, Text } from "./styles";
import BagQuantity from "../BagQuantity";
import DeleteIcon from "@/icons/DeleteIcon";

import Link from "next/link";
import Image from "next/image";

import { useBag } from "@/hooks/useBag";
import { toCurrencyBRL } from "@/utils/toCurrencyBRL";
import ButtonDelete from "../ButtonDelete";
import useMedia from "@/hooks/useMedia";

function BagItem() {
  const { getBag } = useBag();

  const desktop = useMedia("(min-width: 992px)");

  if (getBag().length === 0)
    return (
      <div style={{ color: "var(--gray)", letterSpacing: "0.05rem" }}>
        Sua sacola está vazia...
      </div>
    );

  return (
    <Container>
      {getBag().map(({ watch, amount }, index) => (
        <Card key={`bag_item-${index + 1}`}>
          <table>
            <tbody>
              <tr>
                <th style={{ textAlign: "start" }}>Relógio</th>
                {desktop && <th>Preço</th>}
                <th>{desktop ? "Quantidade" : "Qtd."}</th>
                {desktop && <th>Total</th>}
              </tr>
              <tr>
                <td>
                  <Link href={`/relogios/${watch._id}`}>
                    <div>
                      <Image
                        src={watch.image}
                        width={desktop ? 100 : 64}
                        sizes="33vw"
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
                {desktop && <td>{toCurrencyBRL(watch.price)}</td>}
                <td>
                  <BagQuantity watch={watch} amount={amount} />
                </td>
                {desktop && <td>{toCurrencyBRL(watch.price * amount)}</td>}
              </tr>
            </tbody>
          </table>
          <ButtonDelete watchId={watch._id}>
            <DeleteIcon />
          </ButtonDelete>
        </Card>
      ))}
    </Container>
  );
}

export default BagItem;
