import { ConfirmationSectionContainer } from "./styles";
import { RegularTitle } from "../../../../components/typography";
import { Button } from "../../../../components/Button";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../utils/formatMoney";

const DELIVERY_PRICE = 3.5;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;
  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedCartTotal = formatMoney(cartTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularTitle textregular="s">Total dos itens</RegularTitle>
        <RegularTitle>R$ {formattedItemsTotal}</RegularTitle>
      </div>
      <div>
        <RegularTitle textregular="s">Entrega</RegularTitle>
        <RegularTitle>R$ {formattedDeliveryPrice}</RegularTitle>
      </div>
      <div>
        <RegularTitle className="TextTotal" color="subtitle" textregular="l">
          Total
        </RegularTitle>
        <RegularTitle
          className="Text"
          weight="700"
          color="subtitle"
          textregular="l"
        >
          R$ {formattedCartTotal}
        </RegularTitle>
      </div>
      <Button
        text="Confirmar Pedido"
        disabled={cartQuantity <= 0}
        type="submit"
      />
    </ConfirmationSectionContainer>
  );
}
