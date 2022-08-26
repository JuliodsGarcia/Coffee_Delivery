import styled from "styled-components";

export const TextTitle = styled.h1`
  font-size: ${({ theme, title }) => theme.Titlesize.title[`${title}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "title"}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 1rem;
`;

export const RegularTitle = styled.p`
  font-size: ${({ theme, textregular }) =>
    theme.Titlesize.textregular[`${textregular}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? "subtitle"}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: 400;
  line-height: 130%;
  margin-top: 10px;
`;
