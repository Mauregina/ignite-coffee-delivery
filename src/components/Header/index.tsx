import { Link } from 'react-router-dom'
import {
  HeaderContainer,
  ActionContainer,
  CartLink,
  ShoppingCartIcon,
  LocationContainer,
  MapIcon,
  CartCount,
} from './styles'

import Logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../App'

export function Header() {
  const { getCartTotalQuantity } = useContext(CartContext)

  const totalQuantity = getCartTotalQuantity()
  const isCartEmpty = totalQuantity === 0

  console.log('HEADER')

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
        <CartLink to="/checkout" disabled={isCartEmpty}>
          <ShoppingCartIcon size={22} weight="fill" />
          {!isCartEmpty && <CartCount>{totalQuantity}</CartCount>}
        </CartLink>
      </ActionContainer>
    </HeaderContainer>
  )
}
