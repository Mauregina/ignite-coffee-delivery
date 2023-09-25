import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { createContext, useState } from 'react'

interface Cart {
  coffeeId: number
  quantity: number
}

interface CartContextType {
  cart: Cart[]
}

export const CartContext = createContext({} as CartContextType)

export function App() {
  const [cartItems] = useState<Cart[]>([
    { coffeeId: 1, quantity: 1 },
    { coffeeId: 2, quantity: 1 },
  ])

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContext.Provider value={{ cart: cartItems }}>
          <Router />
        </CartContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
