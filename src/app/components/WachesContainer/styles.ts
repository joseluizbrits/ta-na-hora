import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 40px;
`;
