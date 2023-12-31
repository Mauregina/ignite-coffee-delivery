import styled from 'styled-components'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-bottom: 2rem;
`

export const IntroSection = styled.header`
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
