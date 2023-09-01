import { FieldConfig, FieldController } from '@core/types'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import React from 'react'
import FieldsController from './FieldsController'

const style = {
  wrapper: (theme: Theme) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  }),
}

const AddressController: React.FC<FieldController> = ({ form, name, ...props }) => {
  const configs: FieldConfig[] = [
    {
      ...props,
      type: 'TEXT',
      name: `${name}.city`,
      label: 'City/District',
      placeholder: 'City/District',
    },
    {
      ...props,
      type: 'TEXT',
      name: `${name}.state`,
      label: 'State/Province',
      placeholder: 'State/Province',
    },
    {
      ...props,
      type: 'TEXT',
      name: `${name}.zipCode`,
      label: 'ZIP/Postal',
      placeholder: 'ZIP/Postal',
    },
  ]

  return (
    <Box sx={style.wrapper}>
      <FieldsController configs={configs} form={form} />
    </Box>
  )
}

export default AddressController
