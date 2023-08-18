import { gql } from '@apollo/client'

export const ONBOARDING = gql`
  query onboarding($id: ID!) {
    onboarding(id: $id) {
      clientType
      custodyEntity
    }
  }
`
