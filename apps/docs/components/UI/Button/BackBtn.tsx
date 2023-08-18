import { Button, Link } from '@components/UI'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import React from 'react'

interface BackBtnProps {
  path: string
  title?: string
  loading?: boolean
}

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  '.MuiButtonBase-root': {
    minWidth: '40px',
    padding: 0,
    border: `2px solid ${theme.palette.stroke.main}`,
    borderRadius: '100px',
  },
}))

const BackBtn: React.FC<BackBtnProps> = ({ path, title, loading }) => {
  return (
    <StyledBox>
      <Link href={path}>
        <Button variant="outlined" color="menu">
          <ArrowBackIcon />
        </Button>
      </Link>

      {loading ? (
        <Skeleton variant="text" width="50%" height="100%" />
      ) : (
        <Typography variant="h1">{title}</Typography>
      )}
    </StyledBox>
  )
}

export default BackBtn
