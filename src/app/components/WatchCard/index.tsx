"use client";

import { Card, Content, ImageWrapper, Shadow } from "./styles";
import { IWatch } from "@/app/interfaces/watch";

import Link from "next/link";
import Image from "next/image";
import ButtonBag from "../ButtonBag";
import ArrowCircle from "@/app/icons/ArrowCircle";

function WatchCard({ watch }: { watch: IWatch }) {
  return (
    <Card>
      <Link href={`/relogios/${watch._id}`}>
        <ImageWrapper>
          <Image
            src={watch.image}
            priority
            fill
            sizes="50vw"
            alt="Relógio Rolex Cellini Time"
          />
          <Shadow>
            <span>Saiba mais</span>
            <ArrowCircle />
          </Shadow>
        </ImageWrapper>
      </Link>
      <Content>
        <h2>
          {watch.brand} {watch.model}
        </h2>
        <p>{watch.desc}</p>
        <span>
          {watch.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </Content>
      <ButtonBag id={watch._id}>Adicionar à sacola</ButtonBag>
    </Card>
  );
}

export default WatchCard;
