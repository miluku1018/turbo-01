import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import React from 'react'

const StyledBox = styled(Box)({
  width: '100%',
  height: '100%',
  padding: '30px',
  borderRadius: '4px',
  backgroundColor: 'white',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
})

const Paper: React.FC<BoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>
}

export default Paper
