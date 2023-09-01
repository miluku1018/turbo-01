import {
  AutocompleteField,
  AutocompleteListField,
  CheckboxField,
  DateField,
  FileField,
  NetworkField,
  NumberField,
  TextField,
  TextareaField,
  TokenField,
  TokensField,
} from '@components/UI'
import { FieldConfig } from '@core/types'
import { Form } from '@core/types/FieldController'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { get } from 'lodash'
import React from 'react'
import { Controller } from 'react-hook-form'

interface FieldsControllerProps {
  configs: FieldConfig[]
  form: Form
}

const FieldsController: React.FC<FieldsControllerProps> = ({ configs, form }) => {
  const { control, errors } = form
  const visibleConfigs = configs.filter(config => !config.hidden)

  return (
    <>
      {visibleConfigs.map(config => {
        const { type, name, hint, component: Component, ...props } = config

        const configProps = {
          ...config,
          helperText: get(errors, `${name}.message`),
        }

        const controller =
          (type === 'COMPONENT' || 'MOBILE' || 'ADDRESS' || 'ACCOUNT_TYPE') && Component ? (
            <Component {...props} form={form} name={name} />
          ) : (
            <Controller
              name={name}
              control={control}
              render={({ field }) => {
                switch (type) {
                  case 'TEXT':
                  case 'TEXTFILE':
                  case 'PASSWORD':
                    return <TextField {...configProps} {...field} />

                  case 'DATE':
                  case 'DATE_TEXTFILE':
                    return <DateField {...configProps} {...field} />

                  case 'FILE':
                    return <FileField {...configProps} {...field} />

                  case 'TOKEN':
                    return <TokenField {...configProps} {...field} />

                  case 'TOKENS':
                    return <TokensField {...configProps} {...field} />

                  case 'NUMBER':
                  case 'NUMBER_TEXTFILE':
                    return <NumberField {...configProps} {...field} />

                  case 'NETWORK':
                    return <NetworkField {...configProps} {...field} />

                  case 'TEXTAREA':
                  case 'TEXTAREA_TEXTFILE':
                    return <TextareaField {...configProps} {...field} />

                  case 'CHECKBOX':
                    return <CheckboxField {...configProps} {...field} />

                  case 'SINGLE_SELECT':
                  case 'SINGLE_SELECT_TEXTFILE':
                    return <AutocompleteField {...configProps} {...field} />

                  case 'MULTIPLE_SELECT':
                  case 'MULTIPLE_SELECT_TEXTFILE':
                    return <AutocompleteListField {...configProps} {...field} />

                  default:
                    return <></>
                }
              }}
            />
          )

        return (
          <Box key={name} width={1}>
            {controller}
            <Typography variant="hint" color="text.secondary" mt={hint ? '5px' : ''}>
              {hint}
            </Typography>
          </Box>
        )
      })}
    </>
  )
}

export default FieldsController
