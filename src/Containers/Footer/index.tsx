import Logo from '../../assets/image/logo.png'
import instagram from '../../assets/image/Instagram.png'
import facebook from '../../assets/image/facebook.png'
import twiter from '../../assets/image/twiter.png'
import { ContainerFooter, SocialMidias, TextFooter } from './stylest'
import ImageFundo from '../../assets/image/HeroImage.png'

const Footer = () => (
  <ContainerFooter style={{ backgroundImage: `url(${ImageFundo})` }}>
    <img src={Logo} alt="" />
    <SocialMidias>
      <li>
        <a href="#">
          <img src={instagram} alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebook} alt="" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twiter} alt="" />
        </a>
      </li>
    </SocialMidias>
    <TextFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </TextFooter>
  </ContainerFooter>
)

export default Footer
