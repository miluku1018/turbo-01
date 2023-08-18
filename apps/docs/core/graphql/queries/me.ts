import { gql } from '@apollo/client'
import { COMPANY_USER_FIELDS, INDIVIDUAL_USER_FIELDS } from '../fragment'

export const ME = gql`
  ${COMPANY_USER_FIELDS}
  ${INDIVIDUAL_USER_FIELDS}
  query me {
    me {
      hasVerifiedTfa
      account {
        ... on CompanyUser {
          ...companyUserFields
        }

        ... on IndividualUser {
          ...individualUserFields
        }
      }
    }
  }
`
