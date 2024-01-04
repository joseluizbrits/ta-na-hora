import ButtonBack from "../../components/ButtonBack";
import { FetchWatch } from "../../components/FetchWatch";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <ButtonBack />
      <FetchWatch id={params.id} />
    </>
  );
}
