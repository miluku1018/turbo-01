import { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import React from 'react'
import Button from './Button'

interface ActionBtnProps extends ButtonProps {
  icon: React.ReactNode
}

const StyledButton = styled(Button)({
  minWidth: '30px',
  minHeight: '30px',
  padding: 0,
})

const ActionBtn: React.FC<ActionBtnProps> = ({ icon, ...props }) => {
  return (
    <StyledButton {...props} variant="outlined">
      {icon}
    </StyledButton>
  )
}

export default ActionBtn
