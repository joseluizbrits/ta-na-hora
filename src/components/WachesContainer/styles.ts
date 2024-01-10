import styled from "styled-components";

export const Container = styled.div`
  padding-top: 64px;
  padding-bottom: 100px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 40px;

  position: relative;
  animation: show 0.6s ease forwards;

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  }
`;
