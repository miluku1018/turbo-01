import { gql } from '@apollo/client'
import { USER_FIELDS } from './userFields'

export const INDIVIDUAL_USER_FIELDS = gql`
  ${USER_FIELDS}
  fragment individualUserFields on IndividualUser {
    ...userFields
    client {
      id
      auc
      email
      lastName
      firstName
      displayId
      onboarding {
        state
        reviewRecords {
          reviewedAt
        }
      }
      custodyEntity
      users(roles: [USER_AUTHORIZED_PERSON]) {
        id
        role
      }
    }
  }
`
