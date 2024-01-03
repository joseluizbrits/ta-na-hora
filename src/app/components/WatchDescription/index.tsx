"use client";

import { Container, Content, Description, ImageWrapper } from "./styles";
import { IWatch } from "@/app/interfaces/watch";
import Image from "next/image";

import Installments from "../Installments";
import Button from "../Button";

function WatchDescription({ watch }: { watch: IWatch }) {
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={watch.image}
          priority
          fill
          sizes="33vw"
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
          <strong>
            {watch.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
          <Button>Adicionar à sacola</Button>
        </Content>
      </Description>
    </Container>
  );
}

export default WatchDescription;
