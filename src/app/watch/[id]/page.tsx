import ButtonBack from "../../components/ButtonBack";
import { FetchWatch } from "../../components/FetchWatch";
import SeeMore from "../../components/SeeMore";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <ButtonBack />
      <FetchWatch id={params.id} />
    </>
  );
}
