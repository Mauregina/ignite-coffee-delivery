import { useContext } from 'react'
import { TextItem, TextTotal, TotalGrid } from './styles'
import { MenuContext } from '../../../../App'
import { CartContext } from '../../../../contexts/CartContext'

export function Total() {
  const { cart } = useContext(CartContext)
  const { getMenuItem } = useContext(MenuContext)

  const totalValueItens = getTotalValueItens()
  const delivery = 5
  const totalValue = totalValueItens + delivery

  const formattedTotalValueItens = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalValueItens)

  const formattedTotalValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalValue)

  const formattedDelivery = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(delivery)

  function getTotalValueItens() {
    let total = 0
    cart.cartItems.forEach((i) => {
      const menuItem = getMenuItem(i.coffeeId)
      const valueItem = menuItem ? menuItem.value : 0
      const totalValueItem = valueItem * i.quantity
      total = total + totalValueItem
    })
    return total
  }
  return (
    <TotalGrid>
      <TextItem>Total de itens</TextItem>
      <TextItem>{formattedTotalValueItens}</TextItem>
      <TextItem>Entrega</TextItem>
      <TextItem>{formattedDelivery}</TextItem>
      <TextTotal>Total</TextTotal>
      <TextTotal>{formattedTotalValue}</TextTotal>
    </TotalGrid>
  )
}
