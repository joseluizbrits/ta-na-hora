import styled from "styled-components";

export const Card = styled.div`
  background-color: var(--white);
  padding: 40px;
  border-radius: 2px;

  position: relative;
`;

export const THeader = styled.th`
  font-weight: 500;
  font-size: 1.25rem;
  color: var(--primary);
`;

export const Delete = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;
`;
