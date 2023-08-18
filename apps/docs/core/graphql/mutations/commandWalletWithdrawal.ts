import { gql } from '@apollo/client'

export const COMMAND_WALLET_WITHDRAWAL = gql`
  mutation commandWalletWithdrawal($walletId: UUID!, $input: CommandWalletWithdrawalInput!) {
    commandWalletWithdrawal(walletId: $walletId, input: $input) {
      __typename
    }
  }
`
