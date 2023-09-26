import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  CheckoutContainer,
  OrderInfoSection,
  CoffeeSelectedSection,
  Title,
  CoffeeSelectedCard,
  ConfirmButton,
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
  Form,
} from './styles'
import { CartContext } from '../../App'
import { CoffeeSelected } from './CoffeeSelected'
import { Total } from './Total'

export function Checkout() {
  const { register, handleSubmit, watch } = useForm()
  const { cart } = useContext(CartContext)

  const [paymentType, setPaymentType] = useState(0)

  const zip = watch('zip')
  const street = watch('street')
  const number = watch('number')
  // const complement = watch('complement')
  const neighborhood = watch('neighborhood')
  const city = watch('city')
  const state = watch('state')

  const isSubmitDisable =
    cart.cartItems.length === 0 ||
    !zip ||
    !street ||
    !number ||
    !neighborhood ||
    !city ||
    !state

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleConfirmOrder(data: any) {
    console.log('SUBMETER', data)
  }

  return (
    <CheckoutContainer>
      <Form onSubmit={handleSubmit(handleConfirmOrder)} action="">
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
                <Input
                  type="number"
                  id="zip"
                  placeholder="CEP"
                  size="12.5rem"
                  {...register('zip')}
                />
                <Input placeholder="Rua" {...register('street')} />
                <div>
                  <Input
                    placeholder="Número"
                    size="12.5rem"
                    {...register('number')}
                  />
                  <ComplementContainer>
                    <InputComplement
                      placeholder="Complemento"
                      {...register('complement')}
                    />
                    <span>Opcional</span>
                  </ComplementContainer>
                </div>
                <div>
                  <Input
                    placeholder="Bairro"
                    size="12.5rem"
                    {...register('neighborhood')}
                  />
                  <Input placeholder="Cidade" {...register('city')} />
                  <Input
                    placeholder="UF"
                    size="3.75rem"
                    maxLength={2}
                    {...register('state')}
                  />
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
                <PayButton
                  type="button"
                  onClick={() => setPaymentType(0)}
                  selected={paymentType === 0}
                >
                  <BankIcon size={16} />
                  CARTÃO DE CRÉDITO
                </PayButton>
                <PayButton
                  type="button"
                  onClick={() => setPaymentType(1)}
                  selected={paymentType === 1}
                >
                  <BankIcon size={16} />
                  CARTÃO DE DÉBITO
                </PayButton>
                <PayButton
                  type="button"
                  onClick={() => setPaymentType(2)}
                  selected={paymentType === 2}
                >
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
            <Total />
            <ConfirmButton type="submit" disabled={isSubmitDisable}>
              CONFIRMAR PEDIDO
            </ConfirmButton>
          </CoffeeSelectedCard>
        </CoffeeSelectedSection>
      </Form>
    </CheckoutContainer>
  )
}
