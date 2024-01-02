"use client";

import { Text, Wrapp } from "./styles";
import { cormorant } from "@/app/lib/fonts";
import Watch from "@/app/icons/Watch";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Wrapp>
        <Text className={cormorant.className}>Tá na Hora</Text>
        <Watch />
      </Wrapp>
    </Link>
  );
}

export default Logo;
