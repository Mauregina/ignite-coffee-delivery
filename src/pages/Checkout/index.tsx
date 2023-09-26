import { useContext } from 'react'
import { CartContext } from '../../App'
import { CoffeeSelected } from './CoffeeSelected'
import {
  CheckoutContainer,
  OrderInfoSection,
  CoffeeSelectedSection,
  Title,
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
  ComplementContainer,
  InputComplement,
} from './styles'

export function Checkout() {
  const { cart } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <OrderInfoSection>
        <Title>Complete seu pedido</Title>
        <OtherInfoContent>
          <OtherInfoCard>
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
              <Input placeholder="CEP" size="12.5rem" />
              <Input placeholder="Rua" />
              <div>
                <Input placeholder="Número" size="12.5rem" />
                <ComplementContainer>
                  <InputComplement placeholder="Complemento" />
                  <span>Opcional</span>
                </ComplementContainer>
              </div>
              <div>
                <Input placeholder="Bairro" size="12.5rem" />
                <Input placeholder="Cidade" />
                <Input placeholder="UF" size="3.75rem" maxLength={2} />
              </div>
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
              <PayButton isSelected>
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
      <CoffeeSelectedSection>
        <Title>Cafés selecionados</Title>
        <CoffeeSelectedCard>
          {cart.cartItems.map((item) => (
            <CoffeeSelected key={item.coffeeId} coffeeId={item.coffeeId} />
          ))}
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
      </CoffeeSelectedSection>
    </CheckoutContainer>
  )
}
