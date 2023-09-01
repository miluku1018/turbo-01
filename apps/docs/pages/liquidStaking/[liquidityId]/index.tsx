import { LiquidStakingNetwork } from '@components/LiquidStaking'
import { AuthLayout, BackBtn, Paper } from '@components/UI'
import { Coin } from '@core/graphql/types'
import Box from '@mui/material/Box'
import { useNetworkData } from '@utils/hooks'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const style = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
  },
}

const stakingNetworks = [Coin.Eth]

const LiquidStakingLiquidity = () => {
  const router = useRouter()
  const liquidityId = router.query.liquidityId as string
  const liquidityTitle = `Liquid Staking：${liquidityId}`

  const { data } = useNetworkData()

  return (
    <>
      <Head>
        <title>{liquidityTitle}</title>
        <meta name="description" content={liquidityTitle} />
      </Head>

      <BackBtn path="/liquidStaking" title={liquidityTitle} />

      <Paper>
        <Box sx={style.container}>
          {stakingNetworks.map(item => (
            <LiquidStakingNetwork key={item} networkData={data[item]} />
          ))}
        </Box>
      </Paper>
    </>
  )
}

LiquidStakingLiquidity.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default LiquidStakingLiquidity
