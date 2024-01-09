"use client";

import { Card, Container } from "./styles";
import { IWatch } from "@/interfaces/watch";
import ArrowUp from "@/icons/ArrowUp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface ISearchDropdown {
  watches: IWatch[];
  setWatches: Dispatch<SetStateAction<[] | IWatch[]>>;
  setQuery: Dispatch<SetStateAction<string>>;
}

function SearchDropdown({ watches, setWatches, setQuery }: ISearchDropdown) {
  let watchesDisplayed = watches.slice(0, 3);
  const router = useRouter();

  const handlePush = (id: string) => {
    router.push(`/relogios/${id}`);
    setWatches([]);
    setQuery("");
  };

  const handleClick = () => {
    setWatches([]);
    setQuery("");
  };

  return (
    <Container aria-label="Fechar a lista da pesquisa" onClick={handleClick}>
      <Card>
        {watchesDisplayed.map(({ _id, model, brand, desc, image }) => (
          <a key={_id} onClick={() => handlePush(_id)}>
            <li>
              <Image
                src={image}
                width={100}
                height={80}
                sizes="10vw"
                priority
                alt={`Relógio ${brand} ${model}`}
              />
              <div>
                <span>
                  {brand} {model}
                </span>
                <span>{desc}</span>
              </div>
              <ArrowUp />
            </li>
          </a>
        ))}
      </Card>
    </Container>
  );
}

export default SearchDropdown;
