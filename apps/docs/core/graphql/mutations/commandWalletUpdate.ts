import { gql } from '@apollo/client'

export const COMMAND_WALLET_UPDATE = gql`
  mutation commandWalletUpdate($walletId: UUID!, $input: CommandWalletUpdateInput!) {
    commandWalletUpdate(walletId: $walletId, input: $input) {
      __typename
    }
  }
`
