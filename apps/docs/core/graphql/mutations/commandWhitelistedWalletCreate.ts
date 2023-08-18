import { gql } from '@apollo/client'

export const COMMAND_WHITELISTED_WALLET_CREATE = gql`
  mutation commandWhitelistedWalletCreate($input: CommandWhitelistedWalletCreateInput!) {
    commandWhitelistedWalletCreate(input: $input) {
      __typename
    }
  }
`
