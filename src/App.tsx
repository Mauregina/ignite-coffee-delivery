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
  totalQuantityCartItems: number
  isCartOpen: boolean
  getQuantityByCartItem: (coffeeId: number) => number
  updateCart: (coffeeId: number, quantity: number) => void
  closeCart: () => void
}

export const CartContext = createContext({} as CartContextType)

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

interface MenuContextType {
  menu: CoffeeMenu[]
  getMenuItem: (coffeeId: number) => CoffeeMenu | undefined
}

export const MenuContext = createContext({} as MenuContextType)

export function App() {
  const [cart, setCart] = useState<Cart>({ cartItems: [] })

  const isCartWithItems = cart.cartItems.length > 0
  const isCartWithPayment = 'payment' in cart
  const isCartOpen = isCartWithItems && !isCartWithPayment

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

  function closeCart() {
    const updatedCart: Cart = {
      ...cart,
      payment: 'ok',
    }
    setCart(updatedCart)
  }

  const coffeeMenuList: CoffeeMenu[] = [
    {
      id: 1,
      type: ['tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      value: 5.9,
    },
    {
      id: 2,
      type: ['tradicional'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 7.9,
    },
    {
      id: 3,
      type: ['tradicional'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      value: 8.9,
    },
    {
      id: 4,
      type: ['tradicional', 'gelado'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      value: 8.9,
    },
    {
      id: 5,
      type: ['tradicional', 'com leite'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      value: 5.9,
    },
    {
      id: 6,
      type: ['tradicional', 'com leite'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      value: 14.9,
    },
    {
      id: 7,
      type: ['tradicional', 'com leite'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      value: 15.9,
    },
    {
      id: 8,
      type: ['tradicional', 'gelado'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      value: 14.9,
    },
    {
      id: 9,
      type: ['tradicional', 'com leite'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      value: 16.9,
    },
    {
      id: 10,
      type: ['especial', 'com leite'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      value: 11.9,
    },
    {
      id: 11,
      type: ['especial', 'alcoólico', 'gelado'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      value: 23.9,
    },
    {
      id: 12,
      type: ['especial'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      value: 20.9,
    },
    {
      id: 13,
      type: ['especial'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      value: 20.9,
    },
    {
      id: 14,
      type: ['especial', 'alcoólico'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      value: 26.9,
    },
  ]

  function getMenuItem(coffeeId: number) {
    const menuItem = coffeeMenuList.find((i) => i.id === coffeeId)
    return menuItem
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MenuContext.Provider value={{ menu: coffeeMenuList, getMenuItem }}>
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
            <Router />
          </CartContext.Provider>
        </MenuContext.Provider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
