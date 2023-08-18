import { TextField } from '@components/UI'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import IconButton from '@mui/material/IconButton'
import { TextFieldProps } from '@mui/material/TextField'
import React from 'react'
import { toast } from 'react-toastify'

const CopyField: React.FC<Omit<TextFieldProps, 'ref'>> = props => {
  const { value } = props

  const handleCopy = () => {
    navigator.clipboard.writeText(value as string)
    toast.info('Copied to clipboard.')
  }

  return (
    <TextField
      {...props}
      disabled
      InputProps={{
        endAdornment: (
          <IconButton edge="end" onClick={handleCopy}>
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        ),
      }}
    />
  )
}

export default CopyField
