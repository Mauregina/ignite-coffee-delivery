import { FormEvent, useContext, useState } from 'react'
import {
  AddSubButton,
  CoffeeForm,
  CoffeeItemContainer,
  CoffeeItemHeader,
  CoffeeItemSection,
  InputForm,
  InputGroup,
  MinusIcon,
  PlusIcon,
  ShopButton,
  ShoppingCartIcon,
} from './styles'

import { MenuContext } from '../../../../App'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeItemProps {
  coffeeId: number
}

export function CoffeeItem({ coffeeId }: CoffeeItemProps) {
  const { updateCart, getQuantityByCartItem } = useContext(CartContext)
  const { getMenuItem } = useContext(MenuContext)
  const quantityItem = getQuantityByCartItem(coffeeId)
  const [quantity, setQuantity] = useState(quantityItem)

  function handleUpdateCart(event: FormEvent) {
    event?.preventDefault()

    updateCart(coffeeId, quantity)
  }

  function addQuantity() {
    setQuantity((state) => {
      return state < 9 ? state + 1 : state
    })
  }

  function removeQuantity() {
    setQuantity((state) => {
      return state > 0 ? state - 1 : state
    })
  }

  const menuItem = getMenuItem(coffeeId)

  return (
    <CoffeeItemContainer>
      {menuItem && (
        <>
          <CoffeeItemHeader>
            <img src={menuItem.image} alt="" />
            <div>
              {menuItem.type.map((type, index) => (
                <div key={index}>
                  <span>{type.toUpperCase()}</span>
                </div>
              ))}
            </div>
          </CoffeeItemHeader>
          <CoffeeItemSection>
            <strong>{menuItem.name}</strong>
            <span>{menuItem.description}</span>
          </CoffeeItemSection>
          <CoffeeForm onSubmit={(e) => handleUpdateCart(e)}>
            <p>
              <span>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(menuItem.value)}
              </span>
            </p>
            <InputGroup>
              <AddSubButton type="button" onClick={removeQuantity}>
                <MinusIcon size={14} weight="bold" />
              </AddSubButton>
              <InputForm type="number" disabled step={1} value={quantity} />
              <AddSubButton type="button" onClick={addQuantity}>
                <PlusIcon size={14} weight="bold" />
              </AddSubButton>
            </InputGroup>
            <ShopButton type="submit">
              <ShoppingCartIcon size={22} weight="fill" />
            </ShopButton>
          </CoffeeForm>
        </>
      )}
    </CoffeeItemContainer>
  )
}
