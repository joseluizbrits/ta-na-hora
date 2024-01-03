import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: var(--white);
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  cursor: pointer;

  img {
    object-fit: cover;
  }

  &:hover {
    div {
      height: 100%;
      pointer-events: all;
    }

    span,
    svg {
      opacity: 1;
    }
  }
`;

export const Shadow = styled.div`
  width: 100%;
  height: 0;
  background-color: var(--secundaryShadow);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  position: absolute;
  bottom: 0;
  z-index: 1;

  pointer-events: none;
  transform-origin: bottom;

  transition: 0.3s ease;

  span {
    font-weight: 700;
    font-size: 2rem;
    letter-spacing: 0.05rem;
    color: var(--primary);

    opacity: 0;
    transition: 0.1s ease;
  }

  svg {
    opacity: 0;
    transition: 0.1s ease;
  }
`;

export const Content = styled.div`
  padding-top: 12px;
  padding-bottom: 20px;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--primary);
  }

  p {
    font-size: 0.875rem;
    color: var(--bg);
    margin-bottom: 12px;
  }

  span {
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--primary);
  }
`;
