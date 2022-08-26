import {
  ActionsContainer,
  CoffeesCartCardContainer,
  RemoveButton,
} from "./styles";
import { RegularTitle } from "../../../components/typography";
import { QuantityInput } from "../../../components/QuantityInput";
import { Trash } from "phosphor-react";
import { formatMoney } from "../../../utils/formatMoney";
import { useCart } from "../../../hooks/useCart";

export function CoffeesCartCard({ coffee }) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = formatMoney(coffeeTotal);

  return (
    <CoffeesCartCardContainer>
      <div>
        <img src={`/coffees/${coffee.photo}`} />
        <div>
          <RegularTitle color="subtitle">{coffee.name}</RegularTitle>
          <ActionsContainer>
            <QuantityInput
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeesCartCardContainer>
  );
}
