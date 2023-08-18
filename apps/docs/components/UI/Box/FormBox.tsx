import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import React from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: '30px',
  maxWidth: '620px',
  padding: '60px',
  margin: 'auto',
  borderRadius: '10px',
  textAlign: 'center',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  background: '#FFFFFF',
  [theme.breakpoints.down('md')]: {
    padding: '30px',
  },
}))

const FormBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>
}

export default FormBox
