import styled from 'styled-components'
import { Cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${Cores.Principal};
  color: ${Cores.Secundaria};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  > p {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 14px;
    margin-top: 40px;
    margin-bottom: 16px;
  }

  > button {
    background-color: ${Cores.Secundaria};
    color: ${Cores.Principal};
    font-size: 14px;
    font-weight: bold;
    border: none;
    padding: 4px 6px;
    cursor: pointer;
    width: 100%;
  }
`

export const CartItem = styled.li`
  background-color: ${Cores.Secundaria};
  color: ${Cores.Principal};
  display: flex;
  padding: 8px 0 12px 8px;
  position: relative;
  width: 344px;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  button {
    position: absolute;
    background-color: transparent;
    border: none;
    bottom: 8px;
    right: 8px;
    cursor: pointer;

    img {
      width: 16px;
      height: 16px;
    }
  }
`
