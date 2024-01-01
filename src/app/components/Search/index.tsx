import React from "react";
import { Container } from "./styles";
import MagnifyingGlass from "@/app/icons/MagnifyingGlass";
import { poppins } from "@/app/lib/fonts";

function Search() {
  return (
    <Container>
      <input
        type="text"
        placeholder="Encontre o seu relógio"
        className={poppins.className}
      />
      <MagnifyingGlass />
    </Container>
  );
}

export default Search;
