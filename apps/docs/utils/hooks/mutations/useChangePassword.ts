import { CHANGE_PASSWORD } from '@core/graphql/mutations'
import { ChangePasswordResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useChangePassword = () => {
  return useMutation<
    { changePassword: ChangePasswordResponse },
    { currentPassword: string; newPassword: string }
  >(CHANGE_PASSWORD)
}
