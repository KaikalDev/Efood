import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import RestaurantSection from './Restaurante'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<RestaurantSection />} />
  </Routes>
)

export default Rotas
