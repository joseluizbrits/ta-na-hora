"use client";

import { Container } from "./styles";
import Logo from "../Logo";

function Footer() {
  return (
    <Container>
      <Logo />
      <span>
        © Copyright {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
        | Tá na Hora | Todos os Direitos Reservados | Criado por BRITS
      </span>
    </Container>
  );
}

export default Footer;
