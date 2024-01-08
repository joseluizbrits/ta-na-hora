import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--white);
  padding: 40px;
  border-radius: 2px;
  margin-top: 64px;
  max-width: max-content;

  position: relative;

  tr > :first-child {
    min-width: 320px;
  }

  tr > :not(:first-child) {
    padding-left: 64px;
  }

  th {
    font-weight: 500;
    font-size: 1.25rem;
    color: var(--primary);
    padding-bottom: 16px;
    border-bottom: 1px solid var(--grayShadow);
  }

  td {
    font-size: 1.25rem;
    color: var(--bg);
  }

  td img {
    margin-top: 20px;
    object-fit: cover;
    border-radius: 2px;
  }

  td a {
    display: grid;

    :first-child {
      font-weight: 600;
      font-size: 1.5rem;
      color: var(--primary);
      align-self: end;
    }

    :last-child {
      font-size: 1rem;
      max-width: 20ch;
      color: var(--bg);
    }
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const Delete = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;
`;
