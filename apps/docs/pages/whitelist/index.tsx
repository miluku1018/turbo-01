import { AuthLayout, Paper, Tabs } from '@components/UI'
import { WhitelistBankAccountPanel, WhitelistWalletAddressPanel } from '@components/Whitelist'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const configs = [
  {
    label: 'WALLET ADDRESS',
    render: () => <WhitelistWalletAddressPanel />,
  },
  {
    label: 'BANK ACCOUNT',
    render: () => <WhitelistBankAccountPanel />,
  },
]

const Whitelist = () => {
  return (
    <>
      <Head>
        <title>Whitelist</title>
        <meta name="description" content="Whitelist" />
      </Head>

      <Typography variant="h1">Whitelist</Typography>

      <Paper>
        <Tabs configs={configs} />
      </Paper>
    </>
  )
}

Whitelist.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Whitelist
