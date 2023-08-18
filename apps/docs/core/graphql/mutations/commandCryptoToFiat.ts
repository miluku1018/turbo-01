import { gql } from '@apollo/client'

export const COMMAND_CRYPTO_TO_FIAT = gql`
  mutation commandCryptoToFiat($walletId: UUID!, $input: CommandCryptoToFiatInput!) {
    commandCryptoToFiat(walletId: $walletId, input: $input) {
      __typename
    }
  }
`
