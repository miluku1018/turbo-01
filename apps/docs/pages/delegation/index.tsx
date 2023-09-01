import { DelegatedAssetsPanel, DelegationPanel } from '@components/Delegation'
import { AuthLayout, Paper, Tabs } from '@components/UI'
import { useAuth } from '@core/context/auth'
import { Role } from '@core/graphql/types'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const Delegation = () => {
  const { me } = useAuth()

  const configs = [
    {
      label: 'DELEGATION',
      hidden: me?.role === Role.UserViewer,
      render: () => <DelegationPanel />,
    },
    {
      label: 'DELEGATED ASSETS',
      render: () => <DelegatedAssetsPanel />,
    },
  ]

  return (
    <>
      <Head>
        <title>Delegation</title>
        <meta name="description" content="Delegation" />
      </Head>

      <Typography variant="h1">Delegation</Typography>

      <Paper>
        <Tabs configs={configs} />
      </Paper>
    </>
  )
}

Delegation.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Delegation
