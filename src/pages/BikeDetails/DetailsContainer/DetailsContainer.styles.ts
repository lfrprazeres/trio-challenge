import {
  Card,
  CardProps,
  IconButton,
  IconButtonProps,
} from '@mui/material'
import { styled } from '@mui/system'
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined'

export const Container = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  padding: 34,

  [theme.breakpoints.down('lg')]: {
    padding: 24,
  },
}))

export const FavoriteIcon = styled(FavoriteBorderOutlined)(({ theme }) => ({
  color: theme.palette.common.black,
}))

export const LikeButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: 20,
  width: 60,
  height: 60,
}))