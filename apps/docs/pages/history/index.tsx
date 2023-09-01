import { HistoryPanel } from '@components/History'
import { AuthLayout, Paper, Tabs, TooltipIcon } from '@components/UI'
import { OperationName } from '@core/enums'
import { OperationState, OperationType } from '@core/graphql/types'
import { Option } from '@core/types'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import { ReactElement } from 'react'

const options: Option<OperationType[]>[] = [
  {
    label: OperationName.ADD_WALLET,
    value: [OperationType.WalletCreate],
  },
  {
    label: OperationName.ADD_BANK,
    value: [OperationType.BankCreate],
  },
  {
    label: OperationName.ADD_WHITELIST,
    value: [OperationType.WhitelistedWalletCreate, OperationType.WhitelistedBankCreate],
  },
  {
    label: OperationName.ADD_POLICY,
    value: [OperationType.PolicyCreate],
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
    label: OperationName.DEPOSIT_CRYPTO,
    value: [OperationType.WalletDeposit],
  },
  {
    label: OperationName.WITHDRAWAL_CRYPTO,
    value: [OperationType.WalletWithdrawal],
  },
  // {
  //   label: OperationName.DEPOSIT_NFT,
  //   value: [],
  // },
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
  {
    label: OperationName.EDIT_WALLET,
    value: [OperationType.WalletUpdate],
  },
  {
    label: OperationName.EDIT_BANK,
    value: [OperationType.BankUpdate],
  },
  {
    label: OperationName.EDIT_POLICY,
    value: [OperationType.PolicyUpdate],
  },
  {
    label: OperationName.ADD_USER,
    value: [OperationType.UserCreate],
  },
  {
    label: OperationName.REMOVE_USER,
    value: [OperationType.UserRemove],
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

const History = () => {
  return (
    <>
      <Head>
        <title>History</title>
        <meta name="description" content="History" />
      </Head>

      <Stack direction="row" alignItems="center" gap="10px">
        <Typography variant="h1">History</Typography>
        <TooltipIcon
          sx={{ fontSize: '24px' }}
          icon={HelpOutlineIcon}
          title={
            <ul>
              <Typography component="li" textAlign="left">
                Reviewing
                <div>
                  The requested action is currently undergoing the required policy review and is
                  pending approval before it can be executed.
                </div>
              </Typography>

              <Typography component="li" textAlign="left">
                Executing
                <div>
                  The requested action has been approved and is currently being executed, with the
                  final outcome still pending.
                </div>
              </Typography>

              <Typography component="li" textAlign="left">
                Completed
                <div>The requested action has been successfully executed and completed.</div>
              </Typography>

              <Typography component="li" textAlign="left">
                Rejected
                <div>
                  The initiated request has been rejected by one of the Approvers within the
                  required policy.
                </div>
              </Typography>

              <Typography component="li" textAlign="left">
                Failed
                <div>
                  The executed request has failed during the process and requires re-initiation from
                  the start.
                </div>
              </Typography>

              <Typography component="li" textAlign="left">
                Deposit
                <div>
                  Transaction history of assets being deposited into custody wallets/accounts
                </div>
              </Typography>
            </ul>
          }
        />
      </Stack>

      <Paper>
        <Tabs configs={configs} />
      </Paper>
    </>
  )
}

History.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default History
