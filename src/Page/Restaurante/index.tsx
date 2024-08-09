import HeroSections from '../../Containers/HeroSections'
import Pratos from '../../Containers/Pratos'
import pratostype from '../../Models/pratos'
import ImagemPrato from '../../assets/image/image2.png'

const pratos: pratostype[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    descreption:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: ImagemPrato
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    descreption:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: ImagemPrato
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    descreption:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: ImagemPrato
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    descreption:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: ImagemPrato
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    descreption:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: ImagemPrato
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    descreption:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: ImagemPrato
  }
]

const RestaurantSection = () => (
  <>
    <HeroSections />
    <Pratos pratos={pratos} />
  </>
)

export default RestaurantSection
