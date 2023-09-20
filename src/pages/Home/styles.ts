import styled from 'styled-components'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
`

export const MessageContainer = styled.div`
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

export const Title = styled.div`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 3rem;
`

export const Subtitle = styled.div`
  font-size: 1.25rem;
`

export const ItemsContainer = styled.div`
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
