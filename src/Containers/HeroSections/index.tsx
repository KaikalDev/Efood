import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

import { open } from '../../Store/reducecrs/Cart'

import { ContainerHero, HeroItens, RestaurantHero } from './styles'
import Logo from '../../assets/image/logo.png'
import FundoHero from '../../assets/image/HeroImage.png'

import { Restaurante } from '../../Page/Home'
import { Rootreducer } from '../../Store'

type Props = {
  restaurante?: Restaurante
}

const HeroSections = ({ restaurante }: Props) => {
  const { items } = useSelector((state: Rootreducer) => state.cart)
  const dispatch = useDispatch()

  return (
    <>
      <ContainerHero style={{ backgroundImage: `url(${FundoHero})` }}>
        <div className="container">
          <HeroItens>
            <li>
              <Link to="/">Restaurantes</Link>
            </li>
            <li>
              <img src={Logo} alt="Logo" />
            </li>
            <li>
              <button onClick={() => dispatch(open())}>
                {items.length} produto(s) no carrinho
              </button>
            </li>
          </HeroItens>
        </div>
      </ContainerHero>
      {restaurante && (
        <>
          <ContainerHero
            style={{ backgroundImage: `url(${restaurante.capa})` }}
          >
            <RestaurantHero>
              <div className="container">
                <li>
                  <h3>{restaurante.tipo}</h3>
                </li>
                <li>
                  <h2>{restaurante.titulo}</h2>
                </li>
              </div>
              <div className="overlay"></div>
            </RestaurantHero>
          </ContainerHero>
        </>
      )}
    </>
  )
}

export default HeroSections
