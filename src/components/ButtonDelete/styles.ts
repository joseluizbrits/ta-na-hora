import styled from "styled-components";

export const Wrapp = styled.button`
  position: absolute;
  top: -32px;
  right: -32px;
  padding: 12px;

  transition: 0.3s ease;

  @media screen and (min-width: 1080px) {
    &:hover {
      filter: hue-rotate(15deg);
      scale: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    scale: 0.8;
  }

  @media screen and (max-width: 576px) {
    scale: 0.6;
  }
`;
