import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 64px;

  display: grid;
  grid-template-columns: minmax(400px, 1fr) 1fr;
  gap: 28px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  img {
    object-fit: cover;
    border-radius: 2px;
  }
`;

export const Description = styled.div`
  background-color: var(--white);
  border-radius: 2px;

  h1 {
    font-weight: 600;
    font-size: 2.5rem;
    color: var(--primary);
  }

  h1 + span {
    font-size: 1.25rem;
    color: var(--bg);
  }

  p {
    color: var(--bg);
    line-height: 1.5em;
    margin-top: 20px;
    margin-bottom: 40px;
  }

  strong {
    font-weight: 500;
    font-size: 2rem;
    display: block;
    margin-top: 12px;
    margin-bottom: 40px;
  }

  button {
    font-size: 1rem;
  }
`;

export const Content = styled.div`
  padding: 20px;
`;
