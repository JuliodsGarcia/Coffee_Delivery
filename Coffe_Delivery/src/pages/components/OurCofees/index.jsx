import { TextTitle } from "../../../components/typography";
import { coffees } from "../../../data/Cofees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffesContainer } from "./styles";

export function OurCoffee() {
  return (
    <OurCoffesContainer className="container">
      <TextTitle title="l" color="subtitle">
        Nossos cafés
      </TextTitle>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffesContainer>
  );
}
