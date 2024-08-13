import { Link } from 'react-router-dom'

import star from '../../assets/image/star.png'
import {
  Card,
  ContainerCard,
  DescriptionCard,
  Nota,
  Tags,
  TitleCard
} from './styles'

type Props = {
  category: string
  descreption: string
  image: string
  nota: number
  title: string
  destaque?: boolean
  id: number
}

export const Resturant = ({
  nota,
  category,
  descreption,
  image,
  title,
  destaque,
  id
}: Props) => {
  const getDescription = (descreption: string) => {
    if (descreption.length > 250) {
      return descreption.slice(0, 240) + ' ...'
    }
    return descreption
  }

  return (
    <Card>
      <img src={image} alt="foto do restaurante" />
      <Tags>
        {destaque && <div>Destaque da semana</div>}
        <div>{category}</div>
      </Tags>
      <ContainerCard>
        <TitleCard>
          <li>{title}</li>
          <Nota>
            <h4>{nota}</h4>
            <img src={star} alt="Star" />
          </Nota>
        </TitleCard>
        <DescriptionCard>{getDescription(descreption)}</DescriptionCard>
        <Link to={`/restaurante/${id}`}>Saiba mais</Link>
      </ContainerCard>
    </Card>
  )
}

export default Resturant
