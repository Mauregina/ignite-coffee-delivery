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
import { CartContext } from '../../../App'

interface CoffeeSelectedProps {
  coffeeId: number
}

export function CoffeeSelected({ coffeeId }: CoffeeSelectedProps) {
  const { getCartItemQuantity, updateCart } = useContext(CartContext)
  const cartItemQuantity = getCartItemQuantity(coffeeId)

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

  console.log('SELECTED', cartItemQuantity)

  return (
    <OrderValueItem>
      <ItemElement>
        <CoffeeImg src={Expresso} alt="" />
        <Detail>
          <span>Expresso Tradicional</span>
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
      <strong>R$ 9,90</strong>
    </OrderValueItem>
  )
}
