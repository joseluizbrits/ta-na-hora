"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { IWatch } from "@/app/interfaces/watch";
import WatchCard from "../WatchCard";
import { SliderContainer } from "./styles";

export default function Slider({ watches }: { watches: IWatch[] }) {
  return (
    <SliderContainer>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {watches.map((watch) => (
          <SwiperSlide key={watch._id}>
            <WatchCard key={watch._id} watch={watch} brand={watch.brand} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
}
