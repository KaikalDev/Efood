import { useDispatch, useSelector } from 'react-redux'

import { close, remove } from '../../Store/reducecrs/Cart'
import { formataPreco } from '../../Containers/Pratos'

import { Rootreducer } from '../../Store'

import { CartContainer, CartItem, Overlay, SideBar } from './styles'
import removeImg from '../../assets/image/remove.png'

const Cart = () => {
  const { isOpen, items } = useSelector((state: Rootreducer) => state.cart)

  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button type="button" onClick={() => removeItem(item.id)}>
                <img src={removeImg} alt="Remover Item" />
              </button>
            </CartItem>
          ))}
        </ul>
        <p>
          <span>Valor total</span>
          <span>{formataPreco(getTotalPrice())}</span>
        </p>
        <button>Continuar com a entrega</button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
