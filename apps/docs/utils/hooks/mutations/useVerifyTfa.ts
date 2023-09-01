import { VERIFY_TFA } from '@core/graphql/mutations'
import { VerifyTfaResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useVerifyTfa = () => {
  return useMutation<{ verifyTfa: VerifyTfaResponse }, { code: string }>(VERIFY_TFA)
}
