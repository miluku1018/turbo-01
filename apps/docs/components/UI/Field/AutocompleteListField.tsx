import { TextField } from '@components/UI'
import { Option } from '@core/types'
import Autocomplete, {
  AutocompleteProps,
  AutocompleteRenderInputParams,
} from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import React from 'react'

interface AutocompleteListFieldProps<
  T = Option,
  Multiple extends boolean | undefined = true,
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
  onChange?: (value: Option[]) => void
}

const style = {
  option: {
    height: '33px',
    p: '0 !important',
  },
}

const AutocompleteListField = React.forwardRef<HTMLDivElement, AutocompleteListFieldProps>(
  function AutocompleteListField(props, ref) {
    const {
      label,
      value,
      options,
      disabled,
      required,
      helperText,
      placeholder,
      disableClearable,
      renderTags,
      renderInput,
      renderOption,
      getOptionDisabled,
      onChange,
    } = props

    return (
      <Autocomplete
        multiple
        disableCloseOnSelect
        ref={ref}
        value={value || []}
        options={options || []}
        disabled={disabled}
        onChange={(event, value) => onChange?.(value)}
        renderTags={renderTags}
        renderInput={params =>
          renderInput?.(params) || (
            <TextField
              {...params}
              label={label}
              required={required}
              helperText={helperText}
              placeholder={placeholder}
            />
          )
        }
        renderOption={(props, option, state) => (
          <Box {...props} component="li" sx={style.option}>
            <Checkbox size="small" checked={state.selected} />
            {renderOption?.(props, option, state) || option.label}
          </Box>
        )}
        disableClearable={disableClearable}
        getOptionDisabled={getOptionDisabled}
        isOptionEqualToValue={(option, value) => option.label === value.label}
      />
    )
  },
)

export type { AutocompleteListFieldProps }

export default AutocompleteListField
