import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import React from 'react'

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '.MuiSvgIcon-root': {
    width: '20px',
    height: '20px',
  },
}))

const IconBtn: React.FC<IconButtonProps> = props => {
  return <StyledIconButton {...props} />
}

export default IconBtn
