import { InfoWidthIconContainer, IconContainer } from "./styles";

export function InfoWidthIcons({ icon, text, iconBg }) {
  return (
    <InfoWidthIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === "string" ? <p>{text}</p> : text}
    </InfoWidthIconContainer>
  );
}
