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
  const { totalQuantityCartItems, isCartOpen, cart } = useContext(CartContext)
  const { address } = cart

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <ActionContainer>
        <LocationContainer>
          <MapIcon size={22} weight="fill" />
          {address && <span>{`${address.city}, ${address.state}`}</span>}
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
