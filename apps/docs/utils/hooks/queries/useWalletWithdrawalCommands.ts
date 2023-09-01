import { QueryHookOptions } from '@apollo/client'
import { WALLET_WITHDRAWAL_COMMANDS } from '@core/graphql/queries'
import { WalletWithdrawalCommandPage } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  walletWithdrawalCommands: WalletWithdrawalCommandPage
}

interface Variables {
  clientId?: string
  walletId?: string
  whitelistedWalletId?: string
  offset?: number
  limit?: number
}

export const useWalletWithdrawalCommands = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(WALLET_WITHDRAWAL_COMMANDS, options)
}
