import {
  HomeContainer,
  IntroContainer,
  MessageContainer,
  TitleContainer,
  Title,
  Subtitle,
  ItemsContainer,
  Item,
  IconContainer,
  ShoppingCartIcon,
  PackageIcon,
  TimerIcon,
  CoffeeIcon,
  ImgContainer,
} from './styles'
import Intro from '../../assets/intro.png'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <MessageContainer>
          <TitleContainer>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Subtitle>
          </TitleContainer>
          <ItemsContainer>
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
          </ItemsContainer>
        </MessageContainer>
        <ImgContainer src={Intro} />
      </IntroContainer>
      <div>Coffee List</div>
    </HomeContainer>
  )
}
