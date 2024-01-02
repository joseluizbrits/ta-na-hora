import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--primary);
  padding: 20px 64px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
