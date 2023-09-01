import { FieldsController } from '@components/Controller'
import { Button, Dialog } from '@components/UI'
import { useAuth } from '@core/context/auth'
import { FieldConfig } from '@core/types'
import { textValidated } from '@core/types/FieldConfig'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useValidatedForm, useVerifyTfa } from '@utils/hooks'
import React from 'react'
import { toast } from 'react-toastify'

type FormData = {
  code: string
}

interface LogInVerifyTfaDialogProps {
  open: boolean
  onClose?: () => void
}

const configs: FieldConfig[] = [
  {
    type: 'TEXT',
    name: 'code',
    label: 'Enter the displayed 6-digit code',
    required: true,
    validated: textValidated,
    autoFocus: true,
    hint: (
      <>
        If you lose your device or your 2FA app, leading to your being unable to log in. Please
        contact Admin at <b>admin@aegiscustody.com</b> for support.
      </>
    ),
  },
]

const LogInVerifyTfaDialog: React.FC<LogInVerifyTfaDialogProps> = ({ open, onClose }) => {
  const { logIn } = useAuth()

  const [verifyTfa, { loading }] = useVerifyTfa()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useValidatedForm<FormData>(configs)

  const onSubmit = async (formData: FormData) => {
    const { data } = await verifyTfa({
      variables: {
        code: formData.code,
      },
    })

    if (data?.verifyTfa.__typename === 'InvalidTfaCodeError') {
      toast.error('Incorrect code')
    }

    if (data?.verifyTfa.__typename === 'Success') {
      logIn()
    }
  }

  return (
    <Dialog open={open} onClose={onClose}>
      <Stack component="form" gap="30px" onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="10px">
          <Typography variant="h1">2FA Verification Required</Typography>
          <Typography variant="subtitle1">Log in to Aegis Vault with 2FA verification.</Typography>
        </Stack>

        <Typography variant="body2">
          Your account has been configured to use two-factor authentication (2FA). Enter the 6-digit
          code displayed on your app to verify this action.
        </Typography>

        <FieldsController configs={configs} form={{ control, errors }} />

        <Button type="submit" variant="contained" loading={loading}>
          Verify
        </Button>
      </Stack>
    </Dialog>
  )
}

export default LogInVerifyTfaDialog
