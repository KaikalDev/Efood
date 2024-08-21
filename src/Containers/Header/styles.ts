import styled from 'styled-components'
import { Colors } from '../../styles'

export const HeroItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 63px 0;
  color: ${Colors.primary};
  font-weight: bold;
  font-size: 18px;

  a,
  span {
    color: ${Colors.primary};
    text-decoration: none;
  }

  span {
    border: none;
    background-color: transparent;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
`

export const ContainerHero = styled.div`
  background-size: cover;
`

export const ContainerHeader = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;

  img {
    margin-top: 64px;
  }
`

export const RestaurantHero = styled.div`
  font-size: 32px;
  color: #fff;
  padding: 25px 0 32px 0;
  position: relative;

  .container {
    z-index: 1;
    position: relative;
  }

  h3 {
    font-weight: normal;
    margin-bottom: 158px;
    text-transform: capitalize;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${Colors.primary};
  max-width: 540px;
  padding-bottom: 40px;
  padding-top: 132px;
`
