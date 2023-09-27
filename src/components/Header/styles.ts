import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0rem;
`

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface CartLinkProps {
  disabled: boolean
}

export const CartLink = styled(Link)<CartLinkProps>`
  position: relative;

  display: flex;
  justify-items: center;
  align-items: center;

  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${(props) => props.theme['brand-yellow-light']};

  cursor: ${(props) => props.disabled && 'not-allowed'};
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  color: ${(props) => props.theme['brand-yellow-dark']};
`

export const CartCount = styled.span`
  width: 1.25rem;
  height: 1.25rem;

  position: absolute;

  top: -25%;
  right: -25%;
  background-color: ${(props) => props.theme['brand-yellow-dark']};
  color: ${(props) => props.theme['base-white']};
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LocationContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;

  border-radius: 6px;
  padding: 0.5rem;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['brand-purple-light']};

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['brand-purple']};
  }
`

export const MapIcon = styled(MapPin)`
  color: ${(props) => props.theme['brand-purple']};
`
