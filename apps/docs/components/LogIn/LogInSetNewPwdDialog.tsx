import { FieldsController } from '@components/Controller'
import { Button, Dialog } from '@components/UI'
import { FieldConfig } from '@core/types'
import { passwordValidated } from '@core/types/FieldConfig'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useSetPassword, useValidatedForm } from '@utils/hooks'
import React from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'

type FormData = {
  newPassword: string
  confirmPassword: string
}

interface LogInSetNewPwdDialogProps {
  open: boolean
  onClose?: () => void
}

const configs: FieldConfig[] = [
  {
    type: 'PASSWORD',
    name: 'newPassword',
    label: 'New Password',
    required: true,
    validated: passwordValidated,
    hint: <>At least 8 characters with a mixture of uppercase, lowercase letters and numbers.</>,
  },
  {
    type: 'PASSWORD',
    name: 'confirmPassword',
    label: 'Re-enter Password',
    required: true,
    validated: yup
      .string()
      .required('This is required')
      .oneOf([yup.ref('newPassword'), null], "Password doesn't match."),
  },
]

const LogInSetNewPwdDialog: React.FC<LogInSetNewPwdDialogProps> = ({ open, onClose }) => {
  const [setPassword, { loading }] = useSetPassword()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useValidatedForm<FormData>(configs)

  const onSubmit = async (formData: FormData) => {
    const { data } = await setPassword({
      variables: {
        newPassword: formData.newPassword,
      },
    })

    if (
      data?.setPassword.__typename === 'CompanyUser' ||
      data?.setPassword.__typename === 'IndividualUser'
    ) {
      toast.success('Success')
      onClose?.()
    }

    if (data?.setPassword.__typename === 'PasswordTooWeakError') {
      toast.error(data.setPassword.message)
    }
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <Stack gap="10px">
        <Typography variant="h1">Set New Password</Typography>
        <Typography variant="subtitle1">Change of password is required.</Typography>
      </Stack>

      <FieldsController configs={configs} form={{ control, errors }} />

      <Button variant="contained" loading={loading} onClick={handleSubmit(onSubmit)}>
        Confirm
      </Button>
    </Dialog>
  )
}

export default LogInSetNewPwdDialog
