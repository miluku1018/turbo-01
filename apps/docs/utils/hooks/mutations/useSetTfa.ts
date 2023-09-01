import { SET_TFA } from '@core/graphql/mutations'
import { SetTfaResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useSetTfa = () => {
  return useMutation<{ setTfa: SetTfaResponse }, { secret: string; code: string }>(SET_TFA)
}
