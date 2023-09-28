import { ReactNode, createContext, useReducer } from 'react'

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
  const [cart, dispatch] = useReducer(
    (state: Cart, action: any) => {
      switch (action.type) {
        case 'ADD_ITEM':
          return {
            ...state,
            cartItems: [
              ...state.cartItems,
              {
                coffeeId: action.payload.coffeeId,
                quantity: action.payload.quantity,
              },
            ],
          }
        case 'UPDATE_ITEM':
          return {
            ...state,
            cartItems: state.cartItems.map((i) =>
              i.coffeeId === action.payload.coffeeId
                ? { ...i, quantity: action.payload.quantity }
                : i,
            ),
          }
        case 'DELETE_ITEM':
          return {
            ...state,
            cartItems: state.cartItems.filter(
              (i) => i.coffeeId !== action.payload.coffeeId,
            ),
          }
        case 'CLOSE_CART':
          return {
            ...state,
            cartItems: [],
            payment: action.payload.payment,
            address: action.payload.address,
          }
        default:
          return state
      }
    },
    { cartItems: [] },
  )

  const isCartWithItems = cart.cartItems.length > 0
  const isCartOpen = isCartWithItems

  const totalQuantityCartItems =
    cart?.cartItems.reduce((total, item) => total + item.quantity, 0) || 0

  function getQuantityByCartItem(coffeeId: number) {
    const cartItem = cart.cartItems.find((i) => i.coffeeId === coffeeId)
    return cartItem ? cartItem.quantity : 0
  }

  function updateCart(coffeeId: number, quantity: number) {
    const isNewItem =
      cart.cartItems.findIndex((i) => i.coffeeId === coffeeId) === -1
    const isQuantityInformedZero = quantity === 0

    if (isQuantityInformedZero && isNewItem) return

    if (isNewItem) {
      dispatch({
        type: 'ADD_ITEM',
        payload: { coffeeId, quantity },
      })
      return
    }

    if (isQuantityInformedZero) {
      dispatch({
        type: 'DELETE_ITEM',
        payload: { coffeeId },
      })
    } else {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: { coffeeId, quantity },
      })
    }
  }

  function closeCart(payment: PaymentType, address: Address) {
    dispatch({
      type: 'CLOSE_CART',
      payload: { payment, address },
    })
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
