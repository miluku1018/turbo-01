import { TooltipIcon } from '@components/UI'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

interface DashboardTitleProps {
  name: string
  info: React.ReactNode
}

const style = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    mb: '20px',
  },
}

const DashboardTitle: React.FC<DashboardTitleProps> = ({ name, info }) => {
  return (
    <Box sx={style.wrapper}>
      <Typography variant="subtitle1">{name}</Typography>
      <TooltipIcon icon={HelpOutlineIcon} title={info} />
    </Box>
  )
}

export default DashboardTitle
