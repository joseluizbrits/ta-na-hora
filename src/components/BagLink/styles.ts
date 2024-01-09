import styled from "styled-components";

export const Wrapp = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  a {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    transition: 0.3s ease;
  }

  svg {
    position: absolute;
    top: -3px;
  }

  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--warning);

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: -4px;
  }

  div span {
    font-size: 0.875rem;
    color: var(--white);
  }

  @media screen and (min-width: 1080px) {
    a:hover {
      background-color: var(--grayShadow);
    }
  }
`;
