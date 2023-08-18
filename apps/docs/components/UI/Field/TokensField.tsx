import {
  AutocompleteListField,
  AutocompleteListFieldProps,
  TextField,
  TokenImage,
} from '@components/UI'
import { AssetType } from '@core/graphql/types'
import { Option } from '@core/types'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React from 'react'

const Label: React.FC<{ option: Option<AssetType> }> = ({ option }) => {
  return (
    <Stack direction="row" gap="5px">
      <TokenImage name={option.value.icon} />
      <Typography>{option.label}</Typography>
    </Stack>
  )
}

const TokensField = React.forwardRef<HTMLDivElement, AutocompleteListFieldProps>(
  function TokensField(props, ref) {
    const { label, required, helperText, placeholder, getOptionDisabled } = props

    return (
      <AutocompleteListField
        {...props}
        ref={ref}
        renderTags={(tagValue, getTagProps) =>
          tagValue.map((option, index) => {
            const tagProps = getTagProps({ index })
            const disabled = getOptionDisabled?.(option)
            return (
              <Chip
                {...tagProps}
                key={option.label}
                label={<Label option={option} />}
                onDelete={disabled ? undefined : tagProps.onDelete}
              />
            )
          })
        }
        renderInput={params => (
          <TextField
            {...params}
            label={label}
            required={required}
            helperText={helperText}
            placeholder={placeholder}
          />
        )}
        renderOption={(props, option: Option<AssetType>) => (
          <>
            <TokenImage name={option.value.icon} />
            <Typography mx="10px">{option.label}</Typography>
          </>
        )}
      />
    )
  },
)

export default TokensField
