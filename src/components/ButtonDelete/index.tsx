import { removeItemStorageBag } from "@/utils/localBagStorage";
import { Wrapp } from "./styles";
import { useBag } from "@/hooks/useBag";

type IButtonDelete = React.PropsWithChildren & {
  watchId: string;
};

function ButtonDelete({ children, watchId }: IButtonDelete) {
  const { removeItem } = useBag();

  const handleRemoveItem = () => {
    removeItem(watchId);
  };

  return <Wrapp onClick={handleRemoveItem}>{children}</Wrapp>;
}

export default ButtonDelete;
