import {
  DashboardActivity,
  DashboardAreaChart,
  DashboardOverview,
  DashboardPeiChart,
  DashboardTitle,
} from '@components/Dashboard'
import { AuthLayout, Card } from '@components/UI'
import { Box, Typography } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { useDashboardCounts } from '@utils/hooks'
import Head from 'next/head'
import { ReactElement } from 'react'

const style = {
  container: (theme: Theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridGap: '30px',
    '& > div:nth-of-type(1)': { gridColumn: 'span 3' },
    '& > div:nth-of-type(2)': { gridColumn: 'span 1' },
    '& > div:nth-of-type(3)': { gridColumn: 'span 1' },
    '& > div:nth-of-type(4)': { gridColumn: 'span 1' },
    '& > div:nth-of-type(5)': { gridColumn: 'span 3' },
    '& > div:nth-of-type(6)': { gridColumn: 'span 3' },
    [theme.breakpoints.down('lg')]: {
      '& > div:nth-of-type(1)': { gridColumn: 'span 6' },
      '& > div:nth-of-type(2)': { gridColumn: 'span 2' },
      '& > div:nth-of-type(3)': { gridColumn: 'span 2' },
      '& > div:nth-of-type(4)': { gridColumn: 'span 2' },
      '& > div:nth-of-type(5)': { gridColumn: 'span 6' },
      '& > div:nth-of-type(6)': { gridColumn: 'span 6' },
    },
  }),
  activities: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
  },
}

const Home = () => {
  const { data } = useDashboardCounts()
  const {
    deposits,
    withdrawals,
    liquidStakings,
    fiatToCryptos,
    cryptoToFiats,
    delegations,
    wallets,
    banks,
    activeUsers,
    users,
  } = data?.dashboardCounts || {}

  const activities = [
    { name: 'Deposit', num: deposits },
    { name: 'Withdrawal', num: withdrawals },
    { name: 'Delegation', num: delegations },
    { name: 'Liquid Staking', num: liquidStakings },
    { name: 'Fiat On-Ramp', num: fiatToCryptos },
    { name: 'Fiat Off-Ramp', num: cryptoToFiats },
  ]

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Head>

      <Typography variant="h1">Dashboard</Typography>

      <Box sx={style.container}>
        <Card>
          <DashboardTitle
            name="Activities This Month"
            info="Financial activities occurred since the 1st day of this month."
          />
          <Box sx={style.activities}>
            {activities.map(item => (
              <DashboardActivity key={item.name} name={item.name} num={item.num} />
            ))}
          </Box>
        </Card>

        <Card>
          <DashboardTitle name="Wallet" info="All active custody wallets" />
          <DashboardOverview name="Active Custody Wallet(s)" num={wallets} />
        </Card>

        <Card>
          <DashboardTitle name="Bank" info="All active custody bank accounts" />
          <DashboardOverview name="Active Custody Bank Account(s)" num={banks} />
        </Card>

        <Card>
          <DashboardTitle name="User" info="All active user accounts." />
          <DashboardOverview name="Active Users Out of Total" num={activeUsers} sum={users} />
        </Card>

        <Card>
          <DashboardTitle
            name="Total Assets Under Custody"
            info="This diagram illustrates the daily approximation of the USD value of all assets held in custody, encompassing cryptocurrency and fiat currency (excluding NFTs), in wallets or accounts opened at AEGIS. The calculation of Asset Under Custody (AUC) considers the sum of the Available Amount, Locked Amount, and Unconfirmed Amount when applicable."
          />
          <DashboardAreaChart />
        </Card>

        <Card>
          <DashboardTitle
            name="Portfolio"
            info="This portfolio pie chart breaks down the percentage of all asset types (excluding NFTs) that make up the total value of assets under custody (AUC)."
          />
          <DashboardPeiChart />
        </Card>
      </Box>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Home
