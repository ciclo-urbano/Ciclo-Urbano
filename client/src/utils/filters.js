export const priceLow = arr => {
  let filteredBikes = arr.filter((bike) => bike.price < 201)
  return filteredBikes.sort((a, b) => a.price - b.price)
}
export const priceMed = arr => {
  let filteredBikes = arr.filter((bike) => bike.price > 200 && bike.price < 401)
  return filteredBikes.sort((a, b) => a.price - b.price)
}
export const priceHigh = arr => {
  let filteredBikes = arr.filter((bike) => bike.price > 400)
  return filteredBikes.sort((a, b) => a.price - b.price)
}

export const brandName = (brand, arr) => {
  return arr.filter((bike) => bike.make === brand)
}