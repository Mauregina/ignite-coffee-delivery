import { ReactNode, createContext, useState } from 'react'

interface CartItem {
  coffeeId: number
  quantity: number
}

interface Address {
  zip: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

export type PaymentType = 'credit' | 'debit' | 'money'

export const paymentTypeString = {
  credit: 'Cartão de Crédito',
  debit: 'Cartão de Dédito',
  money: 'Dinheiro',
}

interface Cart {
  cartItems: CartItem[]
  payment?: PaymentType
  address?: Address
}

interface CartContextType {
  cart: Cart
  totalQuantityCartItems: number
  isCartOpen: boolean
  getQuantityByCartItem: (coffeeId: number) => number
  updateCart: (coffeeId: number, quantity: number) => void
  closeCart: (payment: PaymentType, address: Address) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<Cart>({ cartItems: [] })

  const isCartWithItems = cart.cartItems.length > 0
  const isCartOpen = isCartWithItems

  const totalQuantityCartItems =
    cart?.cartItems.reduce((total, item) => total + item.quantity, 0) || 0

  function getQuantityByCartItem(coffeeId: number) {
    const cartItem = cart.cartItems.find((i) => i.coffeeId === coffeeId)
    return cartItem ? cartItem.quantity : 0
  }

  function updateCart(coffeeId: number, quantity: number) {
    const coffeeItemInCartAlready =
      cart.cartItems.findIndex((i) => i.coffeeId === coffeeId) !== -1

    if (quantity === 0 && !coffeeItemInCartAlready) return

    let updatedCart: Cart

    if (coffeeItemInCartAlready) {
      if (quantity === 0) {
        updatedCart = {
          ...cart,
          cartItems: cart.cartItems.filter((i) => i.coffeeId !== coffeeId),
        }
      } else {
        updatedCart = {
          ...cart,
          cartItems: cart.cartItems.map((i) =>
            i.coffeeId === coffeeId ? { ...i, quantity } : i,
          ),
        }
      }
      setCart(updatedCart)
      return
    }

    updatedCart = {
      ...cart,
      cartItems: [
        ...cart.cartItems,
        {
          coffeeId,
          quantity,
        },
      ],
    }
    setCart(updatedCart)
  }

  function closeCart(payment: PaymentType, address: Address) {
    const updatedCart: Cart = {
      ...cart,
      cartItems: [],
      payment,
      address,
    }
    setCart(updatedCart)
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantityCartItems,
        isCartOpen,
        updateCart,
        closeCart,
        getQuantityByCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
