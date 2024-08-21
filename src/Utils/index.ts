export const parseToBrl = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getDescription = (descreption: string) => {
  if (descreption.length > 220) {
    return descreption.slice(0, 215) + ' ...'
  }
  return descreption
}
