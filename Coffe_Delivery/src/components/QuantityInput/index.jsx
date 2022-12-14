import { IconWrapper, QuantityInputContainer } from "./styles";
import { Minus, Plus } from "phosphor-react";

export function QuantityInput({
  onIncrease,
  onDecrease,
  quantity,
  size = "medium",
}) {
  return (
    <QuantityInputContainer size={size}>
      <IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </IconWrapper>
      <input type="number" readOnly value={quantity} />

      <IconWrapper onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  );
}
