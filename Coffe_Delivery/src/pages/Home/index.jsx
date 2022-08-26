import { Intro } from "../components/intro";
import { OurCoffee } from "../components/OurCofees/index";
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffee />
    </HomeContainer>
  );
}
