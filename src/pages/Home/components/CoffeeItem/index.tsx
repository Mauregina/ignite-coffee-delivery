import { FormEvent, useState } from 'react'
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
  onUpdateCart: (e: FormEvent, coffeeId: number, quantity: number) => void
}

export function CoffeeItem({ item, onUpdateCart }: CoffeeItemProps) {
  const [quantity, setQuantity] = useState(0)

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
      <CoffeeForm onSubmit={(e) => onUpdateCart(e, item.id, quantity)}>
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
