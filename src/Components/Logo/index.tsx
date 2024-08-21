import LogoImg from '../../assets/image/logo.png'

type Props = {
  onClick: () => void
}

const Logo = ({ onClick }: Props) => (
  <h1>
    <img
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      src={LogoImg}
      alt="Efood"
    />
  </h1>
)
export default Logo
