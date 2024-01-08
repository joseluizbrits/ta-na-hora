"use client";

import { Container } from "./styles";
import Logo from "../Logo";
import Search from "../Search";
import BagLink from "../BagLink";

function Header() {
  return (
    <Container>
      <Logo />
      <nav>
        <Search />
        <BagLink />
      </nav>
    </Container>
  );
}

export default Header;
