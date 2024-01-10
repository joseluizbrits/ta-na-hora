import styled from "styled-components";

export const Card = styled.div`
  height: fit-content;
  width: 100%;
  padding: 40px;
  border-radius: 2px;
  background-color: var(--white);

  display: flex;
  flex-direction: column;
  gap: 40px;

  position: sticky;
  top: 120px;

  animation: show 0.6s ease forwards;

  ul {
    border-bottom: 1px solid var(--grayShadow);
  }

  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 24px;
  }

  li :first-child {
    font-weight: 500;
    font-size: 1.25rem;
    color: var(--bg);
  }

  li :last-child {
    color: var(--gray);
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div :first-child {
    font-weight: 700;
    font-size: 2.5rem;
    color: var(--primary);
  }

  div :last-child {
    font-weight: 500;
    font-size: 1.5rem;
    color: var(--bg);
  }

  @media screen and (max-width: 768px) {
    padding: 20px;
    gap: 24px;

    button span {
      font-size: 1rem;
    }
  }
`;
