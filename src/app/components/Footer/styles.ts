import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 160px;
  background-color: var(--primary);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  position: absolute;
  bottom: 0;

  span {
    color: var(--white);
  }
`;
