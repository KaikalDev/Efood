import { useDispatch } from 'react-redux'

import { add, open } from '../../Store/reducecrs/Cart'
import { openModal, setModalPrato } from '../../Store/reducecrs/Modal'

import {
  ButtonPrato,
  CardPrato,
  DescriptionPrato,
  ListaPratos,
  TitlePrato
} from './styles'
import ModalComponent from '../../Components/Modal'

import { Cardapio } from '../../Page/Home'

type Props = {
  pratos: Cardapio[]
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Pratos = ({ pratos }: Props) => {
  const dispatch = useDispatch()

  const addToCart = (prato: Cardapio) => {
    dispatch(add(prato))
    dispatch(open())
  }

  const getDescription = (descreption: string) => {
    if (descreption.length > 220) {
      return descreption.slice(0, 215) + ' ...'
    }
    return descreption
  }

  const getModal = (prato: Cardapio) => {
    dispatch(setModalPrato(prato))
    dispatch(openModal())
  }

  return (
    <>
      <div className="container">
        <ListaPratos>
          {pratos.map((prato) => (
            <li key={prato.id}>
              <CardPrato>
                <img onClick={() => getModal(prato)} src={prato.foto} alt="" />
                <TitlePrato>{prato.nome}</TitlePrato>
                <DescriptionPrato>
                  {getDescription(prato.descricao)}
                </DescriptionPrato>
                <ButtonPrato onClick={() => addToCart(prato)}>
                  Adicionar ao carrinho
                </ButtonPrato>
              </CardPrato>
            </li>
          ))}
        </ListaPratos>
      </div>
      <ModalComponent />
    </>
  )
}

export default Pratos
