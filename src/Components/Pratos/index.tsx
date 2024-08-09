import { ButtonPrato, CardPrato, DescriptionPrato, TitlePrato } from './styled'

type Props = {
  descreption: string
  image: string
  title: string
}

const Prato = ({ descreption, image, title }: Props) => (
  <CardPrato>
    <img src={image} alt="" />
    <TitlePrato>{title}</TitlePrato>
    <DescriptionPrato>{descreption}</DescriptionPrato>
    <ButtonPrato>Adicionar ao carrinho</ButtonPrato>
  </CardPrato>
)

export default Prato
