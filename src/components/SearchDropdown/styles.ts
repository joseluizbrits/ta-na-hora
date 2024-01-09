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

  li + li {
    border-top: 1px solid var(--grayShadow);
  }

  li {
    padding: 16px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  a {
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

  @media screen and (min-width: 992px) {
    li:hover {
      background-color: var(--grayShadow);
    }
  }

  @media screen and (max-width: 992px) {
    width: calc(100vw - 273px);
    left: auto;
    right: 86px;

    div :first-child {
      font-size: 1.25rem;
    }

    div :last-child {
      font-size: 0.875rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: calc(100vw - 225px);

    div :first-child {
      font-size: 1rem;
    }

    div :last-child {
      font-size: 0.75rem;
    }
  }

  @media screen and (max-width: 576px) {
    width: calc(100vw - 43px);
    top: 56px;
    right: -56px;
  }
`;
