import { QueryHookOptions } from '@apollo/client'
import { CLIENT_TYPES } from '@core/graphql/queries'
import { ClientAsset } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  clientAssets: ClientAsset
}

export const useClientAssets = (options?: QueryHookOptions<Data>) => {
  return useQuery<Data>(CLIENT_TYPES, options)
}
