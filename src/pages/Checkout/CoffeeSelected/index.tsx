import {
  AddSubButton,
  CoffeeImg,
  Detail,
  DetailAction,
  InputForm,
  InputGroup,
  ItemElement,
  MinusIcon,
  OrderValueItem,
  PlusIcon,
  RemoveButton,
  TrashIcon,
} from './styles'

import Expresso from '../../../assets/expresso.png'
import { useContext } from 'react'
import { CartContext, MenuContext } from '../../../App'

interface CoffeeSelectedProps {
  coffeeId: number
}

export function CoffeeSelected({ coffeeId }: CoffeeSelectedProps) {
  const { getQuantityByCartItem, updateCart } = useContext(CartContext)
  const { getMenuItem } = useContext(MenuContext)

  const cartItemQuantity = getQuantityByCartItem(coffeeId)
  const menuItem = getMenuItem(coffeeId)
  const totalItemValue = (menuItem ? menuItem.value : 0) * cartItemQuantity
  const formattedTotalItemValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalItemValue)

  function addQuantity() {
    if (cartItemQuantity === 9) return
    const newQuantity = cartItemQuantity + 1
    updateCart(coffeeId, newQuantity)
  }

  function removeQuantity() {
    if (cartItemQuantity === 1) return
    const newQuantity = cartItemQuantity - 1
    updateCart(coffeeId, newQuantity)
  }

  function removeItem() {
    updateCart(coffeeId, 0)
  }

  return (
    <OrderValueItem>
      <ItemElement>
        <CoffeeImg src={Expresso} alt="" />
        <Detail>
          <span>{menuItem?.name}</span>
          <DetailAction>
            <InputGroup>
              <AddSubButton type="button" onClick={removeQuantity}>
                <MinusIcon size={14} weight="bold" />
              </AddSubButton>
              <InputForm type="number" disabled value={cartItemQuantity} />
              <AddSubButton type="button" onClick={addQuantity}>
                <PlusIcon size={14} weight="bold" />
              </AddSubButton>
            </InputGroup>
            <RemoveButton type="button" onClick={removeItem}>
              <TrashIcon size={16} />
              REMOVER
            </RemoveButton>
          </DetailAction>
        </Detail>
      </ItemElement>
      <strong>{formattedTotalItemValue}</strong>
    </OrderValueItem>
  )
}
