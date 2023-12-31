import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.125rem;
`

export const TextSmall = styled.div`
  font-size: 0.875rem;
`

export const TitleText = styled.div`
  color: ${(props) => props.theme['base-subtitle']};
`

export const BaseButton = styled.button`
  border-radius: 6px;
  border: 0;

  text-transform: uppercase;

  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-button']};

  &:hover {
    color: ${(props) => props.theme['base-subtitle']};
    background-color: ${(props) => props.theme['base-hover']};
  }
`

export const CheckoutContainer = styled.main`
  padding-bottom: 2rem;
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;

  padding-bottom: 2rem;
`

export const OrderInfoSection = styled.section`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`

export const OtherInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const OtherInfoCard = styled.div`
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const MessageHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const CurrencyIcon = styled(CurrencyDollar)`
  color: ${(props) => props.theme['brand-purple']};
`

export const MapPinLineIcon = styled(MapPinLine)`
  color: ${(props) => props.theme['brand-yellow-dark']};
`

export const MessageDescription = styled.div`
  display: flex;
  flex-direction: column;
`

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;

  color: ${(props) => props.theme['error-msg']};
  font-size: 0.875rem;
`

export const PayAction = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
`

interface PayButtonProps {
  selected: boolean
}

export const PayButton = styled(BaseButton)<PayButtonProps>`
  flex: 1;
  padding: 1rem;
  text-align: left;
  margin-bottom: 2px;
  margin-right: 2px;

  display: flex;
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  background-color: ${(props) =>
    props.selected && props.theme['brand-purple-light']};

  border: ${(props) =>
    props.selected && 'solid 1px' + props.theme['brand-purple']};

  margin-bottom: ${(props) => props.selected && 0};
  margin-right: ${(props) => props.selected && 0};

  &:hover {
    background-color: ${(props) =>
      props.selected && props.theme['brand-purple-light']};
  }
`

export const CreditCardIcon = styled(CreditCard)`
  color: ${(props) => props.theme['brand-purple']};
`

export const BankIcon = styled(Bank)`
  color: ${(props) => props.theme['brand-purple']};
`

export const MoneyIcon = styled(Money)`
  color: ${(props) => props.theme['brand-purple']};
`

export const CoffeeSelectedSection = styled.section`
  width: 28rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.9375rem;
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

  &:disabled {
    cursor: not-allowed;
  }
`
