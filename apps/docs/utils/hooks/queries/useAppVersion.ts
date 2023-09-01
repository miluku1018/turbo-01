import { QueryHookOptions } from '@apollo/client'
import { APP_VERSION } from '@core/graphql/queries'
import useQuery from '../useQuery'

interface Data {
  appVersion: string
}

export const useAppVersion = (options?: QueryHookOptions<Data>) => {
  return useQuery<Data>(APP_VERSION, options)
}
