import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 40px;
`;

export const Card = styled.div`
  height: max-content;
  background-color: var(--white);
  padding: 40px;
  border-radius: 2px;

  position: relative;
  animation: show 0.6s ease forwards;

  tr > :first-child {
    min-width: 320px;
  }

  tr > :not(:first-child) {
    padding-left: 20px;
  }

  th {
    font-weight: 500;
    color: var(--primary);
    padding-bottom: 16px;
    border-bottom: 1px solid var(--grayShadow);
  }

  td {
    color: var(--bg);
    min-width: 8em;
  }

  td a {
    display: flex;
    gap: 24px;
  }

  td a div {
    border-radius: 2px;
    overflow: hidden;
  }

  td img {
    margin-top: 20px;
    object-fit: cover;
    transition: 0.3s ease;
  }

  @media screen and (min-width: 1080px) {
    td a:hover {
      img {
        scale: 1.1;
      }

      span {
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 1520px) {
    table {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  @media screen and (max-width: 576px) {
    tr > :first-child {
      min-width: fit-content;
    }

    td {
      min-width: fit-content;
    }

    td a {
      gap: 16px;
    }
  }
`;

export const Text = styled.div`
  display: grid;

  span {
    transition: 0.3s ease;
  }

  :first-child {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--primary);
    align-self: end;
  }

  :last-child {
    font-size: 0.875rem;
    max-width: 20ch;
    color: var(--bg);
  }

  @media screen and (max-width: 576px) {
    :first-child {
      font-size: 0.875rem;
    }

    :last-child {
      font-size: 0.75rem;
    }
  }
`;
