import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

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
  ErrorContainer,
} from './styles'
import { CartContext } from '../../App'
import { CoffeeSelected } from './CoffeeSelected'
import { Total } from './Total'

const checkoutFormValidationSchema = zod.object({
  zip: zod.string().max(8, 'CEP inválido'),
  street: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  neighborhood: zod.string(),
  city: zod.string(),
  state: zod
    .string()
    .refine(
      (value) =>
        [
          'AC',
          'AL',
          'AM',
          'AP',
          'BA',
          'CE',
          'ES',
          'GO',
          'MA',
          'MS',
          'MT',
          'MG',
          'PA',
          'PB',
          'PE',
          'PI',
          'PR',
          'RJ',
          'RN',
          'RO',
          'RR',
          'RS',
          'SC',
          'SE',
          'SP',
          'TO',
        ].includes(value),
      {
        message: 'UF inválida',
      },
    ),
})

export function Checkout() {
  const { register, handleSubmit, watch, formState } = useForm({
    resolver: zodResolver(checkoutFormValidationSchema),
  })
  const { cart } = useContext(CartContext)

  const [paymentType, setPaymentType] = useState(0)

  const zip = watch('zip')
  const street = watch('street')
  const number = watch('number')
  const complement = watch('complement')
  const neighborhood = watch('neighborhood')
  const city = watch('city')
  const state = watch('state')

  const isComplementEmpty = complement === undefined || !complement

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

  const errors = formState.errors
  const errorsMessage = Object.values(errors).map((error) => error?.message)
  const hasErrorsMessage = errorsMessage.length > 0

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
                    id="number"
                    placeholder="Número"
                    size="12.5rem"
                    {...register('number')}
                  />
                  <ComplementContainer>
                    <InputComplement
                      id="complement"
                      placeholder="Complemento"
                      {...register('complement')}
                    />
                    {isComplementEmpty && <span>Opcional</span>}
                  </ComplementContainer>
                </div>
                <div>
                  <Input
                    id="neighborhood"
                    placeholder="Bairro"
                    size="12.5rem"
                    {...register('neighborhood')}
                  />
                  <Input id="city" placeholder="Cidade" {...register('city')} />
                  <Input
                    id="state"
                    placeholder="UF"
                    size="3.75rem"
                    maxLength={2}
                    {...register('state')}
                  />
                </div>
              </AddressInfo>
              {hasErrorsMessage && (
                <ErrorContainer>
                  {errorsMessage.map((error, index) => (
                    <span key={index}>{String(error)}</span>
                  ))}
                </ErrorContainer>
              )}
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
