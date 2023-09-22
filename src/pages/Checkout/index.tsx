import {
  CheckoutContainer,
  CoffeeImg,
  OrderInfoContainer,
  CoffeeSelectedContainer,
  ItemElement,
  OrderValueItem,
  Title,
  Detail,
  InputGroup,
  AddSubButton,
  PlusIcon,
  InputForm,
  MinusIcon,
  DetailAction,
  RemoveButton,
  TrashIcon,
  CoffeeSelectedCard,
  ConfirmButton,
  TotalGrid,
  TotalGridText,
  OtherInfoCard,
  AddressInfo,
  PayInfo,
  PayMessage,
  PayAction,
  CurrencyIcon,
  PayDescription,
  TextSmall,
  TitleText,
  PayButton,
  BankIcon,
  MoneyIcon,
} from './styles'

import Expresso from '../../assets/expresso.png'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderInfoContainer>
        <Title>Complete seu pedido</Title>
        <OtherInfoCard>
          <AddressInfo>AddressInfo</AddressInfo>
          <PayInfo>
            <PayMessage>
              <CurrencyIcon size={22}>icone</CurrencyIcon>
              <PayDescription>
                <TitleText>Pagamento</TitleText>
                <TextSmall>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </TextSmall>
              </PayDescription>
            </PayMessage>
            <PayAction>
              <PayButton>
                <BankIcon size={16} />
                CARTÃO DE CRÉDITO
              </PayButton>
              <PayButton>
                <BankIcon size={16} />
                CARTÃO DE DÉBITO
              </PayButton>
              <PayButton>
                <MoneyIcon size={16} />
                DINHEIRO
              </PayButton>
            </PayAction>
          </PayInfo>
        </OtherInfoCard>
      </OrderInfoContainer>
      <CoffeeSelectedContainer>
        <Title>Cafés selecionados</Title>
        <CoffeeSelectedCard>
          <OrderValueItem>
            <ItemElement>
              <CoffeeImg src={Expresso} alt="" />
              <Detail>
                <span>Expresso Tradicional</span>
                <DetailAction>
                  <InputGroup>
                    <AddSubButton type="button">
                      <MinusIcon size={14} weight="bold" />
                    </AddSubButton>
                    <InputForm type="number" placeholder="1" disabled />
                    <AddSubButton type="button">
                      <PlusIcon size={14} weight="bold" />
                    </AddSubButton>
                  </InputGroup>
                  <RemoveButton type="button">
                    <TrashIcon size={16} />
                    REMOVER
                  </RemoveButton>
                </DetailAction>
              </Detail>
            </ItemElement>
            <strong>R$ 9,90</strong>
          </OrderValueItem>
          <OrderValueItem>
            <ItemElement>
              <CoffeeImg src={Expresso} alt="" />
              <Detail>
                <span>Expresso Tradicional</span>
                <DetailAction>
                  <InputGroup>
                    <AddSubButton type="button">
                      <MinusIcon size={14} weight="bold" />
                    </AddSubButton>
                    <InputForm type="number" placeholder="1" disabled />
                    <AddSubButton type="button">
                      <PlusIcon size={14} weight="bold" />
                    </AddSubButton>
                  </InputGroup>
                  <RemoveButton type="button">
                    <TrashIcon size={16} />
                    REMOVER
                  </RemoveButton>
                </DetailAction>
              </Detail>
            </ItemElement>
            <strong>R$ 9,90</strong>
          </OrderValueItem>
          <OrderValueItem>
            <ItemElement>
              <CoffeeImg src={Expresso} alt="" />
              <Detail>
                <span>Expresso Tradicional</span>
                <DetailAction>
                  <InputGroup>
                    <AddSubButton type="button">
                      <MinusIcon size={14} weight="bold" />
                    </AddSubButton>
                    <InputForm type="number" placeholder="1" disabled />
                    <AddSubButton type="button">
                      <PlusIcon size={14} weight="bold" />
                    </AddSubButton>
                  </InputGroup>
                  <RemoveButton type="button">
                    <TrashIcon size={16} />
                    REMOVER
                  </RemoveButton>
                </DetailAction>
              </Detail>
            </ItemElement>
            <strong>R$ 9,90</strong>
          </OrderValueItem>
          <TotalGrid>
            <TotalGridText sizeSmall>Total de itens</TotalGridText>
            <TotalGridText alignRight>R$ 27,00</TotalGridText>
            <TotalGridText sizeSmall>Entrega</TotalGridText>
            <TotalGridText alignRight>R$ 2,70</TotalGridText>
            <TotalGridText bold>Total</TotalGridText>
            <TotalGridText alignRight bold>
              R$ 29,70
            </TotalGridText>
          </TotalGrid>
          <ConfirmButton type="button">CONFIRMAR PEDIDO</ConfirmButton>
        </CoffeeSelectedCard>
      </CoffeeSelectedContainer>
    </CheckoutContainer>
  )
}
