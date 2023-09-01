import { phoneCodes } from '@core/data'
import { FieldConfig, FieldController } from '@core/types'
import Box from '@mui/material/Box'
import { Theme } from '@mui/material/styles'
import React from 'react'
import FieldsController from './FieldsController'

const style = {
  wrapper: (theme: Theme) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '10px',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },
  }),
}

const options = phoneCodes.map(({ phoneCode, countryCode, countryName }) => ({
  label: `${countryName} (${phoneCode})`,
  value: `${countryCode}`,
}))

const MobileController: React.FC<FieldController> = ({ form, name, label, ...props }) => {
  const configs: FieldConfig[] = [
    {
      ...props,
      type: 'SINGLE_SELECT',
      name: `${name}.code`,
      label: 'Country Code',
      options: options,
    },
    {
      ...props,
      type: 'TEXT',
      name: `${name}.number`,
      label: label,
    },
  ]

  return (
    <Box sx={style.wrapper}>
      <FieldsController configs={configs} form={form} />
    </Box>
  )
}

export default MobileController
