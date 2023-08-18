import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import React from 'react'

interface CheckboxFieldProps {
  label?: string | number | React.ReactNode
  helperText?: React.ReactNode
  onChange?: (value: boolean) => void
}

const StyledFormControlLabel = styled(FormControlLabel)({
  alignItems: 'flex-start',
  width: '100%',
  '.MuiCheckbox-root': {
    padding: '0 10px',
  },
  '.MuiTypography-root': {
    lineHeight: 1.8,
  },
})

const CheckboxField = React.forwardRef<HTMLInputElement, CheckboxFieldProps>(function CheckboxField(
  props,
  ref,
) {
  const { label, helperText, onChange } = props

  const labelName = (
    <Typography variant="hint" color={helperText ? 'error' : 'text.primary'}>
      {label}
    </Typography>
  )

  return (
    <>
      <StyledFormControlLabel
        ref={ref}
        label={labelName}
        control={<Checkbox onChange={(event, checked) => onChange?.(checked)} />}
      />
      <Typography variant="hint" color="error" mt={helperText ? '5px' : ''}>
        {helperText}
      </Typography>
    </>
  )
})

export default CheckboxField
