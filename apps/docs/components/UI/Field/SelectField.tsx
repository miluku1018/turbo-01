import { AutocompleteField, AutocompleteFieldProps } from '@components/UI'
import { Option } from '@core/types'
import React, { useState } from 'react'

const style = {
  field: {
    '.MuiInputBase-root': {
      minWidth: '200px',
      height: '40px',
    },
  },
}

const SelectField: React.FC<Omit<AutocompleteFieldProps, 'ref'>> = ({ onChange, ...props }) => {
  const [value, setValue] = useState<Option<any> | null>()

  const handleChange = (option: Option<any> | null) => {
    setValue(option)
    onChange?.(option)
  }

  return (
    <AutocompleteField
      {...props}
      sx={style.field}
      size="small"
      value={value}
      onChange={handleChange}
    />
  )
}

export default SelectField
