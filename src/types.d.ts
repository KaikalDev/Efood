declare type Menu = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
  idCart?: number
}

declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Cardapio[]
}
