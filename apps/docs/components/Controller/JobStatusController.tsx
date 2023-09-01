import { countryCodes } from '@core/data'
import { FieldConfig, FieldController } from '@core/types'
import { addressValidated, objectValidated, textValidated } from '@core/types/FieldConfig'
import Stack from '@mui/material/Stack'
import React from 'react'
import { useWatch } from 'react-hook-form'
import * as yup from 'yup'
import AddressController from './AddressController'
import FieldsController from './FieldsController'

const options = [
  { label: 'Employed - Full-time', value: 'Employed - Full-time' },
  { label: 'Employed - Part-time', value: ' Employed - Part-time' },
  { label: 'Unemployed', value: ' Unemployed' },
  { label: 'Retired', value: ' Retired' },
]

const countryOptions = countryCodes.map(({ countryName }) => ({
  label: countryName,
  value: countryName,
}))

const fieldConfigs: FieldConfig[] = [
  {
    type: 'TEXTFILE',
    name: 'Name of Employer/Company',
    label: 'Name of Employer/Company',
    required: true,
    validated: yup.mixed().when('Job Status', {
      is: (value: any) => [options[0], options[1]].includes(value),
      then: textValidated,
    }),
    hint: <>Please provide the name of the employer/company that you are currently employed by.</>,
  },
  {
    type: 'SINGLE_SELECT',
    name: 'Country',
    label: 'Country',
    options: countryOptions,
    required: true,
    validated: yup.mixed().when('Job Status', {
      is: (value: any) => [options[0], options[1]].includes(value),
      then: objectValidated,
    }),
  },
  {
    type: 'ADDRESS',
    name: 'Address of Employer/Company',
    required: true,
    component: AddressController,
    validated: yup.mixed().when('Job Status', {
      is: (value: any) => [options[0], options[1]].includes(value),
      then: addressValidated,
    }),
    hint: (
      <>Please provide the address of the employer/company that you are currently employed by.</>
    ),
  },
]

const JobStatusController: React.FC<FieldController> = ({ form, name, ...props }) => {
  const { control } = form
  const type = useWatch({ control, name })

  const configs: FieldConfig[] = [
    {
      ...props,
      type: 'SINGLE_SELECT',
      name: name,
      options: options,
    },
  ]

  return (
    <Stack gap="30px">
      <FieldsController configs={configs} form={form} />

      {[options[0].label, options[1].label].includes(type?.label) && (
        <FieldsController configs={fieldConfigs} form={form} />
      )}
    </Stack>
  )
}

export { fieldConfigs }

export default JobStatusController
