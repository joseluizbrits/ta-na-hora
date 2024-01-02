"use client";

import { Card, Content, ImageWrapper, Shadow } from "./styles";

import Image from "next/image";
import img from "../../../../public/rolex-cellini.jpg";
import Button from "../Button";
import ArrowCircle from "@/app/icons/ArrowCircle";

function WatchCard() {
  return (
    <Card>
      <ImageWrapper>
        <Image src={img.src} fill alt="Relógio Rolex Cellini Time" />
        <Shadow>
          <span>Saiba mais</span>
          <ArrowCircle />
        </Shadow>
      </ImageWrapper>
      <Content>
        <h2>Rolex Cellini Time</h2>
        <p>50407RBR 39MM 18K Gold Brown Dial Box Papers</p>
        <span>R$ 34.560</span>
      </Content>
      <Button>Adicionar à sacola</Button>
    </Card>
  );
}

export default WatchCard;
