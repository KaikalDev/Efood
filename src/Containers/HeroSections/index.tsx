import { Link } from 'react-router-dom'
import Logo from '../../assets/image/logo.png'
import { ContainerHero, HeroItens, RestaurantHero } from './styles'
import FundoHero from '../../assets/image/HeroImage.png'
import ImgFundo from '../../assets/image/Imagem_fundo.png'

const HeroSections = () => (
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
    <ContainerHero style={{ backgroundImage: `url(${ImgFundo})` }}>
      <div className="container">
        <RestaurantHero>
          <li>
            <h3>Italiana</h3>
          </li>
          <li>
            <h2>La Dolce Vita Trattoria</h2>
          </li>
        </RestaurantHero>
      </div>
    </ContainerHero>
  </>
)

export default HeroSections
