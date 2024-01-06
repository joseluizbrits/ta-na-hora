import { titleStyle } from "./styles";

import { ReactNode } from "react";
import { cormorant } from "@/app/lib/fonts";

function SeeMore({ children, brand }: { children: ReactNode; brand: string }) {
  return (
    <div>
      <h2 style={titleStyle} className={cormorant.className}>
        Veja mais relógios {brand}:
      </h2>
      {children}
    </div>
  );
}

export default SeeMore;
