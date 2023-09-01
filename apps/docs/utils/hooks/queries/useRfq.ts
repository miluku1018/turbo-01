import { QueryHookOptions } from '@apollo/client'
import { RFQ } from '@core/graphql/queries'
import { Rfq, RfqInput } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  rfq: Rfq
}

interface Variables {
  providerId: string
  input: RfqInput
}

export const useRfq = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(RFQ, options)
}
