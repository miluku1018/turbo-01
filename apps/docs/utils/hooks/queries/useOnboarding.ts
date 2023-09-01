import { QueryHookOptions } from '@apollo/client'
import { ONBOARDING } from '@core/graphql/queries'
import { Onboarding } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  onboarding: Onboarding
}

interface Variables {
  id: string
}

export const useOnboarding = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(ONBOARDING, options)
}
