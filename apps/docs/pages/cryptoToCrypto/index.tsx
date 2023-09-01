import { AuthLayout, Paper } from '@components/UI'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const CryptoToCrypto = () => {
  return (
    <>
      <Head>
        <title>Crypto To Crypto</title>
        <meta name="description" content="Crypto To Crypto" />
      </Head>

      <Typography variant="h1">Crypto To Crypto</Typography>

      <Paper></Paper>
    </>
  )
}

CryptoToCrypto.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default CryptoToCrypto
