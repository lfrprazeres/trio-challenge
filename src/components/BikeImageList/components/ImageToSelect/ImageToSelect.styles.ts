import { Card, styled, CardProps } from '@mui/material'

interface ContainerProps extends CardProps {
  isSelected: boolean
}

export const Container = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<ContainerProps>(({ theme, isSelected }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 14,
  width: 100,
  height: 100,
  padding: 8,
  borderColor: isSelected ? theme.palette.primary.main : theme.palette.grey[500],

  '&:hover': {
    cursor: 'pointer',
  },

  [theme.breakpoints.down('md')]: {
    marginBottom: 0,
    width: 50,
    height: 50,
    borderRadius: theme.shape.borderRadius / 2,
  },
}))
