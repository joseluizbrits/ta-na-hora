"use client";

import { Wrapp } from "./styles";
import { poppins } from "@/lib/fonts";

import { useRouter } from "next/navigation";
import ArrowBack from "@/icons/ArrowBack";

function ButtonBack() {
  const router = useRouter();

  return (
    <Wrapp onClick={() => router.push("/")}>
      <ArrowBack />
      <span className={poppins.className}>voltar</span>
    </Wrapp>
  );
}

export default ButtonBack;
