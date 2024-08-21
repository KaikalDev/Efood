import styled from 'styled-components'
import { Colors } from '../../styles'

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
  background-color: ${Colors.primary};
  display: flex;
  gap: 24px;
  padding: 32px;
  color: ${Colors.secondary};
  align-items: center;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const productInfos = styled.ul`
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
    background-color: ${Colors.secondary};
    color: ${Colors.primary};
    font-size: 14px;
    font-weight: bold;
    border: none;
    padding: 4px 6px;
    cursor: pointer;
  }
`

export const Close = styled.button`
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
