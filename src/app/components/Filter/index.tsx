"use client";
import { useState } from "react";
import { Container, Item } from "./styles";

function Filter() {
  const [activeItem, setActiveItem] = useState<string>("by-all");

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
            Todos
          </Item>
        </li>
        <li>
          <Item
            id="by-gold"
            onClick={handleActiveItem}
            className={activeItem === "by-gold" ? "active" : ""}
          >
            Ouro
          </Item>
        </li>
        <li>
          <Item
            id="by-steel"
            onClick={handleActiveItem}
            className={activeItem === "by-steel" ? "active" : ""}
          >
            Aço
          </Item>
        </li>
        <li>
          <Item
            id="by-ceramic"
            onClick={handleActiveItem}
            className={activeItem === "by-ceramic" ? "active" : ""}
          >
            Cerâmica
          </Item>
        </li>
      </ul>
    </Container>
  );
}

export default Filter;
