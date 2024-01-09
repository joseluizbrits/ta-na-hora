import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  height: 100%;
  padding: 0 20px;
  border-radius: 2px;

  display: flex;
  align-items: center;

  position: relative;

  input {
    font-size: 1rem;
    color: var(--bg);
    min-width: 300px;
    height: 100%;

    border: none;
    background-image: none;
  }

  input::placeholder {
    color: var(--gray);
  }

  input::-webkit-search-cancel-button {
    display: none;
  }

  input:focus,
  input:focus-visible {
    outline: none;
  }
`;
