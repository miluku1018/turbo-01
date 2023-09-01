import { ExecutionProviderTable } from '@components/ExecutionProvider'
import { AuthLayout, Paper } from '@components/UI'
import { MenuName } from '@core/types/MenuConfig'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const FiatOffRamp = () => {
  return (
    <>
      <Head>
        <title>{MenuName.EXECUTION_PROVIDER}</title>
        <meta name="description" content={MenuName.EXECUTION_PROVIDER} />
      </Head>

      <Typography variant="h1">{MenuName.EXECUTION_PROVIDER}</Typography>

      <Paper>
        <ExecutionProviderTable />
      </Paper>
    </>
  )
}

FiatOffRamp.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default FiatOffRamp
