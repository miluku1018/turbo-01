import { QueryHookOptions } from '@apollo/client'
import { CLIENT_ETH_NODE_CONFIGS } from '@core/graphql/queries'
import { ClientEthNodeConfigPage } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  clientEthNodeConfigs: ClientEthNodeConfigPage
}

interface Variables {
  clientId?: string
  isActivate?: boolean
  offset?: number
  limit?: number
}

export const useClientEthNodeConfigs = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(CLIENT_ETH_NODE_CONFIGS, options)
}
