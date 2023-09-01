import { AuthorizationClientInfoPanel, AuthorizationPersonsPanel } from '@components/Authorization'
import { AuthLayout, Paper, Tabs } from '@components/UI'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const configs = [
  {
    label: 'CLIENT INFO',
    render: () => <AuthorizationClientInfoPanel />,
  },
  {
    label: 'AUTHORIZED PERSONS',
    render: () => <AuthorizationPersonsPanel />,
  },
]

const Authorization = () => {
  return (
    <>
      <Head>
        <title>Authorization</title>
        <meta name="description" content="Authorization" />
      </Head>

      <Typography variant="h1">Authorization</Typography>

      <Paper>
        <Tabs configs={configs} />
      </Paper>
    </>
  )
}

Authorization.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Authorization
