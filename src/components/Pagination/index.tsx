import { Container, Item } from "./styles";
import { IWatch } from "@/interfaces/watch";
import { poppins } from "@/lib/fonts";
import { useFilter } from "@/hooks/useFilter";

function Pagination({ pages }: { pages: Array<IWatch[]> }) {
  const { pageActive, setPageActive } = useFilter();

  const handleActiveItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    const itemId = e.currentTarget.id;
    setPageActive(e.currentTarget.id);

    window.scrollTo(0, 0);
  };

  if (pages.length <= 1) return null;

  return (
    <Container>
      <ul>
        {pages.map((_, index) => (
          <li key={`page-${index + 1}`}>
            <Item
              id={`page-${index + 1}`}
              onClick={handleActiveItem}
              className={`page-${index + 1}` === pageActive ? "active" : ""}
            >
              <span className={poppins.className}>{index + 1}</span>
            </Item>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Pagination;
