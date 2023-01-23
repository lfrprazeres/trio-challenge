import { Box, Dialog, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Actions,
  Container,
  LocationIcon,
  LoginButton,
  MenuIcon,
  MenuModal,
  SignUpButton,
  Title,
} from './Header.mobile.styles'

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleIsMenuOpen = () => {
    setIsMenuOpen((currentValue) => !currentValue)
  }

  return (
    <>
      <Container data-testid='header'>
        <Actions>
          <IconButton onClick={handleToggleIsMenuOpen}>
            <MenuIcon />
          </IconButton>

          <Box display='flex' alignItems='center' data-testid='location-label'>
            <Typography color='white' marginRight={0.75}>
              Manhattan
            </Typography>

            <LocationIcon fontSize='small' />
          </Box>
        </Actions>

        <Title data-testid='app-name'>Bike Rental</Title>
      </Container>

      <Dialog open={isMenuOpen} onClose={handleToggleIsMenuOpen}>
        <MenuModal>
          <Link to='/login' data-testid='login-button'>
            <LoginButton>Log in</LoginButton>
          </Link>

          <Link to='/sign-up' data-testid='signup-button'>
            <SignUpButton variant='contained' color='secondary' disableElevation>
              Sign up
            </SignUpButton>
          </Link>
        </MenuModal>
      </Dialog>
    </>
  )
}

export default MobileHeader
