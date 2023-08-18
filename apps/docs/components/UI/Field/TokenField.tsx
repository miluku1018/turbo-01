import { AutocompleteField, AutocompleteFieldProps, TextField, TokenImage } from '@components/UI'
import { AssetType } from '@core/graphql/types'
import { Option } from '@core/types'
import Box from '@mui/material/Box'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

const TokenField = React.forwardRef<HTMLDivElement, AutocompleteFieldProps>(function TokenField(
  props,
  ref,
) {
  const { label, value, required, helperText, placeholder, onChange } = props

  const [option, setOption] = useState<Option<AssetType> | null | undefined>(value)

  const handleChange = (value: Option<AssetType> | null) => {
    setOption(value)
    onChange?.(value)
  }

  return (
    <AutocompleteField
      {...props}
      ref={ref}
      onChange={handleChange}
      renderInput={params => {
        return (
          <TextField
            {...params}
            label={label}
            required={required}
            helperText={helperText}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              startAdornment: params.inputProps.value ? (
                <InputAdornment position="end">
                  <TokenImage name={option?.value.icon} />
                </InputAdornment>
              ) : (
                <></>
              ),
            }}
          />
        )
      }}
      renderOption={(props, option) => (
        <Box {...props} component="li">
          <TokenImage name={option.value.icon} />
          <Typography mx="10px">{option.label}</Typography>
        </Box>
      )}
    />
  )
})

export default TokenField
