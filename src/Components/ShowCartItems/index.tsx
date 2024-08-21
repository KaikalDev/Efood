import { useDispatch, useSelector } from 'react-redux'

import { proximo } from '../../Store/reducecrs/SideBar'
import { remove } from '../../Store/reducecrs/Cart'
import { parseToBrl } from '../../Utils'

import { Rootreducer } from '../../Store'

import trashImg from '../../assets/image/remove.png'
import Button from '../Button'
import * as S from './styles'

type Props = {
  totalPrice: number
}

const ShowCartItems = ({ totalPrice }: Props) => {
  const { items } = useSelector((state: Rootreducer) => state.cart)

  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.Container>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{parseToBrl(item.preco)}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(item.idCart as number)}
                >
                  <img src={trashImg} alt="Remover Item" />
                </button>
              </S.CartItem>
            ))}
          </ul>
          <h5>
            <span>Valor total</span>
            <span>{parseToBrl(totalPrice)}</span>
          </h5>
          <Button
            onClick={() => dispatch(proximo())}
            variant="secondary"
            type="button"
            title="Clique aqui para proseguir com o pedido"
          >
            <>Continuar com a entrega</>
          </Button>
        </>
      ) : (
        <p className="empty-text">
          O carrionho esta vazio, adicione pelo menos um produto para continuar
          a compra
        </p>
      )}
    </S.Container>
  )
}

export default ShowCartItems
