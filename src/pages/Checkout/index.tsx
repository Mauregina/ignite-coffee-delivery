import {
  CheckoutContainer,
  CoffeeImg,
  OrderInfoSection,
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
  OtherInfoContent,
  OtherInfoCard,
  MessageHeader,
  PayAction,
  CurrencyIcon,
  MessageDescription,
  TextSmall,
  TitleText,
  PayButton,
  BankIcon,
  MoneyIcon,
  MapPinLineIcon,
  AddressInfo,
  Input,
} from './styles'

import Expresso from '../../assets/expresso.png'

export function Checkout() {
  return (
    <CheckoutContainer>
      <OrderInfoSection>
        <Title>Complete seu pedido</Title>
        <OtherInfoContent>
          <OtherInfoCard>
            {' '}
            <MessageHeader>
              <MapPinLineIcon size={22} />
              <MessageDescription>
                <TitleText>Endereço de Entrega</TitleText>
                <TextSmall>
                  Informe o endereço onde deseja receber seu pedido
                </TextSmall>
              </MessageDescription>
            </MessageHeader>
            <AddressInfo>
              <Input placeholder="CEP" />
              <Input placeholder="Rua" />
              <div>OUTRO</div>
              <div>OUTRO</div>
            </AddressInfo>
          </OtherInfoCard>
          <OtherInfoCard>
            <MessageHeader>
              <CurrencyIcon size={22} />
              <MessageDescription>
                <TitleText>Pagamento</TitleText>
                <TextSmall>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </TextSmall>
              </MessageDescription>
            </MessageHeader>
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
          </OtherInfoCard>
        </OtherInfoContent>
      </OrderInfoSection>
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
