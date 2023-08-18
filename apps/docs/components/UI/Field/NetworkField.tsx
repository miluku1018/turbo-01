import { AutocompleteField, AutocompleteFieldProps, TextField, TokenImage } from '@components/UI'
import { NetworkInfo } from '@core/graphql/types'
import { Option } from '@core/types'
import { Box, CircularProgress, InputAdornment, Typography } from '@mui/material'
import { get } from 'lodash'
import React, { useState } from 'react'

const NetworkField = React.forwardRef<HTMLDivElement, AutocompleteFieldProps>(function NetworkField(
  props,
  ref,
) {
  const { label, value, loading, required, helperText, placeholder, onChange } = props

  const [option, setOption] = useState<Option | null | undefined>(value)
  const networkInfo = get(option?.value, 'networkInfo') as NetworkInfo | undefined

  const handleChange = (value: Option | null) => {
    setOption(value)
    onChange?.(value)
  }

  return (
    <AutocompleteField
      {...props}
      ref={ref}
      onChange={handleChange}
      renderInput={params => (
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
                <TokenImage name={networkInfo?.coin} />
              </InputAdornment>
            ) : (
              <></>
            ),
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress size="1rem" /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(props, option: Option) => {
        const networkInfo = get(option.value, 'networkInfo') as NetworkInfo | undefined

        return (
          <Box {...props} component="li">
            <TokenImage name={networkInfo?.coin} />
            <Typography mx="10px">{option.label}</Typography>
          </Box>
        )
      }}
    />
  )
})

export default NetworkField
