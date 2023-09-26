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

import Expresso from '../../../../assets/expresso.png'
import { CartContext } from '../../../../App'

type CoffeeType =
  | 'tradicional'
  | 'gelado'
  | 'com leite'
  | 'especial'
  | 'alcoólico'

interface CoffeeMenu {
  id: number
  type: CoffeeType[]
  name: string
  description: string
  value: number
}

interface CoffeeItemProps {
  item: CoffeeMenu
}

export function CoffeeItem({ item }: CoffeeItemProps) {
  const { updateCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(0)

  function handleUpdateCart(
    event: FormEvent,
    coffeeId: number,
    quantity: number,
  ) {
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

  return (
    <CoffeeItemContainer>
      <CoffeeItemHeader>
        <img src={Expresso} alt="" />
        <div>
          {item.type.map((type, index) => (
            <div key={index}>
              <span>{type.toUpperCase()}</span>
            </div>
          ))}
        </div>
      </CoffeeItemHeader>
      <CoffeeItemSection>
        <strong>{item.name}</strong>
        <span>{item.description}</span>
      </CoffeeItemSection>
      <CoffeeForm onSubmit={(e) => handleUpdateCart(e, item.id, quantity)}>
        <p>
          R$ <span>{item.value}</span>
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
    </CoffeeItemContainer>
  )
}
