import { getDescription } from '../../Utils'

import star from '../../assets/image/star.png'
import Button from '../Button'
import * as S from './styles'

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
}: Props) => (
  <S.Card>
    <img src={image} alt="foto do restaurante" />
    <S.Tags>
      {destaque && <div>Destaque da semana</div>}
      <div>{category}</div>
    </S.Tags>
    <S.ContainerCard>
      <S.TitleCard>
        <li>{title}</li>
        <S.Rating>
          <h4>{nota}</h4>
          <img src={star} alt="Star" />
        </S.Rating>
      </S.TitleCard>
      <S.DescriptionCard>{getDescription(descreption)}</S.DescriptionCard>
      <Button
        title="Clique aqui para saber mais informações sobre o restaurante"
        type="link"
        to={`/restaurant/${id}`}
      >
        <>Saiba mais</>
      </Button>
    </S.ContainerCard>
  </S.Card>
)

export default Resturant
