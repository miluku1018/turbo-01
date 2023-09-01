import { TooltipIcon } from '@components/UI'
import { useAuth } from '@core/context/auth'
import { WhitelistedWalletOwnerType } from '@core/graphql/types'
import { FieldConfig, FieldController } from '@core/types'
import { objectValidated } from '@core/types/FieldConfig'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Stack } from '@mui/material'
import React from 'react'
import { useWatch } from 'react-hook-form'
import * as yup from 'yup'
import FieldsController from './FieldsController'

const options = [
  {
    label: 'Self',
    value: WhitelistedWalletOwnerType.Self,
  },
  {
    label: 'Third Party',
    value: WhitelistedWalletOwnerType.ThirdParty,
  },
  {
    label: 'Shareholder',
    value: WhitelistedWalletOwnerType.Shareholder,
  },
  {
    label: 'Director',
    value: WhitelistedWalletOwnerType.Director,
  },
  {
    label: 'Employee',
    value: WhitelistedWalletOwnerType.Employee,
  },
  {
    label: 'Affiliate / Subsidiary',
    value: WhitelistedWalletOwnerType.Subsidiary,
  },
]

const ownerValidated = yup.object({
  owner: objectValidated,
  proofOfRelationship: yup.mixed().when('owner', {
    is: (value: any) => options.slice(1).includes(value),
    then: objectValidated,
  }),
})

const getOptions = (type?: 'CompanyUser' | 'IndividualUser') => {
  if (type === 'CompanyUser') return options

  if (type === 'IndividualUser') return [options[0], options[1]]

  return []
}

const OwnerController: React.FC<FieldController> = ({ form, name, ...props }) => {
  const { control } = form
  const type = useWatch({ control, name })

  const { me } = useAuth()
  const options = getOptions(me?.__typename)

  const ownerField: FieldConfig[] = [
    {
      ...props,
      type: 'SINGLE_SELECT',
      name: `${name}.owner`,
      options: options,
    },
  ]

  const proofOfRelationshipField: FieldConfig[] = [
    {
      type: 'FILE',
      name: `${name}.proofOfRelationship`,
      label: 'Proof Of Relationship',
      required: true,
      hint: (
        <>
          Please upload evidence to prove your relationship with this third party for AML purposes.
          <TooltipIcon
            sx={{ fontSize: '16px' }}
            icon={HelpOutlineIcon}
            title={
              'Please provide official documents linking the source of funds and the relationship, such as a contract, Sales and Purchase Agreement, debt acknowledgment, etc.'
            }
          />
        </>
      ),
    },
  ]

  return (
    <Stack gap="30px">
      <FieldsController configs={ownerField} form={form} />

      {type?.owner?.value !== options[0]?.value && type?.owner?.value !== undefined && (
        <FieldsController configs={proofOfRelationshipField} form={form} />
      )}
    </Stack>
  )
}

export { ownerValidated }

export default OwnerController
