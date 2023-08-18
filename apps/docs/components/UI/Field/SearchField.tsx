import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import { TextFieldProps } from '@mui/material/TextField'
import React, { useState } from 'react'
import TextField from './TextField'

const style = {
  field: {
    '&.MuiFormControl-root': {
      width: '200px',
    },
    '.MuiInputBase-root': {
      height: '40px',
    },
  },
}

const SearchField: React.FC<Omit<TextFieldProps, 'ref'>> = ({ onClick, ...props }) => {
  const [value, setValue] = useState()

  const handleChange = (value: any) => {
    setValue(value)
  }

  const handleClick = () => {
    onClick?.(value as any)
  }

  return (
    <TextField
      {...props}
      sx={style.field}
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <IconButton edge="end" onClick={handleClick}>
            <SearchIcon fontSize="small" />
          </IconButton>
        ),
      }}
    />
  )
}

export default SearchField
