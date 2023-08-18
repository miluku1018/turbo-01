import { gql } from '@apollo/client'

export const REQUEST_WALLET_DEPOSIT_CONFIRMATION = gql`
  mutation requestWalletDepositConfirmation($input: RequestWalletDepositConfirmationInput!) {
    requestWalletDepositConfirmation(input: $input) {
      __typename
    }
  }
`
