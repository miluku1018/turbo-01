import { SIGN_IN_USER } from '@core/graphql/mutations'
import { SignInUserResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useSignInUser = () => {
  return useMutation<
    { signInUser: SignInUserResponse },
    { email: string; password: string; recaptchaToken?: string }
  >(SIGN_IN_USER)
}
