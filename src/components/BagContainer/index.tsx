import { ReactNode } from "react";

function BagContainer({ children }: { children: ReactNode }) {
  return (
    <div style={{ marginTop: "64px", display: "flex", gap: "40px" }}>
      {children}
    </div>
  );
}

export default BagContainer;
