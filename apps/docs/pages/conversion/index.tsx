import { ConversionCryptoFiatPanel, ConversionFiatCryptoPanel } from '@components/Conversion'
import { AuthLayout, Paper, Tabs } from '@components/UI'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const configs = [
  {
    label: 'FIAT→CRYPTO',
    render: () => <ConversionFiatCryptoPanel />,
  },
  {
    label: 'CRYPTO→FIAT',
    render: () => <ConversionCryptoFiatPanel />,
  },
  {
    label: 'SWAP CRYPTO',
  },
]

const Conversion = () => {
  return (
    <>
      <Head>
        <title>Conversion</title>
        <meta name="description" content="Conversion" />
      </Head>

      <Typography variant="h1">Conversion</Typography>

      <Paper>
        <Tabs configs={configs} />
      </Paper>
    </>
  )
}

Conversion.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Conversion
