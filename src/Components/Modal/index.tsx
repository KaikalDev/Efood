import { useDispatch, useSelector } from 'react-redux'

import { formataPreco } from '../../Containers/Pratos'
import { closeModal } from '../../Store/reducecrs/Modal'
import { add, open } from '../../Store/reducecrs/Cart'

import { Rootreducer } from '../../Store'
import { Cardapio } from '../../Page/Home'

import { Modal, Fechar, InfosPrato, ModalContainer } from './styles'
import fecharImg from '../../assets/image/fechar.png'

const ModalComponent = () => {
  const dispatch = useDispatch()

  const { isOpen, prato } = useSelector((state: Rootreducer) => state.modal)

  const addToCart = (prato: Cardapio) => {
    dispatch(add(prato))
    dispatch(open())
    dispatch(closeModal())
  }

  return (
    <Modal className={isOpen ? 'visible' : ''}>
      {prato && (
        <ModalContainer className="container">
          <img src={prato.foto} alt={prato.nome} />
          <InfosPrato>
            <li>
              <h3>{prato.nome}</h3>
            </li>
            <li>
              <p>
                {prato.descricao}
                <br />
                <br />
                {prato.porcao}
              </p>
            </li>
            <button onClick={() => addToCart(prato)}>
              Adicionar ao carrinho - {formataPreco(prato.preco)}
            </button>
          </InfosPrato>
          <Fechar>
            <img
              onClick={() => dispatch(closeModal())}
              src={fecharImg}
              alt="Fechar"
            />
          </Fechar>
        </ModalContainer>
      )}
      <div onClick={() => dispatch(closeModal())} className="overlay"></div>
    </Modal>
  )
}

export default ModalComponent
