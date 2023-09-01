import { SET_PASSWORD } from '@core/graphql/mutations'
import { SetPasswordResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useSetPassword = () => {
  return useMutation<{ setPassword: SetPasswordResponse }, { newPassword: string }>(SET_PASSWORD)
}
