import { AuthLayout, Paper, Tabs } from '@components/UI'
import { WalletAddressCryptoPanel } from '@components/WalletAddress'
import { Typography } from '@mui/material'
import Head from 'next/head'
import { ReactElement } from 'react'

const configs = [
  {
    label: 'CRYPTO',
    render: () => <WalletAddressCryptoPanel />,
  },
  // {
  //   label: 'NFT',
  //   render: () => <WalletAddressNftPanel />,
  // },
]

const WalletAddress = () => {
  return (
    <>
      <Head>
        <title>Wallet Address</title>
        <meta name="description" content="Wallet Address" />
      </Head>

      <Typography variant="h1">Wallet Address</Typography>

      <Paper>
        <Tabs configs={configs} />
      </Paper>
    </>
  )
}

WalletAddress.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default WalletAddress
