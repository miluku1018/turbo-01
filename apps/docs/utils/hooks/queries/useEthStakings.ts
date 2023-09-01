import { QueryHookOptions } from '@apollo/client'
import { ETH_STAKINGS } from '@core/graphql/queries'
import { EthStakingPage } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  ethStakings: EthStakingPage
}

interface Variables {
  clientId?: string
  offset?: number
  limit?: number
}

export const useEthStakings = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(ETH_STAKINGS, options)
}
