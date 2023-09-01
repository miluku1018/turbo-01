import { SIGN_UP_COMPANY_USER } from '@core/graphql/mutations'
import { SignUpCompanyUserInput, SignUpCompanyUserResponse } from '@core/graphql/types'
import useMutation from '../useMutation'

export const useSignUpCompanyUser = () => {
  return useMutation<
    { signUpCompanyUser: SignUpCompanyUserResponse },
    { onboardingId: string; input: SignUpCompanyUserInput }
  >(SIGN_UP_COMPANY_USER)
}
