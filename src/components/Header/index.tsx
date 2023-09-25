import { Link } from 'react-router-dom'
import {
  HeaderContainer,
  ActionContainer,
  CartContainer,
  ShoppingCartIcon,
  LocationContainer,
  MapIcon,
  CartCount,
} from './styles'

import Logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../App'

export function Header() {
  const { cart } = useContext(CartContext)

  console.log('NA HEADER ', cart)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <ActionContainer>
        <LocationContainer>
          <MapIcon size={22} weight="fill" />
          <span>Manaus, AM</span>
        </LocationContainer>
        <CartContainer to="/checkout">
          <ShoppingCartIcon size={22} weight="fill" />
          <CartCount>3</CartCount>
        </CartContainer>
      </ActionContainer>
    </HeaderContainer>
  )
}
