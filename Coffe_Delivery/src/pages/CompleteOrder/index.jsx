import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { useCart } from "../../hooks/useCart";
import { CompleteOrderContainer } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormProvider } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export function CompleteOrderPage() {
  const paymentMethod = {
    credit: "credit",
    debit: "debit",
    money: "money",
  };

  const schema = yup
    .object({
      cep: yup.string().min(6, "Informe o CEP"),
      street: yup
        .string()
        .min(10, "Informe o endereço")
        .required("Este Campo é obrigatório"),
      number: yup
        .string()
        .min(1, "Informe o número")
        .required("Este Campo é obrigatório"),
      complement: yup.string().min(1),
      bairro: yup
        .string()
        .min(5, "Informe o bairro")
        .required("Este Campo é obrigatório"),
      cidade: yup
        .string()
        .min(5, "Cidade é obrigatório")
        .required("Campo obrigatório"),
      UF: yup
        .string()
        .min(2, "Informe a Unidade Federativa")
        .required("UF é obrigatório"),
      paymentMethod: yup
        .mixed(paymentMethod, {
          errorMap: () => {
            return { message: "informe o método de pagamento" };
          },
        })
        .required("Informe o método de pagamento"),
    })
    .required();

  const confirmOrderForm = useForm({
    resolver: yupResolver(schema),
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  const { clearCart } = useCart();

  function onSubmit(data) {
    console.log(data);
    navigate("/orderConfirmed", {
      state: data,
    });
    clearCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer
        className="container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  );
}
