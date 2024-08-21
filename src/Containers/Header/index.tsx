import { useDispatch, useSelector } from 'react-redux'

import { Link, useNavigate } from 'react-router-dom'

import { open } from '../../Store/reducecrs/Cart'

import BackgroundImg from '../../assets/image/HeroImage.png'
import * as S from './styles'

import { Rootreducer } from '../../Store'
import Logo from '../../Components/Logo'
import { Overlay } from '../../styles'

type Props = {
  restaurante?: Restaurant
  type: 'section' | 'Home'
}

const Header = ({ restaurante, type }: Props) => {
  const { items } = useSelector((state: Rootreducer) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (type === 'section') {
    return (
      <header>
        <S.ContainerHero style={{ backgroundImage: `url(${BackgroundImg})` }}>
          <div className="container">
            <S.HeroItens>
              <li>
                <Link to="/">Restaurantes</Link>
              </li>
              <li>
                <Logo onClick={() => navigate('/')} />
              </li>
              <li>
                <span onClick={() => dispatch(open())}>
                  {items.length > 0
                    ? `${items.length} produto(s) no carrinho`
                    : `O carrinho esta vazio`}
                </span>
              </li>
            </S.HeroItens>
          </div>
        </S.ContainerHero>
        {restaurante && (
          <>
            <S.ContainerHero
              style={{ backgroundImage: `url(${restaurante.capa})` }}
            >
              <S.RestaurantHero>
                <div className="container">
                  <li>
                    <h3>{restaurante.tipo}</h3>
                  </li>
                  <li>
                    <h2>{restaurante.titulo}</h2>
                  </li>
                </div>
                <Overlay />
              </S.RestaurantHero>
            </S.ContainerHero>
          </>
        )}
      </header>
    )
  } else {
    return (
      <S.ContainerHeader style={{ backgroundImage: `url(${BackgroundImg})` }}>
        <Logo onClick={() => navigate('/')} />
        <S.Title>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Title>
      </S.ContainerHeader>
    )
  }
}

export default Header
