import { useGetRestaurantsQuery } from '../../services/api'

import ResturantList from '../../Containers/RestaurantsList'
import Header from '../../Containers/Header'
import Loader from '../../Components/Loader'

const Home = () => {
  const { data: restaurant } = useGetRestaurantsQuery()

  if (restaurant) {
    return (
      <>
        <Header type="Home" />
        <div className="container">
          <ResturantList restaurants={restaurant} />
        </div>
      </>
    )
  }

  return <Loader />
}

export default Home
