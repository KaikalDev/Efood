import { useDispatch } from 'react-redux'

import { openModal, setProductModal } from '../../Store/reducecrs/Modal'
import { getDescription } from '../../Utils'

import ModalComponent from '../../Components/Modal'
import Button from '../../Components/Button'
import * as S from './styles'

type Props = {
  products: Menu[]
}

const ProductsMenu = ({ products }: Props) => {
  const dispatch = useDispatch()

  const getModal = (product: Menu) => {
    dispatch(setProductModal(product))
    dispatch(openModal())
  }

  return (
    <>
      <div className="container">
        <S.productList>
          {products.map((product) => (
            <li key={product.id}>
              <S.productCard>
                <img src={product.foto} alt={product.nome} />
                <S.productTitle>{product.nome}</S.productTitle>
                <S.productDescription>
                  {getDescription(product.descricao)}
                </S.productDescription>
                <Button
                  variant="secondary"
                  type="button"
                  title="Clique aqui para adicionar o item no carrinho"
                  onClick={() => getModal(product)}
                >
                  <>Adicionar ao carrinho</>
                </Button>
              </S.productCard>
            </li>
          ))}
        </S.productList>
      </div>
      <ModalComponent />
    </>
  )
}

export default ProductsMenu
