import { SvgIconProps } from '@mui/material/SvgIcon'
import MuiTooltip, { TooltipProps } from '@mui/material/Tooltip'
import React from 'react'

interface TooltipIconProps extends Omit<TooltipProps, 'children'> {
  icon: React.ComponentType<SvgIconProps>
}

const TooltipIcon: React.FC<TooltipIconProps> = ({ icon: Icon, sx, ...props }) => {
  return (
    <MuiTooltip arrow {...props}>
      <Icon color="menu" sx={{ fontSize: '12px', ...sx }} />
    </MuiTooltip>
  )
}

export default TooltipIcon
