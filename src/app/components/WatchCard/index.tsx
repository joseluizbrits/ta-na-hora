"use client";

import { Card, Content, ImageWrapper, Shadow } from "./styles";
import { IWatch } from "@/app/interfaces/watch";

import { useFilter } from "@/app/hooks/useFilter";
import { getWatchBoxMaterial } from "@/app/utils/getWatchBoxMaterial";

import Link from "next/link";
import Image from "next/image";
import ButtonBag from "../ButtonBag";
import ArrowCircle from "@/app/icons/ArrowCircle";

function WatchCard({ watch, brand }: { watch: IWatch; brand?: string }) {
  const material = getWatchBoxMaterial(watch.box);
  const { filter } = useFilter();

  const matchAll = filter === "all";
  const matchMaterial = filter === material;
  const matchBrand = brand === watch.brand;

  const isFilteredByMaterial = matchAll || matchMaterial;
  const isFilteredByBrand = isFilteredByMaterial && matchBrand;

  if (brand && !isFilteredByBrand) return null;

  if (isFilteredByMaterial || isFilteredByBrand)
    return (
      <Card>
        <Link href={`/watch/${watch._id}`}>
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
  else return null;
}

export default WatchCard;
