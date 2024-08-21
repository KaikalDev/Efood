import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import RestaurantSection from './Restaurante'

const RoutesPages = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<RestaurantSection />} />
  </Routes>
)

export default RoutesPages
