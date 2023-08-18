import { gql } from '@apollo/client'

export const COMMAND_WHITELISTED_BANK_CREATE = gql`
  mutation commandWhitelistedBankCreate($input: CommandWhitelistedBankCreateInput!) {
    commandWhitelistedBankCreate(input: $input) {
      __typename
    }
  }
`
