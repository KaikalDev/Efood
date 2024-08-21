import { useDispatch, useSelector } from 'react-redux'

import { start } from '../../Store/reducecrs/SideBar'
import { close } from '../../Store/reducecrs/Cart'

import { Rootreducer } from '../../Store'

import ShowCartItems from '../../Components/ShowCartItems'
import FormsAddress from '../../Components/Forms'
import { Overlay } from '../../styles'
import * as S from './styled'

const SideBar = () => {
  const { isOpen, items } = useSelector((state: Rootreducer) => state.cart)
  const { show } = useSelector((state: Rootreducer) => state.sideBar)
  const dispatch = useDispatch()

  const getTotalPrice = (items: Menu[]) => {
    return items.reduce((accumulator, currentItem) => {
      if (currentItem.preco) {
        return (accumulator += currentItem.preco)
      }
      return 0
    }, 0)
  }

  const CloseSideBar = () => {
    dispatch(close())
    dispatch(start())
  }

  return (
    <S.SideBarContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={CloseSideBar} />
      <S.AsideSideBar>
        {show === 'cart' ? (
          <ShowCartItems totalPrice={getTotalPrice(items)} />
        ) : (
          <FormsAddress show={show} totalPrice={getTotalPrice(items)} />
        )}
      </S.AsideSideBar>
    </S.SideBarContainer>
  )
}

export default SideBar
