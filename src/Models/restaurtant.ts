class restaurant {
  category: string
  descreption: string
  image: string
  nota: string
  title: string
  id: number

  constructor(
    category: string,
    descreption: string,
    image: string,
    nota: string,
    title: string,
    id: number
  ) {
    this.category = category
    this.descreption = descreption
    this.image = image
    this.nota = nota
    this.title = title
    this.id = id
  }
}

export default restaurant
