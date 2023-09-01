import { countryCodes } from '@core/data'
import { FieldConfig, FieldController } from '@core/types'
import React from 'react'
import FieldsController from './FieldsController'

const options = countryCodes.map(({ countryCode, countryName }) => ({
  label: countryName,
  value: countryCode,
}))

const CountryController: React.FC<FieldController> = ({ form, ...props }) => {
  const configs: FieldConfig[] = [
    {
      ...props,
      type: 'SINGLE_SELECT',
      options: options,
    },
  ]

  return <FieldsController configs={configs} form={form} />
}

export default CountryController
