import { PaymentType } from './Payment'

interface CartItem {
  coffeeId: number
  quantity: number
}

export interface Address {
  zip: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

export interface Cart {
  cartItems: CartItem[]
  payment?: PaymentType
  address?: Address
}
