import styled from "styled-components";

export const Wrapp = styled.button`
  span {
    color: var(--gray);
    margin-left: 12px;
  }

  > * {
    transition: 0.3s ease;
  }

  &:hover {
    svg {
      transform: translateX(-12px);
      opacity: 0.6;
    }

    span {
      opacity: 0.6;
    }
  }
`;
