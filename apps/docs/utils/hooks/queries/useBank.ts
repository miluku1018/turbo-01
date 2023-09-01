import { QueryHookOptions } from '@apollo/client'
import { BANK } from '@core/graphql/queries'
import { Bank } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  bank: Bank
}

interface Variables {
  id: string
}

export const useBank = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(BANK, options)
}
