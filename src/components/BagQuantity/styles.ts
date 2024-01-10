import styled from "styled-components";

export const Container = styled.div`
  border-radius: 2px;
  border: 1px solid var(--gray);

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 28px;
    font-size: 1.75rem;
    color: var(--bg);
    border-radius: 50%;

    transition: 0.3s ease;
  }

  button:hover {
    background-color: var(--grayShadow);
  }

  @media screen and (max-width: 576px) {
    width: max-content;
    margin: 0 auto;
  }
`;
