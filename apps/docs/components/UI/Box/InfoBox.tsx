import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import React from 'react'

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: '20px',
  border: `1px solid ${theme.palette.stroke.main}`,
  borderRadius: '4px',
  textAlign: 'left',
}))

const InfoBox: React.FC<BoxProps> = ({ children, ...props }) => {
  return <StyledBox {...props}>{children}</StyledBox>
}

export default InfoBox
