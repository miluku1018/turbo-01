import { QueryHookOptions } from '@apollo/client'
import { NETWORK_INFO_LIST } from '@core/graphql/queries'
import { NetworkInfo } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  networkInfoList: NetworkInfo[]
}

interface Variables {
  enabled?: boolean
}

export const useNetworkInfoList = (options?: QueryHookOptions<Data, Variables>) => {
  const { data, ...props } = useQuery<{ networkInfoList: NetworkInfo[] }>(
    NETWORK_INFO_LIST,
    options,
  )

  const getOptions = () => {
    return data?.networkInfoList.map(item => ({
      label: item.name,
      value: item,
    }))
  }

  return { ...props, data, getOptions }
}
