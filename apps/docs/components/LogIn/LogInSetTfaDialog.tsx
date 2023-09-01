import { FieldsController } from '@components/Controller'
import { Button, CopyField, Dialog } from '@components/UI'
import { useAuth } from '@core/context/auth'
import { FieldConfig } from '@core/types'
import { textValidated } from '@core/types/FieldConfig'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import CheckIcon from '@mui/icons-material/Check'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useCreateTfaSecret, useSetTfa, useValidatedForm } from '@utils/hooks'
import Image from 'next/image'
import QRCode from 'qrcode'
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

type FormData = {
  code: string
}

interface LogInSetTfaDialogProps {
  open: boolean
  onClose?: () => void
}

const style = {
  wrapper: {
    position: 'relative',
    width: '200px',
    height: '200px',
    m: 'auto',
  },
}

const configs: FieldConfig[] = [
  {
    type: 'TEXT',
    name: 'code',
    label: 'Enter the displayed 6-digit code',
    required: true,
    validated: textValidated,
    hint: (
      <>
        Once your account is authenticated and 2FA is enabled, you will need to use your
        authenticator app to log in to Aegis Vault.
      </>
    ),
  },
]

const LogInSetTfaDialog: React.FC<LogInSetTfaDialogProps> = ({ open, onClose }) => {
  const { logIn } = useAuth()

  const [info, setInfo] = useState<any>({})
  const [step, setStep] = useState<number>(0)

  const [setTfa, { loading }] = useSetTfa()
  const [createTfaSecret] = useCreateTfaSecret()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useValidatedForm<FormData>(configs)

  const onSubmit = async (formData: FormData) => {
    const { data } = await setTfa({
      variables: {
        code: formData.code,
        secret: info.secret,
      },
    })

    if (data?.setTfa.__typename === 'InvalidTfaCodeError') {
      toast.error('Incorrect code')
    }

    if (data?.setTfa.__typename === 'Success') {
      logIn()
    }
  }

  const handleCreateTfaSecret = useCallback(async () => {
    const { data } = await createTfaSecret()

    if (data?.createTfaSecret.qrCode) {
      const qrCode = await QRCode.toDataURL(data.createTfaSecret.qrCode)
      setInfo((prev: any) => ({ ...prev, qrCode }))
    }

    if (data?.createTfaSecret.secret) {
      const secret = data.createTfaSecret.secret
      setInfo((prev: any) => ({ ...prev, secret }))
    }
  }, [createTfaSecret])

  useEffect(() => {
    handleCreateTfaSecret()
  }, [handleCreateTfaSecret])

  return (
    <Dialog open={open} onClose={onClose}>
      <Stack gap="10px">
        <Typography variant="h1">Set Up 2FA</Typography>
        <Typography variant="subtitle1">
          {step === 0 && 'Two-Factor Authentication (2FA)'}
          {step === 1 && 'Authenticate and Bind Your Account'}
        </Typography>
      </Stack>

      {step === 0 && (
        <>
          <Typography variant="body2">
            This is mandatory for security purposes upon first time log-in. This is to protect your
            account from being accessed by unauthorized persons. Download and install an
            authentication app, such as Google Authenticator or Authy (iOS or Android) and{' '}
            <b>scan the QR code displayed below with your app:</b>
          </Typography>

          <Box sx={style.wrapper}>
            {info.qrCode && <Image alt="qrcode" src={info.qrCode} layout="fill" />}
          </Box>

          <CopyField label="Or Manually Enter Code" value={info.secret} />

          <Button variant="contained" endIcon={<ArrowRightAltIcon />} onClick={() => setStep(1)}>
            Continue
          </Button>
        </>
      )}

      {step === 1 && (
        <>
          <Typography variant="body2">
            After the QR code is scanned or the code is entered, you should start seeing a 6-digit
            code displayed on your app. Enter the code to make sure the app is successfully
            connected with Aegis Vault.
          </Typography>

          <FieldsController configs={configs} form={{ control, errors }} />

          <Button
            variant="contained"
            loading={loading}
            endIcon={<CheckIcon />}
            onClick={handleSubmit(onSubmit)}
          >
            Authenticate
          </Button>
        </>
      )}
    </Dialog>
  )
}

export default LogInSetTfaDialog
