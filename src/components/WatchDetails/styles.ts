import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--white);
  padding: 40px;
  margin-top: 64px;
  margin-bottom: 160px;
  border-radius: 2px;

  h2 {
    font-weight: 700;
    font-size: 2.5rem;
    letter-spacing: 0.05rem;
    color: var(--primary);
  }

  ul {
    padding-top: 60px;
    padding-bottom: 100px;
  }

  ul > li:not(:last-child) {
    padding-bottom: 12px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80%;
  }

  li h3 {
    font-weight: 500;
    font-size: 1.25rem;
    color: var(--bg);
  }

  li span {
    color: var(--bg);
    min-width: 200px;
    text-align: start;
  }

  hr {
    border: 1px solid var(--grayShadow);
    margin-bottom: 12px;
  }

  @media screen and (max-width: 992px) {
    padding: 20px;
    margin-top: 40px;
    margin-bottom: 120px;

    h2 {
      font-size: 2rem;
    }

    ul {
      padding-top: 40px;
      padding-bottom: 60px;
    }

    li {
      max-width: 100%;
    }

    li h3 {
      font-size: 1rem;
    }

    li span {
      min-width: fit-content;
      text-align: end;
    }
  }
`;

export const Benefits = styled.div`
  &,
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div + div::before {
    content: "";
    display: block;
    width: 1px;
    height: 40px;
    margin: 0 28px;
    background-color: var(--grayShadow);
  }

  div span {
    font-size: 0.875rem;
    color: var(--gray);
    padding-left: 16px;
  }

  @media screen and (max-width: 576px) {
    justify-content: start;

    div {
      flex-direction: column;
      align-items: start;
    }

    div :first-child {
      align-items: center;
    }

    div > div {
      flex-direction: row-reverse;
    }

    div span {
      padding-left: 0;
      padding-right: 16px;
      font-size: 0.75rem;
    }

    div + div {
      padding-top: 12px;
    }

    div + div::before {
      display: none;
    }
  }
`;
