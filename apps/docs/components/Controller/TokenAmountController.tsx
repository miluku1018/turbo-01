import { NumberField, TokenField } from '@components/UI'
import { FieldController } from '@core/types'
import Box from '@mui/material/Box'
import { get } from 'lodash'
import { Controller } from 'react-hook-form'

const style = {
  container: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
  },
  amount: {
    '.MuiOutlinedInput-notchedOutline': {
      borderRightWidth: '0.5px',
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
    },
  },
  token: {
    '.MuiOutlinedInput-notchedOutline': {
      borderLeftWidth: '0.5px',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
  },
  btn: {
    p: 0,
    minWidth: '50px',
    minHeight: '30px',
    fontWeight: 'normal',
    borderRadius: '50px',
  },
}

const TokenAmountController: React.FC<FieldController> = ({
  form,
  name,
  label,
  options,
  ...props
}) => {
  const { control, errors } = form
  const error = get(errors, name)
  console.log('error :', error)
  return (
    <Box sx={style.container}>
      <Controller
        name={`${name}.amount`}
        control={control}
        render={({ field }) => {
          return (
            <Box sx={style.amount}>
              <NumberField
                {...props}
                {...field}
                min={0}
                label={label}
                helperText={error?.amount?.message}
              />
            </Box>
          )
        }}
      />

      <Controller
        name={`${name}.token`}
        control={control}
        render={({ field }) => {
          return (
            <Box sx={style.token}>
              <TokenField
                {...props}
                {...field}
                options={options}
                helperText={error?.token?.message}
              />
            </Box>
          )
        }}
      />
    </Box>
  )
}

export default TokenAmountController
