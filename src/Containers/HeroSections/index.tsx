import { Link } from 'react-router-dom'
import Logo from '../../assets/image/logo.png'
import { ContainerHero, HeroItens, RestaurantHero } from './styles'
import FundoHero from '../../assets/image/HeroImage.png'
import { Restaurante } from '../../Page/Home'

type Props = {
  restaurante?: Restaurante
}

const HeroSections = ({ restaurante }: Props) => (
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
          <li>0 produto(s) no carrinho</li>
        </HeroItens>
      </div>
    </ContainerHero>
    {restaurante && (
      <>
        <ContainerHero style={{ backgroundImage: `url(${restaurante.capa})` }}>
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

export default HeroSections
