"use client";

import { poppins } from "@/app/lib/fonts";
import { Container, Item } from "./styles";
import { useState } from "react";

function Filter() {
  const [activeItem, setActiveItem] = useState("by-all");

  const handleActiveItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveItem(e.currentTarget.id);
  };

  return (
    <Container>
      <ul>
        <li>
          <Item
            id="by-all"
            onClick={handleActiveItem}
            className={activeItem === "by-all" ? "active" : ""}
          >
            <span className={poppins.className}>Todos</span>
          </Item>
        </li>
        <li>
          <Item
            id="by-gold"
            onClick={handleActiveItem}
            className={activeItem === "by-gold" ? "active" : ""}
          >
            <span className={poppins.className}>Ouro</span>
          </Item>
        </li>
        <li>
          <Item
            id="by-steel"
            onClick={handleActiveItem}
            className={activeItem === "by-steel" ? "active" : ""}
          >
            <span className={poppins.className}>Aço</span>
          </Item>
        </li>
        <li>
          <Item
            id="by-ceramic"
            onClick={handleActiveItem}
            className={activeItem === "by-ceramic" ? "active" : ""}
          >
            <span className={poppins.className}>Cerâmica</span>
          </Item>
        </li>
      </ul>
    </Container>
  );
}

export default Filter;
