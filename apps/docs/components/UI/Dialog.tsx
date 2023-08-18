import MuiDialog, { DialogProps } from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { styled } from '@mui/material/styles'
import React from 'react'

const StyledDialog = styled(MuiDialog)(({ theme }) => ({
  '.MuiDialogContent-root': {
    display: 'grid',
    gap: '30px',
    padding: '60px',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      padding: '30px',
    },
  },
}))

const Dialog: React.FC<DialogProps> = ({ children, ...props }) => {
  return (
    <StyledDialog fullWidth {...props}>
      <DialogContent>{children}</DialogContent>
    </StyledDialog>
  )
}

export default Dialog
