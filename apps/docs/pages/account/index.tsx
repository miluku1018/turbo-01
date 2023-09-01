import { AccountChangePwdBtn } from '@components/Account'
import { FieldsController } from '@components/Controller'
import { AuthLayout, Paper } from '@components/UI'
import { useAuth } from '@core/context/auth'
import { FieldConfig } from '@core/types'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useValidatedForm } from '@utils/hooks'
import Head from 'next/head'
import { ReactElement } from 'react'

type FormData = {
  email: string
  mobile: string
  lastName: string
  firstName: string
}

const configs: FieldConfig[] = [
  {
    type: 'TEXT',
    name: 'firstName',
    label: 'First Name',
    disabled: true,
  },
  {
    type: 'TEXT',
    name: 'lastName',
    label: 'Last Name',
    disabled: true,
  },
  {
    type: 'TEXT',
    name: 'mobile',
    label: 'Mobile',
    disabled: true,
  },
  {
    type: 'TEXT',
    name: 'email',
    label: 'User Account',
    disabled: true,
  },
]

const Account = () => {
  const { me } = useAuth()

  const { control } = useValidatedForm<FormData>(configs, {
    defaultValues: {
      email: me?.email,
      mobile: me?.mobile,
      lastName: me?.lastName,
      firstName: me?.firstName,
    },
  })

  return (
    <>
      <Head>
        <title>Account</title>
        <meta name="description" content="Account" />
      </Head>

      <Typography variant="h1">Account</Typography>

      <Paper>
        <Stack maxWidth="500px" gap="30px">
          <FieldsController configs={configs} form={{ control }} />

          <AccountChangePwdBtn />
        </Stack>
      </Paper>
    </>
  )
}

Account.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Account
