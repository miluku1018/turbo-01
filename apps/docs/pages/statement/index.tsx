import { StatementTable } from '@components/Statement'
import { AuthLayout, Paper } from '@components/UI'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const Statement = () => {
  return (
    <>
      <Head>
        <title>Statement</title>
        <meta name="description" content="Statement" />
      </Head>

      <Typography variant="h1">Statement</Typography>

      <Paper>
        <StatementTable />
      </Paper>
    </>
  )
}

Statement.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Statement
