import { HistoryPanel } from '@components/History'
import { AuthLayout, BackBtn, Paper, Tabs } from '@components/UI'
import { OperationName } from '@core/enums'
import { OperationState, OperationType } from '@core/graphql/types'
import { Option } from '@core/types'
import { useBank } from '@utils/hooks'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'

const options: Option<OperationType[]>[] = [
  {
    label: OperationName.EDIT_BANK,
    value: [OperationType.BankUpdate],
  },
  {
    label: OperationName.DEPOSIT_FIAT,
    value: [OperationType.BankDeposit],
  },
  {
    label: OperationName.WITHDRAWAL_FIAT,
    value: [OperationType.BankWithdrawal],
  },
  {
    label: OperationName.FIAT_ON_RAMP,
    value: [OperationType.FiatToCrypto],
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

const BankAccountHistory = () => {
  const router = useRouter()
  const bankId = router.query.bankId as string

  const { data } = useBank({ variables: { id: bankId } })
  const bankName = data?.bank.custodyBank.bankInfo.name
  const bankTitle = bankName ? `${bankName}:History` : ''

  return (
    <>
      <Head>
        <title>{bankTitle}</title>
        <meta name="description" content={bankTitle} />
      </Head>

      <BackBtn path="/bankAccount" title={bankTitle} />

      <Paper>
        <Tabs configs={configs} />
      </Paper>
    </>
  )
}

BankAccountHistory.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default BankAccountHistory
