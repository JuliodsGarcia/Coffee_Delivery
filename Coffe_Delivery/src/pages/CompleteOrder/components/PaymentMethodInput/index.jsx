import { forwardRef } from "react";
import { PaymentMethodContainer, ContentContainer } from "./styles";

export const PaymentMethodInput = forwardRef(
  ({ id, icon, label, ...props }, ref) => {
    return (
      <PaymentMethodContainer>
        <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </PaymentMethodContainer>
    );
  }
);
