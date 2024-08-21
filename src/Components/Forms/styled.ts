import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-top: 16px;

    div {
      display: flex;
      flex-direction: column;
      row-gap: 8px;

      &.marginTop {
        margin-top: 24px;
      }

      &.duo {
        display: flex;
        flex-direction: row;
        flex: auto;
        column-gap: 32px;
        justify-content: space-between;
      }

      &.width {
        width: 80%;
      }
    }
  }

  small {
    font-weight: bold;
    font-size: 12px;
    margin-top: -3px;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${Colors.secondary};
  }

  input {
    height: 32px;
    border: 2px solid ${Colors.secondary};
    width: 100%;
  }
  .error {
    border: 2px solid red;
  }

  > p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
    margin-bottom: 24px;
  }

  > h3 {
    font-size: 16px;
    font-weight: bold;
    color: ${Colors.secondary};
  }

  > button {
    width: 100%;
  }
`
