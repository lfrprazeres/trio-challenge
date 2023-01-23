import Bike from 'models/Bike'
import { useEffect, useState } from 'react'
import apiClient from 'services/api'
import Home from './Home.component'

const HomeContainer = () => {
  const [bikes, setBikes] = useState<Bike[]>([])

  useEffect(() => {
    const getAllBikes = async () => {
      const response = await apiClient.get('/bikes')
      setBikes(response.data)
    }

    getAllBikes()
  }, [])

  return <Home bikes={bikes} />
}

export default HomeContainer
