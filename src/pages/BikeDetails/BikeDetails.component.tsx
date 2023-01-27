import { Breadcrumbs, Link, Typography } from '@mui/material'

import Header from 'components/Header'

import {
  BreadcrumbContainer,
  BreadcrumbHome,
  BreadcrumbSeparator,
  Content,
} from './BikeDetails.styles'
import DetailsContainer from './DetailsContainer/DetailsContainer.component'
import useBikeContext from './BikeDetails.context'
import DetailsOverviewContainer from './DetailsOverview'

const BikeDetails = () => {
  const { name } = useBikeContext()

  return (
    <div data-testid='bike-details-page'>
      <Header />

      <BreadcrumbContainer data-testid='bike-details-breadcrumbs'>
        <Breadcrumbs separator={<BreadcrumbSeparator />}>
          <Link underline='hover' display='flex' alignItems='center' color='white' href='/'>
            <BreadcrumbHome />
          </Link>

          <Typography fontWeight={800} letterSpacing={1} color='white'>
            {name}
          </Typography>
        </Breadcrumbs>
      </BreadcrumbContainer>

      <Content>
        <DetailsContainer />
        <DetailsOverviewContainer />
      </Content>
    </div>
  )
}

export default BikeDetails
