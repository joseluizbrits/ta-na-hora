import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  border-radius: 2px;
  background-color: var(--white);
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  border-radius: 2px;
  overflow: hidden;
  cursor: pointer;

  /* Skeleton */
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  animation-delay: 0.3s;

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  img {
    object-fit: cover;
    border-radius: 2px;
    transition: 0.3s ease;
  }

  @media screen and (min-width: 1080px) {
    &:hover {
      img {
        scale: 1.1;
      }

      div {
        height: 100%;
        pointer-events: all;
      }

      span,
      svg {
        opacity: 1;
      }
    }
  }
`;

export const Shadow = styled.div`
  width: 100%;
  height: 0;
  background-color: var(--secondaryShadow);

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
