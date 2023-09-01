import { QueryHookOptions } from '@apollo/client'
import { STATEMENT_SIGNED_URL } from '@core/graphql/queries'
import useQuery from '../useQuery'

interface Data {
  statementSignedUrl: string
}

interface Variables {
  id?: string
}

export const useStatementSignedUrl = (options?: QueryHookOptions<Data, Variables>) => {
  const variables = options?.variables

  return useQuery<Data, Variables>(STATEMENT_SIGNED_URL, {
    ...options,
    skip: !variables?.id,
  })
}
