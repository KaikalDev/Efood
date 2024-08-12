import styled from 'styled-components'
import { Cores } from '../../styles'

export const ListaPratos = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }
`

export const ModalContainer = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  background-color: ${Cores.Principal};
  display: flex;
  gap: 24px;
  padding: 32px;
  color: ${Cores.Secundaria};
  align-items: center;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const InfosPrato = styled.ul`
  display: inline-block;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-style: 14px;
    line-height: 22px;
    margin: 16px 0;
  }

  button {
    background-color: ${Cores.Secundaria};
    color: ${Cores.Principal};
    font-size: 14px;
    font-weight: bold;
    border: none;
    padding: 4px 6px;
    cursor: pointer;
  }
`

export const Fechar = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    height: 16px;
    width: 16px;
  }
`

export const CardPrato = styled.div`
  background-color: ${Cores.Principal};
  color: ${Cores.Secundaria};
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
