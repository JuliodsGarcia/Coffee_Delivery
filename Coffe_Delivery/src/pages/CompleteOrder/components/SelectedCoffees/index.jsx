import { DetailsContainer, SelectedCoffeesContainer } from "./styles";
import { TextTitle } from "../../../../components/typography";
import { CoffeesCartCard } from "../../../components/CoffeesCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { useCart } from "../../../../hooks/useCart";

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <TextTitle title="xs" color="subtitle">
        Cafés selecionados
      </TextTitle>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeesCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
