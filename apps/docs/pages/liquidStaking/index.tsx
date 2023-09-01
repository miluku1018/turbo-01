import { LiquidStakingPanel, StakedAssetsPanel } from '@components/LiquidStaking'
import { AuthLayout, Paper, Tabs } from '@components/UI'
import { useAuth } from '@core/context/auth'
import { Role } from '@core/graphql/types'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const LiquidStaking = () => {
  const { me } = useAuth()

  const configs = [
    {
      label: 'LIQUID STAKING',
      hidden: me?.role === Role.UserViewer,
      render: () => <LiquidStakingPanel />,
    },
    {
      label: 'STAKED ASSETS',
      render: () => <StakedAssetsPanel />,
    },
  ]

  return (
    <>
      <Head>
        <title>Liquid Staking</title>
        <meta name="description" content="Liquid Staking" />
      </Head>

      <Typography variant="h1">Liquid Staking</Typography>

      <Paper>
        <Tabs configs={configs} />
      </Paper>
    </>
  )
}

LiquidStaking.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default LiquidStaking
