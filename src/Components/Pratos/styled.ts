import styled from 'styled-components'
import { Cores } from '../../styles'

export const CardPrato = styled.div`
  background-color: ${Cores.Principal};
  color: ${Cores.Secundaria};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const TitlePrato = styled.h2`
  font-size: 16px;
  font-weight: bold;
`

export const DescriptionPrato = styled.p`
  font-size: 14px;
  line-height: 22px;
`

export const ButtonPrato = styled.button`
  background-color: ${Cores.Secundaria};
  font-size: 14px;
  color: ${Cores.Principal};
  font-weight: bold;
  border: none;
  padding: 4px;
`
