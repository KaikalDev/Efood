import styled from 'styled-components'
import { Colors } from '../../styles'

export const Card = styled.div`
  border: 1px solid ${Colors.primary};
  position: relative;

  > img {
    width: 470px;
    height: 220px;
    object-fit: cover;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;

  div {
    font-size: 12px;
    font-weight: bold;
    color: #fff;
    background-color: ${Colors.primary};
    padding: 4px 6px;
  }
`

export const ContainerCard = styled.div`
  color: ${Colors.primary};
  padding: 8px;
  background-color: transparent;
`

export const TitleCard = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  align-items: center;
`

export const Rating = styled.h4`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const DescriptionCard = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
