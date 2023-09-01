import { QueryHookOptions } from '@apollo/client'
import { WHITELISTED_WALLETS } from '@core/graphql/queries'
import { Network, WhitelistedWalletPage } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  whitelistedWallets: WhitelistedWalletPage
}

interface Variables {
  clientId?: string
  network?: Network
  offset?: number
  limit?: number
}

export const useWhitelistedWallets = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(WHITELISTED_WALLETS, options)
}
