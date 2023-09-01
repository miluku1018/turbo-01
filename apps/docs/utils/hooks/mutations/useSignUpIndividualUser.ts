import { SIGN_UP_INDIVIDUAL_USER } from '@core/graphql/mutations'
import { SignUpIndividualUserInput, SignUpIndividualUserResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useSignUpIndividualUser = () => {
  return useMutation<
    { signUpIndividualUser: SignUpIndividualUserResponse },
    { onboardingId: string; input: SignUpIndividualUserInput }
  >(SIGN_UP_INDIVIDUAL_USER)
}
