import { gql } from '@apollo/client'
import { USER_FIELDS } from './userFields'

export const COMPANY_USER_FIELDS = gql`
  ${USER_FIELDS}
  fragment companyUserFields on CompanyUser {
    ...userFields

    client {
      id
      auc
      displayId
      name
      telephone
      officeAddress
      businessAddress
      incorporationNo
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
