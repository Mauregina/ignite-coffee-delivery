import styled from 'styled-components'

export const AddressInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }
`

interface InputProps {
  size?: string
}

export const Input = styled.input<InputProps>`
  border: 0;
  border-radius: 4px;
  padding: 0.75rem;
  margin-bottom: 2px;

  width: ${(props) => props.size && props.size};
  flex: ${(props) => !props.size && 1};

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-label']};
  font-size: 0.875rem;

  &:focus {
    border: solid 1px ${(props) => props.theme['brand-yellow']};
    margin-bottom: 0;
  }

  &:not(:placeholder-shown) {
    color: ${(props) => props.theme['base-text']};
  }
`

export const ComplementContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.75rem;
  margin-bottom: 2px;
  border-radius: 4px;
  background-color: ${(props) => props.theme['base-button']};

  span {
    width: 2.875rem;
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-label']};
  }

  &:focus-within {
    border: solid 1px ${(props) => props.theme['brand-yellow']};
    margin-bottom: 0;
  }
`

export const InputComplement = styled.input`
  flex: 1;
  border: 0;
  background-color: transparent;
  color: ${(props) => props.theme['base-label']};
  font-size: 0.875rem;

  &:not(:placeholder-shown) {
    color: ${(props) => props.theme['base-text']};
  }
`
