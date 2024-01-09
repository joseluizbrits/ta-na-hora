import { Container } from "./styles";
import { poppins } from "@/lib/fonts";
import { useMemo, useState, FocusEvent } from "react";

import SearchDropdown from "../SearchDropdown";
import MagnifyingGlass from "@/icons/MagnifyingGlass";
import { useWatch } from "@/hooks/useWatch";
import { IWatch } from "@/interfaces/watch";
import { searchWatches } from "@/utils/searchWatches";

function Search() {
  const [watchesSearch, setWatchesSearch] = useState<IWatch[] | []>([]);
  const [query, setQuery] = useState("");
  const { getWatches } = useWatch();

  useMemo(() => {
    if (getWatches() && query) {
      const filteredWatches = searchWatches(getWatches(), query);

      setWatchesSearch(filteredWatches);
    }
  }, [getWatches, query]);

  return (
    <Container>
      <input
        type="search"
        placeholder="Encontre o seu relógio"
        className={poppins.className}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <MagnifyingGlass />
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
