import { gql } from '@apollo/client'

export const VERIFY_TFA = gql`
  mutation verifyTfa($code: String!) {
    verifyTfa(code: $code) {
      ... on Success {
        message
      }

      ... on InvalidTfaCodeError {
        message
      }
    }
  }
`
