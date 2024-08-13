import HeroHome from '../../Containers/HeroHome'
import ResturantList from '../../Containers/RestaurantsList'

import { useGetRestaurantesQuery } from '../../services/api'

export type Cardapio = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}

const Home = () => {
  const { data: restaurante } = useGetRestaurantesQuery()

  if (restaurante) {
    return (
      <>
        <HeroHome />
        <div className="container">
          <ResturantList restaurantes={restaurante} />
        </div>
      </>
    )
  }

  return <div>Loading...</div>
}

export default Home
