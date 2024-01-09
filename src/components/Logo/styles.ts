import styled from "styled-components";

export const Wrapp = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  svg {
    margin-top: -4px;
  }

  @media screen and (max-width: 576px) {
    svg {
      display: none;
    }
  }
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 2rem;
  text-transform: uppercase;
  color: var(--white);

  @media screen and (max-width: 576px) {
    font-size: 1.5rem;
  }
`;
