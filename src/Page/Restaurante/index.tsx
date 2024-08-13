import { useParams } from 'react-router-dom'
import { useGetCardapioQuery } from '../../services/api'

import HeroSections from '../../Containers/HeroSections'
import Pratos from '../../Containers/Pratos'

const RestaurantSection = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetCardapioQuery(id!)

  if (!restaurant) {
    return <h3>Carregando ...</h3>
  }

  return (
    <>
      <HeroSections restaurante={restaurant} />
      <Pratos pratos={restaurant.cardapio} />
    </>
  )
}

export default RestaurantSection
