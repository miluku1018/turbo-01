import { FieldsController } from '@components/Controller'
import { Button, FormBox, Layout, StatusIcon } from '@components/UI'
import { FieldConfig } from '@core/types'
import { passwordValidated } from '@core/types/FieldConfig'
import CloseIcon from '@mui/icons-material/Close'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useResetPassword, useResetPasswordInvalidatedAt, useValidatedForm } from '@utils/hooks'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'

type FormData = {
  newPassword: string
  confirmPassword: string
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
    label: 'Re-enter New Password',
    required: true,
    validated: yup
      .string()
      .required('This is required')
      .oneOf([yup.ref('newPassword'), null], "Password doesn't match."),
  },
]

const ResetPassword = () => {
  const router = useRouter()
  const token = router.query.token as string

  const { data, loading } = useResetPasswordInvalidatedAt({ variables: { token: token } })
  const [resetPassword, { loading: resetPasswordLoading }] = useResetPassword()

  const now = new Date()
  const invalidatedAt = data?.resetPasswordInvalidatedAt.invalidatedAt
  const invalidatedTime = invalidatedAt ? new Date(invalidatedAt).getTime() : now.getTime()
  const expiredLinkTime = invalidatedTime - now.getTime()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useValidatedForm<FormData>(configs)

  const onSubmit = async (formData: FormData) => {
    const { data } = await resetPassword({
      variables: {
        token: token,
        newPassword: formData.newPassword,
      },
    })

    const message = data?.resetPassword.message

    if (data?.resetPassword.__typename === 'Success') {
      toast.success(message)
      router.push('/logIn')
    }

    if (
      data?.resetPassword.__typename === 'PasswordTooWeakError' ||
      data?.resetPassword.__typename === 'PasswordResetExpiredError'
    ) {
      toast.error(message)
    }
  }

  if (loading) {
    return <CircularProgress />
  }

  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta name="description" content="Reset Password" />
      </Head>

      {expiredLinkTime <= 0 ? (
        <FormBox>
          <Stack gap="10px">
            <Typography variant="h1">Link Expired</Typography>
            <Typography variant="subtitle1" color="text.primary">
              The link has expired. Please request a link again.
            </Typography>
          </Stack>

          <StatusIcon icon={<CloseIcon color="reject" />} />

          <Button variant="contained" onClick={() => router.push('/logIn')}>
            Back To Home
          </Button>
        </FormBox>
      ) : (
        <FormBox>
          <Stack gap="10px">
            <Typography variant="h1">Reset Password</Typography>
            <Typography variant="subtitle1" color="text.primary">
              Please reset your password and log in with the new password.
            </Typography>
          </Stack>

          <FieldsController configs={configs} form={{ control, errors }} />

          <Button
            variant="contained"
            loading={resetPasswordLoading}
            onClick={handleSubmit(onSubmit)}
          >
            Confirm
          </Button>
        </FormBox>
      )}
    </>
  )
}

ResetPassword.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default ResetPassword
