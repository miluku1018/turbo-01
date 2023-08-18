import { gql } from '@apollo/client'

export const SUBMIT_ONBOARDING = gql`
  mutation submitOnboarding($id: String!) {
    submitOnboarding(id: $id) {
      __typename
    }
  }
`
