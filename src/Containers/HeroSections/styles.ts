import styled from 'styled-components'
import { Cores } from '../../styles'

export const HeroItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 63px 0;
  color: ${Cores.Principal};
  font-weight: bold;
  font-size: 18px;

  a {
    color: ${Cores.Principal};
    text-decoration: none;
  }
`

export const ContainerHero = styled.div`
  background-size: cover;
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
