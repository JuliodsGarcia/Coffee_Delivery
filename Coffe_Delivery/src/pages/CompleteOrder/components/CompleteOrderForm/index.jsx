import { CompleteOrderFormConatiner, FormSectionConatiner } from "./styles";
import { MapPinLine, CurrencyDollar } from "phosphor-react";

import { TextTitle } from "../../../../components/typography";
import { SectionTitle } from "../SectionTitle";
import { useTheme } from "styled-components";
import { AddressForm } from "./AdressForm";
import { PaymentMethodOption } from "./PaymentMethodOption";

export function CompleteOrderForm() {
  const { colors } = useTheme();

  return (
    <CompleteOrderFormConatiner>
      <TextTitle title="xs" color="subtitle">
        Complete seu pedido
      </TextTitle>

      <FormSectionConatiner>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />}
        />

        <AddressForm />
      </FormSectionConatiner>

      <FormSectionConatiner>
        <SectionTitle
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
          icon={
            <CurrencyDollar
              color={colors["brand-purple"]}
              size={22}
              className="Dollar"
            />
          }
        />
        <PaymentMethodOption />
      </FormSectionConatiner>
    </CompleteOrderFormConatiner>
  );
}
