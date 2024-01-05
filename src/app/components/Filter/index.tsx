"use client";

import { useFilter } from "@/app/hooks/useFilter";
import { Container, Item } from "./styles";
import { poppins } from "@/app/lib/fonts";

function Filter() {
  const { filter, setFilter } = useFilter();

  const handleActiveItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFilter(e.currentTarget.id);
  };

  return (
    <Container>
      <ul>
        <li>
          <Item
            id="all"
            onClick={handleActiveItem}
            className={filter === "all" ? "active" : ""}
          >
            <span className={poppins.className}>Todos</span>
          </Item>
        </li>
        <li>
          <Item
            id="gold"
            onClick={handleActiveItem}
            className={filter === "gold" ? "active" : ""}
          >
            <span className={poppins.className}>Ouro</span>
          </Item>
        </li>
        <li>
          <Item
            id="steel"
            onClick={handleActiveItem}
            className={filter === "steel" ? "active" : ""}
          >
            <span className={poppins.className}>Aço</span>
          </Item>
        </li>
        <li>
          <Item
            id="ceramic"
            onClick={handleActiveItem}
            className={filter === "ceramic" ? "active" : ""}
          >
            <span className={poppins.className}>Cerâmica</span>
          </Item>
        </li>
      </ul>
    </Container>
  );
}

export default Filter;
