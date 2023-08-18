import { gql } from '@apollo/client'

export const RESET_PASSWORD = gql`
  mutation resetPassword($token: String!, $newPassword: String!) {
    resetPassword(token: $token, newPassword: $newPassword) {
      ... on Success {
        message
      }

      ... on Error {
        message
      }
    }
  }
`
