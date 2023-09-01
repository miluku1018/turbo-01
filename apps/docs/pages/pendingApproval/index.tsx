import {
  PendingApprovalDelegationPanel,
  PendingApprovalExecutionPanel,
  PendingApprovalLiquidStakingPanel,
  PendingApprovalWithdrawalPanel,
} from '@components/PendingApproval'
import { AuthLayout, Paper, Tabs, TooltipIcon } from '@components/UI'
import { useNotice } from '@core/context/notice'
import { OperationType } from '@core/graphql/types'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { Stack, Typography } from '@mui/material'
import Head from 'next/head'
import { ReactElement } from 'react'

const PendingApproval = () => {
  const { notice } = useNotice()

  const configs = [
    {
      label: 'WITHDRAWAL',
      count: notice[OperationType.WalletWithdrawal] + notice[OperationType.BankWithdrawal],
      render: () => <PendingApprovalWithdrawalPanel />,
    },
    {
      label: 'DELEGATION',
      count: notice[OperationType.EthStaking],
      render: () => <PendingApprovalDelegationPanel />,
    },
    {
      label: 'LIQUID STAKING',
      count: notice[OperationType.LiquidStakeLido],
      render: () => <PendingApprovalLiquidStakingPanel />,
    },
    {
      label: 'EXECUTION',
      count: notice[OperationType.FiatToCrypto] + notice[OperationType.CryptoToFiat],
      render: () => <PendingApprovalExecutionPanel />,
    },
  ]

  return (
    <>
      <Head>
        <title>Pending Approval</title>
        <meta name="description" content="Pending Approval" />
      </Head>

      <Stack direction="row" alignItems="center" gap="5px">
        <Typography variant="h1">Pending Approval</Typography>
        <TooltipIcon
          sx={{ width: 20, height: 20 }}
          icon={HelpOutlineIcon}
          title={
            'All transactional requests must follow the specific policy assigned to the custody wallet or custody bank used to initiate the request. These requests will be subject to approval by the Admin before they can be processed.'
          }
        />
      </Stack>
      <Paper>
        <Tabs configs={configs} />
      </Paper>
    </>
  )
}

PendingApproval.getLayout = (page: ReactElement) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default PendingApproval
