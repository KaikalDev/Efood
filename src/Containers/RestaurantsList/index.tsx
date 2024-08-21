import Resturant from '../../Components/Restaurant'
import { List } from './styles'

type Props = {
  restaurants: Restaurant[]
}

const ResturantList = ({ restaurants }: Props) => (
  <List>
    {restaurants.map((restaurant) => (
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
