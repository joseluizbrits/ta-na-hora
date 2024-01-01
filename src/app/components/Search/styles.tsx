import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  height: 100%;
  padding: 0 20px;
  border-radius: 1px;

  display: flex;
  align-items: center;

  input {
    font-size: 1rem;
    color: var(--bg);

    border: none;
    min-width: 300px;
    height: 100%;
  }

  input::placeholder {
    color: var(--gray);
  }

  input:focus,
  input:focus-visible {
    outline: none;
  }
`;
