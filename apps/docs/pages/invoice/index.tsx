import { AuthLayout, Paper } from '@components/UI'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const Invoice = () => {
  return (
    <>
      <Head>
        <title>Invoice</title>
        <meta name="description" content="Invoice" />
      </Head>

      <Typography variant="h1">Invoice</Typography>

      <Paper></Paper>
    </>
  )
}

Invoice.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Invoice
