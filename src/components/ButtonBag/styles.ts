import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: 100%;
  padding: 10px 0;
  border-radius: 2px;
  background-color: var(--primary);
  box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;

  span {
    color: var(--secondary);
    font-weight: 600;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }

  @media screen and (min-width: 1080px) {
    &:hover {
      background-color: var(--secondaryShadow);

      span {
        color: var(--primary);
        font-weight: 700;
      }
    }
  }
`;
