import { gql } from '@apollo/client'
import { COMPANY_USER_FIELDS, INDIVIDUAL_USER_FIELDS } from '../fragment'

export const SIGN_IN_USER = gql`
  ${COMPANY_USER_FIELDS}
  ${INDIVIDUAL_USER_FIELDS}
  mutation signInUser($email: String!, $password: String!, $recaptchaToken: String) {
    signInUser(email: $email, password: $password, recaptchaToken: $recaptchaToken) {
      ... on CompanyUser {
        ...companyUserFields
      }

      ... on IndividualUser {
        ...individualUserFields
      }

      ... on InvalidSignInInputError {
        message
      }
    }
  }
`
