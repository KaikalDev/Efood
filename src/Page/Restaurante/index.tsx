import { useParams } from 'react-router-dom'
import HeroSections from '../../Containers/HeroSections'
import Pratos from '../../Containers/Pratos'
import { useEffect, useState } from 'react'
import { Cardapio, Restaurante } from '../Home'

const RestaurantSection = () => {
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<Cardapio[]>([])
  const [restaurant, setRestaurant] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setCardapio(res.cardapio)
        setRestaurant(res)
      })
  }, [id])

  return (
    <>
      <HeroSections restaurante={restaurant} />
      <Pratos pratos={cardapio} />
    </>
  )
}

export default RestaurantSection
