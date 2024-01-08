import ButtonBack from "@/components/ButtonBack";
import BagContainer from "@/components/BagContainer";
import BagItem from "@/components/BagItem";
import BagOrder from "@/components/BagOrder";

function Bag() {
  return (
    <>
      <ButtonBack />
      <BagContainer>
        <BagItem />
        <BagOrder />
      </BagContainer>
    </>
  );
}

export default Bag;
