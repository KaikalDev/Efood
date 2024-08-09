import HeroHome from '../../Containers/HeroHome'
import ResturantList from '../../Containers/RestaurantsList'
import restaurant from '../../Models/restaurtant'
import Imagem from '../../assets/image/image1.png'

const restaurantes: restaurant[] = [
  {
    id: 1,
    title: 'La Dolce Vita Trattoria',
    descreption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Imagem,
    category: 'Italiana',
    nota: '4.6'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    descreption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Imagem,
    category: 'Italiana',
    nota: '4.6'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    descreption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Imagem,
    category: 'Italiana',
    nota: '4.6'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    descreption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Imagem,
    category: 'Italiana',
    nota: '4.6'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    descreption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Imagem,
    category: 'Italiana',
    nota: '4.6'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    descreption:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: Imagem,
    category: 'Italiana',
    nota: '4.6'
  }
]

const Home = () => (
  <>
    <HeroHome />
    <div className="container">
      <ResturantList restaurantes={restaurantes} />
    </div>
  </>
)

export default Home
