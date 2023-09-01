import { QueryHookOptions } from '@apollo/client'
import { CLIENT_CUSTODY_BANK_CONFIGS } from '@core/graphql/queries'
import { ClientCustodyBankConfigPage } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  clientCustodyBankConfigs: ClientCustodyBankConfigPage
}

interface Variables {
  limit?: number
  offset?: number
}

export const useClientCustodyBankConfigs = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(CLIENT_CUSTODY_BANK_CONFIGS, options)
}
