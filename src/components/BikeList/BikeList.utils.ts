export const getQuantityLabel = (bikeQuantity: number): string => {
  const properBikePlural = bikeQuantity > 1 ? 'bikes' : 'bike'
  return `${bikeQuantity} ${properBikePlural} to rent`
}
