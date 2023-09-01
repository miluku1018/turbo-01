import { HistoryPanel } from '@components/History'
import { AuthLayout, BackBtn, Paper, Tabs } from '@components/UI'
import { OperationName } from '@core/enums'
import { OperationState, OperationType } from '@core/graphql/types'
import { Option } from '@core/types'
import { useWallet } from '@utils/hooks'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const options: Option<OperationType[]>[] = [
  {
    label: OperationName.EDIT_WALLET,
    value: [OperationType.WalletUpdate],
  },
  {
    label: OperationName.DEPOSIT_CRYPTO,
    value: [OperationType.WalletDeposit],
  },
  {
    label: OperationName.WITHDRAWAL_CRYPTO,
    value: [OperationType.WalletWithdrawal],
  },
  {
    label: OperationName.DELEGATION,
    value: [OperationType.EthStaking],
  },
  {
    label: OperationName.STAKING_LIQUID,
    value: [OperationType.LiquidStakeLido],
  },
  {
    label: OperationName.FIAT_ON_RAMP,
    value: [OperationType.FiatToCrypto],
  },
  {
    label: OperationName.CRYPTO_TO_CRYPTO,
    value: [],
  },
  {
    label: OperationName.FIAT_OFF_RAMP,
    value: [OperationType.CryptoToFiat],
  },
]

const configs = [
  {
    label: 'REVIEWING',
    render: () => <HistoryPanel state={OperationState.Reviewing} options={options} />,
  },
  {
    label: 'EXECUTING',
    render: () => <HistoryPanel state={OperationState.Executing} options={options} />,
  },
  {
    label: 'COMPLETED',
    render: () => <HistoryPanel state={OperationState.Completed} options={options} />,
  },
  {
    label: 'REJECTED',
    render: () => <HistoryPanel state={OperationState.Rejected} options={options} />,
  },
  {
    label: 'FAILED',
    render: () => <HistoryPanel state={OperationState.Failed} options={options} />,
  },
]

const WalletHistory = () => {
  const router = useRouter()
  const walletId = router.query.walletId as string

  const { data, loading } = useWallet({ variables: { id: walletId } })
  const walletName = data?.wallet.name
  const walletTitle = walletName ? `${walletName}：History` : ''

  return (
    <>
      <Head>
        <title>{walletTitle}</title>
        <meta name="description" content={walletTitle} />
      </Head>

      <BackBtn path="/walletAddress" title={walletTitle} loading={loading} />

      <Paper>
        <Tabs configs={configs} />
      </Paper>
    </>
  )
}

WalletHistory.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default WalletHistory
