import { AuthLayout, Paper } from '@components/UI'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const DeFiInteraction = () => {
  return (
    <>
      <Head>
        <title>DeFi Interaction</title>
        <meta name="description" content="DeFi Interaction" />
      </Head>

      <Typography variant="h1">DeFi Interaction</Typography>

      <Paper></Paper>
    </>
  )
}

DeFiInteraction.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default DeFiInteraction
