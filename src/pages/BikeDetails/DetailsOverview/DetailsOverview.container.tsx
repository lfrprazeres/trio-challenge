import { useEffect, useState } from 'react'

import Amount from 'models/Amount'
import amountServices from 'services/amount'
import { DateRange } from 'components/DateRangePicker'

import useBikeContext from '../BikeDetails.context'
import DetailsOverview from './DetailsOverview.component'

const DetailsOverviewContainer = () => {
  const { id } = useBikeContext()
  const [rentRange, setRentRange] = useState<DateRange>([undefined, undefined])
  const [amountAndFees, setAmountAndFees] = useState<Amount>({ rentAmount: 0, fee: 0, totalAmount: 0 })


  const getAmountAndFees = async () => {
    const [dateFrom, dateTo] = rentRange
    if (id && dateTo) {
      const amountAndFees = await amountServices.getAmount({
        bikeId: id,
        dateFrom,
        dateTo
      })
      setAmountAndFees({
        fee: Math.floor(amountAndFees.fee),
        rentAmount: Math.floor(amountAndFees.rentAmount),
        totalAmount: Math.floor(amountAndFees.totalAmount)
      })
    }
  }

  useEffect(() => void getAmountAndFees(), [rentRange, id])

  return (
    <DetailsOverview
      rentRange={rentRange}
      setRentRange={setRentRange}
      {...amountAndFees}
    />
  )
}

export default DetailsOverviewContainer