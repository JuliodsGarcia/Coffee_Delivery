import {
  HeaderContainer,
  HeaderButtonsContainer,
  HeaderButton,
  SvgCart,
} from "./styles";

import CoffeLogoImg from "../../assets/Coffee-Delivery-Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={CoffeLogoImg} />
        </NavLink>

        <HeaderButtonsContainer>
          <HeaderButton>
            <MapPin className="ButtonCustom" size={20} weight="fill" />
            São Paulo, SP
          </HeaderButton>

          <NavLink to="/completeOrder">
            <SvgCart>
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </SvgCart>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
