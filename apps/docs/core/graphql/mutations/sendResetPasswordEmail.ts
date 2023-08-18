import { gql } from '@apollo/client'

export const SEND_RESET_PASSWORD_EMAIL = gql`
  mutation sendResetPasswordEmail($email: String!, $recaptchaToken: String) {
    sendResetPasswordEmail(email: $email, recaptchaToken: $recaptchaToken) {
      ... on Success {
        message
      }

      ... on AccountNotFoundError {
        message
      }
    }
  }
`
