import { LiquidStakingFields } from '@components/LiquidStaking'
import { Alert, AuthLayout, BackBtn, Paper } from '@components/UI'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useWallet } from '@utils/hooks'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const LiquidStakingLiquidityWallet = () => {
  const router = useRouter()
  const walletId = router.query.walletId as string
  const liquidityId = router.query.liquidityId as string

  const { data, loading } = useWallet({ variables: { id: walletId } })
  const wallet = data?.wallet
  const networkName = wallet?.networkInfo.name
  const networkTitle = networkName ? `Liquid Staking：${liquidityId} - ${networkName}` : ''

  return (
    <>
      <Head>
        <title>{networkTitle}</title>
        <meta name="description" content={networkTitle} />
      </Head>

      <BackBtn path="/liquidStaking" title={networkTitle} loading={loading} />

      <Paper>
        {wallet && (
          <Stack maxWidth="500px" gap="30px">
            <Alert icon={false}>
              <Typography color="primary">
                Stake any amount of ETH and earn daily staking rewards. Put your staked ETH (stETH)
                to work across DeFi to compound your yield.
              </Typography>
            </Alert>

            <LiquidStakingFields wallet={wallet} />
          </Stack>
        )}
      </Paper>
    </>
  )
}

LiquidStakingLiquidityWallet.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default LiquidStakingLiquidityWallet
