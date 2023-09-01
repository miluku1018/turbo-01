import { QueryHookOptions } from '@apollo/client'
import { LIQUID_STAKING_LIDO_FEE_ESTIMATE } from '@core/graphql/queries'
import { FeeEstimate } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  liquidStakingLidoFeeEstimate: FeeEstimate
}

interface Variables {
  amount: string
  walletId: string
}

export const useLiquidStakingLidoFeeEstimate = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(LIQUID_STAKING_LIDO_FEE_ESTIMATE, options)
}
