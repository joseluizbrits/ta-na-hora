"use client";

import StyledComponentsRegistry from "../lib/registry";
import GlobalStyles from "./globalStyles";

function StylesProvider({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      {children}
    </StyledComponentsRegistry>
  );
}

export default StylesProvider;
