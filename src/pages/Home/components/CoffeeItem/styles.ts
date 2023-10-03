import styled from 'styled-components'

import { Plus, Minus, ShoppingCart } from 'phosphor-react'

export const CoffeeItemContainer = styled.div`
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};
  min-width: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CoffeeItemHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  margin-top: -1.25rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
  }

  span {
    background-color: ${(props) => props.theme['brand-yellow-light']};
    color: ${(props) => props.theme['brand-yellow-dark']};
    font-size: 0.625rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }
`

export const CoffeeItemSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    display: block;
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
  }

  span {
    display: block;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    padding: 0 1.25rem;
  }
`

export const CoffeeForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem 0;

  p {
    font-size: 0.875rem;
    margin-right: 2rem;
  }

  span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
  }
`

export const InputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 6px;
  border: 0;

  background-color: ${(props) => props.theme['base-button']};

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const InputForm = styled.input`
  width: 1.25rem;
  margin: 0 0.25rem;
  border: 0;
  background-color: transparent;
  text-align: center;
`

export const ShopButton = styled.button`
  background-color: ${(props) => props.theme['brand-purple-dark']};
  border-radius: 6px;
  border: 0;
  padding: 0.5rem;
  margin-left: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme['brand-purple']};
  }
`

export const AddSubButton = styled.button`
  background-color: transparent;
  border: 0;
`

export const PlusIcon = styled(Plus)`
  color: ${(props) => props.theme['brand-purple']};

  &:hover {
    color: ${(props) => props.theme['brand-purple-dark']};
  }
`

export const MinusIcon = styled(Minus)`
  color: ${(props) => props.theme['brand-purple']};

  &:hover {
    color: ${(props) => props.theme['brand-purple-dark']};
  }
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  color: ${(props) => props.theme['base-background']};
`
