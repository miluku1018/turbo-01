import { IconBtn, Link } from '@components/UI'
import HistoryIcon from '@mui/icons-material/History'
import React from 'react'

interface HistoryBtnProps {
  path: string
}

const HistoryBtn: React.FC<HistoryBtnProps> = ({ path }) => {
  return (
    <Link href={path}>
      <IconBtn>
        <HistoryIcon />
      </IconBtn>
    </Link>
  )
}

export default HistoryBtn
