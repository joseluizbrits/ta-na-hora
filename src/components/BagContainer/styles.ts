import styled from "styled-components";

export const Container = styled.div`
  margin-top: 64px;
  display: flex;
  gap: 40px;

  @media screen and (max-width: 1520px) {
    flex-direction: column;
  }
`;
