import Resturant from '../../Components/Restaurant'
import { Restaurante } from '../../Page/Home'
import { List } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const ResturantList = ({ restaurantes }: Props) => (
  <List>
    {restaurantes.map((restaurant) => (
      <Resturant
        category={restaurant.tipo}
        descreption={restaurant.descricao}
        key={restaurant.id}
        image={restaurant.capa}
        nota={restaurant.avaliacao}
        title={restaurant.titulo}
        destaque={restaurant.destacado}
        id={restaurant.id}
      />
    ))}
  </List>
)

export default ResturantList
