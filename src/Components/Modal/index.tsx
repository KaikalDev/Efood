import { useDispatch, useSelector } from 'react-redux'

import { closeModal } from '../../Store/reducecrs/Modal'
import { add, open } from '../../Store/reducecrs/Cart'
import { parseToBrl } from '../../Utils'

import { Rootreducer } from '../../Store'

import CloseIcon from '../../assets/image/fechar.png'
import { Overlay } from '../../styles'
import Button from '../Button'
import * as S from './styles'

const ModalComponent = () => {
  const dispatch = useDispatch()

  const { isOpen, product } = useSelector((state: Rootreducer) => state.modal)

  const addToCart = (product: Menu) => {
    dispatch(add(product))
    dispatch(open())
    dispatch(closeModal())
  }

  return (
    <S.Modal className={isOpen ? 'visible' : ''}>
      {product && (
        <S.ModalContainer className="container">
          <img src={product.foto} alt={product.nome} />
          <S.productInfos>
            <li>
              <h3>{product.nome}</h3>
            </li>
            <li>
              <p>
                {product.descricao}
                <br />
                <br />
                {product.porcao}
              </p>
            </li>
            <Button
              variant="secondary"
              type="button"
              title="Clique aqui para adicionar o item no carrinho"
              onClick={() => addToCart(product)}
            >
              <>Adicionar ao carrinho - {parseToBrl(product.preco)}</>
            </Button>
          </S.productInfos>
          <S.Close>
            <img
              onClick={() => dispatch(closeModal())}
              src={CloseIcon}
              alt="Fechar"
            />
          </S.Close>
        </S.ModalContainer>
      )}
      <Overlay onClick={() => dispatch(closeModal())} />
    </S.Modal>
  )
}

export default ModalComponent
