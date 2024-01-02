import styled from "styled-components";

export const Container = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 28px;
  }
`;

export const Item = styled.button`
  font-size: 1.25rem;
  color: var(--gray);

  &.active {
    color: white;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      margin-top: 4px;
      background-color: var(--secundary);
    }
  }
`;
