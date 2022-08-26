import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;

  > p {
    color: ${({ theme }) => theme.colors["base-error"]};
    padding: 2px;
  }
`;

export const InputStyleConatiner = styled.input`
  height: 2.65rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({ theme }) => theme.colors["base-input"]};
  transition: 0.4s;

  &:focus {
    border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }

  color: ${({ theme }) => theme.colors["base-text"]};
  font-size: 0.75rem;
  padding: 0 0.75rem;

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-title"]};
  }
`;
