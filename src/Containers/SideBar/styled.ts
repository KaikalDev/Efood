import styled from 'styled-components'
import { Colors } from '../../styles'

export const SideBarContainer = styled.div`
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

export const AsideSideBar = styled.aside`
  background-color: ${Colors.primary};
  color: ${Colors.secondary};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`
