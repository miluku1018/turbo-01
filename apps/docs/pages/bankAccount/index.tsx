import { BankAccountAddBtn, BankAccountTable } from '@components/BankAccount'
import { ActionBar, AuthLayout, Paper } from '@components/UI'
import Typography from '@mui/material/Typography'
import { useBanks } from '@utils/hooks'
import Head from 'next/head'
import { ReactElement } from 'react'

const BankAccount = () => {
  const { data, loading, refetch } = useBanks()

  return (
    <>
      <Head>
        <title>Bank Account</title>
        <meta name="description" content="Bank Account" />
      </Head>

      <Typography variant="h1">Bank Account</Typography>

      <ActionBar>
        <BankAccountAddBtn />
      </ActionBar>

      <Paper>
        <BankAccountTable data={data} loading={loading} refetch={refetch} />
      </Paper>
    </>
  )
}

BankAccount.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default BankAccount
