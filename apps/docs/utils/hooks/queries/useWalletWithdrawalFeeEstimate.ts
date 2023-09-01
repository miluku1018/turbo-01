import { QueryHookOptions } from '@apollo/client'
import { WALLET_WITHDRAWAL_FEE_ESTIMATE } from '@core/graphql/queries'
import { FeeEstimate } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  walletWithdrawalFeeEstimate: FeeEstimate
}

interface Variables {
  amount: string
  assetTypeId: string
  walletId: string
  whitelistedWalletId: string
}

export const useWalletWithdrawalFeeEstimate = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(WALLET_WITHDRAWAL_FEE_ESTIMATE, options)
}
