import { gql } from '@apollo/client'

export const SIGN_UP_INDIVIDUAL_USER = gql`
  mutation signUpIndividualUser($onboardingId: ID!, $input: SignUpIndividualUserInput!) {
    signUpIndividualUser(onboardingId: $onboardingId, input: $input) {
      __typename
    }
  }
`
