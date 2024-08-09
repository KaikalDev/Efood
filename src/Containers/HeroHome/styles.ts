import styled from 'styled-components'

import { Cores } from '../../styles'

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: ${Cores.Principal};
  max-width: 540px;
  padding-bottom: 40px;
  padding-top: 132px;
`

export const ContainerHero = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: cover;

  img {
    margin-top: 64px;
  }
`
