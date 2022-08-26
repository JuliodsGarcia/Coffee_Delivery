import {
  AddCardWrapper,
  CardFooter,
  CofeeCardContainer,
  Description,
  Name,
  Tags,
} from "./styles";
import { RegularTitle, TextTitle } from "../../../components/typography";
import { QuantityInput } from "../../../components/QuantityInput";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../utils/formatMoney";
import { useCart } from "../../../hooks/useCart";
import { useState } from "react";

export function CoffeeCard({ coffee }) {
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  const { addCoffeeToCart } = useCart();

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  //Função para formatar valores, preços...
  const formattedPrice = formatMoney(coffee.price);

  return (
    <CofeeCardContainer>
      <img src={`/coffees/${coffee.photo}`}></img>

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularTitle regular="s">R$</RegularTitle>
          <p>
            <TextTitle title="m" color="text" as="strong">
              {formattedPrice}
            </TextTitle>
          </p>
        </div>

        <AddCardWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCardWrapper>
      </CardFooter>
    </CofeeCardContainer>
  );
}
