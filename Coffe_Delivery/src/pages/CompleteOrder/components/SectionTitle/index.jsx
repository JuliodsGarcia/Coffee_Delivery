import { RegularTitle } from "../../../../components/typography";
import { SectionTitleConatiner } from "./styles";

export function SectionTitle({ title, subtitle, icon }) {
  return (
    <SectionTitleConatiner>
      {icon}
      <div>
        <RegularTitle textregular="l" color="subtitle">
          {title}
        </RegularTitle>
        <RegularTitle textregular="m">{subtitle}</RegularTitle>
      </div>
    </SectionTitleConatiner>
  );
}
