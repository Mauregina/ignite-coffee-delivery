import {
  ImgContainer,
  MessageSection,
  Title,
  Subtitle,
  SuccessContainer,
  ResumeOrder,
  ResumeOrderItem,
  IconContainer,
  MapPinIcon,
  ResumeOrderItemText,
  TimerIcon,
  CurrencyDollarIcon,
} from './styles'

import SuccessImg from '../../assets/success.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { paymentTypeString } from '../../interfaces/Payment'

export function Success() {
  const { cart } = useContext(CartContext)
  const { street, number, city, state, neighborhood } = cart.address!

  return (
    <SuccessContainer>
      <MessageSection>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>
          Agora é só aguardar que logo o café chegará até você
        </Subtitle>
        <ResumeOrder>
          <ResumeOrderItem>
            <IconContainer variant="pin">
              <MapPinIcon weight="fill" />
            </IconContainer>
            <ResumeOrderItemText>
              <div>
                Entrega em <strong>{`${street}, ${number}`}</strong>
              </div>
              <span>{`${neighborhood} - ${city}, ${state}`}</span>
            </ResumeOrderItemText>
          </ResumeOrderItem>
          <ResumeOrderItem>
            <IconContainer variant="timer">
              <TimerIcon weight="fill" />
            </IconContainer>
            <ResumeOrderItemText>
              <div>Previsão de entrega</div>
              <strong>20 min - 30 min</strong>
            </ResumeOrderItemText>
          </ResumeOrderItem>
          <ResumeOrderItem>
            <IconContainer variant="currency">
              <CurrencyDollarIcon weight="fill" />
            </IconContainer>
            <ResumeOrderItemText>
              <div>Pagamento na entrega</div>
              <strong>{paymentTypeString[cart.payment!]}</strong>
            </ResumeOrderItemText>
          </ResumeOrderItem>
        </ResumeOrder>
      </MessageSection>
      <ImgContainer src={SuccessImg} />
    </SuccessContainer>
  )
}
