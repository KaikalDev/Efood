import Logo from '../../assets/image/logo.png'
import { ContainerHero, Title } from './styles'
import FundoHero from '../../assets/image/HeroImage.png'

const HeroHome = () => (
  <ContainerHero style={{ backgroundImage: `url(${FundoHero})` }}>
    <img src={Logo} alt="Logo" />
    <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
  </ContainerHero>
)

export default HeroHome
