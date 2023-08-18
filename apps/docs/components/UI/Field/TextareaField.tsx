import { TextFieldProps } from '@mui/material/TextField'
import React from 'react'
import TextField from './TextField'

const TextareaField = React.forwardRef<HTMLInputElement, TextFieldProps>(function TextareaField(
  props,
  ref,
) {
  const { minRows = 3 } = props

  return <TextField {...props} multiline ref={ref} minRows={minRows} />
})

export default TextareaField
