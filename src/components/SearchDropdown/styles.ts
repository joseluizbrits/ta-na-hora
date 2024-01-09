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

  a + a li {
    border-top: 1px solid var(--grayShadow);
  }

  li {
    padding: 16px 0;
    margin: 0 16px;
    cursor: pointer;

    display: flex;
    gap: 16px;
  }

  img {
    object-fit: cover;
    border-radius: 2px;
  }

  div {
    flex: 1;
  }

  div :first-child {
    font-weight: 600;
    color: var(--primary);
  }

  div :last-child {
    font-size: 0.75rem;
    color: var(--bg);
  }

  span {
    display: block;
  }

  svg {
    align-self: flex-start;
    margin: 10px;
  }
`;
