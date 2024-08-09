import Resturant from '../../Components/Restaurant'
import restaurant from '../../Models/restaurtant'
import { List } from './styles'

type Props = {
  restaurantes: restaurant[]
}

const ResturantList = ({ restaurantes }: Props) => (
  <List>
    {restaurantes.map((restaurant) => (
      <Resturant
        category={restaurant.category}
        descreption={restaurant.descreption}
        key={restaurant.id}
        image={restaurant.image}
        nota={restaurant.nota}
        title={restaurant.title}
      />
    ))}
  </List>
)

export default ResturantList
