import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import Login from 'pages/Login'
import BikeDetails from 'pages/BikeDetails'
import { Paths } from './paths'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={Paths.HOME} element={<Home />} />
      <Route path={Paths.LOGIN} element={<Login />} />
      <Route path={Paths.BIKE_DETAILS} element={<BikeDetails />} />
    </Routes>
  )
}

export default AppRoutes
