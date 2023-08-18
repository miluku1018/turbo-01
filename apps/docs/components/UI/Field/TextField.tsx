import Stack from '@mui/material/Stack'
import MuiTextField, { TextFieldProps } from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import React from 'react'

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  '.MuiInputLabel-root': {
    color: theme.palette.text.primary,
  },
  '.MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme.palette.stroke.main}`,
    borderRadius: '8px',
  },
  '.Mui-error': {
    color: theme.palette.error.main,
    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.main,
    },
  },
}))

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  props,
  ref,
) {
  const { label, value, required, helperText, defaultValue = '', onChange } = props

  const labelName = (
    <Stack direction="row" gap="5px">
      {label} {required && <Typography color="error">*</Typography>}
    </Stack>
  )

  const handleChange = (event: any) => {
    onChange?.(event.target.value)
  }

  return (
    <StyledTextField
      {...props}
      fullWidth
      ref={ref}
      label={label && labelName}
      value={value === undefined ? defaultValue : value}
      error={!!helperText}
      required={undefined}
      onChange={handleChange}
      InputLabelProps={{ shrink: true }}
    />
  )
})

export default TextField
