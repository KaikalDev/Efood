import { PropagateLoader } from 'react-spinners'

import { Colors } from '../../styles'

import { Container } from './styles'

export type Props = {
  type?: 'button' | 'section'
}

const Loader = ({ type = 'section' }: Props) => (
  <Container type={type}>
    <PropagateLoader color={Colors.primary} />
  </Container>
)

export default Loader
