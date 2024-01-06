import React from "react";
import { Container } from "./styles";
import MagnifyingGlass from "@/icons/MagnifyingGlass";
import { poppins } from "@/lib/fonts";

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
