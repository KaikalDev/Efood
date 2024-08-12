import { useState } from 'react'
import {
  ButtonPrato,
  CardPrato,
  DescriptionPrato,
  Fechar,
  InfosPrato,
  ListaPratos,
  Modal,
  ModalContainer,
  TitlePrato
} from './styles'
import fecharImg from '../../assets/image/fechar.png'
import { Cardapio } from '../../Page/Home'

type Props = {
  pratos: Cardapio[]
}

type ModalState = {
  isOpen: boolean
  cardapioModal?: {
    foto: string
    preco: string
    nome: string
    descricao: string
    porcao: string
  }
}

const Pratos = ({ pratos }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isOpen: false
  })
  const closeModal = () =>
    setModal({
      isOpen: false
    })

  const formataPreco = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const getDescription = (descreption: string) => {
    if (descreption.length > 220) {
      return descreption.slice(0, 215) + ' ...'
    }
    return descreption
  }

  return (
    <>
      <div className="container">
        <ListaPratos>
          {pratos.map((prato) => (
            <li key={prato.id}>
              <CardPrato>
                <img
                  onClick={() =>
                    setModal({
                      isOpen: true,
                      cardapioModal: {
                        descricao: prato.descricao,
                        foto: prato.foto,
                        nome: prato.nome,
                        porcao: prato.porcao,
                        preco: formataPreco(prato.preco)
                      }
                    })
                  }
                  src={prato.foto}
                  alt=""
                />
                <TitlePrato>{prato.nome}</TitlePrato>
                <DescriptionPrato>
                  {getDescription(prato.descricao)}
                </DescriptionPrato>
                <ButtonPrato>Adicionar ao carrinho</ButtonPrato>
              </CardPrato>
            </li>
          ))}
        </ListaPratos>
      </div>
      <Modal className={modal.isOpen ? 'visible' : ''}>
        {modal.cardapioModal && (
          <ModalContainer className="container">
            <img src={modal.cardapioModal.foto} alt="" />
            <InfosPrato>
              <li>
                <h3>{modal.cardapioModal.nome}</h3>
              </li>
              <li>
                <p>
                  {modal.cardapioModal.descricao}
                  <br />
                  <br />
                  {modal.cardapioModal.porcao}
                </p>
              </li>
              <button>
                Adicionar ao carrinho - {modal.cardapioModal.preco}
              </button>
            </InfosPrato>
            <Fechar onClick={closeModal}>
              <img src={fecharImg} alt="" />
            </Fechar>
          </ModalContainer>
        )}
        <div onClick={closeModal} className="overlay"></div>
      </Modal>
    </>
  )
}

export default Pratos
