import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { CartContextProvider } from './contexts/CartContext'
import { MenuContextProvider } from './contexts/MenuContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MenuContextProvider>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </MenuContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
