import { gql } from '@apollo/client'

export const UPDATE_ONBOARDING = gql`
  mutation updateOnboarding($id: String!, $field: FieldInput!, $stepNum: Float!) {
    updateOnboarding(id: $id, field: $field, stepNum: $stepNum) {
      __typename
    }
  }
`
