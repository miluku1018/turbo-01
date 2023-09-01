import { AuthLayout, Paper } from '@components/UI'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const YieldOptimizer = () => {
  return (
    <>
      <Head>
        <title>Yield Optimizer</title>
        <meta name="description" content="Yield Optimizer" />
      </Head>

      <Typography variant="h1">Yield Optimizer</Typography>

      <Paper></Paper>
    </>
  )
}

YieldOptimizer.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default YieldOptimizer
