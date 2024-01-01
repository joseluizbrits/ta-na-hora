"use client";

import { Text, Wrapp } from "./styles";
import { cormorant } from "@/app/lib/fonts";
import Watch from "@/app/icons/Watch";

function Logo() {
  return (
    <Wrapp>
      <Text className={cormorant.className}>Tá na Hora</Text>
      <Watch />
    </Wrapp>
  );
}

export default Logo;
