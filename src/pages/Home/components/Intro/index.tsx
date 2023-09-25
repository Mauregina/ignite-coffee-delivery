import {
  IntroSection,
  AdvertisingContainer,
  TitleContainer,
  TitleIntro,
  Subtitle,
  AdvertisingItems,
  Item,
  IconContainer,
  ShoppingCartIcon,
  PackageIcon,
  TimerIcon,
  CoffeeIcon,
  ImgContainer,
} from './styles'

import CoffeeIntro from '../../../../assets/intro.png'

export function Intro() {
  return (
    <IntroSection>
      <AdvertisingContainer>
        <TitleContainer>
          <TitleIntro>
            Encontre o café perfeito para qualquer hora do dia
          </TitleIntro>
          <Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Subtitle>
        </TitleContainer>
        <AdvertisingItems>
          <Item>
            <IconContainer variant="cart">
              <ShoppingCartIcon size={16} weight="fill" />
            </IconContainer>
            <div>Compra simples e segura</div>
          </Item>
          <Item>
            <IconContainer variant="package">
              <PackageIcon size={16} weight="fill" />
            </IconContainer>
            <div>Embalagem mantém o café intacto</div>
          </Item>
          <Item>
            <IconContainer variant="timer">
              <TimerIcon size={16} weight="fill" />
            </IconContainer>
            <div>Entrega rápida e rastreada</div>
          </Item>
          <Item>
            <IconContainer variant="coffee">
              <CoffeeIcon size={16} weight="fill" />
            </IconContainer>
            <div>O café chega fresquinho até você</div>
          </Item>
        </AdvertisingItems>
      </AdvertisingContainer>
      <ImgContainer src={CoffeeIntro} />
    </IntroSection>
  )
}
