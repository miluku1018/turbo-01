import { TextField } from '@components/UI'
import { Option } from '@core/types'
import Autocomplete, {
  AutocompleteProps,
  AutocompleteRenderInputParams,
} from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'
import React from 'react'

interface AutocompleteFieldProps<
  T = Option,
  Multiple extends boolean | undefined = undefined,
  FreeSolo extends boolean | undefined = undefined,
> extends Omit<
    AutocompleteProps<T, Multiple, any, FreeSolo>,
    'options' | 'renderInput' | 'onChange'
  > {
  label?: React.ReactNode
  options?: Option[]
  required?: boolean
  helperText?: React.ReactNode
  renderInput?: (params: AutocompleteRenderInputParams) => React.ReactNode
  onChange?: (value: Option | null) => void
}

const AutocompleteField = React.forwardRef<HTMLDivElement, AutocompleteFieldProps>(
  function AutocompleteField({ label, loading, required, helperText, placeholder, ...props }, ref) {
    const { value, options, renderInput, onChange } = props

    return (
      <Autocomplete
        {...props}
        ref={ref}
        value={value || null}
        options={options || []}
        onChange={(event, value) => onChange?.(value)}
        renderInput={params =>
          renderInput?.(params) || (
            <TextField
              {...params}
              label={label}
              required={required}
              helperText={helperText}
              placeholder={placeholder}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress size="1rem" /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )
        }
        isOptionEqualToValue={(option, value) => option.label === value.label}
      />
    )
  },
)

export type { AutocompleteFieldProps }

export default AutocompleteField
