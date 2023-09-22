import { Minus, Plus, Trash } from 'phosphor-react'
import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: center;
  gap: 2rem;

  padding-bottom: 2rem;
`

export const OrderInfoContainer = styled.section`
  width: 40rem;
`

export const CoffeeSelectedContainer = styled.section`
  width: 28rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.9375rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.125rem;
`

export const CoffeeSelectedCard = styled.div`
  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
`

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

export const RemoveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  border-radius: 6px;
  border: 0;

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-button']};

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const TrashIcon = styled(Trash)`
  color: ${(props) => props.theme['brand-purple']};
`

export const TotalGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 0.75rem;

  align-items: center;
`
interface TotalGridTextProps {
  alignRight?: boolean
  sizeSmall?: boolean
  bold?: boolean
}

export const TotalGridText = styled.span<TotalGridTextProps>`
  text-align: ${(props) => (props.alignRight ? 'end' : 'start')};
  font-size: ${(props) => props.sizeSmall && '0.875rem'};

  font-size: ${(props) => props.bold && '1.25rem'};
  font-weight: ${(props) => props.bold && 700};
  color: ${(props) => props.bold && props.theme['base-subtitle']};
`

export const ConfirmButton = styled.button`
  border-radius: 6px;
  border: 0;
  padding: 0.75rem 0.5rem;
  font-weight: 700;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-white']};
  background-color: ${(props) => props.theme['brand-yellow']};

  &:hover {
    background-color: ${(props) => props.theme['brand-yellow-dark']};
  }
`
