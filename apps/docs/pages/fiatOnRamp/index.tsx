import { FiatOnRampFields } from '@components/Fiat'
import { AuthLayout, Paper } from '@components/UI'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const FiatOnRamp = () => {
  return (
    <>
      <Head>
        <title>Fiat On-Ramp</title>
        <meta name="description" content="Fiat On-Ramp" />
      </Head>

      <Typography variant="h1">Fiat On-Ramp</Typography>

      <Paper>
        <FiatOnRampFields />
      </Paper>
    </>
  )
}

FiatOnRamp.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default FiatOnRamp
