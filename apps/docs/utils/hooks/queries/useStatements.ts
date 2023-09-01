import { QueryHookOptions } from '@apollo/client'
import { STATEMENTS } from '@core/graphql/queries'
import { StatementPage } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  statements: StatementPage
}

interface Variables {
  clientId?: string
  offset?: number
  limit?: number
}

export const useStatements = (options?: QueryHookOptions<Data, Variables>) => {
  return useQuery<Data, Variables>(STATEMENTS, options)
}
