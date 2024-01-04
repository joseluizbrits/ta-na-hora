import styled from "styled-components";

export const Wrapp = styled.div`
  /* Custom Select wrapper */
  height: 40px;
  border-radius: 2px;

  display: flex;
  align-items: center;

  position: relative;
  overflow: hidden;

  svg {
    margin-left: -24px;
    transition: 0.3s ease;
    cursor: pointer;
  }
`;

export const Select = styled.select`
  /* Reset Select*/
  appearance: none;
  outline: 10px red;
  box-shadow: none;

  /* Personalize */
  width: 16em;
  height: 100%;
  padding: 0 1em;
  border: 1px solid var(--gray);
  color: var(--bg);
  background-image: none;
  cursor: pointer;
`;
