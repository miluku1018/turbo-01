import { SEND_RESET_PASSWORD_EMAIL } from '@core/graphql/mutations'
import { SendResetPasswordEmailResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useSendResetPasswordEmail = () => {
  return useMutation<
    { sendResetPasswordEmail: SendResetPasswordEmailResponse },
    { email: string; recaptchaToken?: string }
  >(SEND_RESET_PASSWORD_EMAIL)
}
