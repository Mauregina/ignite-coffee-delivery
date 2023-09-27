import {
  HomeContainer,
  CoffeeSection,
  CoffeeListContainer,
  TitleCoffeeList,
} from './styles'

import { Intro } from './components/Intro'
import { CoffeeItem } from './components/CoffeeItem'
import { useContext } from 'react'
import { MenuContext } from '../../App'

export function Home() {
  const { menu } = useContext(MenuContext)

  return (
    <HomeContainer>
      <Intro />
      <CoffeeSection>
        <TitleCoffeeList>Nossos cafés</TitleCoffeeList>
        <CoffeeListContainer>
          {menu.map((item) => (
            <CoffeeItem key={item.id} coffeeId={item.id} />
          ))}
        </CoffeeListContainer>
      </CoffeeSection>
    </HomeContainer>
  )
}
