import { QueryHookOptions } from '@apollo/client'
import { WHITELISTED_BANK } from '@core/graphql/queries'
import { WhitelistedBank } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  whitelistedBank: WhitelistedBank
}

interface Variables {
  id: string
}

export const useWhitelistedBank = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(WHITELISTED_BANK, options)
}
