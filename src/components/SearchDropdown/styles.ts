import styled from "styled-components";

export const Container = styled.div`
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100vh;
    background-color: var(--transparent);

    position: fixed;
    top: 80px;
    right: 0;
  }
`;

export const Card = styled.ul`
  background-color: var(--white);
  border-radius: 2px;

  position: absolute;
  top: 48px;
  left: 0;
  z-index: 10;

  li {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    cursor: pointer;
  }

  li + li {
    border-top: 1px solid var(--grayShadow);
  }

  img {
    object-fit: cover;
  }

  span {
    display: block;
  }

  div :first-child {
    font-weight: 600;
    color: var(--primary);
  }

  div :last-child {
    font-size: 0.75rem;
    color: var(--bg);
  }

  svg {
    align-self: flex-start;
    margin: 10px;
  }
`;
