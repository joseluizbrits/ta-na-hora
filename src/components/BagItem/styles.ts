import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  gap: 40px;
`;

export const Card = styled.div`
  background-color: var(--white);
  padding: 40px;
  border-radius: 2px;
  max-width: max-content;

  position: relative;

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
  }

  td a {
    display: flex;
    gap: 24px;
  }

  td img {
    margin-top: 20px;
    object-fit: cover;
    border-radius: 2px;
  }
`;

export const Text = styled.div`
  display: grid;

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
`;

export const Delete = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;
`;
