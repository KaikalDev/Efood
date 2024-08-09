import { BrowserRouter } from 'react-router-dom'
import Rotas from './Page/routes'
import { GlobalStyle } from './styles'
import Footer from './Containers/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
