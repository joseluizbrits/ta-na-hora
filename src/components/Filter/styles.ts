import styled from "styled-components";

export const Container = styled.nav`
  margin-left: -20px;

  ul {
    display: flex;
    align-items: center;
  }
`;

export const Item = styled.button`
  font-size: 1.25rem;
  color: var(--gray);
  padding: 0 20px;
  transition: 0.3s ease;

  &.active {
    color: white;

    span {
      border-bottom: 2px solid var(--secondary);
    }
  }

  @media screen and (min-width: 1080px) {
    &:hover {
      color: var(--white);
    }
  }

  @media screen and (max-width: 576px) {
    font-size: 1rem;
  }
`;
