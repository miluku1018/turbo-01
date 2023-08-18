import { Button, TextField } from '@components/UI'
import InputAdornment from '@mui/material/InputAdornment'
import { StandardTextFieldProps } from '@mui/material/TextField'
import React from 'react'

interface NumberFieldProps extends StandardTextFieldProps {
  min?: number
  max?: number
}

const style = {
  btn: {
    p: 0,
    minWidth: '50px',
    minHeight: '30px',
    fontWeight: 'normal',
    borderRadius: '50px',
  },
}

const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>(function NumberField(
  props,
  ref,
) {
  const { min, max, onChange } = props

  const handleWheel = (event: any) => {
    event.target.blur()
  }

  const handleChange = (value: any) => {
    const isEmpty = [undefined, null, ''].includes(value)
    onChange?.(!isEmpty ? +value : (undefined as any))
  }

  const handleChangeMax = () => {
    handleChange(max)
  }

  return (
    <TextField
      {...props}
      ref={ref}
      type="number"
      onWheel={handleWheel}
      onChange={handleChange}
      InputProps={{
        ...props.InputProps,
        inputProps: {
          min: min,
          max: max,
        },
        endAdornment:
          props.InputProps?.endAdornment ||
          (max ? (
            <InputAdornment position="end">
              <Button variant="outlined" size="small" sx={style.btn} onClick={handleChangeMax}>
                MAX
              </Button>
            </InputAdornment>
          ) : (
            <></>
          )),
      }}
    />
  )
})

export default NumberField
