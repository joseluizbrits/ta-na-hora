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

  &.active {
    color: white;

    span {
      border-bottom: 2px solid var(--secundary);
    }
  }
`;
