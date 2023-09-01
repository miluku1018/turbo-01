import { DelegationEthFields } from '@components/Delegation'
import { AuthLayout, BackBtn, Paper } from '@components/UI'
import { Coin } from '@core/graphql/types'
import { useNetworkData } from '@utils/hooks'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const DelegationNetwork = () => {
  const router = useRouter()
  const network = router.query.network as string

  const { data } = useNetworkData()

  const networkTitle = `Delegation：${data[network]?.coin}`

  return (
    <>
      <Head>
        <title>{networkTitle}</title>
        <meta name="description" content={networkTitle} />
      </Head>

      <BackBtn path="/delegation" title={networkTitle} />

      <Paper>{data[network]?.coin === Coin.Eth && <DelegationEthFields />}</Paper>
    </>
  )
}

DelegationNetwork.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default DelegationNetwork
