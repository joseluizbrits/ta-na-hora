"use client";

import { Container, Content, Description, ImageWrapper } from "./styles";
import { IWatch } from "@/interfaces/watch";
import { toCurrencyBRL } from "@/utils/toCurrencyBRL";

import Image from "next/image";
import Installments from "../Installments";
import ButtonBag from "../ButtonBag";

function WatchDescription({ watch }: { watch: IWatch }) {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={watch.image}
          priority
          fill
          sizes="50vw"
          alt={`Relógio ${watch.brand} ${watch.model}`}
        />
      </ImageWrapper>
      <Description>
        <Content>
          <h1>
            {watch.brand} {watch.model}
          </h1>
          <span>{watch.desc}</span>
          <p>{watch.description}</p>
          <Installments price={watch.price} />
          <strong>{toCurrencyBRL(watch.price)}</strong>
          <ButtonBag watch={watch}>Adicionar à sacola</ButtonBag>
        </Content>
      </Description>
    </Container>
  );
}

export default WatchDescription;
