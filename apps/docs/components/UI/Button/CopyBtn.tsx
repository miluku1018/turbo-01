import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { IconButtonProps } from '@mui/material/IconButton'
import React from 'react'
import { toast } from 'react-toastify'
import IconBtn from './IconBtn'

interface CopyBtnProps extends IconButtonProps {
  value?: string
}

const CopyBtn: React.FC<CopyBtnProps> = ({ value, ...props }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(value as string)
    toast.info('Copied to clipboard.')
  }

  return (
    <IconBtn {...props} onClick={handleCopy}>
      <ContentCopyIcon />
    </IconBtn>
  )
}

export default CopyBtn
