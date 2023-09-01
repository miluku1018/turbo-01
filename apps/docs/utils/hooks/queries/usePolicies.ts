import { QueryHookOptions } from '@apollo/client'
import { POLICIES } from '@core/graphql/queries'
import { PolicyPage } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  policies: PolicyPage
}

interface Variables {
  clientId?: string
  offset?: number
  limit?: number
}

export const usePolicies = (options?: QueryHookOptions<Data, Variables>) => {
  const { data, ...props } = useQuery<Data, Variables>(POLICIES, options)

  const getOptions = () => {
    return data?.policies.list.map(item => ({
      label: item.name,
      value: item.id,
    }))
  }

  return { ...props, data, getOptions }
}
