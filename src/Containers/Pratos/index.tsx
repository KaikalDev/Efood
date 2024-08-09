import Prato from '../../Components/Pratos'
import pratostype from '../../Models/pratos'
import { ListaPratos } from './styles'

type Props = {
  pratos: pratostype[]
}

const Pratos = ({ pratos }: Props) => (
  <div className="container">
    <ListaPratos>
      {pratos.map((prato) => (
        <Prato
          key={prato.id}
          image={prato.image}
          descreption={prato.descreption}
          title={prato.title}
        />
      ))}
    </ListaPratos>
  </div>
)

export default Pratos
