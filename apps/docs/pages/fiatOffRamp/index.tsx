import { FiatOffRampFields } from '@components/Fiat'
import { AuthLayout, Paper } from '@components/UI'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const FiatOffRamp = () => {
  return (
    <>
      <Head>
        <title>Fiat Off-Ramp</title>
        <meta name="description" content="Fiat Off-Ramp" />
      </Head>

      <Typography variant="h1">Fiat Off-Ramp</Typography>

      <Paper>
        <FiatOffRampFields />
      </Paper>
    </>
  )
}

FiatOffRamp.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default FiatOffRamp
