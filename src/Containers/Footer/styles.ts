import styled from 'styled-components'
import { Colors } from '../../styles'

export const ContainerFooter = styled.div`
  align-items: center;
  margin-top: 80px;
  padding-block: 40px;
  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 32px;
  }
`

export const SocialMidias = styled.ul`
  display: flex;
  gap: 8px;
  margin-bottom: 80px;
`

export const TextFooter = styled.p`
  font-size: 10px;
  text-align: center;
  max-width: 480px;
  color: ${Colors.primary};
`
