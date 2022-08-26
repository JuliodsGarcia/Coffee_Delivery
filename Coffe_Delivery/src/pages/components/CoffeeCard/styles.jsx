import styled from "styled-components";
import { TextTitle, RegularTitle } from "../../../components/typography/index";

export const CofeeCardContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 0;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  span {
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`;

export const Name = styled(TextTitle).attrs({
  title: "s",
  color: "subtitle",
})`
  margin-bottom: 0.5rem;
  font-weight: 700;
`;

export const Description = styled(RegularTitle).attrs({
  textregular: "s",
  color: "label",
})`
  margin-bottom: 2rem;
  font-weight: 500;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  p {
    margin-top: 0.65rem;
    margin: 0 auto;
    text-align: center;
    line-height: 0.75rem;
  }
`;

export const AddCardWrapper = styled.div`
  width: 7.5rem;

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors["brand-purple-dark"]};
    color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.colors["brand-purple"]};
    }
  }
`;
