import { QueryHookOptions } from '@apollo/client'
import { ETH_STAKING_FEE_ESTIMATE } from '@core/graphql/queries'
import { EthStakingFeeEstimateInput, FeeEstimate } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  ethStakingFeeEstimate: FeeEstimate
}

interface Variables {
  input: EthStakingFeeEstimateInput
  walletId: string
}

export const useEthStakingFeeEstimate = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(ETH_STAKING_FEE_ESTIMATE, options)
}
