import { BankRoutingType } from '@core/graphql/types'
import { FieldConfig, FieldController } from '@core/types'
import { Theme } from '@mui/material'
import Box from '@mui/material/Box'
import FieldsController from './FieldsController'

const style = {
  container: (theme: Theme) => ({
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    '.MuiBox-root:first-of-type .MuiOutlinedInput-notchedOutline': {
      borderTopRightRadius: '0',
      borderBottomRightRadius: '0',
    },
    '.MuiBox-root:nth-of-type(2) .MuiOutlinedInput-notchedOutline': {
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  }),
}

const options = [
  { label: BankRoutingType.Iban, value: BankRoutingType.Iban },
  { label: BankRoutingType.Swift, value: BankRoutingType.Swift },
  { label: BankRoutingType.Bic, value: BankRoutingType.Bic },
]

const SwiftCodeController: React.FC<FieldController> = ({ form, name, label, ...props }) => {
  const configs: FieldConfig[] = [
    {
      ...props,
      type: 'TEXT',
      label,
      name: `${name}.code`,
    },
    {
      ...props,
      type: 'SINGLE_SELECT',
      name: `${name}.type`,
      options: options,
    },
  ]

  return (
    <Box sx={style.container}>
      <FieldsController configs={configs} form={form} />
    </Box>
  )
}

export default SwiftCodeController
