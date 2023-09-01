import { QueryHookOptions } from '@apollo/client'
import { CLIENT_STAKING_NODE_CONFIGS } from '@core/graphql/queries'
import { ClientStakingNodeConfigPage, Network } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  clientStakingNodeConfigs: ClientStakingNodeConfigPage
}

interface Variables {
  clientId?: string
  network?: Network
  isActivate?: boolean
  offset?: number
  limit?: number
}

export const useClientStakingNodeConfigs = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(CLIENT_STAKING_NODE_CONFIGS, options)
}
