import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { createContext, useState } from 'react'

interface CartItem {
  coffeeId: number
  quantity: number
}

interface Cart {
  cartItems: CartItem[]
  payment?: string
  street?: string
}

interface CartContextType {
  cart: Cart
  getCartItemQuantity: (coffeeId: number) => number
  updateCart: (coffeeId: number, quantity: number) => void
}

export const CartContext = createContext({} as CartContextType)

export function App() {
  const [cart, setCart] = useState<Cart>({ cartItems: [] })

  function getCartItemQuantity(coffeeId: number) {
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

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContext.Provider value={{ cart, updateCart, getCartItemQuantity }}>
          <Router />
        </CartContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
