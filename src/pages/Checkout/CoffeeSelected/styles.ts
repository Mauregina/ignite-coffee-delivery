import { Minus, Plus, Trash } from 'phosphor-react'
import styled from 'styled-components'
import { BaseButton } from '../styles'

export const OrderValueItem = styled.div`
  border-bottom: solid 1px ${(props) => props.theme['base-button']};
  padding: 0.5rem 0.25rem 2rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ItemElement = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const CoffeeImg = styled.img`
  height: 4rem;
`

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const DetailAction = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
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

export const RemoveButton = styled(BaseButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
`

export const TrashIcon = styled(Trash)`
  color: ${(props) => props.theme['brand-purple']};
`
