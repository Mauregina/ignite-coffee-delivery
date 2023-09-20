import {
  HomeContainer,
  IntroContainer,
  MessageContainer,
  TitleContainer,
  TitleIntro,
  Subtitle,
  ItemsContainer,
  Item,
  IconContainer,
  ShoppingCartIcon,
  PackageIcon,
  TimerIcon,
  CoffeeIcon,
  ImgContainer,
  CoffeeContainer,
  CoffeeListContainer,
  TitleCoffeeList,
  CoffeeItemContainer,
  InputForm,
  ShopButton,
  CoffeeForm,
} from './styles'
import Intro from '../../assets/intro.png'
import Expresso from '../../assets/expresso.png'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <MessageContainer>
          <TitleContainer>
            <TitleIntro>
              Encontre o café perfeito para qualquer hora do dia
            </TitleIntro>
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
      <CoffeeContainer>
        <TitleCoffeeList>Nossos cafés</TitleCoffeeList>
        <CoffeeListContainer>
          <CoffeeItemContainer>
            <header>
              <img src={Expresso} alt="" />
              <span>TRADICIONAL</span>
            </header>
            <section>
              <strong>Expresso tradicional</strong>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
            </section>
            <CoffeeForm action="">
              <p>
                R$ <span>9,90</span>
              </p>
              <InputForm type="number" />
              <ShopButton type="submit">
                <ShoppingCartIcon size={22} weight="fill" />
              </ShopButton>
            </CoffeeForm>
          </CoffeeItemContainer>
        </CoffeeListContainer>
      </CoffeeContainer>
    </HomeContainer>
  )
}
