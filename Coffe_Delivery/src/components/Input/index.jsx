import { forwardRef } from "react";
import { RegularTitle } from "../typography";
import { InputStyleConatiner, InputWrapper } from "./styles";

export const Input = forwardRef(({ errors, ...Input }, ref) => {
  return (
    <InputWrapper className={Input.className}>
      <InputStyleConatiner {...Input} ref={ref} />
      {errors && <RegularTitle textregular="s">{errors}</RegularTitle>}
    </InputWrapper>
  );
});
