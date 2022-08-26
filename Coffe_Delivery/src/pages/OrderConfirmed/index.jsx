import { OrderConfirmedConatiner, OrderDetailsContainer } from "./styles";
import { RegularTitle, TextTitle } from "../../components/typography";
import confirmedOrderIllustration from "../../../src/assets/confirmed-order.svg";

import { InfoWidthIcons } from "../../components/InfoWidthIcons";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { paymentMethods } from "../CompleteOrder/components/CompleteOrderForm/PaymentMethodOption";
import { useEffect } from "react";

export function OrderConfirmedPage() {
  const { colors } = useTheme();

  const { state } = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  //Função para verificar objetos do form via inspect browser
  console.log(state);

  return (
    <OrderConfirmedConatiner className="container">
      <div>
        <TextTitle title="l">Uhu! Pedido confirmado</TextTitle>
        <RegularTitle size="l">
          Agora é só aguardar que logo o café chegará até você
        </RegularTitle>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWidthIcons
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularTitle>
                Entrega em{" "}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.cidade} - {state.UF}
              </RegularTitle>
            }
          />

          <InfoWidthIcons
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularTitle>
                Previsão de Entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularTitle>
            }
          />

          <InfoWidthIcons
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularTitle>
                Pagamento na Entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularTitle>
            }
          />
        </OrderDetailsContainer>

        <img src={confirmedOrderIllustration} />
      </section>
    </OrderConfirmedConatiner>
  );
}
