import { ImgContainer, MessageSection, SuccessContainer } from './styles'

import SuccessImg from '../../assets/success.svg'

export function Success() {
  return (
    <SuccessContainer>
      <MessageSection>Coluna 1</MessageSection>
      <ImgContainer src={SuccessImg} />
    </SuccessContainer>
  )
}
