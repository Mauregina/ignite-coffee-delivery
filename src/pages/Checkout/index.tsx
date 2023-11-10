import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
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
  Form,
  ErrorContainer,
} from './styles'

import { CoffeeSelected } from './components/CoffeeSelected'
import { Total } from './components/Total'
import { AddressForm } from './components/AddressForm'
import { CartContext } from '../../contexts/CartContext'
import { PaymentType, paymentTypeString } from '../../interfaces/Payment'

const checkoutFormValidationSchema = zod.object({
  zip: zod.string().max(8, 'CEP inválido'),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string(),
  neighborhood: zod.string().min(1),
  city: zod.string().min(1),
  state: zod
    .string()
    .transform((state) => state.toUpperCase())
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

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      zip: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
    },
  })
  const { handleSubmit, watch, formState } = checkoutForm

  const { cart, closeCart } = useContext(CartContext)
  const navigate = useNavigate()

  const [paymentType, setPaymentType] = useState<PaymentType>('credit')

  const zip = watch('zip')
  const street = watch('street')
  const number = watch('number')
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

  function handleConfirmOrder(data: CheckoutFormData) {
    const newData = { ...data, state: state.toUpperCase() }
    closeCart(paymentType, newData)
    navigate('/success')
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
              <FormProvider {...checkoutForm}>
                <AddressForm />
              </FormProvider>
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
                  onClick={() => setPaymentType('credit')}
                  selected={paymentType === 'credit'}
                >
                  <BankIcon size={16} />
                  {paymentTypeString.credit}
                </PayButton>
                <PayButton
                  type="button"
                  onClick={() => setPaymentType('debit')}
                  selected={paymentType === 'debit'}
                >
                  <BankIcon size={16} />
                  {paymentTypeString.debit}
                </PayButton>
                <PayButton
                  type="button"
                  onClick={() => setPaymentType('money')}
                  selected={paymentType === 'money'}
                >
                  <MoneyIcon size={16} />
                  {paymentTypeString.money}
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
