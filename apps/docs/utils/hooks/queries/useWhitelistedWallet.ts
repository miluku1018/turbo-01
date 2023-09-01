import { QueryHookOptions } from '@apollo/client'
import { WHITELISTED_WALLET } from '@core/graphql/queries'
import { WhitelistedWallet } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  whitelistedWallet: WhitelistedWallet
}

interface Variables {
  id: string
}

export const useWhitelistedWallet = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(WHITELISTED_WALLET, options)
}
