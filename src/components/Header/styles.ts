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

export const CartContainer = styled(Link)`
  display: flex;
  justify-items: center;
  align-items: center;

  border-radius: 6px;
  padding: 0.5rem;

  background-color: ${(props) => props.theme['brand-yellow-light']};
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  color: ${(props) => props.theme['brand-yellow-dark']};
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
