import { TextField } from '@components/UI'
import { SxProps, Theme } from '@mui/material/styles'
import { PickersDay, PickersDayProps, pickersDayClasses } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import React from 'react'

interface DateFieldProps extends DatePickerProps<any, any> {
  sx?: SxProps<Theme>
  required?: boolean
  helperText?: React.ReactNode
}

const style = {
  pickersDay: {
    [`&.${pickersDayClasses.selected}`]: {
      color: 'white',
    },
  },
}

const DateField = React.forwardRef<HTMLDivElement, Omit<DateFieldProps, 'renderInput'>>(
  function DateField(props, ref) {
    const { sx, label, value, required, helperText } = props

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          {...props}
          ref={ref}
          value={value || ''}
          inputFormat="yyyy-MM-dd"
          renderDay={(day: Date, selectedDays: Date[], pickersDayProps: PickersDayProps<Date>) => (
            <PickersDay {...pickersDayProps} sx={style.pickersDay} />
          )}
          renderInput={params => (
            <TextField
              {...params}
              sx={sx}
              ref={undefined}
              label={label}
              required={required}
              helperText={helperText}
            />
          )}
        />
      </LocalizationProvider>
    )
  },
)

export default DateField
