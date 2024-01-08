import { Container } from "./styles";

function Quantity({ amount }: { amount: number }) {
  return (
    <Container>
      <button id="decrease">-</button>
      {amount}
      <button id="increase">+</button>
    </Container>
  );
}

export default Quantity;
