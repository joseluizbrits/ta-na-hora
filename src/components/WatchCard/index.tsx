"use client";

import { Card, Content, ImageWrapper, Shadow } from "./styles";
import { IWatch } from "@/interfaces/watch";

import Link from "next/link";
import Image from "next/image";

import ButtonBag from "../ButtonBag";
import ArrowCircle from "@/icons/ArrowCircle";
import { toCurrencyBRL } from "@/utils/toCurrencyBRL";

function WatchCard({ watch }: { watch: IWatch }) {
  return (
    <Card>
      <Link href={`/relogios/${watch._id}`}>
        <ImageWrapper>
          <Image
            src={watch.image}
            priority
            fill
            sizes="(max-width: 576px) 100vw,
              (max-width: 1080px) 70vw,
              50vw"
            alt="Relógio Rolex Cellini Time"
          />
          <Shadow>
            <span>Saiba mais</span>
            <ArrowCircle />
          </Shadow>
        </ImageWrapper>
      </Link>
      <Content>
        <h3>{`${watch.brand} ${watch.model}`}</h3>
        <p>{watch.desc}</p>
        <span>{toCurrencyBRL(watch.price)}</span>
      </Content>
      <ButtonBag watch={watch}>Adicionar à sacola</ButtonBag>
    </Card>
  );
}

export default WatchCard;
