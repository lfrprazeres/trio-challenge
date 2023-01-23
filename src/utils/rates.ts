const DISCOUNT_PERCENTAGE = 0.25

export const getRateByWeek = (rateByDay: number): number => {
  const rateByWeek = rateByDay * 7

  const discountValue = rateByWeek * DISCOUNT_PERCENTAGE
  const rateByWeekWithSomeDiscount = rateByWeek - discountValue

  return Math.floor(rateByWeekWithSomeDiscount)
}
