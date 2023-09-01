import { FieldsController } from '@components/Controller'
import {
  AutocompleteField,
  AutocompleteListField,
  Button,
  Dialog,
  FileField,
  TextField,
} from '@components/UI'
import { FieldConfig } from '@core/types'
import { Form } from '@core/types/FieldController'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useValidatedForm } from '@utils/hooks'
import React, { Fragment, useState } from 'react'
import { Controller, useFieldArray } from 'react-hook-form'

interface MoreFieldsControllerProps {
  configs: FieldConfig[]
  form: Form
  name: string
  title?: string
}

const style = {
  wrapper: {
    display: 'flex',
    gap: '10px',
  },
}

const MoreFieldsController: React.FC<MoreFieldsControllerProps> = ({
  configs = [],
  form,
  name,
  title,
}) => {
  const { control } = form
  const { fields, append } = useFieldArray({ control, name })

  const [open, setOpen] = useState(false)

  const {
    reset,
    control: dialogControl,
    handleSubmit,
    formState: { errors: dialogErrors },
  } = useValidatedForm(configs)

  const onSubmit = (formData: any) => {
    configs.forEach(item => {
      if (item.name === 'name') return

      const name = typeof formData.name === 'string' ? formData.name : formData.name?.value
      const label = name ? `${name} (${item.name})` : item.name
      append({ ...item, label, value: formData[item.name] })
    })

    handleClose()
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    reset()
    setOpen(false)
  }

  return (
    <>
      {fields.map((item, index) => {
        const { id, component: Component, ...props } = item as any

        const controller = Component ? (
          <Component {...props} form={form} name={`${name}.${index}`} />
        ) : (
          <Controller
            name={`${name}.${index}`}
            control={control}
            render={({ field }) => {
              const { type, value } = field.value

              switch (type) {
                case 'TEXT':
                case 'TEXTFILE':
                  return (
                    <TextField
                      {...field.value}
                      name={field.name}
                      onChange={value => field.onChange({ ...field.value, value })}
                    />
                  )

                case 'FILE':
                  return (
                    <FileField
                      {...field.value}
                      name={field.name}
                      value={{ id: value?.file?.name || value?.id }}
                      onChange={value => field.onChange({ ...field.value, value })}
                    />
                  )

                case 'SINGLE_SELECT':
                  return (
                    <AutocompleteField
                      {...field.value}
                      name={field.name}
                      onChange={value => field.onChange({ ...field.value, value })}
                    />
                  )

                case 'MULTIPLE_SELECT':
                  return (
                    <AutocompleteListField
                      {...field.value}
                      name={field.name}
                      onChange={value => field.onChange({ ...field.value, value })}
                    />
                  )

                default:
                  return <></>
              }
            }}
          />
        )

        return <Fragment key={id}>{controller}</Fragment>
      })}

      <Button variant="outlined" onClick={handleOpen}>
        + Add More
      </Button>

      <Dialog open={open}>
        <Typography variant="h1" textAlign="center">
          {title || name}
        </Typography>

        <FieldsController
          configs={configs}
          form={{ control: dialogControl, errors: dialogErrors }}
        />

        <Box sx={style.wrapper}>
          <Button fullWidth variant="outlined" onClick={handleClose}>
            Close
          </Button>
          <Button fullWidth variant="contained" onClick={handleSubmit(onSubmit)}>
            Confirm
          </Button>
        </Box>
      </Dialog>
    </>
  )
}

export default MoreFieldsController
