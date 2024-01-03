"use client";

import { Wrapp } from "./styles";
import { poppins } from "@/app/lib/fonts";
import ArrowBack from "@/app/icons/ArrowBack";
import { useRouter } from "next/navigation";

function ButtonBack() {
  const router = useRouter();

  return (
    <Wrapp onClick={() => router.push("./")}>
      <ArrowBack />
      <span className={poppins.className}>voltar</span>
    </Wrapp>
  );
}

export default ButtonBack;
