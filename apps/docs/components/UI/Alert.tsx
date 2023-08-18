import MuiAlert, { AlertProps as MuiAlertProps } from '@mui/material/Alert'
import { styled } from '@mui/material/styles'
import React from 'react'

interface AlertProps extends MuiAlertProps {
  open?: boolean
}

const StyledAlert = styled(MuiAlert)(({ theme }) => ({
  padding: '12px 20px',
  borderRadius: '6px',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.background.default,
}))

const Alert: React.FC<AlertProps> = ({ children, open = true, ...props }) => {
  return (
    <>
      {open && (
        <StyledAlert severity="info" {...props}>
          {children}
        </StyledAlert>
      )}
    </>
  )
}

export default Alert
