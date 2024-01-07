"use client";

import { Container, Item } from "./styles";
import { poppins } from "@/lib/fonts";
import { useFilter } from "@/hooks/useFilter";

function Filter() {
  const { material, setMaterial } = useFilter();

  const handleActiveItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const itemId = e.currentTarget.id;

    if (itemId === "all") return setMaterial("");

    setMaterial(e.currentTarget.id);
  };

  return (
    <Container>
      <ul>
        <li>
          <Item
            id="all"
            onClick={handleActiveItem}
            className={!material ? "active" : ""}
          >
            <span className={poppins.className}>Todos</span>
          </Item>
        </li>
        <li>
          <Item
            id="gold"
            onClick={handleActiveItem}
            className={material === "gold" ? "active" : ""}
          >
            <span className={poppins.className}>Ouro</span>
          </Item>
        </li>
        <li>
          <Item
            id="steel"
            onClick={handleActiveItem}
            className={material === "steel" ? "active" : ""}
          >
            <span className={poppins.className}>Aço</span>
          </Item>
        </li>
        <li>
          <Item
            id="ceramic"
            onClick={handleActiveItem}
            className={material === "ceramic" ? "active" : ""}
          >
            <span className={poppins.className}>Cerâmica</span>
          </Item>
        </li>
      </ul>
    </Container>
  );
}

export default Filter;
