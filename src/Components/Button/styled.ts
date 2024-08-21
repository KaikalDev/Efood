import { Link } from 'react-router-dom'

import { Props } from '.'

import styled, { css } from 'styled-components'
import { Colors } from '../../styles'

const getButtonStyles = css<Omit<Props, 'type'>>`
  background-color: ${(props) =>
    props.variant === 'primary' ? Colors.primary : Colors.secondary};
  color: ${(props) =>
    props.variant === 'primary' ? Colors.secondary : Colors.primary};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
`

export const ButtonContainer = styled.button<Props>`
  ${getButtonStyles}
  border: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)<Omit<Props, 'type'>>`
  ${getButtonStyles}
  text-decoration: none;
`
