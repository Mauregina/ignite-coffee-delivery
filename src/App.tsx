import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { createContext, useState } from 'react'

import Americano from '../src/assets/coffee/americano.png'
import Arabe from '../src/assets/coffee/arabe.png'
import Cappuccino from '../src/assets/coffee/cappuccino.png'
import Chocolate from '../src/assets/coffee/chocolate.png'
import Leite from '../src/assets/coffee/leite.png'
import Cubano from '../src/assets/coffee/cubano.png'
import Cremoso from '../src/assets/coffee/cremoso.png'
import Expresso from '../src/assets/coffee/expresso.png'
import Gelado from '../src/assets/coffee/gelado.png'
import Havaiano from '../src/assets/coffee/havaiano.png'
import Irlandes from '../src/assets/coffee/irlandes.png'
import Latte from '../src/assets/coffee/latte.png'
import Macchiato from '../src/assets/coffee/macchiato.png'
import Mochaccino from '../src/assets/coffee/mochaccino.png'

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
  image: string
}

interface MenuContextType {
  menu: CoffeeMenu[]
  getMenuItem: (coffeeId: number) => CoffeeMenu | undefined
}

export const MenuContext = createContext({} as MenuContextType)

export function App() {
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

  const coffeeMenuList: CoffeeMenu[] = [
    {
      id: 1,
      type: ['tradicional'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      value: 5.9,
      image: Expresso,
    },
    {
      id: 2,
      type: ['tradicional'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      value: 7.9,
      image: Americano,
    },
    {
      id: 3,
      type: ['tradicional'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      value: 8.9,
      image: Cremoso,
    },
    {
      id: 4,
      type: ['tradicional', 'gelado'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      value: 8.9,
      image: Gelado,
    },
    {
      id: 5,
      type: ['tradicional', 'com leite'],
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      value: 5.9,
      image: Leite,
    },
    {
      id: 6,
      type: ['tradicional', 'com leite'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      value: 14.9,
      image: Latte,
    },
    {
      id: 7,
      type: ['tradicional', 'com leite'],
      name: 'Cappuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      value: 15.9,
      image: Cappuccino,
    },
    {
      id: 8,
      type: ['tradicional', 'gelado'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      value: 14.9,
      image: Macchiato,
    },
    {
      id: 9,
      type: ['tradicional', 'com leite'],
      name: 'Mochaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      value: 16.9,
      image: Mochaccino,
    },
    {
      id: 10,
      type: ['especial', 'com leite'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      value: 11.9,
      image: Chocolate,
    },
    {
      id: 11,
      type: ['especial', 'alcoólico', 'gelado'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      value: 23.9,
      image: Cubano,
    },
    {
      id: 12,
      type: ['especial'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      value: 20.9,
      image: Havaiano,
    },
    {
      id: 13,
      type: ['especial'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      value: 20.9,
      image: Arabe,
    },
    {
      id: 14,
      type: ['especial', 'alcoólico'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      value: 26.9,
      image: Irlandes,
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
