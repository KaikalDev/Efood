import { Link } from 'react-router-dom'
import star from '../../assets/image/star.png'
import {
  Card,
  Categoria,
  ContainerCard,
  DescriptionCard,
  Nota,
  TitleCard
} from './styles'

type Props = {
  category: string
  descreption: string
  image: string
  nota: string
  title: string
}

export const Resturant = ({
  nota,
  category,
  descreption,
  image,
  title
}: Props) => (
  <Card>
    <img src={image} alt="foto do restaurante" />
    <Categoria>
      <div>{category}</div>
    </Categoria>
    <ContainerCard>
      <TitleCard>
        <li>{title}</li>
        <Nota>
          <h4>{nota}</h4>
          <img src={star} alt="Star" />
        </Nota>
      </TitleCard>
      <DescriptionCard>{descreption}</DescriptionCard>
      <Link to="/restaurante">Saiba mais</Link>
    </ContainerCard>
  </Card>
)

export default Resturant
