import { gql } from '@apollo/client'

export const RESET_PASSWORD_INVALIDATED_AT = gql`
  query resetPasswordInvalidatedAt($token: String!) {
    resetPasswordInvalidatedAt(token: $token) {
      invalidatedAt
    }
  }
`
