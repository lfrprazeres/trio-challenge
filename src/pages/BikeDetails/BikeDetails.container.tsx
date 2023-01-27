import BikeDetails from './BikeDetails.component'
import { BikeProvider } from './BikeDetails.context'

const BikeDetailsContainer = () => {
  return (
    <BikeProvider>
      <BikeDetails />
    </BikeProvider>
  )
}

export default BikeDetailsContainer
