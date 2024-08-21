import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.div<Props>`
  min-height: ${(Props) => (Props.type === 'section' ? '360px' : '24px')};
  display: flex;
  align-items: center;
  justify-content: center;
`
