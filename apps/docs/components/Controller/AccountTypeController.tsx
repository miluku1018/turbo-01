import { countryCodes } from '@core/data'
import { FieldConfig, FieldController } from '@core/types'
import { objectValidated, textValidated } from '@core/types/FieldConfig'
import Stack from '@mui/material/Stack'
import React from 'react'
import { useWatch } from 'react-hook-form'
import * as yup from 'yup'
import FieldsController from './FieldsController'

const options = [
  {
    label: 'US Bank Account',
    value: 'US Bank Account',
  },
  {
    label: 'Non US Bank Account (IBAN)',
    value: 'Non US Bank Account (IBAN)',
  },
  {
    label: 'Non US Bank Account (SWIFT/BIC)',
    value: 'Non US Bank Account (SWIFT/BIC)',
  },
]

const countryOptions = countryCodes.map(({ countryName }) => ({
  label: countryName,
  value: countryName,
}))

const usCountryOptions = countryOptions.filter(item => item.value === 'United States')

const fieldConfigs: FieldConfig[] = [
  {
    type: 'SINGLE_SELECT',
    name: `${options[0].label} Bank Country`,
    label: 'Bank Country',
    options: usCountryOptions,
    required: true,
    validated: yup.mixed().when('Account Type', {
      is: options[0],
      then: objectValidated,
    }),
    placeholder: 'Select Country',
  },
  {
    type: 'TEXT',
    name: `${options[0].label} Routing Number`,
    label: 'Routing Number',
    required: true,
    validated: yup.string().when('Account Type', {
      is: options[0],
      then: textValidated,
    }),
    hint: <>Fedwire ABA number for US bank accounts</>,
  },
  {
    type: 'SINGLE_SELECT',
    name: `${options[1].label} Bank Country`,
    label: 'Bank Country',
    options: countryOptions,
    required: true,
    validated: yup.mixed().when('Account Type', {
      is: options[1],
      then: objectValidated,
    }),
    placeholder: 'Select Country',
    hint: (
      <>
        If the country of your bank’s location isn’t listed in the above options this bank cannot be
        accepted by AEGIS due to compliance reasons. Please use another bank instead.
      </>
    ),
  },
  {
    type: 'TEXT',
    name: `${options[1].label} IBAN`,
    label: 'IBAN',
    required: true,
    validated: yup.string().when('Account Type', {
      is: options[1],
      then: textValidated,
    }),
    hint: <>International Bank Account Number (IBAN) for non-US bank accounts</>,
  },
  {
    type: 'SINGLE_SELECT',
    name: `${options[2].label} Bank Country`,
    label: 'Bank Country',
    options: countryOptions,
    required: true,
    validated: yup.mixed().when('Account Type', {
      is: options[2],
      then: objectValidated,
    }),
    placeholder: 'Select Country',
    hint: (
      <>
        If the country of your bank’s location isn’t listed in the above options this bank cannot be
        accepted by AEGIS due to compliance reasons. Please use another bank instead.
      </>
    ),
  },
  {
    type: 'TEXT',
    name: `${options[2].label} SWIFT / BIC`,
    label: 'SWIFT / BIC',
    required: true,
    validated: yup.string().when('Account Type', {
      is: options[2],
      then: textValidated,
    }),
    hint: <>SWIFT or BIC code for non-US bank accounts</>,
  },
]

const AccountTypeController: React.FC<FieldController> = ({ form, name, ...props }) => {
  const { control } = form
  const type = useWatch({ control, name })

  const configs: FieldConfig[] = [
    {
      ...props,
      name: name,
      type: 'SINGLE_SELECT',
      label: 'Account Type',
      options: options,
    },
  ]

  return (
    <Stack gap="30px">
      <FieldsController configs={configs} form={form} />

      {fieldConfigs.map((item, index) => {
        if (item.name === `${type?.label} ${item.label}`) {
          return <FieldsController key={index} configs={[item]} form={form} />
        }
      })}
    </Stack>
  )
}

export { fieldConfigs }

export default AccountTypeController
