import styled from "styled-components";

export const Container = styled.div`
  border-radius: 2px;
  border: 1px solid var(--gray);

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    width: 28px;
    font-size: 1.75rem;
    color: var(--bg);
  }

  #decrease {
    /* padding-right: 8px; */
    margin-top: -2px;
  }

  #increase {
    /* padding-left: 8px; */
  }
`;
