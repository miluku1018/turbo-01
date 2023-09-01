import { AuthLayout, Paper, Tabs } from '@components/UI'
import { WithdrawalCryptoPanel, WithdrawalFiatPanel } from '@components/Withdrawal'
import { Typography } from '@mui/material'
import Head from 'next/head'
import { ReactElement } from 'react'

const configs = [
  {
    label: 'CRYPTO',
    render: () => <WithdrawalCryptoPanel />,
  },
  // {
  //   label: 'NFT',
  //   render: () => <WithdrawalNftPanel />,
  // },
  {
    label: 'FIAT',
    render: () => <WithdrawalFiatPanel />,
  },
]

const Withdrawal = () => {
  return (
    <>
      <Head>
        <title>Withdrawal</title>
        <meta name="description" content="Withdrawal" />
      </Head>

      <Typography variant="h1">Withdrawal</Typography>

      <Paper>
        <Tabs configs={configs} />
      </Paper>
    </>
  )
}

Withdrawal.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Withdrawal
