import styled from "styled-components";

export const Container = styled.div`
  padding-top: 64px;
  padding-bottom: 100px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 40px;
`;
