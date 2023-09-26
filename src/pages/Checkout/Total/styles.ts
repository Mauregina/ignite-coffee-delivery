import styled from 'styled-components'

export const TotalGrid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 0.75rem;

  align-items: center;

  & > :nth-child(2n) {
    text-align: right;
  }
`

export const TextItem = styled.span`
  font-size: 0.875rem;
`

export const TextTotal = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`
