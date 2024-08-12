import styled from 'styled-components'
import { Cores } from '../../styles'

export const Card = styled.div`
  border: 1px solid ${Cores.Principal};
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
    background-color: ${Cores.Principal};
    padding: 4px 6px;
  }
`

export const ContainerCard = styled.div`
  color: ${Cores.Principal};
  padding: 8px;
  background-color: transparent;

  a {
    background-color: ${Cores.Principal};
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    padding: 4px 6px;
    border: none;
    text-decoration: none;
  }
`

export const TitleCard = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  align-items: center;
`

export const Nota = styled.h4`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const DescriptionCard = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`
