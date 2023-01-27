import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import Bike from 'models/Bike'
import { getRateByWeek } from 'utils/rates'

import { getServicesFee } from './DetailsContainer/DetailsContainer.utils'

interface BikeContext extends Partial<Bike> {
  rateByDay?: number,
  rateByWeek?: number,
  servicesFee?: number,
  total?: number
}

type StateReceived = {
  bike: Bike
}

const BikeContext = createContext<BikeContext>({})

export const BikeProvider = ({ children, externalData }: PropsWithChildren<{ externalData?: Bike }>) => {
  const { state }: { state?: StateReceived } = useLocation()
  const [currentBikeData, setCurrentBikeData] = useState<Bike>()

  useEffect(() => {
    if (externalData) return setCurrentBikeData(externalData)

    if (state) {
      const { bike } = state
      setCurrentBikeData(bike)
    }
  }, [])

  const value: BikeContext = useMemo(() => {
    const rateByDay = currentBikeData?.rate || 0
    const rateByWeek = getRateByWeek(rateByDay)

    const servicesFee = getServicesFee(rateByDay)
    const total = rateByDay + servicesFee

    return {
      ...currentBikeData,
      rateByDay,
      rateByWeek,
      servicesFee,
      total
    }
  }, [currentBikeData])

  return (
    <BikeContext.Provider value={value}>
      {children}
    </BikeContext.Provider>
  )
}

const useBikeContext = () => {
  const bikeData = useContext(BikeContext)

  return bikeData
}

export default useBikeContext