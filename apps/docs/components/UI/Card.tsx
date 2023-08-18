import MuiCard, { CardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/material/styles'
import React from 'react'

const StyledCard = styled(MuiCard)({
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  '.MuiCardContent-root': {
    padding: '30px',
    '&:last-child': {
      paddingBottom: '30px',
    },
  },
})

const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <StyledCard {...props}>
      <CardContent>{children}</CardContent>
    </StyledCard>
  )
}

export default Card
