import { QueryHookOptions } from '@apollo/client'
import { CLIENT_ASSETS_HISTORIES } from '@core/graphql/queries'
import { ClientAssetsHistory } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  clientAssetsHistories: ClientAssetsHistory[]
}

interface Variables {
  startsAt: Date
  endsAt: Date
}

export const useClientAssetsHistories = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(CLIENT_ASSETS_HISTORIES, options)
}
