import {
  HomeContainer,
  IntroContainer,
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
  CoffeeContainer,
  CoffeeListContainer,
  TitleCoffeeList,
  CoffeeItemContainer,
  InputForm,
  ShopButton,
  CoffeeForm,
  CoffeeItemHeader,
  CoffeeItemSection,
  InputGroup,
  AddSubButton,
  PlusIcon,
  MinusIcon,
} from './styles'
import Intro from '../../assets/intro.png'
import Expresso from '../../assets/expresso.png'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <AdvertisingContainer>
          <TitleContainer>
            <TitleIntro>
              Encontre o café perfeito para qualquer hora do dia
            </TitleIntro>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
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
        <ImgContainer src={Intro} />
      </IntroContainer>
      <CoffeeContainer>
        <TitleCoffeeList>Nossos cafés</TitleCoffeeList>
        <CoffeeListContainer>
          <CoffeeItemContainer>
            <CoffeeItemHeader>
              <img src={Expresso} alt="" />
              <div>
                <span>TRADICIONAL</span>
                <span>GELADO</span>
                <span>COM LEITE</span>
              </div>
            </CoffeeItemHeader>
            <CoffeeItemSection>
              <strong>Expresso tradicional</strong>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
            </CoffeeItemSection>
            <CoffeeForm action="">
              <p>
                R$ <span>9,90</span>
              </p>
              <InputGroup>
                <AddSubButton type="button">
                  <PlusIcon size={14} weight="bold" />
                </AddSubButton>
                <InputForm type="number" placeholder="1" disabled />
                <AddSubButton type="button">
                  <MinusIcon size={14} weight="bold" />
                </AddSubButton>
              </InputGroup>
              <ShopButton type="submit">
                <ShoppingCartIcon size={22} weight="fill" />
              </ShopButton>
            </CoffeeForm>
          </CoffeeItemContainer>
          <CoffeeItemContainer>
            <CoffeeItemHeader>
              <img src={Expresso} alt="" />
              <div>
                <span>TRADICIONAL</span>
              </div>
            </CoffeeItemHeader>
            <CoffeeItemSection>
              <strong>Expresso tradicional</strong>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
            </CoffeeItemSection>
            <CoffeeForm action="">
              <p>
                R$ <span>9,90</span>
              </p>
              <InputGroup>
                <AddSubButton type="button">
                  <PlusIcon size={14} weight="bold" />
                </AddSubButton>
                <InputForm type="number" placeholder="1" disabled />
                <AddSubButton type="button">
                  <MinusIcon size={14} weight="bold" />
                </AddSubButton>
              </InputGroup>
              <ShopButton type="submit">
                <ShoppingCartIcon size={22} weight="fill" />
              </ShopButton>
            </CoffeeForm>
          </CoffeeItemContainer>
          <CoffeeItemContainer>
            <CoffeeItemHeader>
              <img src={Expresso} alt="" />
              <div>
                <span>TRADICIONAL</span>
                <span>COM LEITE</span>
              </div>
            </CoffeeItemHeader>
            <CoffeeItemSection>
              <strong>Expresso tradicional</strong>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
            </CoffeeItemSection>
            <CoffeeForm action="">
              <p>
                R$ <span>9,90</span>
              </p>
              <InputGroup>
                <AddSubButton type="button">
                  <PlusIcon size={14} weight="bold" />
                </AddSubButton>
                <InputForm type="number" placeholder="1" disabled />
                <AddSubButton type="button">
                  <MinusIcon size={14} weight="bold" />
                </AddSubButton>
              </InputGroup>
              <ShopButton type="submit">
                <ShoppingCartIcon size={22} weight="fill" />
              </ShopButton>
            </CoffeeForm>
          </CoffeeItemContainer>
          <CoffeeItemContainer>
            <CoffeeItemHeader>
              <img src={Expresso} alt="" />
              <div>
                <span>TRADICIONAL</span>
                <span>GELADO</span>
                <span>COM LEITE</span>
              </div>
            </CoffeeItemHeader>
            <CoffeeItemSection>
              <strong>Expresso tradicional</strong>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
            </CoffeeItemSection>
            <CoffeeForm action="">
              <p>
                R$ <span>9,90</span>
              </p>
              <InputGroup>
                <AddSubButton type="button">
                  <PlusIcon size={14} weight="bold" />
                </AddSubButton>
                <InputForm type="number" placeholder="1" disabled />
                <AddSubButton type="button">
                  <MinusIcon size={14} weight="bold" />
                </AddSubButton>
              </InputGroup>
              <ShopButton type="submit">
                <ShoppingCartIcon size={22} weight="fill" />
              </ShopButton>
            </CoffeeForm>
          </CoffeeItemContainer>
          <CoffeeItemContainer>
            <CoffeeItemHeader>
              <img src={Expresso} alt="" />
              <div>
                <span>TRADICIONAL</span>
              </div>
            </CoffeeItemHeader>
            <CoffeeItemSection>
              <strong>Expresso tradicional</strong>
              <span>
                O tradicional café feito com água quente e grãos moídos
              </span>
            </CoffeeItemSection>
            <CoffeeForm action="">
              <p>
                R$ <span>9,90</span>
              </p>
              <InputGroup>
                <AddSubButton type="button">
                  <PlusIcon size={14} weight="bold" />
                </AddSubButton>
                <InputForm type="number" placeholder="1" disabled />
                <AddSubButton type="button">
                  <MinusIcon size={14} weight="bold" />
                </AddSubButton>
              </InputGroup>
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
