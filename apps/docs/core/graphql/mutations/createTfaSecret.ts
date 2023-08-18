import { gql } from '@apollo/client'

export const CREATE_TFA_SECRET = gql`
  mutation createTfaSecret {
    createTfaSecret {
      secret
      qrCode
    }
  }
`
