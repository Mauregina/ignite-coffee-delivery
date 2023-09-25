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
  setCartItems: React.Dispatch<React.SetStateAction<Cart[]>>
}

export const CartContext = createContext({} as CartContextType)

export function App() {
  const [cartItems, setCartItems] = useState<Cart[]>([])

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContext.Provider value={{ cart: cartItems, setCartItems }}>
          <Router />
        </CartContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
