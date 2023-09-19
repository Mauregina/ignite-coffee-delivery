import Logo from '../../assets/logo.svg'
import {
  HeaderContainer,
  ActionContainer,
  CartContainer,
  ShoppingCartIcon,
  LocationContainer,
  MapIcon,
} from './styles'
import { Link } from 'react-router-dom'

export function Header() {
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
        </CartContainer>
      </ActionContainer>
    </HeaderContainer>
  )
}
