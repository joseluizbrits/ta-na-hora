import { Container } from "./styles";
import { poppins } from "@/lib/fonts";
import { useMemo, useState, useRef, RefObject } from "react";

import SearchDropdown from "../SearchDropdown";
import MagnifyingGlass from "@/icons/MagnifyingGlass";
import { useWatch } from "@/hooks/useWatch";
import { IWatch } from "@/interfaces/watch";
import { searchWatches } from "@/utils/searchWatches";
import useMedia from "@/hooks/useMedia";

function Search() {
  const [watchesSearch, setWatchesSearch] = useState<IWatch[] | []>([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const mobile = useMedia("(max-width: 992px)");
  const { getWatches } = useWatch();

  useMemo(() => {
    if (getWatches() && query) {
      const filteredWatches = searchWatches(getWatches(), query);

      setWatchesSearch(filteredWatches);
    }
  }, [getWatches, query]);

  const handleInputMobile = () => {
    if (!mobile) return;

    const search = inputRef.current;
    search?.classList.toggle("active");

    setWatchesSearch([]);
    setQuery("");
  };

  return (
    <Container>
      <input
        type="search"
        placeholder="Encontre o seu relógio"
        className={poppins.className}
        ref={inputRef}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button aria-label="abrir barra de pesquisa" onClick={handleInputMobile}>
        <MagnifyingGlass />
      </button>
      {watchesSearch && query && (
        <SearchDropdown
          watches={watchesSearch}
          setWatches={setWatchesSearch}
          setQuery={setQuery}
        />
      )}
    </Container>
  );
}

export default Search;
