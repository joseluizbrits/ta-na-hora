import styled from "styled-components";

export const Wrapp = styled.button`
  width: 100%;
  height: 100%;

  position: relative;

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
`;
