import { DepositCryptoPanel, DepositFiatPanel } from '@components/Deposit'
import { AuthLayout, Paper, Tabs } from '@components/UI'
import { Typography } from '@mui/material'
import Head from 'next/head'
import { ReactElement } from 'react'

const configs = [
  {
    label: 'CRYPTO',
    render: () => <DepositCryptoPanel />,
  },
  // {
  //   label: 'NFT',
  //   render: () => <DepositNftPanel />,
  // },
  {
    label: 'FIAT',
    render: () => <DepositFiatPanel />,
  },
]

const Deposit = () => {
  return (
    <>
      <Head>
        <title>Deposit</title>
        <meta name="description" content="Deposit" />
      </Head>

      <Typography variant="h1">Deposit</Typography>

      <Paper>
        <Tabs configs={configs} />
      </Paper>
    </>
  )
}

Deposit.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Deposit
