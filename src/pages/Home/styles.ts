import styled from 'styled-components'

import {
  ShoppingCart,
  Package,
  Timer,
  Coffee,
  Plus,
  Minus,
} from 'phosphor-react'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 2rem;
`

export const IntroSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3.5rem;
`

export const AdvertisingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding-top: 5.875rem;
`

const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
`

export const TitleIntro = styled(Title)`
  font-size: 3rem;
`

export const TitleCoffeeList = styled(Title)`
  font-size: 2rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const Subtitle = styled.div`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const AdvertisingItems = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 1.25rem;
  column-gap: 2.625rem;

  padding-top: 4.125rem;
`

export const Item = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
`
export type IconVariant = 'cart' | 'package' | 'timer' | 'coffee'

const iconVariants = {
  cart: 'brand-yellow-dark',
  package: 'base-text',
  timer: 'brand-yellow',
  coffee: 'brand-purple',
}

interface IconProps {
  variant: IconVariant
}

export const IconContainer = styled.div<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  ${(props) => {
    return `
      background-color: ${props.theme[iconVariants[props.variant]]};
    `
  }}
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  color: ${(props) => props.theme['base-background']};
`

export const PackageIcon = styled(Package)`
  color: ${(props) => props.theme['base-background']};
`

export const TimerIcon = styled(Timer)`
  color: ${(props) => props.theme['base-background']};
`

export const CoffeeIcon = styled(Coffee)`
  color: ${(props) => props.theme['base-background']};
`

export const ImgContainer = styled.img`
  padding: 5.75rem 0;
`

export const CoffeeSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  padding-top: 2rem;
`

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2.5rem;
  column-gap: 2rem;
`

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
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
  }

  span {
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
