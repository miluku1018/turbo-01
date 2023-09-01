import { QueryHookOptions } from '@apollo/client'
import { CLIENT_OTC_PROVIDER_CONFIGS } from '@core/graphql/queries'
import { ClientOtcProviderConfigPage } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  clientOtcProviderConfigs: ClientOtcProviderConfigPage
}

interface Variables {
  clientId?: string
  offset?: number
  limit?: number
}

export const useClientOtcProviderConfigs = (options?: QueryHookOptions<Data, Variables>) => {
  const { data, ...props } = useQuery<Data, Variables>(CLIENT_OTC_PROVIDER_CONFIGS, options)

  const getOptions = () => {
    return data?.clientOtcProviderConfigs.list.map(item => ({
      label: item.otcProvider.name,
      value: item.otcProvider,
    }))
  }

  return { ...props, data, getOptions }
}
