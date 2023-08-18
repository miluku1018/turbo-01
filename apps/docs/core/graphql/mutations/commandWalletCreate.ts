import { gql } from '@apollo/client'

export const COMMAND_WALLET_CREATE = gql`
  mutation commandWalletCreate($input: CommandWalletCreateInput!) {
    commandWalletCreate(input: $input) {
      __typename
    }
  }
`
