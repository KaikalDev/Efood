import { BrowserRouter } from 'react-router-dom'
import RoutesPages from './Page/routes'

import { Provider } from 'react-redux'
import { Store } from './Store'

import { GlobalStyle } from './styles'
import Footer from './Containers/Footer'
import SideBar from './Containers/SideBar'

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesPages />
        <Footer />
        <SideBar />
      </BrowserRouter>
    </Provider>
  )
}

export default App
