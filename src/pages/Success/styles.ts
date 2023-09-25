import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  gap: 6.375rem;

  padding-bottom: 2rem;
`

export const MessageSection = styled.div`
  padding-top: 4.75rem;

  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme['brand-yellow-dark']};

  margin-bottom: 0.25rem;
`

export const Subtitle = styled.div`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};

  margin-bottom: 2.5rem;
`

export const ResumeOrder = styled.div`
  border: solid 1px;
  border-image: linear-gradient(to right, #dbac2c, #8047f8) 1;
  border-radius: 6px 36px;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ResumeOrderItem = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`

export type IconVariant = 'pin' | 'timer' | 'currency'

const iconVariants = {
  pin: 'brand-purple',
  timer: 'brand-yellow',
  currency: 'brand-yellow-dark',
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

export const MapPinIcon = styled(MapPin)`
  color: ${(props) => props.theme['base-background']};
`

export const TimerIcon = styled(Timer)`
  color: ${(props) => props.theme['base-background']};
`

export const CurrencyDollarIcon = styled(CurrencyDollar)`
  color: ${(props) => props.theme['base-background']};
`

export const ResumeOrderItemText = styled.div`
  display: flex;
  flex-direction: column;
`

export const ImgContainer = styled.img`
  padding-top: 11rem;
`
