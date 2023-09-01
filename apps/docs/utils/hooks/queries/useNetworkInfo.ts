import { QueryHookOptions } from '@apollo/client'
import { NETWORK_INFO } from '@core/graphql/queries'
import { Network, NetworkInfo } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  networkInfo: NetworkInfo
}

interface Variables {
  network?: Network
}

export const useNetworkInfo = (options?: QueryHookOptions<Data, Variables>) => {
  const variables = options?.variables

  const { data, ...props } = useQuery<Data, Variables>(NETWORK_INFO, {
    ...options,
    skip: !variables?.network,
  })

  const getAssetTypeOptions = () => {
    return data?.networkInfo.assetTypes.map(assetType => {
      const tokenType = assetType.__typename === 'TokenAssetType' ? `-${assetType.tokenType}` : ''
      return {
        label: `${assetType.symbol}${tokenType}`,
        value: assetType,
      }
    })
  }

  return { ...props, data, getAssetTypeOptions }
}
