import { useMediaQuery, useTheme } from '@mui/material'
import { DesktopHeader, MobileHeader } from './layouts'

const HeaderContainer = () => {
  const theme = useTheme()
  const isMobileScreen = useMediaQuery(theme.breakpoints.down('md'))

  return isMobileScreen ? <MobileHeader /> : <DesktopHeader />
}

export default HeaderContainer
