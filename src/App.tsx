import { BrowserRouter } from 'react-router-dom'
import Rotas from './Page/routes'

import { Provider } from 'react-redux'
import { Store } from './Store'

import { GlobalStyle } from './styles'
import Footer from './Containers/Footer'
import Cart from './Components/Cart'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
