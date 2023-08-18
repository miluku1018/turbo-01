import { gql } from '@apollo/client'

export const SET_TFA = gql`
  mutation setTfa($secret: String!, $code: String!) {
    setTfa(secret: $secret, code: $code) {
      ... on Success {
        message
      }

      ... on InvalidTfaCodeError {
        message
      }
    }
  }
`
