import { QueryHookOptions } from '@apollo/client'
import { WHITELISTED_BANKS } from '@core/graphql/queries'
import { WhitelistedBankPage } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  whitelistedBanks: WhitelistedBankPage
}

interface Variables {
  clientId?: string
  offset?: number
  limit?: number
}

export const useWhitelistedBanks = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(WHITELISTED_BANKS, options)
}
