import { QueryHookOptions } from '@apollo/client'
import { ME } from '@core/graphql/queries'
import { CompanyUser, IndividualUser, MeResponse } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Me extends MeResponse {
  account?: CompanyUser | IndividualUser
}

interface Data {
  me: Me
}

export const useMe = (options?: QueryHookOptions<Data>) => {
  return useQuery<Data>(ME, options)
}
