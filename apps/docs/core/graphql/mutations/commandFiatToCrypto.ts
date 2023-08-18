import { gql } from '@apollo/client'

export const COMMAND_FIAT_TO_CRYPTO = gql`
  mutation commandFiatToCrypto($bankId: UUID!, $input: CommandFiatToCryptoInput!) {
    commandFiatToCrypto(bankId: $bankId, input: $input) {
      __typename
    }
  }
`
