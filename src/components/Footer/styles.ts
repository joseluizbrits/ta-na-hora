import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 160px;
  padding: 0 40px;
  background-color: var(--primary);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  span {
    color: var(--white);
    text-align: center;
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }

  @media screen and (max-width: 576px) {
    padding: 0 20px;

    svg {
      display: block !important;
    }

    > span {
      font-size: 0.875rem;
    }
  }
`;
