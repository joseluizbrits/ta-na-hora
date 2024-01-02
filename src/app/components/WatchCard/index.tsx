"use client";

import { Card, Content, ImageWrapper, Shadow } from "./styles";
import { IWatch } from "@/app/interfaces/watch";

import Image from "next/image";
import Button from "../Button";
import ArrowCircle from "@/app/icons/ArrowCircle";
import Link from "next/link";

function WatchCard({ watch }: { watch: IWatch }) {
  return (
    <Card>
      <Link href={`/${watch._id}`}>
        <ImageWrapper>
          <Image
            src={watch.image}
            priority
            fill
            sizes="33vw"
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
        <span>R$ {watch.price}</span>
      </Content>
      <Button>Adicionar à sacola</Button>
    </Card>
  );
}

export default WatchCard;