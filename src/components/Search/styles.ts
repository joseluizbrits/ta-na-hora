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

  button {
    cursor: auto;
  }

  @media screen and (max-width: 992px) {
    background-color: transparent;
    width: 85px;

    input {
      min-width: 0;
      width: 0;
      opacity: 0.5;

      position: absolute;
      top: -2px;
      right: 86px;

      transition: 0.3s ease;
    }

    input.active {
      width: calc(100vw - 273px);
      padding: 8px 20px;
      border-radius: 2px;
      box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.3);
      opacity: 1;

      position: absolute;
      top: -2px;
      right: 86px;
    }

    button {
      margin-top: -4px;
      padding: 10px 20px;
      border-radius: 2px;
      background-color: var(--grayShadow);
      cursor: pointer;
    }
  }

  @media screen and (max-width: 768px) {
    input.active {
      width: calc(100vw - 225px);
    }
  }

  @media screen and (max-width: 576px) {
    input.active {
      width: calc(100vw - 185px);
      padding: 8px 16px;
    }

    input::placeholder {
      font-size: 0.875rem;
    }
  }
`;
