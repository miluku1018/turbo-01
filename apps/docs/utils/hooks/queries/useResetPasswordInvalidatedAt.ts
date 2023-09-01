import { QueryHookOptions } from '@apollo/client'
import { RESET_PASSWORD_INVALIDATED_AT } from '@core/graphql/queries'
import { ResetPasswordInvalidatedAtResponse } from '@core/graphql/types'
import useQuery from '../useQuery'

interface Data {
  resetPasswordInvalidatedAt: ResetPasswordInvalidatedAtResponse
}

interface Variables {
  token: string
}

export const useResetPasswordInvalidatedAt = (options?: QueryHookOptions<Data, Variables>) => {
  const variables = options?.variables
  return useQuery<Data, Variables>(RESET_PASSWORD_INVALIDATED_AT, {
    ...options,
    skip: !variables?.token,
  })
}
