import { PropagateLoader } from 'react-spinners'

import { Colors } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <PropagateLoader color={Colors.primary} />
  </Container>
)

export default Loader
