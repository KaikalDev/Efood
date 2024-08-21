import styled from 'styled-components'
import { Colors } from '../../styles'

export const productList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
`

export const productCard = styled.div`
  background-color: ${Colors.primary};
  color: ${Colors.secondary};
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  img {
    cursor: pointer;
    height: 170px;
    width: 300px;
  }
`

export const productTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
`

export const productDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
`
