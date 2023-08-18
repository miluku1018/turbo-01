import { gql } from '@apollo/client'

export const SIGN_UP_COMPANY_USER = gql`
  mutation signUpCompanyUser($onboardingId: ID!, $input: SignUpCompanyUserInput!) {
    signUpCompanyUser(onboardingId: $onboardingId, input: $input) {
      __typename
    }
  }
`
