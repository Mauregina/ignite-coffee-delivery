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

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </div>
              <span>Farrapos - Porto Alegre, RS</span>
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
              <strong>Cartão de Crédito</strong>
            </ResumeOrderItemText>
          </ResumeOrderItem>
        </ResumeOrder>
      </MessageSection>
      <ImgContainer src={SuccessImg} />
    </SuccessContainer>
  )
}
