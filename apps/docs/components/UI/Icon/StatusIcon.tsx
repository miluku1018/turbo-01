import Box, { BoxProps } from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import React from 'react'

interface StatusIconProps extends BoxProps {
  icon: React.ReactNode
}

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '150px',
  height: '150px',
  margin: 'auto',
  border: `2px solid ${theme.palette.stroke.main}`,
  borderRadius: '100px',
  '.MuiSvgIcon-root': {
    fontSize: '100px',
  },
}))

const StatusIcon: React.FC<StatusIconProps> = ({ icon, ...props }) => {
  return <StyledBox {...props}>{icon}</StyledBox>
}

export default StatusIcon
