import { IWatch } from "@/app/interfaces/watch";

function WatchDescription({ watch }: { watch: IWatch }) {
  return (
    <div>
      <h1>
        {watch.brand} {watch.model}
      </h1>
      <span></span>
    </div>
  );
}

export default WatchDescription;
