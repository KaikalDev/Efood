import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h5 {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 16px;
    margin-top: 40px;
    line-height: 22px;
  }

  > button {
    width: 100%;
  }

  .empty-text {
    font-size: 14px;
    line-height: 22px;
    color: ${Colors.secondary};
    text-align: center;
  }
`

export const CartItem = styled.li`
  background-color: ${Colors.secondary};
  color: ${Colors.primary};
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
