import { useParams } from 'react-router-dom'
import { useGetMenuQuery } from '../../services/api'

import Header from '../../Containers/Header'
import ProductsMenu from '../../Containers/Pratos'
import Loader from '../../Components/Loader'

type RestaurantParams = {
  id: string
}

const RestaurantSection = () => {
  const { id } = useParams() as RestaurantParams

  const { data: restaurant } = useGetMenuQuery(id)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <Header type="section" restaurante={restaurant} />
      <ProductsMenu products={restaurant.cardapio} />
    </>
  )
}

export default RestaurantSection
