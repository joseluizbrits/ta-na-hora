import { getWatches } from "@/utils/fetchApi";

import Watches from "../Watches";
import Slider from "../Slider";

export async function FetchWatches({ brand }: { brand?: string }) {
  const watches = await getWatches();

  if (watches)
    return (
      <>
        {!brand ? (
          <Watches watches={watches} />
        ) : (
          <Slider watches={watches} brand={brand} />
        )}
      </>
    );
  else
    return (
      <div style={{ color: "var(--gray)", letterSpacing: "0.05rem" }}>
        Nenhum relógio foi encontrado...
      </div>
    );
}
