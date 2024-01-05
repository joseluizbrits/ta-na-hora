"use client";

import { Container } from "./styles";
import Logo from "../Logo";
import Search from "../Search";
import Bag from "../Bag";

function Header() {
  return (
    <Container>
      <Logo />
      <nav>
        <Search />
        <Bag />
      </nav>
    </Container>
  );
}

export default Header;
