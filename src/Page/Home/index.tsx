import { useEffect, useState } from 'react'
import HeroHome from '../../Containers/HeroHome'
import ResturantList from '../../Containers/RestaurantsList'

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
  const [restaurante, setRestaurante] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  return (
    <>
      <HeroHome />
      <div className="container">
        <ResturantList restaurantes={restaurante} />
      </div>
    </>
  )
}

export default Home
