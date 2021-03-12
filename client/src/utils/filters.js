export const priceLow = arr => {
  // let sortedBikes = arr.sort((a, b) => a.price - b.price)
  console.log(arr[0].price)
  return arr.filter((bike) => bike.price < 201)
}
export const priceMed = arr => {
  // let sortedBikes = arr.sort((a, b) => a.price - b.price)
  return arr.filter((bike) => bike.price > 200 && bike.price < 401)
}
export const priceHigh = arr => {
  let sortedBikes = arr.sort((a, b) => parseInt(a.price) - parseInt(b.price))
  return sortedBikes.filter((bike) => bike.price > 400)
}