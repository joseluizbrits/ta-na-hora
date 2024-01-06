import styled from "styled-components";
import arrow from "../../../../public/arrow.svg";

export const SliderContainer = styled.div`
  .swiper {
    width: 100%;
    height: 100%;

    overflow-x: hidden;
    position: relative;
  }

  .swiper-wrapper {
    width: max-content;
    display: flex;
  }

  .swiper-slide {
    width: 100%;
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 100px;
    height: 40px;
    border-radius: 2px;
    background-color: var(--secundary);
    box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.3);

    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      background: url(${arrow.src}) no-repeat center center;
      width: 100%;
      height: 100%;
    }
  }

  .swiper-button-next {
    right: 0;

    &::after {
      rotate: 180deg;
    }
  }

  .swiper-button-disabled {
    display: none;
  }
`;
