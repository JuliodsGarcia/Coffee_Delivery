import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";
import { useFormContext } from "react-hook-form";

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState;

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        errors={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        type="street"
        className="street"
        {...register("street")}
        errors={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register("number")}
        errors={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
      />
      <Input
        placeholder="Bairro"
        errors={errors.bairro?.message}
        {...register("bairro")}
      />
      <Input
        placeholder="Cidade"
        errors={errors.cidade?.message}
        {...register("cidade")}
      />
      <Input placeholder="UF" errors={errors.UF?.message} {...register("UF")} />
    </AddressFormContainer>
  );
}
