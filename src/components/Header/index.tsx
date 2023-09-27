import { Link } from 'react-router-dom'
import {
  HeaderContainer,
  ActionContainer,
  CartLink,
  ShoppingCartIcon,
  LocationContainer,
  MapIcon,
  CartCount,
  CartContainer,
} from './styles'

import Logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../App'

export function Header() {
  const { totalQuantityCartItems, isCartOpen } = useContext(CartContext)

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
        <CartContainer disabled={!isCartOpen}>
          {isCartOpen ? (
            <CartLink to="/checkout">
              <ShoppingCartIcon size={22} weight="fill" />
              <CartCount>{totalQuantityCartItems}</CartCount>
            </CartLink>
          ) : (
            <ShoppingCartIcon size={22} weight="fill" />
          )}
        </CartContainer>
      </ActionContainer>
    </HeaderContainer>
  )
}
