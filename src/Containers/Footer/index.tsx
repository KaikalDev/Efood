import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import instagram from '../../assets/image/Instagram.png'
import facebook from '../../assets/image/facebook.png'
import twiter from '../../assets/image/twiter.png'
import BackgroundImg from '../../assets/image/HeroImage.png'
import Logo from '../../Components/Logo'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <S.ContainerFooter style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <Logo onClick={() => navigate('/')} />
      <S.SocialMidias>
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
      </S.SocialMidias>
      <S.TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.TextFooter>
    </S.ContainerFooter>
  )
}

export default Footer
