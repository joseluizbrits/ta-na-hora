"use client";

import { SliderContainer } from "./styles";
import { useParams } from "next/navigation";

import { IWatch } from "@/interfaces/watch";
import WatchCard from "../WatchCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Slider({
  watches,
  brand,
}: {
  watches: IWatch[];
  brand: string;
}) {
  const { id } = useParams<{ id: string }>();

  return (
    <SliderContainer>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
      >
        {watches.map(
          (watch) =>
            watch.brand === brand &&
            watch._id !== id && (
              <SwiperSlide key={watch._id}>
                <WatchCard watch={watch} />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </SliderContainer>
  );
}
