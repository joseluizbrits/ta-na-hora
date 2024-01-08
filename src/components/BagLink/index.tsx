"use client";

import { Wrapp } from "./styles";
import { useBag } from "@/hooks/useBag";

import Link from "next/link";
import BagIcon from "../../icons/BagIcon";

function BagLink() {
  const { getBag } = useBag();

  const amount = getBag().length;

  return (
    <Wrapp>
      <Link href={"/sacola"}>
        <BagIcon />
        {amount > 0 && (
          <div>
            <span>{amount}</span>
          </div>
        )}
      </Link>
    </Wrapp>
  );
}

export default BagLink;
